(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){},33:function(e,t,a){e.exports=a(50)},38:function(e,t,a){},39:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},50:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),c=a(18),r=a.n(c),l=(a(38),a(6)),i=a(7),s=a(10),u=a(8),p=a(9),m=(a(39),a(23),a(24),a(64)),d=a(67),h=a(66),b=a(51),f=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"row",style:{display:"flex",justifyContent:"center",alignContent:"center"},id:"preview"},this.props.projectTitle)}}]),t}(n.Component),j=a(52),O=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return console.log(this.props),o.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignContent:"center"}},o.a.createElement("div",{className:"row",id:"preview",style:{padding:"10px"}},this.props.projectDescription))}}]),t}(o.a.Component),E=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).handleOnMouseOver=function(e){switch(e.target.id){case"banba":a.setState({projectDescription:a.descriptions[0],projectTitle:a.titles[0]});break;case"fuburo":a.setState({projectDescription:a.descriptions[1],projectTitle:a.titles[1]});break;case"tbdA":a.setState({projectDescription:a.descriptions[2],projectTitle:a.titles[2]});break;case"tbdB":a.setState({projectDescription:a.descriptions[3],projectTitle:a.titles[3]});break;case"tbdC":a.setState({projectDescription:a.descriptions[4],projectTitle:a.titles[4]});break;case"tbdD":a.setState({projectDescription:a.descriptions[5],projectTitle:a.titles[5]});break;case"gallery":a.setState({projectDescription:a.descriptions[6],projectTitle:a.titles[6]});break;case"likeUs":a.setState({projectDescription:a.descriptions[7],projectTitle:a.titles[7]});break;case"tbdE":a.setState({projectDescription:a.descriptions[8],projectTitle:a.titles[8]});break;default:a.setState({projectDescription:"Fallow Fields",projectTitles:"Placeholder"})}console.log(a.state.projectDescription)},a.handleOnMouseLeave=function(){a.setState({projectDescription:"Mouseover a project for details. Click a project to view source or demo",projectTitle:"Welcome"})},a.handleMouseClick=function(e){switch(e.target.id){case"banba":window.open("https://macribo.github.io/ainmCleite/");break;case"fuburo":window.open("https://fuburo.de")}},a.state={projectDescription:"Mouseover a project to see details. Click to view demo/source",projectTitle:"Welcome!"},a.titles=["Banba","Fuburo","ABC","Web Development","placeholder","placeholder","Gallery","likeUs","placeholder"],a.descriptions=['"Banba" is a collection of projects related to the development of assistive software for Irish language learners.',"Fuburo: The online lost and fouund office. www.fuburo.de","A tiny game for tiny people who would like to practice the Alphabet","My developer blog asks: How shall we develop the web?","Fallow field","Fallow field","Fallow field","likeUs; the breakfast App","Fallow field"],a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{id:"kungfu",style:{display:"flex",justifyContent:"center",alignContent:"center"}},o.a.createElement(b.a,{align:"center",style:{width:"80%",opacity:"0.8",borderRadius:"10px"}},o.a.createElement("h1",{className:"display-3"},o.a.createElement(f,{projectTitle:this.state.projectTitle})),o.a.createElement("p",{className:"lead"},o.a.createElement(O,{projectDescription:this.state.projectDescription})),o.a.createElement("hr",{className:"my-2"}),o.a.createElement("p",null),o.a.createElement("div",{className:"projectMenu",style:{marginTop:"0"}},o.a.createElement("div",{className:"row",id:"projectRow"},o.a.createElement("div",{style:{textDecoration:"none"},className:"L col-3  text-center projectBtnContainer",id:"banba",onMouseOver:this.handleOnMouseOver,onMouseLeave:this.handleOnMouseLeave,onClick:this.handleMouseClick},o.a.createElement("i",{className:"fas fa-feather-alt fa-4x",style:{color:"purple"}})," "),o.a.createElement(j.a,{style:{textDecoration:"none"},className:"L col-3  text-center projectBtnContainer",to:"/Fuburo",id:"fuburo",onMouseOver:this.handleOnMouseOver,onMouseLeave:this.handleOnMouseLeave,onClick:this.handleMouseClick},o.a.createElement("i",{className:"fas fa-map-marker-alt fa-4x",style:{color:"#04E400"}})," "),o.a.createElement(j.a,{style:{textDecoration:"none"},className:"L col-3 text-center projectBtnContainer",to:"/A",id:"tbdA",onMouseOver:this.handleOnMouseOver,onMouseLeave:this.handleOnMouseLeave}," ",o.a.createElement("i",{className:"fas fa-keyboard fa-4x",style:{color:"#34495E"}})," ")),o.a.createElement("div",{className:"row",id:"projectRow"},o.a.createElement(j.a,{style:{textDecoration:"none"},className:"L col-3 text-center projectBtnContainer",to:"/B",id:"tbdB",onMouseOver:this.handleOnMouseOver,onMouseLeave:this.handleOnMouseLeave}," ",o.a.createElement("i",{class:"fas fa-journal-whills fa-4x "})," "),o.a.createElement(j.a,{className:"L col-3 text-center projectBtnContainer",to:"/C",id:"tbdC",onMouseOver:this.handleOnMouseOver,onMouseLeave:this.handleOnMouseLeave}," ",o.a.createElement("i",{className:"fas fa-times fa-4x",style:{color:"#BE44EE"}})," "),o.a.createElement(j.a,{style:{textDecoration:"none"},className:"L col-3  text-center projectBtnContainer",to:"/D",id:"tbdD",onMouseOver:this.handleOnMouseOver,onMouseLeave:this.handleOnMouseLeave}," ",o.a.createElement("i",{className:"fas fa-times fa-4x",style:{color:"#BE44EE"}})," ")),o.a.createElement("div",{className:"row",id:"projectRow"},o.a.createElement(j.a,{style:{textDecoration:"none"},className:"L col-3 text-center projectBtnContainer",to:"/Gallery",id:"gallery",onMouseOver:this.handleOnMouseOver,onMouseLeave:this.handleOnMouseLeave},o.a.createElement("i",{className:"fas fa-palette fa-4x",style:{color:"brown"}})," "),o.a.createElement(j.a,{style:{textDecoration:"none"},className:"L col-3  text-center projectBtnContainer",to:"/Likeus",id:"likeUs",onMouseOver:this.handleOnMouseOver,onMouseLeave:this.handleOnMouseLeave}," ",o.a.createElement("i",{className:"fas fa-paw fa-4x",style:{color:"rgba(245, 132, 226, 0.8)"}})," "),o.a.createElement(j.a,{style:{textDecoration:"none"},className:"L col-3 text-center projectBtnContainer",to:"E",id:"tbdE",onMouseOver:this.handleOnMouseOver,onMouseLeave:this.handleOnMouseLeave}," ",o.a.createElement("i",{className:"fas fa-times fa-4x",style:{color:"#BE44EE"}})," ")))," ",o.a.createElement("p",{className:"lead"})))}}]),t}(n.Component),v=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null)}}]),t}(n.Component),y=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null)}}]),t}(n.Component),g=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null)}}]),t}(n.Component),k=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,"A")}}]),t}(n.Component),w=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,"B")}}]),t}(n.Component),C=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,"C")}}]),t}(n.Component),M=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,"D")}}]),t}(n.Component),x=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,"E")}}]),t}(n.Component),N=(n.Component,a(5)),D=a(65),L=a(53),B=a(54),T=a(55),S=a(56),A=a(57),F=a(58),R=a(59),U=a(60),W=a(61),I=a(62),G=a(63),J=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).togglemodal=a.togglemodal.bind(Object(N.a)(Object(N.a)(a))),a.toggle=a.toggle.bind(Object(N.a)(Object(N.a)(a))),a.state={isOpen:!1,modal:!1},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"togglemodal",value:function(){this.setState(function(e){return{modal:!e.modal}})}},{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(D.a,{isOpen:this.state.modal,togglemodal:this.togglemodal,className:this.props.className},o.a.createElement(L.a,{togglemodal:this.togglemodal},o.a.createElement("h1",null,"Roibe\xe1rd Mac Unfraidh:")),o.a.createElement(B.a,{id:"modbod"},o.a.createElement("i",{className:"fas fa-mobile-alt fa-4x"}),o.a.createElement("br",null),o.a.createElement("h3",null,"+49 163 390 5881"),o.a.createElement("br",null),o.a.createElement("i",{className:"far fa-envelope fa-4x"}),o.a.createElement("br",null),o.a.createElement("h3",null,"roibeard.mac.unfraidh@gmail.com")),o.a.createElement(T.a,{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"20px"}},o.a.createElement(S.a,{color:"secondary",onClick:this.togglemodal},"done"))),o.a.createElement(A.a,{color:"light",light:!0,expand:"md"},o.a.createElement(F.a,{href:"/"}),o.a.createElement("h3",null," Roibe\xe1rd Mac Unfraidh "),o.a.createElement(R.a,{onClick:this.toggle}),o.a.createElement(U.a,{isOpen:this.state.isOpen,navbar:!0},o.a.createElement(W.a,{className:"ml-auto",navbar:!0},o.a.createElement(I.a,null,o.a.createElement(G.a,{id:"contact",onClick:this.togglemodal},"Contact")),o.a.createElement(I.a,null,o.a.createElement(G.a,{href:"./RMU_CV.pdf",download:!0},"CV"))))))}}]),t}(o.a.Component),V=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement(m.a,null,o.a.createElement("div",null,o.a.createElement(J,null),o.a.createElement(d.a,null,o.a.createElement(h.a,{exact:!0,path:"/",component:E}),o.a.createElement(h.a,{exact:!0,path:"/likeus",component:v}),o.a.createElement(h.a,{exact:!0,path:"/fuburo",component:y}),o.a.createElement(h.a,{exact:!0,path:"/gallery",component:g}),o.a.createElement(h.a,{exact:!0,path:"/a",component:k}),o.a.createElement(h.a,{exact:!0,path:"/b",component:w}),o.a.createElement(h.a,{exact:!0,path:"/c",component:C}),o.a.createElement(h.a,{exact:!0,path:"/d",component:M}),o.a.createElement(h.a,{exact:!0,path:"/e",component:x}),o.a.createElement(h.a,{component:E}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[33,1,2]]]);
//# sourceMappingURL=main.c3bc7706.chunk.js.map