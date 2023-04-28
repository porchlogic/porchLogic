let ws = new WebSocket('wss://td-body-tracking.herokuapp.com/:443');
  
let controlTD = document.querySelector('.controlTD');
controlTD.addEventListener('input', () => {
    ws.send(JSON.stringify({'slider1': controlTD.value}))
})

ws.addEventListener('open', (event) => {
  console.log('websocket opened')
});

ws.addEventListener('message', (message) => {
  if(message.data == 'ping'){
    ws.send('pong');
    return
  }
  let data = JSON.parse(message.data);
  if ('chat' in data) {
    let words = data['chat'];
    document.querySelector('.chat').innerHTML = words
  }
  
});

ws.addEventListener('error', (error) => {
  console.error('websocket closed')
});

ws.addEventListener('close', (event) => {
  console.log('websocket closed')
});