import{S as t,P as n,W as e,T as i,M as o,a as s,b as a,A as r,c as l,B as c,d as p,e as d,I as h,F as m,f as u,g,h as w}from"./vendor.53319203.js";for(var f=["line2","line3","line4","line5","line6","line7","line8","line9","line10"],y=new Array,v=0;v<f.length;v++)y.push(document.getElementById(f[v]).innerHTML);var x,T,M=document.getElementById("cursor-line"),b=function(t){var n=document.getElementById(f[t]),e=y[t],i=0,o=function(){x=setTimeout((function(){n.className="visible",i+=1;var t=e.substring(0,i);i===e.length?n.innerHTML="&gt;&gt; "+t:(n.innerHTML="&gt;&gt; "+t+'<span class="typed-cursor">&#9608;</span>',o())}),40)};o();var s=40*e.length+40;T=setTimeout((function(){document.getElementById("cursor-line").className="visible"}),s)},z=function(t){var n=document.getElementById(f[t]),e=y[t],i=e.length,o=function(){x=setTimeout((function(){n.className="hidden",i-=1;var t=e.substring(0,i);0===i?n.innerHTML="&gt;&gt; "+t:(n.innerHTML="&gt;&gt; "+t+'<span class="typed-cursor">&#9608;</span>',o())}),10)};o();var s=10*e.length+10;T=setTimeout((function(){document.getElementById("cursor-line").className="visible"}),s)},E=[1e3],I=[1e3];for(v=0;v<f.length;v++){var L=40*y[v].length+1e3+80;E.push(L);for(var H=0,B=0;B<E.length;B++)H+=E[B];I.push(H)}var N=function(){clearTimeout(x),clearTimeout(T);for(var t=0;t<k.length;t++)clearTimeout(k[t])},A=function(t,n,e){var i=document.getElementById(t);i.innerHTML="&gt;&gt; "+y[n],i.className="visible"};window.onkeydown=function(t){13!==t.which&&32!==t.which||(N(),f.forEach(A),document.getElementById("cursor-line").className="visible")};var k=new Array,S=document.getElementById("check-libraries-button"),j=document.getElementsByTagName("terminal")[0],D=document.getElementById("terminal-display");document.getElementById("blinking-cursor"),S.addEventListener("click",(t=>{if(j.classList.toggle("show"),"Expand terminal"==S.innerHTML){S.innerHTML="Collapse terminal";for(var n=0;n<f.length;n++)k[n]=setTimeout(function(t){return function(){M.className="hidden",b(t)}}(n),I[n])}else{S.innerHTML="Expand terminal",D.display="none",N();for(n=0;n<f.length;n++)k[n]=setTimeout(function(t){return function(){M.className="visible",z(t)}}(n),1)}})),j.addEventListener("run-terminal",(t=>{if(j.classList.toggle("show"),"Expand terminal"==S.innerHTML){S.innerHTML="Collapse terminal";for(var n=0;n<f.length;n++)k[n]=setTimeout(function(t){return function(){M.className="hidden",b(t)}}(n),I[n])}else{S.innerHTML="Expand terminal",D.display="none",N();for(n=0;n<f.length;n++)k[n]=setTimeout(function(t){return function(){M.className="visible",z(t)}}(n),1)}}));const P=new t,R=new n(90,window.innerWidth/window.innerHeight,.1,5e3),C=new e({canvas:document.querySelector("#bg")});C.setPixelRatio(window.devicePixelRatio),C.setSize(window.innerWidth,window.innerHeight),R.position.setZ(30),R.position.setX(-3),C.render(P,R);const F=new i(10,3,16,100),W=new o({color:16737095,wireframe:!0}),J=new s(F,W);P.add(J),J.rotation.x=2;const q=new a(16777215);q.position.set(10,10,10);const X=new r(16777215,.9);P.add(q,X);var O=[];function Z(){const t=new p(.25,24,24),n=new d({color:16752543,wireframe:!0}),e=new s(t,n),[i,o,a]=Array(3).fill().map((()=>u.randFloatSpread(200)));e.position.set(i,o,a),P.add(e),O.push(e)}Array(300).fill().forEach(Z);var _=[];var G=setInterval((function t(){var n,e=new Array(100,200,300,150,250,2e3,3e3,1e3,1500),i=O[Math.floor(Math.random()*O.length)];_.push(i),clearInterval(G),G=setInterval(t,(n=e)[Math.floor(n.length*Math.random())])}),1e3);const K=(new l).load("./assets/214962.4f69a867.jpg");P.background=K;const Q=(new l).load("./assets/profile.81b4b35c.jpeg"),U=new s(new c(3,3,3),new o({map:Q}));U.position.z=-5,U.position.x=2,P.add(U);const V=(new l).load("./assets/moon.b246064f.jpg"),Y=(new l).load("./assets/normal.8e277ece.jpg"),$=new s(new p(3,32,32),new d({map:V,normalMap:Y}));$.position.z=13,$.position.setX(-20),$.position.y=13;const tt=new s(new h(1,0),W);tt.position.z=17,tt.position.x=-13,tt.position.y=1;const nt=new s(new h(1,0),W);nt.position.z=15,nt.position.x=-7,nt.position.y=1;const et=new s(new h(1,0),W);et.position.z=13,et.position.x=-3,et.position.y=1;let it=[tt,nt,et];P.add(tt,nt,et);const ot=new m;function st(t,n,e){ot.load("https://cdn.jsdelivr.net/npm/three@0.121.1/examples/fonts/helvetiker_regular.typeface.json",(function(i){const o=new g({color:16777215*Math.random()}),a=new w(t,{font:i,size:.3,height:.1}),r=new s(a,o);new Array(0,1,2,3,4,5),r.position.z=n.position.z,r.position.x=n.position.x,r.position.y=n.position.y,r.rotation.y=Math.pow(n.position.z,2)/220*1,r.orbit=e,r.offset=n.moons.length+n.position.z,P.add(r),n.moons.push(r)}))}tt.moons=[],nt.moons=[],et.moons=[],st("Java",tt,2),st("Python",tt,3),st("Javascript",tt,2.5),st("Swift",tt,3.5),st("PyTorch",nt,2),st("TensorFlow",nt,3),st("Flask",et,2),st("ReST API",et,2.5);const at=t=>new Promise((n=>setTimeout(n,t)));class rt extends HTMLSpanElement{get typeInterval(){const t=50*Math.random();return t<50?10:t}async type(t){for(let n of t)this.innerText+=n,await at(this.typeInterval)}async delete(t){for(let n of t)this.innerText=this.innerText.slice(0,this.innerText.length-1),await at(this.typeInterval)}}customElements.define("type-async",rt,{extends:"span"});var lt=0;function ct(){var t=document.body.getBoundingClientRect().top;R.position.z=-.01*t,R.position.x=-2e-4*t,R.rotation.y=-2e-4*t,R.position.z>8&&1==lt&&(lt+=1)}document.body.onscroll=ct,ct();var pt=document.getElementById("terminal");const dt=new Event("run-terminal");var ht=!0;window.addEventListener("resize",(function(){R.aspect=window.innerWidth/window.innerHeight,R.updateProjectionMatrix(),C.setSize(window.innerWidth,window.innerHeight)}),!1),function t(){requestAnimationFrame(t),$.rotation.x+=.005,U.rotation.x=7*R.position.x,U.rotation.y=3*R.position.x,U.rotation.z=4*R.position.x,J.rotation.x=7*R.position.x,J.rotation.y=3*R.position.x,J.rotation.z+=.005,J.position.z=-2*Math.exp(50*R.position.x)-5,U.position.z=-2*Math.exp(40*R.position.x)-2,_.map((t=>{t.position.z-=-2*Math.exp(t.position.z/100),t.position.z>100&&(_=_.filter((function(n){return n.id!=t.id})),Z())})),it.map((t=>{t.rotation.z+=.002,t.rotation.x+=.001,t.position.z=-2*Math.exp(2*R.position.x)+4;let n=8e-4;t.moons.map((e=>{var i=Date.now()*n;e.position.set(t.position.x,Math.cos(i+e.offset)*e.orbit+t.position.y,Math.sin(i+e.offset)*e.orbit+t.position.z),e.rotation.y=Math.pow(e.position.x,3)/420*n*-100,e.rotation.x+=(.01+Math.random()/20)*n*1e3,e.rotation.z=.8*-.2}))})),pt.style.opacity=2/Math.pow(R.position.z-8.5,2),R.position.z>8&&ht&&(ht=!1,pt.dispatchEvent(dt)),C.render(P,R)}();var mt=function(t,n,e){this.toRotate=n,this.el=t,this.loopNum=0,this.period=parseInt(e,10)||2e3,this.txt="",this.tick(),this.isDeleting=!1};mt.prototype.tick=function(){var t=this.loopNum%this.toRotate.length,n=this.toRotate[t];this.isDeleting?this.txt=n.substring(0,this.txt.length-1):this.txt=n.substring(0,this.txt.length+1),this.el.innerHTML='<span class="wrap">'+this.txt+"</span>";var e=this,i=300-100*Math.random();this.isDeleting&&(i/=2),this.isDeleting||this.txt!==n?this.isDeleting&&""===this.txt&&(this.isDeleting=!1,this.loopNum++,i=500):(i=this.period,this.isDeleting=!0),setTimeout((function(){e.tick()}),i)},window.onload=function(){for(var t=document.getElementsByClassName("txt-rotate"),n=0;n<t.length;n++){var e=t[n].getAttribute("data-rotate"),i=t[n].getAttribute("data-period");e&&new mt(t[n],JSON.parse(e),i)}var o=document.createElement("style");o.type="text/css",o.innerHTML=".txt-rotate > .wrap { border-right: 0.08em solid #666 }",document.body.appendChild(o)};