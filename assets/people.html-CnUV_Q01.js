import{_ as r,o as d,c as l,a as e,t as i,r as m,d as p,p as u,e as _,f as a,w as f}from"./app-BZAfqMz8.js";const g={name:"Professor",props:{name:String,image:String,link:String},mounted(){console.log("Professor component has been mounted!")}},S={class:"professor"},v=["src","alt"],y={class:"person-info"},P=["href"];function w(s,o,t,n,c,h){return d(),l("div",S,[e("img",{src:s.$withBase(t.image),alt:t.name,class:"person-image"},null,8,v),e("div",y,[e("a",{href:t.link,class:"person-name"},i(t.name),9,P),m(s.$slots,"default",{},void 0,!0)])])}const b=r(g,[["render",w],["__scopeId","data-v-df7605eb"],["__file","Professor.vue"]]),x={name:"Student",props:["name","image","year","studentUrl"],mounted(){console.log("Student component has been mounted!")}},k=s=>(u("data-v-47488d6b"),s=s(),_(),s),I={class:"student"},U=["src","alt"],$=["href"],A=k(()=>e("br",null,null,-1));function j(s,o,t,n,c,h){return d(),l("div",I,[e("img",{src:s.$withBase(t.image),alt:t.name},null,8,U),e("p",null,[e("a",{href:t.studentUrl},i(t.name),9,$),A,p(i(t.year),1)])])}const B=r(x,[["render",j],["__scopeId","data-v-47488d6b"],["__file","Student.vue"]]),D={__name:"people.html",setup(s,{expose:o}){o();const t={Professor:b,Student:B};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}},R=e("h1",{id:"people",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#people"},[e("span",null,"People")])],-1),C=e("h2",{id:"assistant-professor",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#assistant-professor"},[e("span",null,"Assistant Professor")])],-1),M=e("h2",{id:"phd-students",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#phd-students"},[e("span",null,"PhD Students")])],-1),N={class:"flex-container"},Q=e("h2",{id:"ms-students",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ms-students"},[e("span",null,"MS Students")])],-1),E={class:"flex-container"};function K(s,o,t,n,c,h){return d(),l("div",null,[R,C,a(n.Professor,{name:"Adithya Pediredla",image:"/images/portrait/AP.jpeg",link:"https://sites.google.com/view/adithyapediredla/"},{default:f(()=>[p(" is an Assistant Professor in the Department of Computer Science at Dartmouth College, where he leads the Rendering and Imaging Science (RISC) lab, focusing on the intersection of computer graphics, computational imaging, and computer vision. Before this role, he is a postdoctoral fellow at the Robotics Institute, Carnegie Mellon University. He has a Ph.D. from Rice University and a master's degree from the Indian Institute of Science. He won the Ralph Budd Best Engineering Thesis Award for his Ph.D. thesis, the Prof. K. R. Kambati Memorial gold medal, and an innovative student project award from the Indian National Academy of Engineering for his Master's thesis. ")]),_:1}),M,e("div",N,[a(n.Student,{name:"Juhyeon Kim",image:"/images/portrait/example.png",year:"2022-present",studentUrl:"https://juhyeonkim.netlify.app/"}),a(n.Student,{name:"Sarah Friday",image:"/images/portrait/SF.jpg",year:"2023-present",studentUrl:"https://www.linkedin.com/in/sarah-k-friday/"}),a(n.Student,{name:"Dhawal Sirikonda",image:"/images/portrait/example.png",year:"2023-present",studentUrl:"https://dhawals1939.github.io/"}),a(n.Student,{name:"Quinton(Ziyuan) Qu",image:"/images/portrait/QQ.jpg",year:"2024-present",studentUrl:"http://quintonq.top/index.php/projects/"})]),Q,e("div",E,[a(n.Student,{name:"Yunzi Shi",image:"/images/portrait/YS.jpg",year:"2023-2024",studentUrl:"https://shiyunzi.info/"}),a(n.Student,{name:"Atul Agarwal",image:"/images/portrait/example.png",year:"2024",studentUrl:"http://example.com"})])])}const V=r(D,[["render",K],["__file","people.html.vue"]]),q=JSON.parse('{"path":"/people.html","title":"People","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Assistant Professor","slug":"assistant-professor","link":"#assistant-professor","children":[]},{"level":2,"title":"PhD Students","slug":"phd-students","link":"#phd-students","children":[]},{"level":2,"title":"MS Students","slug":"ms-students","link":"#ms-students","children":[]}],"git":{"updatedTime":1720470849000},"filePathRelative":"people.md"}');export{V as comp,q as data};