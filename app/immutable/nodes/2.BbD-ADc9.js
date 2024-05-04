import{s as Q,e as f,a as T,c as y,g as H,b as C,o as z,f as g,d as m,i as q,n as K,U as Ne,t as me,p as ge,y as Be,k as p,V as xe,v as X,W as _e,X as M,Y as we,G as $e,E as ne,Z as be,x as Fe}from"../chunks/scheduler.BOfbfkB_.js";import{S as J,i as ee,t as x,g as ke,a as S,c as Te,f as Ce,h as ze,b as le,d as ae,m as re,e as ce}from"../chunks/index.bSmvqre6.js";import{b}from"../chunks/paths.0Nbjzm9O.js";function ie(l){return(l==null?void 0:l.length)!==void 0?l:Array.from(l)}function Le(l,t,e){const s=l.slice();return s[1]=t[e],s}function Me(l,t,e){const s=l.slice();return s[4]=t[e],s}function Pe(l){let t,e=l[4]+"",s;return{c(){t=f("li"),s=me(e)},l(r){t=y(r,"LI",{});var i=z(t);s=ge(i,e),i.forEach(g)},m(r,i){q(r,t,i),p(t,s)},p:K,d(r){r&&g(t)}}}function je(l){let t,e,s=l[1].name+"",r,i,a,c,v,n,h=l[1].price+"",_,k,o=ie(l[1].features),d=[];for(let u=0;u<o.length;u+=1)d[u]=Pe(Me(l,o,u));return{c(){t=f("div"),e=f("h2"),r=me(s),i=T(),a=f("ul");for(let u=0;u<d.length;u+=1)d[u].c();c=T(),v=f("a"),n=f("button"),_=me(h),k=T(),this.h()},l(u){t=y(u,"DIV",{class:!0});var V=z(t);e=y(V,"H2",{class:!0});var w=z(e);r=ge(w,s),w.forEach(g),i=C(V),a=y(V,"UL",{class:!0});var E=z(a);for(let L=0;L<d.length;L+=1)d[L].l(E);E.forEach(g),c=C(V),v=y(V,"A",{href:!0,style:!0});var W=z(v);n=y(W,"BUTTON",{class:!0});var D=z(n);_=ge(D,h),D.forEach(g),W.forEach(g),k=C(V),V.forEach(g),this.h()},h(){m(e,"class","svelte-1s4olk2"),m(a,"class","features svelte-1s4olk2"),m(n,"class","svelte-1s4olk2"),m(v,"href",l[1].link),Be(v,"text-decoration","none"),m(t,"class","card "+l[1].style+" svelte-1s4olk2")},m(u,V){q(u,t,V),p(t,e),p(e,r),p(t,i),p(t,a);for(let w=0;w<d.length;w+=1)d[w]&&d[w].m(a,null);p(t,c),p(t,v),p(v,n),p(n,_),p(t,k)},p(u,V){if(V&1){o=ie(u[1].features);let w;for(w=0;w<o.length;w+=1){const E=Me(u,o,w);d[w]?d[w].p(E,V):(d[w]=Pe(E),d[w].c(),d[w].m(a,null))}for(;w<d.length;w+=1)d[w].d(1);d.length=o.length}},d(u){u&&g(t),Ne(d,u)}}}function Ae(l){let t,e="Don't buy. It's not ready yet.",s,r,i=ie(l[0]),a=[];for(let c=0;c<i.length;c+=1)a[c]=je(Le(l,i,c));return{c(){t=f("div"),t.textContent=e,s=T(),r=f("div");for(let c=0;c<a.length;c+=1)a[c].c();this.h()},l(c){t=y(c,"DIV",{class:!0,"data-svelte-h":!0}),H(t)!=="svelte-tpghgo"&&(t.textContent=e),s=C(c),r=y(c,"DIV",{class:!0});var v=z(r);for(let n=0;n<a.length;n+=1)a[n].l(v);v.forEach(g),this.h()},h(){m(t,"class","notice svelte-1s4olk2"),m(r,"class","card-container svelte-1s4olk2")},m(c,v){q(c,t,v),q(c,s,v),q(c,r,v);for(let n=0;n<a.length;n+=1)a[n]&&a[n].m(r,null)},p(c,[v]){if(v&1){i=ie(c[0]);let n;for(n=0;n<i.length;n+=1){const h=Le(c,i,n);a[n]?a[n].p(h,v):(a[n]=je(h),a[n].c(),a[n].m(r,null))}for(;n<a.length;n+=1)a[n].d(1);a.length=i.length}},i:K,o:K,d(c){c&&(g(t),g(s),g(r)),Ne(a,c)}}}function Re(l){return[[{name:"Beta Tester",price:"$39",features:["VR Face Hug v0.9","One update for cost of materials + shipping"],style:"style1",link:"https://buy.stripe.com/fZecQT19ye3q0U0cMM"},{name:"Supporter",price:"$69",features:["VR Face Hug v0.9","Three updates for cost of materials + shipping"],style:"style2",link:"#"},{name:"Investor",price:"$120",features:["VR Face Hug v0.9","Three updates for cost of materials + shipping","NFT"],style:"style3",link:"#"}]]}class Ye extends J{constructor(t){super(),ee(this,t,Re,Ae,Q,{})}}function We(l){const t=l-1;return t*t*t+1}function Z(l,{delay:t=0,duration:e=400,easing:s=We,x:r=0,y:i=0,opacity:a=0}={}){const c=getComputedStyle(l),v=+c.opacity,n=c.transform==="none"?"":c.transform,h=v*(1-a),[_,k]=xe(r),[o,d]=xe(i);return{delay:t,duration:e,easing:s,css:(u,V)=>`
			transform: ${n} translate(${(1-u)*_}${k}, ${(1-u)*o}${d});
			opacity: ${v-h*V}`}}function Se(l){let t,e,s,r="×",i,a,c=`<h2>Android Tutorial</h2> <div class="tut-step svelte-p44ryl"><p class="svelte-p44ryl">We will need two separate 3d scans: one with headset and one without</p> <div class="tut-images svelte-p44ryl"><img src="${`${b}/tuts/scan-headset.png`}" alt="" class="svelte-p44ryl"/> <img src="${`${b}/tuts/scan-naked.png`}" alt="" class="svelte-p44ryl"/></div> <p style="color:darkred" class="svelte-p44ryl">⚠ Your scan will be permanently deleted from our systems immediately following the production of your custom product.</p></div> <div class="tut-step svelte-p44ryl"><p class="svelte-p44ryl">get and open<a href="https://poly.cam/">Polycam</a> from the play store</p> <div class="tut-images svelte-p44ryl"><img src="${`${b}/tuts/polycam.png`}" alt="" class="svelte-p44ryl"/></div></div> <div class="tut-step svelte-p44ryl"><p class="svelte-p44ryl">set Polycam to video mode</p> <div class="tut-images svelte-p44ryl"><img src="${`${b}/tuts/polycam-video-mode.png`}" alt="" class="svelte-p44ryl"/></div></div> <div class="tut-step svelte-p44ryl"><p class="svelte-p44ryl">Tap the record button to start scanning and slowly capture your face from all angles (using the rear camera).</p> <p style="color:darkred" class="svelte-p44ryl">Keep your head perfectly still while scanning!</p> <div class="tut-images svelte-p44ryl"><img src="${`${b}/tuts/vr-selfie-2.png`}" alt="" class="svelte-p44ryl"/></div></div> <div class="tut-step svelte-p44ryl"><p class="svelte-p44ryl">tap &quot;upload and process&quot;</p> <div class="tut-images svelte-p44ryl"><img src="${`${b}/tuts/upload-process.png`}" alt="" class="svelte-p44ryl"/></div></div> <div class="tut-step svelte-p44ryl"><p class="svelte-p44ryl">Once it is processed, tap export</p> <div class="tut-images svelte-p44ryl"><img src="${`${b}/tuts/export.png`}" alt="" class="svelte-p44ryl"/></div></div> <div class="tut-step svelte-p44ryl"><p class="svelte-p44ryl">select GLTF</p> <div class="tut-images svelte-p44ryl"><img src="${`${b}/tuts/gltf.png`}" alt="" class="svelte-p44ryl"/></div></div> <div class="tut-step svelte-p44ryl"><p class="svelte-p44ryl">Email file to ian@porchlogic.com and schedule your virtual fitting!</p></div>`,v,n,h,_,k;return{c(){t=f("div"),e=f("div"),s=f("button"),s.textContent=r,i=T(),a=f("div"),a.innerHTML=c,this.h()},l(o){t=y(o,"DIV",{class:!0});var d=z(t);e=y(d,"DIV",{class:!0});var u=z(e);s=y(u,"BUTTON",{class:!0,"data-svelte-h":!0}),H(s)!=="svelte-k7zlav"&&(s.textContent=r),i=C(u),a=y(u,"DIV",{class:!0,"data-svelte-h":!0}),H(a)!=="svelte-4gq2hh"&&(a.innerHTML=c),u.forEach(g),d.forEach(g),this.h()},h(){m(s,"class","close-btn svelte-p44ryl"),m(a,"class","popup-content svelte-p44ryl"),m(e,"class","popup svelte-p44ryl"),m(t,"class","popup-backdrop svelte-p44ryl")},m(o,d){q(o,t,d),p(t,e),p(e,s),p(e,i),p(e,a),h=!0,_||(k=[M(s,"click",l[1]),M(e,"click",we(l[2])),M(t,"click",l[1])],_=!0)},p:K,i(o){h||(o&&$e(()=>{h&&(n&&n.end(1),v=Ce(e,Z,{y:-100,duration:200}),v.start())}),h=!0)},o(o){v&&v.invalidate(),o&&(n=ze(e,Z,{y:100,duration:200})),h=!1},d(o){o&&g(t),o&&n&&n.end(),_=!1,ne(k)}}}function Ke(l){let t,e=l[0]&&Se(l);return{c(){e&&e.c(),t=X()},l(s){e&&e.l(s),t=X()},m(s,r){e&&e.m(s,r),q(s,t,r)},p(s,[r]){s[0]?e?(e.p(s,r),r&1&&x(e,1)):(e=Se(s),e.c(),x(e,1),e.m(t.parentNode,t)):e&&(ke(),S(e,1,1,()=>{e=null}),Te())},i(s){x(e)},o(s){S(e)},d(s){s&&g(t),e&&e.d(s)}}}function Xe(l,t,e){let{show:s=!1}=t;const r=_e(),i=()=>{e(0,s=!1),r("close")};function a(c){be.call(this,l,c)}return l.$$set=c=>{"show"in c&&e(0,s=c.show)},[s,i,a]}class Ze extends J{constructor(t){super(),ee(this,t,Xe,Ke,Q,{show:0})}}function Oe(l){let t,e,s,r="×",i,a,c='<h1>Data Privacy</h1> <div class="tut-step svelte-p44ryl"><p class="svelte-p44ryl">We collect 3D facial scans solely for the purpose of creating custom-fit products.</p> <p class="svelte-p44ryl">The 3D facial scans are used exclusively for product customization and will not be used for any other purpose.</p> <p class="svelte-p44ryl">All 3D facial scans are permanently deleted from our systems immediately following the production of your custom product.</p> <p class="svelte-p44ryl">We suggest that you keep your scan for future products and mods</p></div>',v,n,h,_,k;return{c(){t=f("div"),e=f("div"),s=f("button"),s.textContent=r,i=T(),a=f("div"),a.innerHTML=c,this.h()},l(o){t=y(o,"DIV",{class:!0});var d=z(t);e=y(d,"DIV",{class:!0});var u=z(e);s=y(u,"BUTTON",{class:!0,"data-svelte-h":!0}),H(s)!=="svelte-k7zlav"&&(s.textContent=r),i=C(u),a=y(u,"DIV",{class:!0,"data-svelte-h":!0}),H(a)!=="svelte-a08b9w"&&(a.innerHTML=c),u.forEach(g),d.forEach(g),this.h()},h(){m(s,"class","close-btn svelte-p44ryl"),m(a,"class","popup-content svelte-p44ryl"),m(e,"class","popup svelte-p44ryl"),m(t,"class","popup-backdrop svelte-p44ryl")},m(o,d){q(o,t,d),p(t,e),p(e,s),p(e,i),p(e,a),h=!0,_||(k=[M(s,"click",l[1]),M(e,"click",we(l[2])),M(t,"click",l[1])],_=!0)},p:K,i(o){h||(o&&$e(()=>{h&&(n&&n.end(1),v=Ce(e,Z,{y:-100,duration:200}),v.start())}),h=!0)},o(o){v&&v.invalidate(),o&&(n=ze(e,Z,{y:100,duration:200})),h=!1},d(o){o&&g(t),o&&n&&n.end(),_=!1,ne(k)}}}function Ge(l){let t,e=l[0]&&Oe(l);return{c(){e&&e.c(),t=X()},l(s){e&&e.l(s),t=X()},m(s,r){e&&e.m(s,r),q(s,t,r)},p(s,[r]){s[0]?e?(e.p(s,r),r&1&&x(e,1)):(e=Oe(s),e.c(),x(e,1),e.m(t.parentNode,t)):e&&(ke(),S(e,1,1,()=>{e=null}),Te())},i(s){x(e)},o(s){S(e)},d(s){s&&g(t),e&&e.d(s)}}}function Qe(l,t,e){let{show:s=!1}=t;const r=_e(),i=()=>{e(0,s=!1),r("close")};function a(c){be.call(this,l,c)}return l.$$set=c=>{"show"in c&&e(0,s=c.show)},[s,i,a]}class Je extends J{constructor(t){super(),ee(this,t,Qe,Ge,Q,{show:0})}}function Ue(l){let t,e,s,r="×",i,a,c=`<h2>iOS Tutorial</h2> <iframe width="560" height="315" src="https://www.youtube.com/embed/QG-ShfPdVJ8?si=mUXmCCb2lqRlWKyH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen=""></iframe> <div class="tut-step svelte-p44ryl"><p class="svelte-p44ryl">We will need two separate 3d scans: one with headset and one without</p> <div class="tut-images svelte-p44ryl"><img src="${`${b}/tuts/scan-headset.png`}" alt="" class="svelte-p44ryl"/> <img src="${`${b}/tuts/scan-naked.png`}" alt="" class="svelte-p44ryl"/></div> <p style="color:darkred" class="svelte-p44ryl">⚠ Your scan will be permanently deleted from our systems immediately following the production of your custom product.</p></div> <div class="tut-step svelte-p44ryl"><p class="svelte-p44ryl">get <a href="https://3dscannerapp.com/">3d Scanner App</a> from the app store</p> <div class="tut-images svelte-p44ryl"><img src="${`${b}/tuts/3d-scanner-app.png`}" alt="" class="svelte-p44ryl"/></div></div> <div class="tut-step svelte-p44ryl"><p class="svelte-p44ryl">in the app, tap the &quot;NORMAL&quot; button...</p> <div class="tut-images svelte-p44ryl"><img src="${`${b}/tuts/normal.jpeg`}" alt="" class="svelte-p44ryl"/></div></div> <div class="tut-step svelte-p44ryl"><p class="svelte-p44ryl">...and select &quot;TrueDepth&quot; for the scan mode</p> <div class="tut-images svelte-p44ryl"><img src="${`${b}/tuts/true-depth.jpeg`}" alt="" class="svelte-p44ryl"/></div></div> <div class="tut-step svelte-p44ryl"><p class="svelte-p44ryl">Tap the red record button and start scanning and slowly capture your face from all angles,
              then tap again to finish, once your entire face is filled in.</p> <p style="color:darkred" class="svelte-p44ryl">Keep your head perfectly still while scanning!</p> <div class="tut-images svelte-p44ryl"><img src="${`${b}/tuts/vr-selfie-1.png`}" alt="" class="svelte-p44ryl"/></div></div> <div class="tut-step svelte-p44ryl"><p class="svelte-p44ryl">Process your scan by hitting &quot;start&quot;</p> <div class="tut-images svelte-p44ryl"><img src="${`${b}/tuts/process.jpeg`}" alt="" class="svelte-p44ryl"/></div></div> <div class="tut-step svelte-p44ryl"><p class="svelte-p44ryl">tap &quot;share&quot;</p> <div class="tut-images svelte-p44ryl"><img src="${`${b}/tuts/share.jpeg`}" alt="" class="svelte-p44ryl"/></div></div> <div class="tut-step svelte-p44ryl"><p class="svelte-p44ryl">tap &quot;point cloud&quot;</p> <div class="tut-images svelte-p44ryl"><img src="${`${b}/tuts/point-cloud.jpeg`}" alt="" class="svelte-p44ryl"/></div></div> <div class="tut-step svelte-p44ryl"><p class="svelte-p44ryl">tap &quot;low density&quot;</p> <div class="tut-images svelte-p44ryl"><img src="${`${b}/tuts/density.jpeg`}" alt="" class="svelte-p44ryl"/></div></div> <div class="tut-step svelte-p44ryl"><p class="svelte-p44ryl">choose either &quot;XYZ color&quot; or &quot;XYZ no color&quot;</p> <div class="tut-images svelte-p44ryl"><img src="${`${b}/tuts/xyz-color.jpeg`}" alt="" class="svelte-p44ryl"/> <img src="${`${b}/tuts/xyz-no-color.jpeg`}" alt="" class="svelte-p44ryl"/></div></div> <div class="tut-step svelte-p44ryl"><p class="svelte-p44ryl">Email to ian@porchlogic.com and schedule your virtual fitting!</p></div>`,v,n,h,_,k;return{c(){t=f("div"),e=f("div"),s=f("button"),s.textContent=r,i=T(),a=f("div"),a.innerHTML=c,this.h()},l(o){t=y(o,"DIV",{class:!0});var d=z(t);e=y(d,"DIV",{class:!0});var u=z(e);s=y(u,"BUTTON",{class:!0,"data-svelte-h":!0}),H(s)!=="svelte-k7zlav"&&(s.textContent=r),i=C(u),a=y(u,"DIV",{class:!0,"data-svelte-h":!0}),H(a)!=="svelte-tlnk2t"&&(a.innerHTML=c),u.forEach(g),d.forEach(g),this.h()},h(){m(s,"class","close-btn svelte-p44ryl"),m(a,"class","popup-content svelte-p44ryl"),m(e,"class","popup svelte-p44ryl"),m(t,"class","popup-backdrop svelte-p44ryl")},m(o,d){q(o,t,d),p(t,e),p(e,s),p(e,i),p(e,a),h=!0,_||(k=[M(s,"click",l[1]),M(e,"click",we(l[2])),M(t,"click",l[1])],_=!0)},p:K,i(o){h||(o&&$e(()=>{h&&(n&&n.end(1),v=Ce(e,Z,{y:-100,duration:200}),v.start())}),h=!0)},o(o){v&&v.invalidate(),o&&(n=ze(e,Z,{y:100,duration:200})),h=!1},d(o){o&&g(t),o&&n&&n.end(),_=!1,ne(k)}}}function et(l){let t,e=l[0]&&Ue(l);return{c(){e&&e.c(),t=X()},l(s){e&&e.l(s),t=X()},m(s,r){e&&e.m(s,r),q(s,t,r)},p(s,[r]){s[0]?e?(e.p(s,r),r&1&&x(e,1)):(e=Ue(s),e.c(),x(e,1),e.m(t.parentNode,t)):e&&(ke(),S(e,1,1,()=>{e=null}),Te())},i(s){x(e)},o(s){S(e)},d(s){s&&g(t),e&&e.d(s)}}}function tt(l,t,e){let{show:s=!1}=t;const r=_e(),i=()=>{e(0,s=!1),r("close")};function a(c){be.call(this,l,c)}return l.$$set=c=>{"show"in c&&e(0,s=c.show)},[s,i,a]}class st extends J{constructor(t){super(),ee(this,t,tt,et,Q,{show:0})}}function lt(l){let t,e='<iframe id="liveStream" width="560" height="315" src="https://www.youtube.com/embed/live_stream?channel=UChgifjY5u89KyvE4wBIhNjw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen="" class="svelte-z8wcha"></iframe>',s,r,i,a,c=`<div class="section svelte-z8wcha"><div class="statement svelte-z8wcha"><h1 class="svelte-z8wcha">VR Face Hug</h1> <p class="svelte-z8wcha">A bespoke pillow <br/>
			perfectly molds to your face <br/>
			works with the Quest 3</p></div> <div class="image svelte-z8wcha"><img src="${`${b}/VR-Face-Hug.png`}" alt="VR Face Hug facial interface" class="svelte-z8wcha"/></div></div>`,v,n,h,_,k='<span class="highlight svelte-z8wcha">Step 1.</span> Create 3D Face Scan',o,d,u,V="Open Data Privacy Popup",w,E,W,D,L,Ve="iOS Tutorial",oe,O,pe,B,De='<p style="color:greenyellow;font-size:36px" class="svelte-z8wcha">or</p>',ue,N,He="Android Tutorial",de,U,ve,F,Ee='<h2 class="step svelte-z8wcha"><span class="highlight svelte-z8wcha">Step 2.</span> Schedule a Virtual Fitting</h2> <div class="section-calendar svelte-z8wcha"><button class="cyber-button svelte-z8wcha">Virtual Fittings Coming soon</button></div>',he,A,Ie='<span class="highlight svelte-z8wcha">Step 3.</span> Join the Beta',fe,R,te,ye,qe;return E=new Je({props:{show:l[0]}}),E.$on("close",l[4]),O=new st({props:{show:l[1]}}),O.$on("close",l[6]),U=new Ze({props:{show:l[2]}}),U.$on("close",l[8]),R=new Ye({}),{c(){t=f("div"),t.innerHTML=e,s=T(),r=f("div"),i=f("div"),a=f("div"),a.innerHTML=c,v=T(),n=f("div"),h=f("div"),_=f("h2"),_.innerHTML=k,o=T(),d=f("div"),u=f("button"),u.textContent=V,w=T(),le(E.$$.fragment),W=T(),D=f("div"),L=f("button"),L.textContent=Ve,oe=T(),le(O.$$.fragment),pe=T(),B=f("div"),B.innerHTML=De,ue=T(),N=f("button"),N.textContent=He,de=T(),le(U.$$.fragment),ve=T(),F=f("div"),F.innerHTML=Ee,he=T(),A=f("h2"),A.innerHTML=Ie,fe=T(),le(R.$$.fragment),this.h()},l($){t=y($,"DIV",{class:!0,"data-svelte-h":!0}),H(t)!=="svelte-1j3oj9j"&&(t.innerHTML=e),s=C($),r=y($,"DIV",{class:!0});var P=z(r);i=y(P,"DIV",{class:!0});var I=z(i);a=y(I,"DIV",{class:!0,"data-svelte-h":!0}),H(a)!=="svelte-15i49jy"&&(a.innerHTML=c),v=C(I),n=y(I,"DIV",{class:!0});var G=z(n);h=y(G,"DIV",{class:!0});var Y=z(h);_=y(Y,"H2",{class:!0,"data-svelte-h":!0}),H(_)!=="svelte-1t3g7qh"&&(_.innerHTML=k),o=C(Y),d=y(Y,"DIV",{class:!0});var se=z(d);u=y(se,"BUTTON",{class:!0,"data-svelte-h":!0}),H(u)!=="svelte-43lvc1"&&(u.textContent=V),w=C(se),ae(E.$$.fragment,se),se.forEach(g),Y.forEach(g),G.forEach(g),W=C(I),D=y(I,"DIV",{class:!0});var j=z(D);L=y(j,"BUTTON",{class:!0,"data-svelte-h":!0}),H(L)!=="svelte-1v4w05g"&&(L.textContent=Ve),oe=C(j),ae(O.$$.fragment,j),pe=C(j),B=y(j,"DIV",{class:!0,"data-svelte-h":!0}),H(B)!=="svelte-1jjkmw2"&&(B.innerHTML=De),ue=C(j),N=y(j,"BUTTON",{class:!0,"data-svelte-h":!0}),H(N)!=="svelte-1iypqzj"&&(N.textContent=He),de=C(j),ae(U.$$.fragment,j),j.forEach(g),ve=C(I),F=y(I,"DIV",{class:!0,"data-svelte-h":!0}),H(F)!=="svelte-bsrapk"&&(F.innerHTML=Ee),he=C(I),A=y(I,"H2",{class:!0,"data-svelte-h":!0}),H(A)!=="svelte-17hcn7d"&&(A.innerHTML=Ie),fe=C(I),ae(R.$$.fragment,I),I.forEach(g),P.forEach(g),this.h()},h(){m(t,"class","video-wrapper svelte-z8wcha"),m(a,"class","s1 svelte-z8wcha"),m(_,"class","step svelte-z8wcha"),m(u,"class","svelte-z8wcha"),m(d,"class","small-card svelte-z8wcha"),m(h,"class","small-section svelte-z8wcha"),m(n,"class","s2 svelte-z8wcha"),m(L,"class","cyber-button svelte-z8wcha"),m(B,"class","between svelte-z8wcha"),m(N,"class","cyber-button svelte-z8wcha"),m(D,"class","section-cards svelte-z8wcha"),m(F,"class","s3 svelte-z8wcha"),m(A,"class","step svelte-z8wcha"),m(i,"class","container svelte-z8wcha"),m(r,"class","background svelte-z8wcha")},m($,P){q($,t,P),q($,s,P),q($,r,P),p(r,i),p(i,a),p(i,v),p(i,n),p(n,h),p(h,_),p(h,o),p(h,d),p(d,u),p(d,w),re(E,d,null),p(i,W),p(i,D),p(D,L),p(D,oe),re(O,D,null),p(D,pe),p(D,B),p(D,ue),p(D,N),p(D,de),re(U,D,null),p(i,ve),p(i,F),p(i,he),p(i,A),p(i,fe),re(R,i,null),te=!0,ye||(qe=[M(u,"click",l[3]),M(L,"click",l[5]),M(N,"click",l[7])],ye=!0)},p($,[P]){const I={};P&1&&(I.show=$[0]),E.$set(I);const G={};P&2&&(G.show=$[1]),O.$set(G);const Y={};P&4&&(Y.show=$[2]),U.$set(Y)},i($){te||(x(E.$$.fragment,$),x(O.$$.fragment,$),x(U.$$.fragment,$),x(R.$$.fragment,$),te=!0)},o($){S(E.$$.fragment,$),S(O.$$.fragment,$),S(U.$$.fragment,$),S(R.$$.fragment,$),te=!1},d($){$&&(g(t),g(s),g(r)),ce(E),ce(O),ce(U),ce(R),ye=!1,ne(qe)}}}function at(l,t,e){console.log("---------Base path:",b),Fe(()=>{const k=document.createElement("script");k.src="https://assets.calendly.com/assets/external/widget.js",k.async=!0,document.head.appendChild(k);const o=document.createElement("link");return o.href="https://assets.calendly.com/assets/external/widget.css",o.rel="stylesheet",document.head.appendChild(o),()=>{window.removeEventListener("click",closePopup)}});let s=!1,r=!1,i=!1;return[s,r,i,()=>e(0,s=!0),()=>e(0,s=!1),()=>e(1,r=!0),()=>e(1,r=!1),()=>e(2,i=!0),()=>e(2,i=!1)]}class nt extends J{constructor(t){super(),ee(this,t,at,lt,Q,{})}}export{nt as component};
