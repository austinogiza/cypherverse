(this.webpackJsonpcypherverse=this.webpackJsonpcypherverse||[]).push([[9],{231:function(e,n,t){"use strict";t.r(n);var i,a,c,r,o,s,d=t(2),h=t(3),l=t(6),p=t(0),b=t.p+"static/media/Malarian.5b103a20.mp4",g=t.p+"static/media/HASH.10f0ca79.mp4",u=t(67),j=t(5),m=t(1),f=h.a.div(i||(i=Object(d.a)(["\n  width: 100%;\n  height: 100%;\n  @media only screen and (max-width: 1050px) {\n    background: ",";\n  }\n"])),j.a.black),v=h.a.div(a||(a=Object(d.a)(["\n  position: fixed;\n  z-index: 20;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  margin: 0 auto;\n"]))),x=h.a.div(c||(c=Object(d.a)(["\n  position: relative;\n  width: 100%;\n  height: 100vh;\n\n  video {\n    position: absolute;\n    /* width: 100%; */\n    height: 100%;\n    top: 0;\n    left: 0;\n    object-fit: fill;\n    opacity: 1;\n    width: calc(var(--vh, 1vw) * 100);\n\n    @media only screen and (max-width: 1050px) {\n      width: 100% !important;\n      max-width: 1200px;\n      margin: 0 auto;\n      /* padding: 24px; */\n      /* object-fit: none;\n            object-fit: cover;*/\n      object-fit: contain;\n    }\n  }\n\n  .image-cover {\n    width: 100%;\n    height: 100%;\n    min-height: 100vh;\n    max-width: 1438px;\n  }\n"]))),O=h.a.div(r||(r=Object(d.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: 50;\n  transform: translate(-50%, -50%);\n  width: 80px;\n  height: 64px;\n  background: rgba(255, 255, 255, 0.3);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 24px;\n  cursor: pointer;\n"]))),y=Object(h.a)(u.c)(o||(o=Object(d.a)(["\n  width: 32px;\n  height: 32px;\n"]))),w=function(){var e=[{id:1,image:b},{id:2,image:g}],n=Object(p.useState)(e[0]),t=Object(l.a)(n,2),i=t[0],a=t[1],c=Object(p.useState)(!1),r=Object(l.a)(c,2),o=r[0],s=r[1],d=Object(p.useRef)(null),h=function(e){"play"===e?(d.current.play(),s(!0)):"pause"===e&&s(!1)};Object(p.useEffect)((function(){null===localStorage.getItem("cypherverse")?(localStorage.setItem("cypherverse",JSON.stringify("loaded")),localStorage.setItem("cyphervisits",JSON.stringify(0)),a(e[0])):parseInt(JSON.parse(localStorage.getItem("cyphervisits")))===e.length||1===parseInt(JSON.parse(localStorage.getItem("cyphervisits")))?(a(e[0]),localStorage.setItem("cyphervisits",JSON.stringify(0))):(a(e[1]),localStorage.setItem("cyphervisits",JSON.stringify(1)))}),[]);return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(f,{children:Object(m.jsx)(v,{children:Object(m.jsxs)(x,{children:[!o&&Object(m.jsx)(O,{children:Object(m.jsx)(y,{onClick:function(){return h("play")}})}),Object(m.jsx)("video",{autoPlay:!0,onEnded:function(){1===i.id?a(e[1]):2===i.id&&a(e[0])},playing:function(){s(!0)},src:i.image,volume:1,muted:!1,ref:d,controls:!1})]})})})})},S=h.a.div(s||(s=Object(d.a)(["\n  width: 100%;\n  height: 100vh;\n  background: #171717;\n  @media only screen and (max-width: 1050px) {\n    background: ",";\n  }\n"])),j.a.black);n.default=function(){return Object(p.useEffect)((function(){document.title="Home - Cypherverse"}),[]),Object(m.jsx)(S,{children:Object(m.jsx)(w,{})})}}}]);
//# sourceMappingURL=9.6e94acdb.chunk.js.map