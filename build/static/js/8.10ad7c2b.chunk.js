(this.webpackJsonpcypherverse=this.webpackJsonpcypherverse||[]).push([[8],{43:function(e,t,i){"use strict";i.r(t);var a,s,n,r,c,o,p=i(2),l=i(6),g=i(0),d=i.n(g),m=i.p+"static/media/Malarian_Group1.6a5a35d3.mp4",h=i.p+"static/media/Malarian_Group2.7933010e.mp4",y=i.p+"static/media/Malarian_Group3.4442c581.mp4",S=i.p+"static/media/Malarian_Group4.39ddd161.mp4",v=i.p+"static/media/Malarian_Group5.ba33c39f.mp4",u=i.p+"static/media/Malarian_Group6.b33eac7c.mp4",f=i.p+"static/media/Hash_Group1.5d8dfa7f.mp4",O=i.p+"static/media/Hash_Group2.d05cfe0a.mp4",b=i.p+"static/media/Hash_Group3.a8c09a0f.mp4",I=i.p+"static/media/Hash_Group4.c9b49137.mp4",j=i.p+"static/media/Hash_Group5.d3b386f8.mp4",J=i.p+"static/media/hash.3ca1da96.gif",N=i.p+"static/media/malarian.18dde1e5.gif",x=i(3),_=i(39),w=i(5),G=i(18),k=i(1),H=function(){var e=[{id:1,image:m},{id:2,image:f},{id:3,image:h},{id:4,image:O},{id:5,image:y},{id:6,image:b},{id:7,image:S},{id:8,image:I},{id:9,image:v},{id:10,image:j},{id:11,image:u}],t=Object(g.useState)(e[0]),i=Object(l.a)(t,2),a=i[0],s=i[1],n=Object(g.useState)(null),r=Object(l.a)(n,2),c=r[0],o=r[1],p=Object(g.useState)(!1),d=Object(l.a)(p,2),x=d[0],_=d[1],w=Object(g.useRef)(null),H=function(e){"play"===e?(w.current.play(),_(!0)):"pause"===e&&_(!1)};Object(g.useEffect)((function(){G.a.to(".image_bg_gif",0,{css:{visibility:"visible"}}),document.title="Home - Cypherverse",null===localStorage.getItem("cypherverse")?(localStorage.setItem("cypherverse",JSON.stringify("loaded")),localStorage.setItem("cyphervisits",JSON.stringify(0)),s(e[0]),o(N)):parseInt(JSON.parse(localStorage.getItem("cyphervisits")))===e.length?(s(e[0]),localStorage.setItem("cyphervisits",JSON.stringify(0)),o(N)):1===parseInt(JSON.parse(localStorage.getItem("cyphervisits")))?(s(e[2]),localStorage.setItem("cyphervisits",JSON.stringify(2)),o(N)):2===parseInt(JSON.parse(localStorage.getItem("cyphervisits")))?(s(e[3]),localStorage.setItem("cyphervisits",JSON.stringify(3)),o(J)):3===parseInt(JSON.parse(localStorage.getItem("cyphervisits")))?(s(e[4]),localStorage.setItem("cyphervisits",JSON.stringify(4)),o(N)):4===parseInt(JSON.parse(localStorage.getItem("cyphervisits")))?(s(e[5]),localStorage.setItem("cyphervisits",JSON.stringify(5)),o(J)):5===parseInt(JSON.parse(localStorage.getItem("cyphervisits")))?(s(e[6]),localStorage.setItem("cyphervisits",JSON.stringify(6)),o(N)):6===parseInt(JSON.parse(localStorage.getItem("cyphervisits")))?(s(e[7]),localStorage.setItem("cyphervisits",JSON.stringify(7)),o(J)):7===parseInt(JSON.parse(localStorage.getItem("cyphervisits")))?(s(e[8]),localStorage.setItem("cyphervisits",JSON.stringify(8)),o(N)):8===parseInt(JSON.parse(localStorage.getItem("cyphervisits")))?(s(e[9]),localStorage.setItem("cyphervisits",JSON.stringify(9)),o(J)):9===parseInt(JSON.parse(localStorage.getItem("cyphervisits")))?(s(e[10]),localStorage.setItem("cyphervisits",JSON.stringify(10)),o(N)):10===parseInt(JSON.parse(localStorage.getItem("cyphervisits")))?(s(e[0]),localStorage.setItem("cyphervisits",JSON.stringify(0)),o(N)):(s(e[1]),localStorage.setItem("cyphervisits",JSON.stringify(1)),o(J))}),[]);var q=function(){_(!0)};return Object(k.jsx)(M,{className:"image_bg_gif",color:c,children:Object(k.jsx)(C,{children:Object(k.jsx)(P,{children:Object(k.jsxs)(z,{children:[!x&&Object(k.jsx)(E,{className:"image_bg_gif",children:Object(k.jsx)(R,{onClick:function(){return H("play")}})}),Object(k.jsx)("video",{autoPlay:!0,onEnded:function(t){return function(t){1===t?(s(e[1]),o(J)):2===t?(s(e[2]),o(N)):3===t?(s(e[3]),o(J)):4===t?(s(e[4]),o(N)):5===t?(s(e[5]),o(J)):6===t?(s(e[6]),o(N)):7===t?(s(e[7]),o(J)):8===t?(s(e[8]),o(N)):9===t?(s(e[9]),o(J)):10===t?(s(e[10]),o(N)):11===t&&(s(e[0]),o(N))}(a.id)},playing:!0,onPlayingCapture:q,onPlaying:q,src:a.image,volume:1,muted:!1,ref:w,controls:!1})]})})})})},M=x.a.div(a||(a=Object(p.a)(["\n  visibility: hidden;\n  width: 100%;\n  height: 100vh;\n  background: url(",") no-repeat center center/cover;\n  position: fixed;\n  top: 0;\n  left: 0;\n"])),(function(e){return e.color})),C=x.a.div(s||(s=Object(p.a)(["\n  width: 100%;\n  height: 100%;\n  @media only screen and (max-width: 1050px) {\n    background: ",";\n  }\n"])),w.a.black),P=x.a.div(n||(n=Object(p.a)(["\n  position: fixed;\n  z-index: 20;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  margin: 0 auto;\n"]))),z=x.a.div(r||(r=Object(p.a)(["\n  position: relative;\n  width: 100%;\n  height: 100vh;\n\n  video {\n    position: absolute;\n    /* width: 100%; */\n    height: 100%;\n    top: 0;\n    left: 0;\n    object-fit: contain;\n    opacity: 1;\n    width: calc(var(--vh, 1vw) * 100);\n  }\n\n  .image-cover {\n    width: 100%;\n    height: 100%;\n    min-height: 100vh;\n    max-width: 1438px;\n  }\n"]))),E=x.a.div(c||(c=Object(p.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: 50;\n  transform: translate(-50%, -50%);\n  width: 80px;\n  height: 64px;\n  background: rgba(255, 255, 255, 0.3);\n  display: flex;\n  align-items: center;\n  visibility: hidden;\n  justify-content: center;\n  border-radius: 24px;\n  cursor: pointer;\n"]))),R=Object(x.a)(_.c)(o||(o=Object(p.a)(["\n  width: 32px;\n  height: 32px;\n"])));t.default=d.a.memo(H)}}]);
//# sourceMappingURL=8.10ad7c2b.chunk.js.map