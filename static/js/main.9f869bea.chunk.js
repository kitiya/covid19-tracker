(this["webpackJsonpcovid19-tracker"]=this["webpackJsonpcovid19-tracker"]||[]).push([[0],{55:function(e,a,n){e.exports=n(84)},60:function(e,a,n){},81:function(e,a,n){},84:function(e,a,n){"use strict";n.r(a);var t=n(0),c=n.n(t),r=n(18),o=n.n(r),i=(n(60),n(50)),l=n(17),m=n(52),u=n(117),s=function(){return c.a.createElement("div",null,"HOME")},d=function(){return c.a.createElement("div",null,"ABOUT")},p=n(35),E=n(34),y=n(53),f=n(49),b=n.n(f),h=n(109),v=n(111),g=n(112),_=n(113),O=n(114),j=Object(h.a)((function(e){return{toolbar:{justifyContent:"space-between"}}})),S=function(){var e=j();return c.a.createElement(v.a,{position:"static"},c.a.createElement(g.a,{className:e.toolbar},c.a.createElement(_.a,{varient:"h1"},"Covid-19"),c.a.createElement(O.a,null,c.a.createElement(_.a,{varient:"h6",color:"secondary"},"About"))))},k=n(86),I=n(118),x=n(115),C=Object(h.a)({root:{flexGrow:1}}),w=function(){var e=C();return c.a.createElement(k.a,{className:e.root},c.a.createElement(I.a,{value:0,indicatorColor:"primary",textColor:"primary",centered:!0},c.a.createElement(x.a,{label:"Item One"}),c.a.createElement(x.a,{label:"Item Two"}),c.a.createElement(x.a,{label:"Item Three"})))},T=n(116),U=[{id:156,country_name:"China",code:"cn",icon:"china.png"},{id:250,country_name:"France",code:"FR",icon:"france.png"},{id:276,country_name:"Germany",code:"DE",icon:"germany.png"},{id:364,country_name:"Iran",code:"IR",icon:"iran.png"},{id:380,country_name:"Italy",code:"IT",icon:"italy.png"},{id:410,country_name:"S. Korea",code:"KR",icon:"south_korea.png"},{id:724,country_name:"Spain",code:"ES",icon:"spain.png"},{id:756,country_name:"Switzerland",code:"CH",icon:"switzerland.png"},{id:840,country_name:"USA",code:"US",icon:"usa.png"},{id:826,country_name:"UK",code:"GB",icon:"uk.png"}],A=["China","France","Germany","Iran","Italy","S. Korea","Spain","Switzerland","UK","USA"],G=Object(h.a)((function(e){return{paper:{padding:50,background:"#fafafa"}}}));var K=function(){var e="a508f1267fmshabebcdc7bbe2a6ep153534jsnd3a453b08c34",a=Object(t.useState)([]),n=Object(y.a)(a,2),r=n[0],o=n[1],i=G();return Object(t.useEffect)((function(){b.a.get("https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php",{method:"GET",headers:{"x-rapidapi-host":"coronavirus-monitor.p.rapidapi.com","x-rapidapi-key":e}}).then((function(e){var a=e.data.countries_stat.filter((function(e){return A.includes(e.country_name)})),n=[].concat(Object(E.a)(a),Object(E.a)(U)).reduce((function(e,a){return a.cases?(e[a.country_name]={},e[a.country_name].stat=Object(p.a)({},a)):e[a.country_name]=Object(p.a)({},e[a.country_name],{},a),e}),[]);o(Object.entries(n))})).catch((function(e){console.log(e)}))}),[e]),c.a.createElement(c.a.Fragment,null,c.a.createElement(S,null),c.a.createElement(T.a,{container:!0},c.a.createElement(T.a,{item:!0,sm:!0},c.a.createElement(k.a,{className:i.paper},r.map((function(e){var a=e[1],n=a.stat;return c.a.createElement("div",{key:a.id},c.a.createElement("img",{alt:a.code,src:"".concat("/covid19-tracker","/icons/").concat(a.icon)}),c.a.createElement("h1",null,a.country_name),c.a.createElement("span",null,"Cases: ",n.cases," | Deaths: ",n.deaths," | Total Recovered: ",n.total_recovered))})))),c.a.createElement(T.a,{item:!0,sm:!0},c.a.createElement(k.a,{className:i.paper},"Right"))),c.a.createElement(w,null))},R=(n(81),Object(m.a)({palette:{primary:{main:"#1e2023"},secondary:{main:"#D76E8E"},info:{main:"#f50057"},success:{main:"#2DC698"}}}));var D=function(){return c.a.createElement(u.a,{theme:R},c.a.createElement(i.a,{basename:"/"},c.a.createElement(l.c,null,c.a.createElement(l.a,{exact:!0,path:"/",component:K}),c.a.createElement(l.a,{path:"/about",component:d}),c.a.createElement(l.a,{path:"/sandbox",component:s}),c.a.createElement(l.a,{component:function(){return c.a.createElement("h1",{style:{textAlign:"center",marginTop:"50px"}},"Page not found")}}))))};o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(D,null)),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.9f869bea.chunk.js.map