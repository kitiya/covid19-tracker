(this["webpackJsonpcovid19-tracker"]=this["webpackJsonpcovid19-tracker"]||[]).push([[0],{237:function(e,a,t){e.exports=t(438)},242:function(e,a,t){},437:function(e,a,t){},438:function(e,a,t){"use strict";t.r(a);var n=t(1),c=t.n(n),r=t(11),o=t.n(r),l=(t(242),t(88)),i=t(37),s=t(197),m=t(479),d=t(193),u=t.n(d),p=t(195),h=t.n(p),g=t(194),E=t.n(g),v=t(196),f=t.n(v),y=t(31),b=t(467),C=t(469),x=t(470),w=t(92),k=t(471),N=t(480),_=t(473),j=Object(b.a)((function(e){return{toolbar:{justifyContent:"space-between"},navlink:{textDecoration:"none"},activeNavLink:{color:"#948DFF"}}})),O=function(e){var a=e.path,t=e.text,n=e.classes;return c.a.createElement(w.a,{varient:"h6",color:"secondary",component:l.b,exact:!0,to:a,className:n.navlink,activeClassName:n.activeNavLink},t)},S=function(){var e=Object(n.useState)(null),a=Object(y.a)(e,2),t=a[0],r=a[1],o=j(),l=function(){r(null)};return c.a.createElement(C.a,{position:"static"},c.a.createElement(x.a,{className:o.toolbar},c.a.createElement(w.a,{varient:"highlight"},"COVID-19 TRACKER"),c.a.createElement("div",null,c.a.createElement(k.a,null,c.a.createElement(O,{path:"/",text:"Home",classes:o})),c.a.createElement(k.a,null,c.a.createElement(O,{path:"/about",text:"About",classes:o})),c.a.createElement(k.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){console.log(e.currentTarget),r(e.currentTarget)}},c.a.createElement(w.a,{varient:"h6",color:"secondary"},"Sandbox")),c.a.createElement(N.a,{id:"sandbox-menu",anchorEl:t,keepMounted:!0,open:Boolean(t),onClose:l,color:"secondary"},c.a.createElement(_.a,{onClose:l},c.a.createElement(O,{path:"/mui-sandbox",text:"Material UI",classes:o})),c.a.createElement(_.a,{onClose:l},c.a.createElement(O,{path:"/rechart-sandbox",text:"Rechart",classes:o})),c.a.createElement(_.a,{onClose:l},c.a.createElement(O,{path:"/rapid-api",text:"Rapid API",classes:o}))))))},A=t(43),T=t(38),D=t.n(T),P=t(474),F=t(476),R=t(477),I=t(475),G=t(22),B=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}],K=function(e){var a=e.data,t=void 0===a?B:a;return c.a.createElement(G.d,{width:180,height:50,data:t},c.a.createElement(G.c,{type:"monotone",dataKey:"cases",stroke:"#8884d8",strokeWidth:2,dot:!1}))},W=Object(b.a)((function(e){var a=e.palette.cases.confirmed,t=e.palette.cases.active,n=e.palette.cases.recovered,c=e.palette.cases.deceased;return{container:{marginTop:50},cardWrapper:{background:"#eaeaea"},confirmedCard:{color:a[400]},activeCard:{color:t[500]},recoveredCard:{color:n[400]},deceasedCard:{color:c[500]},title:{textAlign:"center",textTransform:"uppercase",marginBottom:"0.5rem",fontWeight:"bold"},newCases:{textAlign:"center",fontSize:"0.85rem",fontWeight:"bold"},totalCases:{textAlign:"center",fontWeight:"bold",marginBottom:"0.5"}}})),z=function(){var e=Object(n.useState)([]),a=Object(y.a)(e,2),t=a[0],r=a[1],o=Object(n.useState)([]),l=Object(y.a)(o,2),i=l[0],s=l[1],m=Object(n.useState)([]),d=Object(y.a)(m,2),u=d[0],p=d[1],h=Object(n.useState)([]),g=Object(y.a)(h,2),E=g[0],v=g[1],f=W();return Object(n.useEffect)((function(){D.a.get("https://api.covid19api.com/summary").then((function(e){var a=e.data.Countries.filter((function(e){return"Canada"===e.Country}));r(a[0])})).catch((function(e){console.log(e)}))}),[]),Object(n.useEffect)((function(){D.a.get("https://api.covid19api.com/total/country/canada/status/confirmed").then((function(e){var a=e.data.reduce((function(e,a){return[].concat(Object(A.a)(e),[{date:a.Date.slice(5,10),cases:a.Cases}])}),[]);s(a)})).catch((function(e){console.log("[Fetch confirmed Error]",e)})),D.a.get("https://api.covid19api.com/total/country/canada/status/recovered",{headers:{"Access-Control-Allow-Origin":"*"},proxy:{host:"localhost",port:3019}}).then((function(e){var a=e.data.reduce((function(e,a){return[].concat(Object(A.a)(e),[{date:a.Date.slice(5,10),cases:a.Cases}])}),[]);p(a)})).catch((function(e){console.log("[Fetch Recovered Error]",e)})),D.a.get("https://api.covid19api.com/total/country/canada/status/deaths").then((function(e){var a=e.data.reduce((function(e,a){return[].concat(Object(A.a)(e),[{date:a.Date.slice(5,10),cases:a.Cases}])}),[]);v(a)})).catch((function(e){console.log("[Fetch Deceased Error]",e)}))}),[]),Object(n.useEffect)((function(){console.log(["British Columbia","Alberta","Nova Scotia","Ontario","Prince Edward Island","Quebec","Saskatchewan","Manitoba"]),D.a.get("https://api.covid19api.com/country/canada/status/confirmed").then((function(e){var a=e.data;console.log("data",a)})).catch((function(e){console.log("[Fetch Province Error]",e)}))}),[]),c.a.createElement(P.a,{maxWidth:"md",className:f.container},c.a.createElement(I.a,{container:!0,spacing:1},c.a.createElement(I.a,{item:!0,sm:3},c.a.createElement(F.a,{className:"".concat(f.cardWrapper," ").concat(f.confirmedCard)},c.a.createElement(R.a,null,c.a.createElement(w.a,{variant:"h6",className:f.title},"Confirmed"),c.a.createElement(w.a,{variant:"body1",className:f.newCases},"[+".concat(t.NewConfirmed,"]")),c.a.createElement(w.a,{variant:"h4",className:f.totalCases},t.TotalConfirmed),c.a.createElement(I.a,{container:!0,justify:"center"},c.a.createElement(I.a,{item:!0},c.a.createElement(K,{data:i})))))),c.a.createElement(I.a,{item:!0,sm:3},c.a.createElement(F.a,{className:"".concat(f.cardWrapper," ").concat(f.activeCard)},c.a.createElement(R.a,null,c.a.createElement(w.a,{variant:"h6",className:f.title},"Active"),c.a.createElement(w.a,{variant:"body1",className:f.newCases},"\xa0"),c.a.createElement(w.a,{variant:"h4",className:f.totalCases},t.TotalConfirmed?t.TotalConfirmed-t.TotalRecovered-t.TotalDeaths:null),c.a.createElement(I.a,{container:!0,justify:"center"},c.a.createElement(I.a,{item:!0},c.a.createElement(K,{data:u})))))),c.a.createElement(I.a,{item:!0,sm:3},c.a.createElement(F.a,{className:"".concat(f.cardWrapper," ").concat(f.recoveredCard)},c.a.createElement(R.a,null,c.a.createElement(w.a,{variant:"h6",className:f.title},"Recovered"),c.a.createElement(w.a,{variant:"body1",className:f.newCases},"[+".concat(t.NewRecovered,"]")),c.a.createElement(w.a,{variant:"h4",className:f.totalCases},t.TotalRecovered),c.a.createElement(I.a,{container:!0,justify:"center"},c.a.createElement(I.a,{item:!0},c.a.createElement(K,{data:u})))))),c.a.createElement(I.a,{item:!0,sm:3},c.a.createElement(F.a,{className:"".concat(f.cardWrapper," ").concat(f.deceasedCard)},c.a.createElement(R.a,null,c.a.createElement(w.a,{variant:"h6",className:f.title},"Deceased"),c.a.createElement(w.a,{variant:"body1",className:f.newCases},"[+".concat(t.NewDeaths,"]")),c.a.createElement(w.a,{variant:"h4",className:f.totalCases},t.TotalDeaths),c.a.createElement(I.a,{container:!0,justify:"center"},c.a.createElement(I.a,{item:!0},c.a.createElement(K,{data:E}))))))))},H=t(472),U=t(443),M=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(I.a,{container:!0,style:{textAlign:"center"}},c.a.createElement(I.a,{item:!0,xs:!0},c.a.createElement(w.a,{variant:"h2",color:"secondary",style:{marginTop:60,textTransform:"uppercase"}},"Social Distancing"),c.a.createElement("img",{alt:"",src:"".concat("/covid19-tracker","/images/svg/social_distancing.svg"),style:{maxHeight:"50vh",margin:20}})),c.a.createElement(I.a,{item:!0,xs:!0},c.a.createElement(H.a,{"aria-label":"social-distancing",style:{marginTop:50,width:"80%"}},c.a.createElement(U.a,{color:"textSecondary"},c.a.createElement(w.a,{variant:"h6",style:{color:"#616074"}},"Social distancing involves taking steps to limit the number of people you come into close contact with. It can help you reduce the risk of getting sick.")),c.a.createElement(U.a,{color:"textSecondary"},c.a.createElement(w.a,{variant:"body1",style:{color:"#616074"}},"This is not the same as self-isolation. You do not need to remain indoors, but you do need to avoid being in close contact with people.")),c.a.createElement(U.a,{color:"textSecondary"},c.a.createElement(w.a,{variant:"body1",style:{color:"#616074"}},"To protect yourself and others:"),c.a.createElement("ul",null,c.a.createElement("li",null,"keep at least 6 feet (the length of a bicycle) from others when going out for groceries, medical trips and other essential needs"),c.a.createElement("li",null,"limit the number of times you leave your home for errands"),c.a.createElement("li",null,"try to shop at less busy times"),c.a.createElement("li",null,"order online to have groceries or other items delivered if possible"),c.a.createElement("li",null,"go for a walk in your neighbourhood or park while maintaining distance from others"),c.a.createElement("li",null,"avoid overcrowding in elevators or other enclosed spaces"),c.a.createElement("li",null,"follow Alberta\u2019s recommendations on mass gatherings"),c.a.createElement("li",null,"wash or sanitize your hands after touching communal surfaces")))))))},J=t(481),L=function(){return c.a.createElement(J.a,{style:{textAlign:"center"}},c.a.createElement("img",{alt:"",src:"".concat("/covid19-tracker","/images/svg/wash_hands.svg"),style:{maxHeight:"50vh",margin:50}}),c.a.createElement(w.a,{variant:"h4",color:"secondary",style:{textTransform:"uppercase"}},"Handwashing"),c.a.createElement(w.a,{variant:"body1",style:{width:600,margin:"20px auto",color:"#616074"}},"Regular handwashing, particularly before and after certain activities, is one of the best ways to remove germs, avoid getting sick, and prevent the spread of germs to others. It\u2019s quick, it\u2019s simple, and it can keep us all from getting sick. Handwashing is a win for everyone, except the germs."))},q=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}],Q=function(){var e=q;return c.a.createElement(c.a.Fragment,null,c.a.createElement(G.d,{width:600,height:400,data:e,margin:{top:50,right:20,left:20,bottom:20}},c.a.createElement(G.a,{strokeDasharray:"3 3"}),c.a.createElement(G.f,{dataKey:"name"}),c.a.createElement(G.g,null),c.a.createElement(G.e,null),c.a.createElement(G.b,null),c.a.createElement(G.c,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),c.a.createElement(G.c,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"})))},V=t(122),Y=t(478),X=t(198),Z=[{id:1,country_name:"Australia",code:"",icon:"australia.png"},{id:1,country_name:"Austria",code:"",icon:"austria.png"},{id:1,country_name:"Belgium",code:"",icon:"belgium.png"},{id:1,country_name:"Brazil",code:"",icon:"brazil.png"},{id:124,country_name:"Canada",code:"ca",icon:"canada.png"},{id:156,country_name:"China",code:"cn",icon:"china.png"},{id:1,country_name:"Denmark",code:"",icon:"denmark.png"},{id:250,country_name:"France",code:"FR",icon:"france.png"},{id:276,country_name:"Germany",code:"DE",icon:"germany.png"},{id:364,country_name:"Iran",code:"IR",icon:"iran.png"},{id:380,country_name:"Italy",code:"IT",icon:"italy.png"},{id:1,country_name:"Netherlands",code:"",icon:"netherlands.png"},{id:1,country_name:"Norway",code:"",icon:"norway.png"},{id:1,country_name:"Portugal",code:"",icon:"portugal.png"},{id:410,country_name:"S. Korea",code:"KR",icon:"south_korea.png"},{id:724,country_name:"Spain",code:"ES",icon:"spain.png"},{id:756,country_name:"Switzerland",code:"CH",icon:"switzerland.png"},{id:1,country_name:"Sweden",code:"",icon:"sweden.png"},{id:840,country_name:"USA",code:"US",icon:"usa.png"},{id:826,country_name:"UK",code:"GB",icon:"uk.png"}],$=["Australia","Austria","Belgium","Brazil","Canada","China","Denmark","France","Germany","Iran","Italy","Netherlands","Norway","Portugal","S. Korea","Spain","Sweden","Switzerland","UK","USA"],ee=Object(b.a)((function(e){return{paper:{display:"flex",flexFlow:"row wrap",padding:50,background:"#fafafa",justifyContent:"center"},cardRoot:{margin:3,flex:"1 1 400px"},flagIcon:{height:50},totalCaseGrid:{textAlign:"center"},totalCaseGridRow:{marginTop:10,color:"#504E65"}}})),ae=function(){var e="a508f1267fmshabebcdc7bbe2a6ep153534jsnd3a453b08c34",a=Object(n.useState)([]),t=Object(y.a)(a,2),r=t[0],o=t[1],l=ee();return Object(n.useEffect)((function(){D.a.get("https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php",{method:"GET",headers:{"x-rapidapi-host":"coronavirus-monitor.p.rapidapi.com","x-rapidapi-key":e}}).then((function(e){var a=e.data.countries_stat.filter((function(e){return $.includes(e.country_name)})),t=[].concat(Object(A.a)(a),Object(A.a)(Z)).reduce((function(e,a){return a.cases?(e[a.country_name]={},e[a.country_name].stat=Object(V.a)({},a)):e[a.country_name]=Object(V.a)({},e[a.country_name],{},a),e}),[]);o(Object.entries(t))})).catch((function(e){console.log(e)}))}),[e]),console.log(r),c.a.createElement(c.a.Fragment,null,c.a.createElement(I.a,{container:!0},c.a.createElement(I.a,{item:!0,sm:!0},c.a.createElement(X.a,{className:l.paper},r.map((function(e){var a=e[1],t=a.stat;return c.a.createElement(F.a,{className:l.cardRoot,key:a.stat.country_name},c.a.createElement(Y.a,{className:l.totalCaseGrid,title:c.a.createElement(c.a.Fragment,null,c.a.createElement("img",{alt:"",src:"".concat("/covid19-tracker","/icons/").concat(a.icon),className:l.flagIcon}),c.a.createElement(w.a,{variant:"h5",component:"h2"},a.stat.country_name))}),c.a.createElement(R.a,null,c.a.createElement(I.a,{container:!0},c.a.createElement(I.a,{item:!0,xs:!0,className:l.totalCaseGrid},c.a.createElement(w.a,{variant:"body1",color:"textSecondary",component:"p"},"Cases: ",t.cases)),c.a.createElement(I.a,{item:!0,xs:!0,className:l.totalCaseGrid},c.a.createElement(w.a,{variant:"body1",color:"textSecondary",component:"p"},"Deaths: ",t.deaths)),c.a.createElement(I.a,{item:!0,xs:!0,className:l.totalCaseGrid},c.a.createElement(w.a,{variant:"body1",color:"textSecondary",component:"p"},"Recovered: ",t.total_recovered)),c.a.createElement(I.a,{item:!0,xs:12,className:"".concat(l.totalCaseGrid," ").concat(l.totalCaseGridRow)},c.a.createElement(w.a,{variant:"body1",component:"p"},"Total cases per 1m population:",t.total_cases_per_1m_population)))))}))))))},te=(t(437),Object(s.a)({typography:{fontFamily:["Overpass","sans-serif"]},palette:{primary:{main:"#1e2023"},secondary:{main:"#FF6584"},info:{main:"#f50057"},success:{main:"#2DC698"},cases:{confirmed:u.a,active:E.a,recovered:h.a,deceased:f.a}}}));var ne=function(){return c.a.createElement(m.a,{theme:te},c.a.createElement(l.a,{basename:"/"},c.a.createElement(S,null),c.a.createElement(i.c,null,c.a.createElement(i.a,{exact:!0,path:"/",component:z}),c.a.createElement(i.a,{exact:!0,path:"/chart",component:z}),c.a.createElement(i.a,{exact:!0,path:"/about",component:M}),c.a.createElement(i.a,{exact:!0,path:"/mui-sandbox",component:L}),c.a.createElement(i.a,{exact:!0,path:"/rechart-sandbox",component:Q}),c.a.createElement(i.a,{exact:!0,path:"/rapid-api",component:ae}),c.a.createElement(i.a,{component:function(){return c.a.createElement("h1",{style:{textAlign:"center",marginTop:"50px"}},"Page not found")}}))))};o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(ne,null)),document.getElementById("root"))}},[[237,1,2]]]);
//# sourceMappingURL=main.d916e2be.chunk.js.map