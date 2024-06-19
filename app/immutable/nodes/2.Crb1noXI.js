import{U as ae,s as R,v as z,i as P,f as b,V as ve,e as f,a as V,c as h,o as O,g as T,b as H,d as y,k as p,W as L,X as de,n as ue,G as fe,E as G,Y as he,x as $e}from"../chunks/scheduler.hCBXZbCX.js";import{S as Z,i as J,t as I,g as ye,a as N,c as me,f as ge,h as _e,b as ie,d as re,m as ne,e as ce}from"../chunks/index.BKrxeEhH.js";import{b as d}from"../chunks/paths.BdtquUb6.js";function be(a){const s=a-1;return s*s*s+1}function A(a,{delay:s=0,duration:e=400,easing:t=be,x:l=0,y:n=0,opacity:r=0}={}){const o=getComputedStyle(a),g=+o.opacity,c=o.transform==="none"?"":o.transform,u=g*(1-r),[w,v]=ae(l),[i,$]=ae(n);return{delay:s,duration:e,easing:t,css:(_,C)=>`
			transform: ${c} translate(${(1-_)*w}${v}, ${(1-_)*i}${$});
			opacity: ${g-u*C}`}}function pe(a){let s,e,t,l="×",n,r,o=`<h2>Android Tutorial</h2> <a href="https://youtu.be/N3UvJW0HK4g?si=PDa656ID1jL5HX-b&amp;t=81" target="_blank">This is a good video instruction</a> <div class="tut-step svelte-p44ryl"><p class="svelte-p44ryl">We will need two separate 3d scans: one with headset and one without</p> <div class="tut-images svelte-p44ryl"><img src="${`${d}/tuts/scan-headset.png`}" alt="" class="svelte-p44ryl"/> <img src="${`${d}/tuts/scan-naked.png`}" alt="" class="svelte-p44ryl"/></div></div> <div class="tut-step svelte-p44ryl"><p class="svelte-p44ryl">get and open<a href="https://poly.cam/">Polycam</a> from the play store</p> <div class="tut-images svelte-p44ryl"><img src="${`${d}/tuts/polycam.png`}" alt="" class="svelte-p44ryl"/></div></div> <div class="tut-step svelte-p44ryl"><p class="svelte-p44ryl">set Polycam to video mode</p> <div class="tut-images svelte-p44ryl"><img src="${`${d}/tuts/polycam-video-mode.png`}" alt="" class="svelte-p44ryl"/></div></div> <div class="tut-step svelte-p44ryl"><p class="svelte-p44ryl">Tap the record button to start scanning and slowly capture your face from all angles (using the rear camera).</p> <p style="color:darkred" class="svelte-p44ryl">Keep your head perfectly still while scanning!</p> <div class="tut-images svelte-p44ryl"><img src="${`${d}/tuts/vr-selfie-2.png`}" alt="" class="svelte-p44ryl"/></div></div> <div class="tut-step svelte-p44ryl"><p class="svelte-p44ryl">tap &quot;upload and process&quot;</p> <div class="tut-images svelte-p44ryl"><img src="${`${d}/tuts/upload-process.png`}" alt="" class="svelte-p44ryl"/></div></div> <div class="tut-step svelte-p44ryl"><p class="svelte-p44ryl">Once it is processed, tap export</p> <div class="tut-images svelte-p44ryl"><img src="${`${d}/tuts/export.png`}" alt="" class="svelte-p44ryl"/></div></div> <div class="tut-step svelte-p44ryl"><p class="svelte-p44ryl">select GLTF</p> <div class="tut-images svelte-p44ryl"><img src="${`${d}/tuts/gltf.png`}" alt="" class="svelte-p44ryl"/></div></div>`,g,c,u,w,v;return{c(){s=f("div"),e=f("div"),t=f("button"),t.textContent=l,n=V(),r=f("div"),r.innerHTML=o,this.h()},l(i){s=h(i,"DIV",{class:!0});var $=O(s);e=h($,"DIV",{class:!0});var _=O(e);t=h(_,"BUTTON",{class:!0,"data-svelte-h":!0}),T(t)!=="svelte-k7zlav"&&(t.textContent=l),n=H(_),r=h(_,"DIV",{class:!0,"data-svelte-h":!0}),T(r)!=="svelte-197ecju"&&(r.innerHTML=o),_.forEach(b),$.forEach(b),this.h()},h(){y(t,"class","close-btn svelte-p44ryl"),y(r,"class","popup-content svelte-p44ryl"),y(e,"class","popup svelte-p44ryl"),y(s,"class","popup-backdrop svelte-p44ryl")},m(i,$){P(i,s,$),p(s,e),p(e,t),p(e,n),p(e,r),u=!0,w||(v=[L(t,"click",a[1]),L(e,"click",de(a[2])),L(s,"click",a[1])],w=!0)},p:ue,i(i){u||(i&&fe(()=>{u&&(c&&c.end(1),g=ge(e,A,{y:-100,duration:200}),g.start())}),u=!0)},o(i){g&&g.invalidate(),i&&(c=_e(e,A,{y:100,duration:200})),u=!1},d(i){i&&b(s),i&&c&&c.end(),w=!1,G(v)}}}function we(a){let s,e=a[0]&&pe(a);return{c(){e&&e.c(),s=z()},l(t){e&&e.l(t),s=z()},m(t,l){e&&e.m(t,l),P(t,s,l)},p(t,[l]){t[0]?e?(e.p(t,l),l&1&&I(e,1)):(e=pe(t),e.c(),I(e,1),e.m(s.parentNode,s)):e&&(ye(),N(e,1,1,()=>{e=null}),me())},i(t){I(e)},o(t){N(e)},d(t){t&&b(s),e&&e.d(t)}}}function qe(a,s,e){let{show:t=!1}=s;const l=ve(),n=()=>{e(0,t=!1),l("close")};function r(o){he.call(this,a,o)}return a.$$set=o=>{"show"in o&&e(0,t=o.show)},[t,n,r]}class ke extends Z{constructor(s){super(),J(this,s,qe,we,R,{show:0})}}function oe(a){let s,e,t,l="×",n,r,o=`<h2>iOS Tutorial</h2> <div class="tut-step svelte-p44ryl"><p class="svelte-p44ryl">We will need two separate 3d scans: one with headset and one without</p> <div class="tut-images svelte-p44ryl"><img src="${`${d}/tuts/scan-headset.png`}" alt="" class="svelte-p44ryl"/> <img src="${`${d}/tuts/scan-naked.png`}" alt="" class="svelte-p44ryl"/></div></div> <div class="tut-step svelte-p44ryl"><p class="svelte-p44ryl">get <a href="https://3dscannerapp.com/">3d Scanner App</a> from the app store</p> <div class="tut-images svelte-p44ryl"><img src="${`${d}/tuts/3d-scanner-app.png`}" alt="" class="svelte-p44ryl"/></div></div> <div class="tut-step svelte-p44ryl"><p class="svelte-p44ryl">in the app, tap the &quot;NORMAL&quot; button...</p> <div class="tut-images svelte-p44ryl"><img src="${`${d}/tuts/normal.jpeg`}" alt="" class="svelte-p44ryl"/></div></div> <div class="tut-step svelte-p44ryl"><p class="svelte-p44ryl">...and select &quot;TrueDepth&quot; for the scan mode</p> <div class="tut-images svelte-p44ryl"><img src="${`${d}/tuts/true-depth.jpeg`}" alt="" class="svelte-p44ryl"/></div></div> <div class="tut-step svelte-p44ryl"><p class="svelte-p44ryl">Tap the red record button and start scanning and slowly capture your face from all angles,
              then tap again to finish, once your entire face is filled in.</p> <p style="color:darkred" class="svelte-p44ryl">Keep your head perfectly still while scanning!</p> <div class="tut-images svelte-p44ryl"><img src="${`${d}/tuts/vr-selfie-1.png`}" alt="" class="svelte-p44ryl"/></div></div> <div class="tut-step svelte-p44ryl"><p class="svelte-p44ryl">Process your scan by hitting &quot;start&quot;</p> <div class="tut-images svelte-p44ryl"><img src="${`${d}/tuts/process.jpeg`}" alt="" class="svelte-p44ryl"/></div></div> <div class="tut-step svelte-p44ryl"><p class="svelte-p44ryl">tap &quot;share&quot;</p> <div class="tut-images svelte-p44ryl"><img src="${`${d}/tuts/share.jpeg`}" alt="" class="svelte-p44ryl"/></div></div> <div class="tut-step svelte-p44ryl"><p class="svelte-p44ryl">tap &quot;point cloud&quot;</p> <div class="tut-images svelte-p44ryl"><img src="${`${d}/tuts/point-cloud.jpeg`}" alt="" class="svelte-p44ryl"/></div></div> <div class="tut-step svelte-p44ryl"><p class="svelte-p44ryl">tap &quot;low density&quot;</p> <div class="tut-images svelte-p44ryl"><img src="${`${d}/tuts/density.jpeg`}" alt="" class="svelte-p44ryl"/></div></div> <div class="tut-step svelte-p44ryl"><p class="svelte-p44ryl">choose either &quot;XYZ color&quot; or &quot;XYZ no color&quot;</p> <div class="tut-images svelte-p44ryl"><img src="${`${d}/tuts/xyz-color.jpeg`}" alt="" class="svelte-p44ryl"/> <img src="${`${d}/tuts/xyz-no-color.jpeg`}" alt="" class="svelte-p44ryl"/></div></div>`,g,c,u,w,v;return{c(){s=f("div"),e=f("div"),t=f("button"),t.textContent=l,n=V(),r=f("div"),r.innerHTML=o,this.h()},l(i){s=h(i,"DIV",{class:!0});var $=O(s);e=h($,"DIV",{class:!0});var _=O(e);t=h(_,"BUTTON",{class:!0,"data-svelte-h":!0}),T(t)!=="svelte-k7zlav"&&(t.textContent=l),n=H(_),r=h(_,"DIV",{class:!0,"data-svelte-h":!0}),T(r)!=="svelte-s9h0iy"&&(r.innerHTML=o),_.forEach(b),$.forEach(b),this.h()},h(){y(t,"class","close-btn svelte-p44ryl"),y(r,"class","popup-content svelte-p44ryl"),y(e,"class","popup svelte-p44ryl"),y(s,"class","popup-backdrop svelte-p44ryl")},m(i,$){P(i,s,$),p(s,e),p(e,t),p(e,n),p(e,r),u=!0,w||(v=[L(t,"click",a[1]),L(e,"click",de(a[2])),L(s,"click",a[1])],w=!0)},p:ue,i(i){u||(i&&fe(()=>{u&&(c&&c.end(1),g=ge(e,A,{y:-100,duration:200}),g.start())}),u=!0)},o(i){g&&g.invalidate(),i&&(c=_e(e,A,{y:100,duration:200})),u=!1},d(i){i&&b(s),i&&c&&c.end(),w=!1,G(v)}}}function Te(a){let s,e=a[0]&&oe(a);return{c(){e&&e.c(),s=z()},l(t){e&&e.l(t),s=z()},m(t,l){e&&e.m(t,l),P(t,s,l)},p(t,[l]){t[0]?e?(e.p(t,l),l&1&&I(e,1)):(e=oe(t),e.c(),I(e,1),e.m(s.parentNode,s)):e&&(ye(),N(e,1,1,()=>{e=null}),me())},i(t){I(e)},o(t){N(e)},d(t){t&&b(s),e&&e.d(t)}}}function Ce(a,s,e){let{show:t=!1}=s;const l=ve(),n=()=>{e(0,t=!1),l("close")};function r(o){he.call(this,a,o)}return a.$$set=o=>{"show"in o&&e(0,t=o.show)},[t,n,r]}class Ve extends Z{constructor(s){super(),J(this,s,Ce,Te,R,{show:0})}}function He(a){let s,e='<iframe id="liveStream" width="560" height="315" src="https://www.youtube.com/embed/live_stream?channel=UChgifjY5u89KyvE4wBIhNjw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen="" class="svelte-1viqpp6"></iframe>',t,l,n,r,o=`<div class="section svelte-1viqpp6"><div class="statement svelte-1viqpp6"><h1 class="svelte-1viqpp6">VR Face Hug</h1> <p class="svelte-1viqpp6">A bespoke pillow <br/>
			perfectly molds to your face <br/>
			works with the Quest 3</p></div> <div class="image svelte-1viqpp6"><img src="${`${d}/VR-Face-Hug.png`}" alt="VR Face Hug facial interface" class="svelte-1viqpp6"/></div></div>`,g,c,u='<div class="small-section svelte-1viqpp6"><h2 class="step svelte-1viqpp6"><span class="highlight svelte-1viqpp6">Step 1.</span> Create 3D Face Scan</h2></div>',w,v,i,$="iOS Tutorial",_,C,B,M,Q='<p style="color:greenyellow;font-size:36px" class="svelte-1viqpp6">or</p>',F,D,ee="Android Tutorial",K,j,W,S,te='<h2 class="step svelte-1viqpp6"><span class="highlight svelte-1viqpp6">Step 2.</span> Schedule a Virtual Fitting</h2>',X,E,se='<button class="cyber-button svelte-1viqpp6" onclick="window.open(&#39;mailto:fits@porchlogic.com&#39;, &#39;_blank&#39;);">email fits@porchlogic.com</button> <div class="between svelte-1viqpp6"><p style="color:greenyellow;font-size:36px" class="svelte-1viqpp6">or</p></div> <button type="button" class="cyber-button svelte-1viqpp6" onclick="window.open(&#39;https://discord.gg/KAVVWXkVhh&#39;, &#39;_blank&#39;);"><i class="fab fa-discord fa-2x"></i></button>',U,Y,le;return C=new Ve({props:{show:a[0]}}),C.$on("close",a[3]),j=new ke({props:{show:a[1]}}),j.$on("close",a[5]),{c(){s=f("div"),s.innerHTML=e,t=V(),l=f("div"),n=f("div"),r=f("div"),r.innerHTML=o,g=V(),c=f("div"),c.innerHTML=u,w=V(),v=f("div"),i=f("button"),i.textContent=$,_=V(),ie(C.$$.fragment),B=V(),M=f("div"),M.innerHTML=Q,F=V(),D=f("button"),D.textContent=ee,K=V(),ie(j.$$.fragment),W=V(),S=f("div"),S.innerHTML=te,X=V(),E=f("div"),E.innerHTML=se,this.h()},l(m){s=h(m,"DIV",{class:!0,"data-svelte-h":!0}),T(s)!=="svelte-1j3oj9j"&&(s.innerHTML=e),t=H(m),l=h(m,"DIV",{class:!0});var x=O(l);n=h(x,"DIV",{class:!0});var q=O(n);r=h(q,"DIV",{class:!0,"data-svelte-h":!0}),T(r)!=="svelte-15i49jy"&&(r.innerHTML=o),g=H(q),c=h(q,"DIV",{class:!0,"data-svelte-h":!0}),T(c)!=="svelte-izvwa4"&&(c.innerHTML=u),w=H(q),v=h(q,"DIV",{class:!0});var k=O(v);i=h(k,"BUTTON",{class:!0,"data-svelte-h":!0}),T(i)!=="svelte-1v4w05g"&&(i.textContent=$),_=H(k),re(C.$$.fragment,k),B=H(k),M=h(k,"DIV",{class:!0,"data-svelte-h":!0}),T(M)!=="svelte-1jjkmw2"&&(M.innerHTML=Q),F=H(k),D=h(k,"BUTTON",{class:!0,"data-svelte-h":!0}),T(D)!=="svelte-1iypqzj"&&(D.textContent=ee),K=H(k),re(j.$$.fragment,k),k.forEach(b),W=H(q),S=h(q,"DIV",{class:!0,"data-svelte-h":!0}),T(S)!=="svelte-osp1pe"&&(S.innerHTML=te),X=H(q),E=h(q,"DIV",{class:!0,"data-svelte-h":!0}),T(E)!=="svelte-17naqmh"&&(E.innerHTML=se),q.forEach(b),x.forEach(b),this.h()},h(){y(s,"class","video-wrapper svelte-1viqpp6"),y(r,"class","s1 svelte-1viqpp6"),y(c,"class","s2 svelte-1viqpp6"),y(i,"class","cyber-button svelte-1viqpp6"),y(M,"class","between svelte-1viqpp6"),y(D,"class","cyber-button svelte-1viqpp6"),y(v,"class","section-cards svelte-1viqpp6"),y(S,"class","s3 svelte-1viqpp6"),y(E,"class","section-cards svelte-1viqpp6"),y(n,"class","container svelte-1viqpp6"),y(l,"class","background svelte-1viqpp6")},m(m,x){P(m,s,x),P(m,t,x),P(m,l,x),p(l,n),p(n,r),p(n,g),p(n,c),p(n,w),p(n,v),p(v,i),p(v,_),ne(C,v,null),p(v,B),p(v,M),p(v,F),p(v,D),p(v,K),ne(j,v,null),p(n,W),p(n,S),p(n,X),p(n,E),U=!0,Y||(le=[L(i,"click",a[2]),L(D,"click",a[4])],Y=!0)},p(m,[x]){const q={};x&1&&(q.show=m[0]),C.$set(q);const k={};x&2&&(k.show=m[1]),j.$set(k)},i(m){U||(I(C.$$.fragment,m),I(j.$$.fragment,m),U=!0)},o(m){N(C.$$.fragment,m),N(j.$$.fragment,m),U=!1},d(m){m&&(b(s),b(t),b(l)),ce(C),ce(j),Y=!1,G(le)}}}function je(a,s,e){console.log("---------Base path:",d),$e(()=>{const c=document.createElement("script");c.src="https://assets.calendly.com/assets/external/widget.js",c.async=!0,document.head.appendChild(c);const u=document.createElement("link");return u.href="https://assets.calendly.com/assets/external/widget.css",u.rel="stylesheet",document.head.appendChild(u),()=>{window.removeEventListener("click",closePopup)}});let t=!1,l=!1;return[t,l,()=>e(0,t=!0),()=>e(0,t=!1),()=>e(1,l=!0),()=>e(1,l=!1)]}class Ie extends Z{constructor(s){super(),J(this,s,je,He,R,{})}}export{Ie as component};
