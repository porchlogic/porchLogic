import{s as Me,n as ne,r as fe,o as Ve,f as _e}from"../chunks/scheduler.Bey5-8KR.js";import{S as xe,i as ke,e as c,s as f,c as a,g as T,a as g,l as q,d as H,q as r,f as J,A as $e,k as me,m as he,r as Ie,b as t,w as De,x as Ee,y as je,B as te,C as ve,t as qe,j as Se,z as Oe}from"../chunks/index.Cus7Fbla.js";import{b as V}from"../chunks/paths.Bw4Kl52_.js";function ue(v){return(v==null?void 0:v.length)!==void 0?v:Array.from(v)}function Te(v,s,e){const p=v.slice();return p[1]=s[e],p}function ye(v,s,e){const p=v.slice();return p[4]=s[e],p}function be(v){let s,e=v[4]+"",p;return{c(){s=c("li"),p=me(e)},l(m){s=a(m,"LI",{});var u=q(s);p=he(u,e),u.forEach(H)},m(m,u){J(m,s,u),t(s,p)},p:ne,d(m){m&&H(s)}}}function He(v){let s,e,p=v[1].name+"",m,u,n,d,_,l,I=v[1].price+"",O,w,M=ue(v[1].features),i=[];for(let o=0;o<M.length;o+=1)i[o]=be(ye(v,M,o));return{c(){s=c("div"),e=c("h2"),m=me(p),u=f(),n=c("ul");for(let o=0;o<i.length;o+=1)i[o].c();d=f(),_=c("a"),l=c("button"),O=me(I),w=f(),this.h()},l(o){s=a(o,"DIV",{class:!0});var D=q(s);e=a(D,"H2",{class:!0});var y=q(e);m=he(y,p),y.forEach(H),u=g(D),n=a(D,"UL",{class:!0});var L=q(n);for(let k=0;k<i.length;k+=1)i[k].l(L);L.forEach(H),d=g(D),_=a(D,"A",{href:!0,style:!0});var z=q(_);l=a(z,"BUTTON",{class:!0});var N=q(l);O=he(N,I),N.forEach(H),z.forEach(H),w=g(D),D.forEach(H),this.h()},h(){r(e,"class","svelte-1s4olk2"),r(n,"class","features svelte-1s4olk2"),r(l,"class","svelte-1s4olk2"),r(_,"href",v[1].link),Ie(_,"text-decoration","none"),r(s,"class","card "+v[1].style+" svelte-1s4olk2")},m(o,D){J(o,s,D),t(s,e),t(e,m),t(s,u),t(s,n);for(let y=0;y<i.length;y+=1)i[y]&&i[y].m(n,null);t(s,d),t(s,_),t(_,l),t(l,O),t(s,w)},p(o,D){if(D&1){M=ue(o[1].features);let y;for(y=0;y<M.length;y+=1){const L=ye(o,M,y);i[y]?i[y].p(L,D):(i[y]=be(L),i[y].c(),i[y].m(n,null))}for(;y<i.length;y+=1)i[y].d(1);i.length=M.length}},d(o){o&&H(s),$e(i,o)}}}function ze(v){let s,e="Don't buy. It's not ready yet.",p,m,u=ue(v[0]),n=[];for(let d=0;d<u.length;d+=1)n[d]=He(Te(v,u,d));return{c(){s=c("div"),s.textContent=e,p=f(),m=c("div");for(let d=0;d<n.length;d+=1)n[d].c();this.h()},l(d){s=a(d,"DIV",{class:!0,"data-svelte-h":!0}),T(s)!=="svelte-tpghgo"&&(s.textContent=e),p=g(d),m=a(d,"DIV",{class:!0});var _=q(m);for(let l=0;l<n.length;l+=1)n[l].l(_);_.forEach(H),this.h()},h(){r(s,"class","notice svelte-1s4olk2"),r(m,"class","card-container svelte-1s4olk2")},m(d,_){J(d,s,_),J(d,p,_),J(d,m,_);for(let l=0;l<n.length;l+=1)n[l]&&n[l].m(m,null)},p(d,[_]){if(_&1){u=ue(d[0]);let l;for(l=0;l<u.length;l+=1){const I=Te(d,u,l);n[l]?n[l].p(I,_):(n[l]=He(I),n[l].c(),n[l].m(m,null))}for(;l<n.length;l+=1)n[l].d(1);n.length=u.length}},i:ne,o:ne,d(d){d&&(H(s),H(p),H(m)),$e(n,d)}}}function Be(v){return[[{name:"Beta Tester",price:"$39",features:["VR Face Hug v0.9","One update for cost of materials + shipping"],style:"style1",link:"https://buy.stripe.com/fZecQT19ye3q0U0cMM"},{name:"Supporter",price:"$69",features:["VR Face Hug v0.9","Three updates for cost of materials + shipping"],style:"style2",link:"#"},{name:"Investor",price:"$120",features:["VR Face Hug v0.9","Three updates for cost of materials + shipping","NFT"],style:"style3",link:"#"}]]}class Pe extends xe{constructor(s){super(),ke(this,s,Be,ze,Me,{})}}function Le(v){let s,e,p,m="X",u,n,d="iOS Tutorial",_,l,I=`<p class="svelte-1epcm1">We will need two separate 3d scans: one with headset and one without</p> <p style="color:darkred" class="svelte-1epcm1">Your scan will be deleted from our system after the product is made,
								unless you specify for us to keep it for future mods.</p> <div class="tut-images svelte-1epcm1"><img src="${`${V}/tuts/scan-naked.png`}" alt="" class="svelte-1epcm1"/> <img src="${`${V}/tuts/scan-headset.png`}" alt="" class="svelte-1epcm1"/></div>`,O,w,M=`<p class="svelte-1epcm1">get <a href="https://3dscannerapp.com/">3d Scanner App</a> from the app store</p> <div class="tut-images svelte-1epcm1"><img src="${`${V}/tuts/3d-scanner-app.png`}" alt="" class="svelte-1epcm1"/></div>`,i,o,D=`<p class="svelte-1epcm1">in the app, tap the &quot;NORMAL&quot; button...</p> <div class="tut-images svelte-1epcm1"><img src="${`${V}/tuts/normal.jpeg`}" alt="" class="svelte-1epcm1"/></div>`,y,L,z=`<p class="svelte-1epcm1">...and select &quot;TrueDepth&quot; for the scan mode</p> <div class="tut-images svelte-1epcm1"><img src="${`${V}/tuts/true-depth.jpeg`}" alt="" class="svelte-1epcm1"/></div>`,N,k,A=`<p class="svelte-1epcm1">Tap the red record button and start scanning and slowly capture your face from all angles,
								then tap again to finish, once your entire face is filled in.</p> <p style="color:darkred" class="svelte-1epcm1">Keep your head perfectly still while scanning!</p> <div class="tut-images svelte-1epcm1"><img src="${`${V}/tuts/vr-selfie-1.png`}" alt="" class="svelte-1epcm1"/></div>`,F,S,ee=`<p class="svelte-1epcm1">Process your scan by hitting &quot;start&quot;</p> <div class="tut-images svelte-1epcm1"><img src="${`${V}/tuts/process.jpeg`}" alt="" class="svelte-1epcm1"/></div>`,W,x,U=`<p class="svelte-1epcm1">tap &quot;share&quot;</p> <div class="tut-images svelte-1epcm1"><img src="${`${V}/tuts/share.jpeg`}" alt="" class="svelte-1epcm1"/></div>`,Q,E,Y=`<p class="svelte-1epcm1">tap &quot;point cloud&quot;</p> <div class="tut-images svelte-1epcm1"><img src="${`${V}/tuts/point-cloud.jpeg`}" alt="" class="svelte-1epcm1"/></div>`,B,R,X=`<p class="svelte-1epcm1">tap &quot;low density&quot;</p> <div class="tut-images svelte-1epcm1"><img src="${`${V}/tuts/density.jpeg`}" alt="" class="svelte-1epcm1"/></div>`,P,b,se=`<p class="svelte-1epcm1">choose either &quot;XYZ color&quot; or &quot;XYZ no color&quot;</p> <div class="tut-images svelte-1epcm1"><img src="${`${V}/tuts/xyz-color.jpeg`}" alt="" class="svelte-1epcm1"/> <img src="${`${V}/tuts/xyz-no-color.jpeg`}" alt="" class="svelte-1epcm1"/></div>`,Z,K,le='<p class="svelte-1epcm1">Email to ian@porchlogic.com and schedule your virtual fitting!</p>',ce,j;return{c(){s=c("div"),e=c("div"),p=c("button"),p.textContent=m,u=f(),n=c("h2"),n.textContent=d,_=f(),l=c("div"),l.innerHTML=I,O=f(),w=c("div"),w.innerHTML=M,i=f(),o=c("div"),o.innerHTML=D,y=f(),L=c("div"),L.innerHTML=z,N=f(),k=c("div"),k.innerHTML=A,F=f(),S=c("div"),S.innerHTML=ee,W=f(),x=c("div"),x.innerHTML=U,Q=f(),E=c("div"),E.innerHTML=Y,B=f(),R=c("div"),R.innerHTML=X,P=f(),b=c("div"),b.innerHTML=se,Z=f(),K=c("div"),K.innerHTML=le,this.h()},l($){s=a($,"DIV",{class:!0});var C=q(s);e=a(C,"DIV",{class:!0});var h=q(e);p=a(h,"BUTTON",{class:!0,"data-svelte-h":!0}),T(p)!=="svelte-u3iecz"&&(p.textContent=m),u=g(h),n=a(h,"H2",{class:!0,"data-svelte-h":!0}),T(n)!=="svelte-277svj"&&(n.textContent=d),_=g(h),l=a(h,"DIV",{class:!0,"data-svelte-h":!0}),T(l)!=="svelte-14nl6lr"&&(l.innerHTML=I),O=g(h),w=a(h,"DIV",{class:!0,"data-svelte-h":!0}),T(w)!=="svelte-jwilgo"&&(w.innerHTML=M),i=g(h),o=a(h,"DIV",{class:!0,"data-svelte-h":!0}),T(o)!=="svelte-ylkder"&&(o.innerHTML=D),y=g(h),L=a(h,"DIV",{class:!0,"data-svelte-h":!0}),T(L)!=="svelte-y6x1m2"&&(L.innerHTML=z),N=g(h),k=a(h,"DIV",{class:!0,"data-svelte-h":!0}),T(k)!=="svelte-1i7i1go"&&(k.innerHTML=A),F=g(h),S=a(h,"DIV",{class:!0,"data-svelte-h":!0}),T(S)!=="svelte-1op4gbj"&&(S.innerHTML=ee),W=g(h),x=a(h,"DIV",{class:!0,"data-svelte-h":!0}),T(x)!=="svelte-wrxmc1"&&(x.innerHTML=U),Q=g(h),E=a(h,"DIV",{class:!0,"data-svelte-h":!0}),T(E)!=="svelte-1b7azgo"&&(E.innerHTML=Y),B=g(h),R=a(h,"DIV",{class:!0,"data-svelte-h":!0}),T(R)!=="svelte-11zqzz1"&&(R.innerHTML=X),P=g(h),b=a(h,"DIV",{class:!0,"data-svelte-h":!0}),T(b)!=="svelte-1jn4vv7"&&(b.innerHTML=se),Z=g(h),K=a(h,"DIV",{class:!0,"data-svelte-h":!0}),T(K)!=="svelte-v2zbod"&&(K.innerHTML=le),h.forEach(H),C.forEach(H),this.h()},h(){r(p,"class","close-button svelte-1epcm1"),r(n,"class","svelte-1epcm1"),r(l,"class","tut-step svelte-1epcm1"),r(w,"class","tut-step svelte-1epcm1"),r(o,"class","tut-step svelte-1epcm1"),r(L,"class","tut-step svelte-1epcm1"),r(k,"class","tut-step svelte-1epcm1"),r(S,"class","tut-step svelte-1epcm1"),r(x,"class","tut-step svelte-1epcm1"),r(E,"class","tut-step svelte-1epcm1"),r(R,"class","tut-step svelte-1epcm1"),r(b,"class","tut-step svelte-1epcm1"),r(K,"class","tut-step svelte-1epcm1"),r(e,"class","popup-content ios svelte-1epcm1"),r(s,"class","popup svelte-1epcm1")},m($,C){J($,s,C),t(s,e),t(e,p),t(e,u),t(e,n),t(e,_),t(e,l),t(e,O),t(e,w),t(e,i),t(e,o),t(e,y),t(e,L),t(e,N),t(e,k),t(e,F),t(e,S),t(e,W),t(e,x),t(e,Q),t(e,E),t(e,B),t(e,R),t(e,P),t(e,b),t(e,Z),t(e,K),ce||(j=[te(p,"click",v[7]),te(e,"click",ve(v[6]))],ce=!0)},p:ne,d($){$&&H(s),ce=!1,fe(j)}}}function Ce(v){let s,e,p,m="X",u,n,d="Android Tutorial",_,l,I=`<p class="svelte-1epcm1">We will need two separate 3d scans: one with headset and one without</p> <p style="color:darkred" class="svelte-1epcm1">Your scan will be deleted from our system after the product is made,
								unless you specify for us to keep it for future mods.</p> <div class="tut-images svelte-1epcm1"><img src="${`${V}/tuts/scan-naked.png`}" alt="" class="svelte-1epcm1"/> <img src="${`${V}/tuts/scan-headset.png`}" alt="" class="svelte-1epcm1"/></div>`,O,w,M=`<p class="svelte-1epcm1">get and open<a href="https://poly.cam/">Polycam</a> from the play store</p> <div class="tut-images svelte-1epcm1"><img src="${`${V}/tuts/polycam.png`}" alt="" class="svelte-1epcm1"/></div>`,i,o,D=`<p class="svelte-1epcm1">set Polycam to video mode</p> <div class="tut-images svelte-1epcm1"><img src="${`${V}/tuts/polycam-video-mode.png`}" alt="" class="svelte-1epcm1"/></div>`,y,L,z=`<p class="svelte-1epcm1">Tap the record button to start scanning and slowly capture your face from all angles (using the rear camera).</p> <p style="color:darkred" class="svelte-1epcm1">Keep your head perfectly still while scanning!</p> <div class="tut-images svelte-1epcm1"><img src="${`${V}/tuts/vr-selfie-2.png`}" alt="" class="svelte-1epcm1"/></div>`,N,k,A=`<p class="svelte-1epcm1">tap &quot;upload and process&quot;</p> <div class="tut-images svelte-1epcm1"><img src="${`${V}/tuts/upload-process.png`}" alt="" class="svelte-1epcm1"/></div>`,F,S,ee=`<p class="svelte-1epcm1">Once it is processed, tap export</p> <div class="tut-images svelte-1epcm1"><img src="${`${V}/tuts/export.png`}" alt="" class="svelte-1epcm1"/></div>`,W,x,U=`<p class="svelte-1epcm1">select GLTF</p> <div class="tut-images svelte-1epcm1"><img src="${`${V}/tuts/gltf.png`}" alt="" class="svelte-1epcm1"/></div>`,Q,E,Y='<p class="svelte-1epcm1">Email file to ian@porchlogic.com and schedule your virtual fitting!</p>',B,R;return{c(){s=c("div"),e=c("div"),p=c("button"),p.textContent=m,u=f(),n=c("h2"),n.textContent=d,_=f(),l=c("div"),l.innerHTML=I,O=f(),w=c("div"),w.innerHTML=M,i=f(),o=c("div"),o.innerHTML=D,y=f(),L=c("div"),L.innerHTML=z,N=f(),k=c("div"),k.innerHTML=A,F=f(),S=c("div"),S.innerHTML=ee,W=f(),x=c("div"),x.innerHTML=U,Q=f(),E=c("div"),E.innerHTML=Y,this.h()},l(X){s=a(X,"DIV",{class:!0});var P=q(s);e=a(P,"DIV",{class:!0});var b=q(e);p=a(b,"BUTTON",{class:!0,"data-svelte-h":!0}),T(p)!=="svelte-ut43k4"&&(p.textContent=m),u=g(b),n=a(b,"H2",{class:!0,"data-svelte-h":!0}),T(n)!=="svelte-8fqikl"&&(n.textContent=d),_=g(b),l=a(b,"DIV",{class:!0,"data-svelte-h":!0}),T(l)!=="svelte-14nl6lr"&&(l.innerHTML=I),O=g(b),w=a(b,"DIV",{class:!0,"data-svelte-h":!0}),T(w)!=="svelte-1lubmdc"&&(w.innerHTML=M),i=g(b),o=a(b,"DIV",{class:!0,"data-svelte-h":!0}),T(o)!=="svelte-14a0b3a"&&(o.innerHTML=D),y=g(b),L=a(b,"DIV",{class:!0,"data-svelte-h":!0}),T(L)!=="svelte-l0wj5a"&&(L.innerHTML=z),N=g(b),k=a(b,"DIV",{class:!0,"data-svelte-h":!0}),T(k)!=="svelte-172h990"&&(k.innerHTML=A),F=g(b),S=a(b,"DIV",{class:!0,"data-svelte-h":!0}),T(S)!=="svelte-2pjg8y"&&(S.innerHTML=ee),W=g(b),x=a(b,"DIV",{class:!0,"data-svelte-h":!0}),T(x)!=="svelte-8ndlmz"&&(x.innerHTML=U),Q=g(b),E=a(b,"DIV",{class:!0,"data-svelte-h":!0}),T(E)!=="svelte-1wfvhfr"&&(E.innerHTML=Y),b.forEach(H),P.forEach(H),this.h()},h(){r(p,"class","close-button svelte-1epcm1"),r(n,"class","svelte-1epcm1"),r(l,"class","tut-step svelte-1epcm1"),r(w,"class","tut-step svelte-1epcm1"),r(o,"class","tut-step svelte-1epcm1"),r(L,"class","tut-step svelte-1epcm1"),r(k,"class","tut-step svelte-1epcm1"),r(S,"class","tut-step svelte-1epcm1"),r(x,"class","tut-step svelte-1epcm1"),r(E,"class","tut-step svelte-1epcm1"),r(e,"class","popup-content android svelte-1epcm1"),r(s,"class","popup svelte-1epcm1")},m(X,P){J(X,s,P),t(s,e),t(e,p),t(e,u),t(e,n),t(e,_),t(e,l),t(e,O),t(e,w),t(e,i),t(e,o),t(e,y),t(e,L),t(e,N),t(e,k),t(e,F),t(e,S),t(e,W),t(e,x),t(e,Q),t(e,E),B||(R=[te(p,"click",v[8]),te(e,"click",ve(v[5]))],B=!0)},p:ne,d(X){X&&H(s),B=!1,fe(R)}}}function Ae(v){let s,e='<iframe id="liveStream" width="560" height="315" src="https://www.youtube.com/embed/live_stream?channel=UChgifjY5u89KyvE4wBIhNjw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen="" class="svelte-1epcm1"></iframe>',p,m,u,n,d=`<div class="section svelte-1epcm1"><div class="statement svelte-1epcm1"><h1 class="svelte-1epcm1">VR Face Hug</h1> <p class="svelte-1epcm1">A bespoke pillow <br/>
			perfectly molds to your face <br/>
			works with the Quest 3</p></div> <div class="image svelte-1epcm1"><img src="${`${V}/VR-Face-Hug.png`}" alt="VR Face Hug facial interface" class="svelte-1epcm1"/></div></div>`,_,l,I,O='<span class="highlight svelte-1epcm1">Step 1.</span> Create 3D Face Scan',w,M,i,o,D="iOS Tutorial",y,L,z,N='<p style="color:greenyellow;font-size:36px" class="svelte-1epcm1">or</p>',k,A,F,S="Android Tutorial",ee,W,x,U,Q='<span class="highlight svelte-1epcm1">Step 2.</span> Schedule a Virtual Fitting',E,Y,B,R="Schedule Fitting",X,P,b='<span class="highlight svelte-1epcm1">Step 3.</span> Join the Beta',se,Z,K,le,ce,j=v[0]&&Le(v),$=v[1]&&Ce(v);return Z=new Pe({}),{c(){s=c("div"),s.innerHTML=e,p=f(),m=c("div"),u=c("div"),n=c("div"),n.innerHTML=d,_=f(),l=c("div"),I=c("h2"),I.innerHTML=O,w=f(),M=c("div"),i=c("div"),o=c("button"),o.textContent=D,y=f(),j&&j.c(),L=f(),z=c("div"),z.innerHTML=N,k=f(),A=c("div"),F=c("button"),F.textContent=S,ee=f(),$&&$.c(),W=f(),x=c("div"),U=c("h2"),U.innerHTML=Q,E=f(),Y=c("div"),B=c("button"),B.textContent=R,X=f(),P=c("h2"),P.innerHTML=b,se=f(),De(Z.$$.fragment),this.h()},l(C){s=a(C,"DIV",{class:!0,"data-svelte-h":!0}),T(s)!=="svelte-1j3oj9j"&&(s.innerHTML=e),p=g(C),m=a(C,"DIV",{class:!0});var h=q(m);u=a(h,"DIV",{class:!0});var G=q(u);n=a(G,"DIV",{class:!0,"data-svelte-h":!0}),T(n)!=="svelte-15i49jy"&&(n.innerHTML=d),_=g(G),l=a(G,"DIV",{class:!0});var ie=q(l);I=a(ie,"H2",{class:!0,"data-svelte-h":!0}),T(I)!=="svelte-1t3g7qh"&&(I.innerHTML=O),w=g(ie),M=a(ie,"DIV",{class:!0});var ae=q(M);i=a(ae,"DIV",{class:!0});var re=q(i);o=a(re,"BUTTON",{"data-svelte-h":!0}),T(o)!=="svelte-53ofhi"&&(o.textContent=D),y=g(re),j&&j.l(re),re.forEach(H),L=g(ae),z=a(ae,"DIV",{class:!0,"data-svelte-h":!0}),T(z)!=="svelte-1jjkmw2"&&(z.innerHTML=N),k=g(ae),A=a(ae,"DIV",{class:!0});var oe=q(A);F=a(oe,"BUTTON",{"data-svelte-h":!0}),T(F)!=="svelte-1nmm702"&&(F.textContent=S),ee=g(oe),$&&$.l(oe),oe.forEach(H),ae.forEach(H),ie.forEach(H),W=g(G),x=a(G,"DIV",{class:!0});var pe=q(x);U=a(pe,"H2",{class:!0,"data-svelte-h":!0}),T(U)!=="svelte-1ctqrc1"&&(U.innerHTML=Q),E=g(pe),Y=a(pe,"DIV",{class:!0});var ge=q(Y);B=a(ge,"BUTTON",{class:!0,"data-svelte-h":!0}),T(B)!=="svelte-6ujygz"&&(B.textContent=R),ge.forEach(H),pe.forEach(H),X=g(G),P=a(G,"H2",{class:!0,"data-svelte-h":!0}),T(P)!=="svelte-17hcn7d"&&(P.innerHTML=b),se=g(G),Ee(Z.$$.fragment,G),G.forEach(H),h.forEach(H),this.h()},h(){r(s,"class","video-wrapper svelte-1epcm1"),r(n,"class","s1 svelte-1epcm1"),r(I,"class","step svelte-1epcm1"),r(i,"class","card svelte-1epcm1"),r(z,"class","between svelte-1epcm1"),r(A,"class","card svelte-1epcm1"),r(M,"class","section-cards svelte-1epcm1"),r(l,"class","s2 svelte-1epcm1"),r(U,"class","step svelte-1epcm1"),r(B,"class","cyber-button svelte-1epcm1"),r(Y,"class","section-calendar svelte-1epcm1"),r(x,"class","s3 svelte-1epcm1"),r(P,"class","step svelte-1epcm1"),r(u,"class","container svelte-1epcm1"),r(m,"class","background svelte-1epcm1")},m(C,h){J(C,s,h),J(C,p,h),J(C,m,h),t(m,u),t(u,n),t(u,_),t(u,l),t(l,I),t(l,w),t(l,M),t(M,i),t(i,o),t(i,y),j&&j.m(i,null),t(M,L),t(M,z),t(M,k),t(M,A),t(A,F),t(A,ee),$&&$.m(A,null),t(u,W),t(u,x),t(x,U),t(x,E),t(x,Y),t(Y,B),t(u,X),t(u,P),t(u,se),je(Z,u,null),K=!0,le||(ce=[te(o,"click",ve(v[2])),te(F,"click",ve(v[3])),te(B,"click",Fe)],le=!0)},p(C,[h]){C[0]?j?j.p(C,h):(j=Le(C),j.c(),j.m(i,null)):j&&(j.d(1),j=null),C[1]?$?$.p(C,h):($=Ce(C),$.c(),$.m(A,null)):$&&($.d(1),$=null)},i(C){K||(qe(Z.$$.fragment,C),K=!0)},o(C){Se(Z.$$.fragment,C),K=!1},d(C){C&&(H(s),H(p),H(m)),j&&j.d(),$&&$.d(),Oe(Z),le=!1,fe(ce)}}}function Fe(){Calendly.initPopupWidget({url:"https://calendly.com/porchlogic0/fitting?hide_event_type_details=1&hide_gdpr_banner=1&background_color=3e3e3e&text_color=acb6b6&primary_color=06ade4"})}function we(){document.body.style.overflow="hidden"}function de(){document.body.style.overflow=""}function Ne(v,s,e){console.log("---------Base path:",V),Ve(()=>{const i=document.createElement("script");i.src="https://assets.calendly.com/assets/external/widget.js",i.async=!0,document.head.appendChild(i);const o=document.createElement("link");return o.href="https://assets.calendly.com/assets/external/widget.css",o.rel="stylesheet",document.head.appendChild(o),()=>{window.removeEventListener("click",closePopup)}});let p=!1,m=!1;function u(){e(0,p=!0),window.addEventListener("click",d),we()}function n(){e(1,m=!0),window.addEventListener("click",_),we()}function d(i){i.target.closest(".popup-content-ios")||(e(0,p=!1),de(),window.removeEventListener("click",d))}function _(i){i.target.closest(".popup-content-android")||(e(1,m=!1),de(),window.removeEventListener("click",_))}function l(i=!0){i?e(0,p=!1):e(1,m=!1),de(),window.removeEventListener("click",i?d:_)}function I(i){_e.call(this,v,i)}function O(i){_e.call(this,v,i)}return[p,m,u,n,l,I,O,()=>l(!0),()=>l(!1)]}class Xe extends xe{constructor(s){super(),ke(this,s,Ne,Ae,Me,{})}}export{Xe as component};
