(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,n){},34:function(e,t,n){e.exports=n(51)},39:function(e,t,n){},40:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},51:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(18),c=n.n(r),s=(n(39),n(5)),i=n(6),l=n(8),p=n(7),u=n(9),m=(n(40),n(21),n(22),n(67)),h=n(70),d=n(69),b=n(52),j=n(53),f=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"row",style:{display:"flex",justifyContent:"center",alignContent:"center"},id:"preview"},this.props.projectTitle)}}]),t}(a.Component),O=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{style:{}},o.a.createElement("div",{className:"poster-container",style:{height:"340px",backgroundImage:"url("+this.props.poster+")",backgroundSize:"contain"}}))}}]),t}(a.Component),v=n(54),y=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return console.log(this.props),o.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignContent:"center"}},o.a.createElement("div",{className:"row",id:"preview",style:{padding:"10px"}},o.a.createElement("h3",null," ",this.props.projectDescription)))}}]),t}(o.a.Component),E=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={projectDescription:"Mouseover a project to see details. Click to view demo/source",projectTitle:"Welcome!",poster:""},n.handleOnMouseOver=function(e){switch(e.target.id){case"banba":n.setState({projectDescription:n.descriptions[0],projectTitle:n.titles[0],poster:n.posters[0]});break;case"fuburo":n.setState({projectDescription:n.descriptions[1],projectTitle:n.titles[1],poster:n.posters[1]});break;case"tinyH":n.setState({projectDescription:n.descriptions[2],projectTitle:n.titles[2],poster:n.posters[2]});break;case"macR":n.setState({projectDescription:n.descriptions[3],projectTitle:n.titles[3],poster:n.posters[3]});break;case"gallery":n.setState({projectDescription:n.descriptions[4],projectTitle:n.titles[4],poster:n.posters[4]});break;case"likeUs":n.setState({projectDescription:n.descriptions[5],projectTitle:n.titles[5],poster:n.posters[5]});break;default:n.setState({projectDescription:"Click project to select",projectTitles:"Hover for description"})}console.log(n.state.projectDescription)},n.handleOnMouseLeave=function(){n.setState({projectDescription:"Mouseover a project for details. Click a project to view source or demo",projectTitle:"Welcome"})},n.handleMouseClick=function(e){switch(e.target.id){case"banba":window.open("https://macribo.github.io/ainmCleite/");break;case"fuburo":window.open("https://fuburo.de")}},n.titles=["Banba","Fuburo","Tiny Hans","Web Development","Gallery","LikeUs"],n.descriptions=['"Banba" is a collection of projects related to the development of assistive software for Irish language learners.',"Fuburo: The online lost and found office. www.fuburo.de","Learn To Type with Tiny Hans!","Come and see my Github sketchbooks!","Gallery of my artwork (coming soon!)","The breakfast App"],n.posters=["https://i.imgur.com/lpOzGQX.png","https://imgur.com/0Fys30V.png","https://imgur.com/biWJ4Jh.png","https://i.imgur.com/44ihjDc.png","https://i.imgur.com/9TQ1cxn.png","https://i.imgur.com/OS0mx0V.png"],n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{id:"kungfu",style:{display:"flex",justifyContent:"center",alignContent:"center"}},o.a.createElement(b.a,{id:"stack-row-elements"},o.a.createElement(j.a,{sm:"12",md:{size:10,offset:1}},o.a.createElement("h1",{className:"display-3",style:{paddingTop:"30px"}},o.a.createElement(f,{projectTitle:this.state.projectTitle})),o.a.createElement(y,{projectDescription:this.state.projectDescription})),o.a.createElement(j.a,{sm:"12",md:{size:8,offset:2},className:"center-block"},o.a.createElement("div",{style:{textAlign:"center"}},o.a.createElement(O,{className:"img-responsive",poster:this.state.poster})),o.a.createElement("div",{className:"projectMenu",align:"center",style:{marginTop:"0"}},o.a.createElement("div",{className:"row",id:"projectRow",align:"center"},o.a.createElement("div",{style:{textDecoration:"none"},className:"L col-1  text-center projectBtnContainer",id:"banba",onMouseOver:this.handleOnMouseOver,onMouseLeave:this.handleOnMouseLeave,onClick:this.handleMouseClick},o.a.createElement("i",{className:"fas fa-feather-alt fa-4x",style:{color:"purple"}})," "),o.a.createElement(v.a,{style:{textDecoration:"none"},className:"L col-1  text-center projectBtnContainer",to:"/Fuburo",id:"fuburo",onMouseOver:this.handleOnMouseOver,onMouseLeave:this.handleOnMouseLeave,onClick:this.handleMouseClick},o.a.createElement("i",{className:"fas fa-map-marker-alt fa-4x",style:{color:"#04E400"}})," "),o.a.createElement(v.a,{style:{textDecoration:"none"},className:"L col-1 text-center projectBtnContainer",to:"/A",id:"tinyH",onMouseOver:this.handleOnMouseOver,onMouseLeave:this.handleOnMouseLeave}," ",o.a.createElement("i",{className:"fas fa-keyboard fa-4x",style:{color:"#34495E"}})," "),o.a.createElement(v.a,{style:{textDecoration:"none"},className:"L col-1 text-center projectBtnContainer",to:"/B",id:"macR",onMouseOver:this.handleOnMouseOver,onMouseLeave:this.handleOnMouseLeave}," ",o.a.createElement("i",{className:"fab fa-github-alt fa-4x "})," "),o.a.createElement(v.a,{style:{textDecoration:"none"},className:"L col-1 text-center projectBtnContainer",to:"/Gallery",id:"gallery",onMouseOver:this.handleOnMouseOver,onMouseLeave:this.handleOnMouseLeave},o.a.createElement("i",{className:"fas fa-palette fa-4x",style:{color:"brown"}})," "),o.a.createElement(v.a,{style:{textDecoration:"none"},className:"L col-1  text-center projectBtnContainer",to:"/Likeus",id:"likeUs",onMouseOver:this.handleOnMouseOver,onMouseLeave:this.handleOnMouseLeave}," ",o.a.createElement("i",{className:"fas fa-paw fa-4x",style:{color:"rgba(245, 132, 226, 0.8)"}})," ")))," ",o.a.createElement("p",{className:"lead"}))))}}]),t}(a.Component),k=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null)}}]),t}(a.Component),g=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null)}}]),t}(a.Component),C=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null)}}]),t}(a.Component),x=n(55),w=(a.Component,function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,"A")}}]),t}(a.Component)),M=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,"B")}}]),t}(a.Component),D=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,"C")}}]),t}(a.Component),L=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,"D")}}]),t}(a.Component),N=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,"E")}}]),t}(a.Component),T=(a.Component,n(10)),B=n(68),S=n(56),W=n(57),A=n(58),G=n(59),H=n(60),z=n(61),F=n(62),J=n(63),I=n(64),R=n(65),U=n(66),Q=(o.a.Component,function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement(m.a,null,o.a.createElement("div",null,o.a.createElement(h.a,null,o.a.createElement(d.a,{exact:!0,path:"/",component:E}),o.a.createElement(d.a,{exact:!0,path:"/likeus",component:k}),o.a.createElement(d.a,{exact:!0,path:"/fuburo",component:g}),o.a.createElement(d.a,{exact:!0,path:"/gallery",component:C}),o.a.createElement(d.a,{exact:!0,path:"/a",component:w}),o.a.createElement(d.a,{exact:!0,path:"/b",component:M}),o.a.createElement(d.a,{exact:!0,path:"/c",component:D}),o.a.createElement(d.a,{exact:!0,path:"/d",component:L}),o.a.createElement(d.a,{exact:!0,path:"/e",component:N}))))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,1,2]]]);
//# sourceMappingURL=main.9328edc8.chunk.js.map