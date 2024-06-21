import{_ as r,o as d,c as l,a as e,t as i,r as m,d as p,p as u,e as _,f as a,w as f}from"./app-BhRnpzGl.js";const g={name:"Professor",props:{name:String,image:String,link:String},mounted(){console.log("Professor component has been mounted!")}},S={class:"professor"},v=["src","alt"],y={class:"person-info"},x=["href"];function P(n,o,t,s,c,h){return d(),l("div",S,[e("img",{src:t.image,alt:t.name,class:"person-image"},null,8,v),e("div",y,[e("a",{href:t.link,class:"person-name"},i(t.name),9,x),m(n.$slots,"default",{},void 0,!0)])])}const w=r(g,[["render",P],["__scopeId","data-v-aef5dcce"],["__file","Professor.vue"]]),A={name:"Student",props:["name","image","year","studentUrl"],mounted(){console.log("Student component has been mounted!")}},b=n=>(u("data-v-98420a7e"),n=n(),_(),n),k={class:"student"},I=["src","alt"],U=["href"],$=b(()=>e("br",null,null,-1));function D(n,o,t,s,c,h){return d(),l("div",k,[e("img",{src:t.image,alt:t.name},null,8,I),e("p",null,[e("a",{href:t.studentUrl},i(t.name),9,U),$,p(i(t.year),1)])])}const R=r(A,[["render",D],["__scopeId","data-v-98420a7e"],["__file","Student.vue"]]),j={__name:"people.html",setup(n,{expose:o}){o();const t={Professor:w,Student:R};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}},B=e("h1",{id:"people",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#people"},[e("span",null,"People")])],-1),C=e("h2",{id:"assistant-professor",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#assistant-professor"},[e("span",null,"Assistant Professor")])],-1),M=e("h2",{id:"phd-students",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#phd-students"},[e("span",null,"PhD Students")])],-1),N={class:"flex-container"},J=e("h2",{id:"ms-students",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ms-students"},[e("span",null,"MS Students")])],-1),K={class:"flex-container"};function Q(n,o,t,s,c,h){return d(),l("div",null,[B,C,a(s.Professor,{name:"Adithya Pediredla",image:"/images/portrait/AP.jpeg",link:"https://sites.google.com/view/adithyapediredla/"},{default:f(()=>[p(" is an Assistant Professor in the Department of Computer Science at Dartmouth College, where he leads the Rendering and Imaging Science (RISC) lab, focusing on the intersection of computer graphics, computational imaging, and computer vision. Before this role, he is a postdoctoral fellow at the Robotics Institute, Carnegie Mellon University. He has a Ph.D. from Rice University and a master's degree from the Indian Institute of Science. He won the Ralph Budd Best Engineering Thesis Award for his Ph.D. thesis, the Prof. K. R. Kambati Memorial gold medal, and an innovative student project award from the Indian National Academy of Engineering for his Master's thesis. ")]),_:1}),M,e("div",N,[a(s.Student,{name:"Juhyeon Kim",image:"/images/portrait/example.png",year:"2022-present",studentUrl:"https://juhyeonkim.netlify.app/"}),a(s.Student,{name:"Sarah Friday",image:"/images/portrait/example.png",year:"2023-present",studentUrl:"https://www.linkedin.com/in/sarah-k-friday/"}),a(s.Student,{name:"Dhawal Sirikonda",image:"/images/portrait/example.png",year:"2023-present",studentUrl:"https://scholar.google.co.in/citations?user=VCfRKJwAAAAJ&hl=en"}),a(s.Student,{name:"Quinton(Ziyuan) Qu",image:"/images/portrait/QQ.jpg",year:"2024-present",studentUrl:"http://quintonq.top/index.php/projects/"})]),J,e("div",K,[a(s.Student,{name:"Yunzi Shi",image:"/images/portrait/example.png",year:"2023-2024",studentUrl:"https://shiyunzi.info/"}),a(s.Student,{name:"Atul Agarwal",image:"/images/portrait/example.png",year:"2024",studentUrl:"http://example.com"})])])}const E=r(j,[["render",Q],["__file","people.html.vue"]]),T=JSON.parse('{"path":"/people.html","title":"People","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Assistant Professor","slug":"assistant-professor","link":"#assistant-professor","children":[]},{"level":2,"title":"PhD Students","slug":"phd-students","link":"#phd-students","children":[]},{"level":2,"title":"MS Students","slug":"ms-students","link":"#ms-students","children":[]}],"git":{"updatedTime":1719003945000},"filePathRelative":"people.md"}');export{E as comp,T as data};
