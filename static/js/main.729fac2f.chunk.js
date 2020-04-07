(this["webpackJsonpcovid19-tracker"]=this["webpackJsonpcovid19-tracker"]||[]).push([[0],{238:function(e,t,a){e.exports=a(442)},243:function(e,t,a){},441:function(e,t,a){},442:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(12),o=a.n(c),i=(a(243),a(74)),l=a(45),s=a(205),m=a(499),u=a(494),d=a(495),h=a(15),f=a(476),g=a(478),p=a(479),E=a(102),b=a(480),y=a(496),v=a(482),C=Object(f.a)((function(e){return{toolbar:{justifyContent:"space-between"},logoWrapper:{display:"flex",alignItems:"center",color:"white"},logo:{height:50,marginRight:10},navlink:{textDecoration:"none",color:"white"},activeNavLink:{color:e.palette.text.activeNavLink},dropdownNavLink:{textDecoration:"none",color:"black"}}})),w=function(e){var t=e.path,a=e.text,n=e.classes,c=e.dropdown;return r.a.createElement(E.a,{varient:"h6",component:i.b,exact:!0,to:t,className:c?n.dropdownNavLink:n.navlink,activeClassName:n.activeNavLink},a)},k=function(){var e=Object(n.useState)(null),t=Object(h.a)(e,2),a=t[0],c=t[1],o=C(),l=function(){c(null)};return r.a.createElement(g.a,{position:"static"},r.a.createElement(p.a,{className:o.toolbar},r.a.createElement(E.a,{varient:"h6",component:i.b,exact:!0,to:"/",className:o.navlink},r.a.createElement("div",{className:o.logoWrapper},r.a.createElement("img",{className:o.logo,alt:"",src:"".concat("/covid19-tracker","/favicon.png")}),r.a.createElement(E.a,{display:"inline",varient:"highlight"},"COVID-19 TRACKER"))),r.a.createElement("div",null,r.a.createElement(b.a,null,r.a.createElement(w,{path:"/",text:"Home",classes:o})),r.a.createElement(b.a,null,r.a.createElement(w,{path:"/canada",text:"Canada",classes:o})),r.a.createElement(b.a,null,r.a.createElement(w,{path:"/about",text:"About",classes:o})),r.a.createElement(b.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){console.log(e.currentTarget),c(e.currentTarget)}},r.a.createElement(E.a,{varient:"h6",className:o.navlink},"Sandbox")),r.a.createElement(y.a,{id:"sandbox-menu",anchorEl:a,keepMounted:!0,open:Boolean(a),onClose:l},r.a.createElement(v.a,{onClose:l},r.a.createElement(w,{path:"/mui-sandbox",text:"Material UI",classes:o,dropdown:!0})),r.a.createElement(v.a,{onClose:l},r.a.createElement(w,{path:"/rechart-sandbox",text:"Rechart",classes:o,dropdown:!0})),r.a.createElement(v.a,{onClose:l},r.a.createElement(w,{path:"/rapid-api",text:"Rapid API",classes:o,dropdown:!0}))))))},O=a(13),j=a.n(O),x=a(97),N=a(485),S=a(6),D=a(44),I=a.n(D),A=function(e){return new Intl.NumberFormat("en").format(e)},F=a(483),T=a(484),_=a(497),B=Object(f.a)((function(e){return{gridContainer:{justifyContent:"center"},confirmed:{"& *":{color:e.palette.cases.confirmed}},active:{"& *":{color:e.palette.cases.active}},recovered:{"& *":{color:e.palette.cases.recovered}},deaths:{"& *":{color:e.palette.cases.deaths}},cardContainer:{minWidth:"200px"},title:{textAlign:"center",textTransform:"uppercase",marginBottom:"0.5rem",fontWeight:"bold"},newCases:{textAlign:"center",fontSize:"0.85rem"},totalCases:{textAlign:"center",fontWeight:"bold",marginBottom:"0.5"}}})),K=function(){return r.a.createElement(_.a,{px:2},r.a.createElement(E.a,{variant:"h3"},"Tracking the coronavirus"),r.a.createElement(E.a,{variant:"h6",gutterBottom:!0},"Stay informed with the latest data on the number of COVID-19 cases."),r.a.createElement(E.a,{variant:"body1",gutterBottom:!0},"While the numbers can tell you a lot about the coronavirus, the case numbers only tell part of the story."),r.a.createElement(E.a,{variant:"body1",gutterBottom:!0},"Areas that test a high number of people will ultimately detect more cases than those that are not doing as much testing. There may also be surges in the number of cases when there are a high number of tests done in a short time frame."),r.a.createElement(E.a,{variant:"body1"},"The same is true for Canada's provinces and territories. Different rates in testing and changes in how regions are recording results can result in higher numbers for some regions over others."))},W=function(e){var t=e.title,a=e.todayCases,n=e.totalCases,c=e.classes,o=e.cardClass;return r.a.createElement(F.a,{className:Object(S.a)(c.cardContainer,o)},r.a.createElement(T.a,null,r.a.createElement(E.a,{variant:"h6",className:c.title},t),r.a.createElement(E.a,{variant:"body1",className:c.newCases},a),r.a.createElement(E.a,{variant:"h4",className:c.totalCases},n)))},M=function(e){var t=e.globalSummary,a=e.classes,n=A(t.cases),c=A(t.todayCases),o=A(t.active),i=A(t.recovered),l=A(t.deaths),s=A(t.todayDeaths);return r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{container:!0,spacing:2,className:a.gridContainer},r.a.createElement(N.a,{item:!0,xs:!0},r.a.createElement(W,{title:"Confirmed",todayCases:"[+".concat(c,"]"),totalCases:n,classes:a,cardClass:a.confirmed})),r.a.createElement(N.a,{item:!0,xs:!0},r.a.createElement(W,{title:"Deaths",todayCases:"[+".concat(s,"]"),totalCases:l,classes:a,cardClass:a.deaths}))),r.a.createElement(N.a,{container:!0,spacing:2,className:a.gridContainer},r.a.createElement(N.a,{item:!0,xs:!0},r.a.createElement(W,{title:"Active",totalCases:o,classes:a,cardClass:a.active})),r.a.createElement(N.a,{item:!0,xs:!0},r.a.createElement(W,{title:"Recovered",totalCases:i,classes:a,cardClass:a.recovered}))))},P=function(e){e.theme;var t=Object(n.useState)([]),a=Object(h.a)(t,2),c=a[0],o=a[1],i=B();return Object(n.useEffect)((function(){j.a.get("https://corona.lmao.ninja/all").then((function(e){o(e.data)}))}),[]),r.a.createElement(N.a,{container:!0,className:i.gridContainer,spacing:3},r.a.createElement(N.a,{item:!0,md:4},r.a.createElement(M,{globalSummary:c,classes:i}),r.a.createElement(_.a,null,r.a.createElement(E.a,{variant:"subtitle1",align:"right"},"Last updated: ",I()(new Date(c.updated)).fromNow()))),r.a.createElement(N.a,{item:!0,md:8,align:"left"},r.a.createElement(K,null)))},R=a(486),G=a(207),z=a(487),H=a(488),Y=a(489),L=a(490),U=a(491),V=Object(f.a)((function(e){return{tableContainer:{height:"80vh"},flagIcon:{maxWidth:30,marginRight:10},table:{"& th":{textAlign:"center",background:e.palette.background.tableHeader,color:"white",fontSize:16},"& td":{textAlign:"center"}},imgWrapperCell:{display:"flex",alignItems:"center"}}})),q=function(e){var t=e.global,a=V();return r.a.createElement(R.a,{component:G.a,className:a.tableContainer},r.a.createElement(z.a,{size:"medium",stickyHeader:!0,className:a.table},r.a.createElement(H.a,null,r.a.createElement(Y.a,null,r.a.createElement(L.a,{colSpan:2},"Country"),r.a.createElement(L.a,null,"Total Cases"),r.a.createElement(L.a,null,"Today Cases"),r.a.createElement(L.a,null,"Active"),r.a.createElement(L.a,null,"Total Recovered"),r.a.createElement(L.a,null,"Total Deaths"),r.a.createElement(L.a,null,"Today Deaths"),r.a.createElement(L.a,null,"Critical"),r.a.createElement(L.a,null,"Case per 1M"),r.a.createElement(L.a,null,"Death per 1M"))),r.a.createElement(U.a,null,t.map((function(e,t){return r.a.createElement(Y.a,{key:t},r.a.createElement(L.a,{align:"right"},t+1,"."),r.a.createElement(L.a,{align:"left",className:a.imgWrapperCell},r.a.createElement("img",{alt:"",src:e.countryInfo.flag,className:a.flagIcon}),e.country),r.a.createElement(L.a,null,A(e.cases)),r.a.createElement(L.a,null,A(e.todayCases)),r.a.createElement(L.a,null,A(e.active)),r.a.createElement(L.a,null,A(e.recovered)),r.a.createElement(L.a,null,A(e.deaths)),r.a.createElement(L.a,null,A(e.todayDeaths)),r.a.createElement(L.a,null,A(e.critical)),r.a.createElement(L.a,null,A(e.casesPerOneMillion)),r.a.createElement(L.a,null,A(e.deathsPerOneMillion)))})))))},Q=a(7),J=function(e,t,a,n){return"M".concat(e,",").concat(t+n,"\n          C").concat(e+a/3,",").concat(t+n," ").concat(e+a/2,",").concat(t+n/3," ").concat(e+a/2,", ").concat(t,"\n          C").concat(e+a/2,",").concat(t+n/3," ").concat(e+2*a/3,",").concat(t+n," ").concat(e+a,", ").concat(t+n,"\n          Z")},Z=function(e){var t=e.fill,a=e.x,n=e.y,c=e.width,o=e.height;return r.a.createElement("path",{d:J(a,n,c,o),stroke:"none",fill:t})},X=function(e){var t=e.data;return r.a.createElement(Q.h,{width:"100%",height:300},r.a.createElement(Q.d,{data:t,margin:{top:30,right:20,left:10,bottom:0}},r.a.createElement(Q.b,{strokeDasharray:"3 3"}),r.a.createElement(Q.j,{dataKey:"country",style:{fontSize:12}}),r.a.createElement(Q.k,{fontSize:12,tickFormatter:function(e){return new Intl.NumberFormat("en").format(e)}}),r.a.createElement(Q.i,{formatter:function(e){return new Intl.NumberFormat("en").format(e)}}),r.a.createElement(Q.a,{dataKey:"cases",fill:"#ec407a",shape:r.a.createElement(Z,null)})))};function $(e){return I()(new Date(e)).format("MMM D")}function ee(e){return I()(new Date(e)).format("MMM D, YYYY")}var te=function(e){var t=e.data,a=e.graphName,n=e.width,c=void 0===n?400:n;return r.a.createElement(Q.h,{width:c,height:300},r.a.createElement(Q.g,{data:t,margin:{top:10,right:20,left:10,bottom:0}},r.a.createElement(Q.j,{dataKey:"date",tickFormatter:$,fontSize:12}),r.a.createElement(Q.k,{fontSize:12,tickFormatter:function(e){return new Intl.NumberFormat("en").format(e)}}),r.a.createElement(Q.b,{strokeDasharray:"3 3"}),r.a.createElement(Q.i,{formatter:function(e){return new Intl.NumberFormat("en").format(e)},labelFormatter:ee}),r.a.createElement(Q.e,{verticalAlign:"top"}),r.a.createElement(Q.f,{name:a,type:"monotone",dataKey:"cases",stroke:"#8884d8",strokeWidth:3,dot:!1})))},ae=function(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){j.a.get("https://corona.lmao.ninja/v2/historical/all").then((function(e){var t=e.data,a=Object.entries(t.cases).map((function(e){return{date:e[0],cases:e[1]}})),n=Object.entries(t.recovered).map((function(e){return{date:e[0],cases:e[1]}})),r=Object.entries(t.deaths).map((function(e){return{date:e[0],cases:e[1]}}));c({confirmed:a,recovered:n,deaths:r})})).catch((function(e){console.log("[Fetch global series]",e)}))}),[]),r.a.createElement(N.a,{container:!0},r.a.createElement(N.a,{item:!0,lg:4},r.a.createElement(te,{data:a.confirmed,graphName:"Total Confirmed Cases",width:"100%"})),r.a.createElement(N.a,{item:!0,lg:4},r.a.createElement(te,{data:a.recovered,graphName:"Total Recovered",width:"100%"})),r.a.createElement(N.a,{item:!0,lg:4},r.a.createElement(te,{data:a.deaths,graphName:"Total Deaths",width:"100%"})))},ne=a(66),re=a(19),ce=function(e){var t=e.confirmCases;return console.log("confirmCases",t),r.a.createElement(Q.h,{width:"100%",height:300},r.a.createElement(Q.g,{data:t,margin:{top:10,right:20,left:10,bottom:0}},r.a.createElement(Q.j,{dataKey:"date",tickFormatter:function(e){return I()(new Date(e)).format("MMM D")},fontSize:12}),r.a.createElement(Q.k,{fontSize:12,tickFormatter:function(e){return new Intl.NumberFormat("en").format(e)}}),r.a.createElement(Q.b,{strokeDasharray:"3 3"}),r.a.createElement(Q.i,{formatter:function(e){return new Intl.NumberFormat("en").format(e)},labelFormatter:function(e){return I()(new Date(e)).format("MMM D, YYYY")}}),r.a.createElement(Q.e,{verticalAlign:"top"}),r.a.createElement(Q.f,{name:"Canada",type:"monotone",dataKey:"canada",stroke:"#ff0000",strokeWidth:3,dot:!1}),r.a.createElement(Q.f,{name:"USA",type:"monotone",dataKey:"usa",stroke:"#3C3B6E",strokeWidth:3,dot:!1}),r.a.createElement(Q.f,{name:"Spain",type:"monotone",dataKey:"spain",stroke:"#F1BF00",strokeWidth:3,dot:!1}),r.a.createElement(Q.f,{name:"Italy",type:"monotone",dataKey:"italy",stroke:"#008C45",strokeWidth:3,dot:!1}),r.a.createElement(Q.f,{name:"Germany",type:"monotone",dataKey:"germany",stroke:"#FF6584",strokeWidth:3,dot:!1}),r.a.createElement(Q.f,{name:"China",type:"monotone",dataKey:"china",stroke:"#6C63FF",strokeWidth:3,dot:!1}),r.a.createElement(Q.f,{name:"iran",type:"monotone",dataKey:"iran",stroke:"#456990",strokeWidth:3,dot:!1})))},oe=function(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){var e="https://corona.lmao.ninja/v2/historical",t=j.a.get("".concat(e,"/canada")),a=j.a.get("".concat(e,"/usa")),n=j.a.get("".concat(e,"/italy")),r=j.a.get("".concat(e,"/spain")),o=j.a.get("".concat(e,"/germany")),i=j.a.get("".concat(e,"/china")),l=j.a.get("".concat(e,"/france")),s=j.a.get("".concat(e,"/iran"));j.a.all([t,a,r,n,o,l,i,s]).then(j.a.spread((function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];var n=t[0].data,r=t[1].data,o=t[3].data,i=t[2].data,l=t[4].data,s=t[6].data,m=t[5].data,u=t[7].data,d=Object.entries(n.timeline.cases).map((function(e){return{date:e[0],canada:e[1]}})),h=Object.entries(r.timeline.cases).map((function(e){return{date:e[0],usa:e[1]}})),f=Object.entries(o.timeline.cases).map((function(e){return{date:e[0],spain:e[1]}})),g=Object.entries(i.timeline.cases).map((function(e){return{date:e[0],italy:e[1]}})),p=Object.entries(l.timeline.cases).map((function(e){return{date:e[0],germany:e[1]}})),E=Object.entries(s.timeline.cases).map((function(e){return{date:e[0],france:e[1]}})),b=Object.entries(m.timeline.cases).map((function(e){return{date:e[0],china:e[1]}})),y=Object.entries(u.timeline.cases).map((function(e){return{date:e[0],iran:e[1]}})),v=[].concat(Object(re.a)(d),Object(re.a)(h),Object(re.a)(f),Object(re.a)(g),Object(re.a)(p),Object(re.a)(E),Object(re.a)(b),Object(re.a)(y));console.log("total cases",v);var C=v.reduce((function(e,t){return e[t.date]?e[t.date]=Object(ne.a)({},e[t.date],{},t):e[t.date]=Object(ne.a)({},t),e}),{}),w=Object.entries(C).map((function(e){return e[1]}));c(w)}))).catch((function(e){console.log("[Fetch global series]",e)}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(ce,{confirmCases:a}))},ie=a(492),le=Object(f.a)((function(e){return{cardHeader:{background:e.palette.background.card,whiteSpace:"nowrap",overflow:"hidden"},cardContent:{"& > div":{justifyContent:"center"}}}})),se=function(e){var t=e.title,a=e.children,n=le();return r.a.createElement(F.a,null,r.a.createElement(ie.a,{className:n.cardHeader,title:t,align:"left"}),r.a.createElement(T.a,{className:n.cardContent},a))},me=Object(f.a)((function(e){return{gridContainer:{padding:"0 25px"},gridContainerItem:{justifyContent:"center",alignItems:"stretch"},gridItem:{paddingTop:30,width:"100%"}}})),ue=function(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),a=t[0],c=t[1],o=me(),i=Object(x.a)();return Object(n.useEffect)((function(){j.a.get("https://corona.lmao.ninja/countries?sort=cases").then((function(e){return c(e.data)}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{container:!0,className:o.gridContainer},r.a.createElement(N.a,{item:!0,xs:12,align:"center",className:o.gridItem},r.a.createElement(P,{theme:i})),r.a.createElement(N.a,{item:!0,xs:12,align:"center",className:o.gridItem},r.a.createElement(se,{title:"Global Cumulative Cases"},r.a.createElement(ae,null))),r.a.createElement(N.a,{item:!0,xs:12,align:"center",className:o.gridItem},r.a.createElement(N.a,{container:!0,spacing:2,className:o.gridContainerItem},r.a.createElement(N.a,{item:!0,md:6,align:"center",className:o.gridItem},r.a.createElement(se,{title:"Comparing the coronavirus curve"},r.a.createElement(oe,null))),r.a.createElement(N.a,{item:!0,md:6,align:"center",className:o.gridItem},r.a.createElement(se,{title:"Cumulative Confirmed Cases by Country"},r.a.createElement(X,{data:a.slice(0,20)}))))),r.a.createElement(N.a,{item:!0,xs:12,align:"center",className:o.gridItem},r.a.createElement(se,{title:"Cases by Country"},r.a.createElement(q,{global:a})))))},de=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ue,null))},he=function(e){var t=e.data,a=void 0===t?[]:t,n=e.stroke,c=void 0===n?"#8884d8":n;return r.a.createElement(Q.h,{width:"100%",height:40},r.a.createElement(Q.g,{data:a},r.a.createElement(Q.f,{type:"monotone",dataKey:"cases",stroke:c,strokeWidth:2,dot:!1})))},fe=Object(f.a)((function(e){return{container:{padding:"30px 50px",justifyContent:"center"},confirmed:{"& *":{color:e.palette.cases.confirmed}},active:{"& *":{color:e.palette.cases.active}},recovered:{"& *":{color:e.palette.cases.recovered}},deaths:{"& *":{color:e.palette.cases.deaths}},title:{textAlign:"center",textTransform:"uppercase",marginBottom:"0.5rem",fontWeight:"bold"},newCases:{textAlign:"center",fontSize:"0.75rem"},totalCases:{textAlign:"center",fontWeight:"bold",marginBottom:"0.5"}}})),ge=function(e){var t=e.todayCases,a=e.totalCases,n=e.chartData,c=e.title,o=e.classes,i=e.cardClass,l=e.stroke;return r.a.createElement(F.a,{className:i},r.a.createElement(T.a,null,r.a.createElement(E.a,{variant:"h6",className:o.title},c),r.a.createElement(E.a,{variant:"body1",className:o.newCases},t),r.a.createElement(E.a,{variant:"h5",className:o.totalCases},a),r.a.createElement(_.a,{justifyContent:"center"},r.a.createElement(he,{data:n,stroke:l}))))},pe=function(e){var t=e.countrySummary,a=e.countrySeries,n=e.theme,c=e.classes;return r.a.createElement(N.a,{container:!0,spacing:1},r.a.createElement(N.a,{item:!0,xs:4},r.a.createElement(ge,{todayCases:"[+".concat(t.todayCases,"]"),totalCases:t.cases,chartData:a.confirmed,title:"Confirmed",classes:c,cardClass:c.confirmed,stroke:n.palette.cases.confirmed})),r.a.createElement(N.a,{item:!0,xs:4},r.a.createElement(ge,{todayCases:"[NA]",totalCases:t.recovered,chartData:a.recovered,title:"Recovered",classes:c,cardClass:c.recovered,stroke:n.palette.cases.recovered})),r.a.createElement(N.a,{item:!0,xs:4},r.a.createElement(ge,{todayCases:"[+".concat(t.todayDeaths,"]"),totalCases:t.deaths,chartData:a.deaths,title:"Deaths",classes:c,cardClass:c.deaths,stroke:n.palette.cases.deaths})))},Ee=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{variant:"h6",gutterBottom:!0},"Stay informed with the latest data on the number of COVID-19 cases."),r.a.createElement(E.a,{variant:"body1",gutterBottom:!0},"While the numbers can tell you a lot about the coronavirus, the case numbers only tell part of the story."),r.a.createElement(E.a,{variant:"body1",gutterBottom:!0},"Areas that test a high number of people will ultimately detect more cases than those that are not doing as much testing. There may also be surges in the number of cases when there are a high number of tests done in a short time frame."),r.a.createElement(E.a,{variant:"body1"},"The same is true for Canada's provinces and territories. Different rates in testing and changes in how regions are recording results can result in higher numbers for some regions over others."))},be=function(e){var t=e.countrySummary,a=e.countrySeries,n=e.theme,c=fe();return r.a.createElement(N.a,{container:!0,spacing:4,className:c.container},r.a.createElement(N.a,{item:!0,md:4},r.a.createElement(pe,{countrySummary:t,countrySeries:a,theme:n,classes:c})),r.a.createElement(N.a,{item:!0,md:8},r.a.createElement(Ee,null)))};var ye=function(e,t,a,n){return"M".concat(e,",").concat(t+n,"\n          C").concat(e+a/3,",").concat(t+n," ").concat(e+a/2,",").concat(t+n/3," ").concat(e+a/2,", ").concat(t,"\n          C").concat(e+a/2,",").concat(t+n/3," ").concat(e+2*a/3,",").concat(t+n," ").concat(e+a,", ").concat(t+n,"\n          Z")},ve=function(e){var t=e.fill,a=e.x,n=e.y,c=e.width,o=e.height;return r.a.createElement("path",{d:ye(a,n,c,o),stroke:"none",fill:t})},Ce=function(e){var t=e.data;return r.a.createElement(R.a,{component:G.a},r.a.createElement(z.a,{size:"small"},r.a.createElement(H.a,null,r.a.createElement(Y.a,null,r.a.createElement(L.a,null,"PROVINCE"),r.a.createElement(L.a,null,"CONFIRMED CASES"),r.a.createElement(L.a,null,"DEATHS"))),r.a.createElement(U.a,null,t.map((function(e,t){return r.a.createElement(Y.a,{key:t},r.a.createElement(L.a,null,r.a.createElement(E.a,null,e.province)),r.a.createElement(L.a,null,r.a.createElement(E.a,null,e.confirmed)),r.a.createElement(L.a,null,r.a.createElement(E.a,null,e.deaths)))})))))},we=function(e){var t=e.data;return r.a.createElement(Q.h,{width:"100%",height:500},r.a.createElement(Q.d,{data:t,margin:{top:30,right:30,left:30,bottom:30}},r.a.createElement(Q.b,{strokeDasharray:"3 3"}),r.a.createElement(Q.j,{angle:0,textAnchor:"end",dataKey:"provincialCode",style:{fontSize:10}}),r.a.createElement(Q.k,{yAxisId:"left",fontSize:12,label:{value:"Confirmed Cases",angle:-90,position:"insideLeft",offset:0}}),r.a.createElement(Q.k,{yAxisId:"right",orientation:"right",fontSize:12,label:{value:"Deaths",angle:90,position:"insideRight",offset:0}}),r.a.createElement(Q.i,null),r.a.createElement(Q.e,{verticalAlign:"top"}),r.a.createElement(Q.a,{yAxisId:"left",dataKey:"confirmed",fill:"#ec407a",shape:r.a.createElement(ve,null),label:{position:"top"}},t.map((function(e,t){return r.a.createElement(Q.c,{key:"cell-".concat(t)})}))),r.a.createElement(Q.a,{yAxisId:"right",dataKey:"deaths",fill:"#607d8b",shape:r.a.createElement(ve,null),label:{position:"top"}},t.map((function(e,t){return r.a.createElement(Q.c,{key:"cell-".concat(t)})})))))},ke=function(e){var t=e.tableData,a=(e.themes,t?t.sort(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"asc";return function(a,n){if(!a.hasOwnProperty(e)||!n.hasOwnProperty(e))return 0;var r="string"===typeof a[e]?a[e].toUpperCase():a[e],c="string"===typeof n[e]?n[e].toUpperCase():n[e],o=0;return r>c?o=1:r<c&&(o=-1),"desc"===t?-1*o:o}}("confirmed","desc")):[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{container:!0,align:"center",spacing:5,style:{padding:"20px 50px"}},r.a.createElement(N.a,{item:!0,xs:12},r.a.createElement(E.a,{variant:"h4",align:"left"},"Confirmed COVID-19 cases in Canada by province and territory")),r.a.createElement(N.a,{item:!0,lg:4,align:"center",style:{marginLeft:"auto",marginRight:"auto"}},r.a.createElement(G.a,{align:"center"},r.a.createElement(Ce,{data:a}))),r.a.createElement(N.a,{item:!0,lg:8,align:"center",style:{display:"flex",alignItems:"stretch"}},r.a.createElement(G.a,{style:{flex:"1 1 600px",display:"flex",alignItems:"center",justifyContent:"center"}},r.a.createElement(we,{data:a})))))},Oe=[{id:1,country_name:"Australia",code:"",icon:"australia.png"},{id:1,country_name:"Austria",code:"",icon:"austria.png"},{id:1,country_name:"Belgium",code:"",icon:"belgium.png"},{id:1,country_name:"Brazil",code:"",icon:"brazil.png"},{id:124,country_name:"Canada",code:"ca",icon:"canada.png"},{id:156,country_name:"China",code:"cn",icon:"china.png"},{id:1,country_name:"Denmark",code:"",icon:"denmark.png"},{id:250,country_name:"France",code:"FR",icon:"france.png"},{id:276,country_name:"Germany",code:"DE",icon:"germany.png"},{id:364,country_name:"Iran",code:"IR",icon:"iran.png"},{id:380,country_name:"Italy",code:"IT",icon:"italy.png"},{id:1,country_name:"Netherlands",code:"",icon:"netherlands.png"},{id:1,country_name:"Norway",code:"",icon:"norway.png"},{id:1,country_name:"Portugal",code:"",icon:"portugal.png"},{id:410,country_name:"S. Korea",code:"KR",icon:"south_korea.png"},{id:724,country_name:"Spain",code:"ES",icon:"spain.png"},{id:756,country_name:"Switzerland",code:"CH",icon:"switzerland.png"},{id:1,country_name:"Sweden",code:"",icon:"sweden.png"},{id:840,country_name:"USA",code:"US",icon:"usa.png"},{id:826,country_name:"UK",code:"GB",icon:"uk.png"}],je=["Australia","Austria","Belgium","Brazil","Canada","China","Denmark","France","Germany","Iran","Italy","Netherlands","Norway","Portugal","S. Korea","Spain","Sweden","Switzerland","UK","USA"],xe=[{banner:"Avoid going out during the lockdown. Help break the chain of spread.",id:"1",numberoftimes:"2"},{banner:"Be compassionate! Help those in need like the elderly and poor. They are facing a crisis you cannot even imagine!",id:"2",numberoftimes:"2"},{banner:"Be considerate : While buying essentials remember : You need to share with Others! ",id:"3",numberoftimes:"2"},{banner:"Going out to buy essentials? Social Distancing is KEY! Maintain 2 metres distance between each other in the line. ",id:"4",numberoftimes:"2"},{banner:"Plan ahead! Take a minute and check how much you have at home. Planning ahead let's you buy exactly what you need! ",id:"5",numberoftimes:"2"},{banner:"Plan and calculate your essential needs for the next three weeks and get only what is bare minimum needed. ",id:"6",numberoftimes:"2"},{banner:"Help out the elderly by bringing them their groceries and other essentials. ",id:"7",numberoftimes:"2"},{banner:"Help out your workers and domestic workers by not cutting their salaries. Show the true Canadian spirit! ",id:"8",numberoftimes:"2"},{banner:"Lockdown means LOCKDOWN! Avoid going out unless absolutely necessary. Stay safe! ",id:"9",numberoftimes:"1"},{banner:"Panic mode : OFF! \u274c\nESSENTIALS ARE ON! \u2714\ufe0f ",id:"10",numberoftimes:"1"},{banner:"Do not panic! \u274c Your essential needs will be taken care of. DO NOT HOARD. ",id:"11",numberoftimes:"1"},{banner:"Be a true Canadian. Show compassion. Be considerate. Help those in need. We will get through this!",id:"12",numberoftimes:"1"},{banner:"If you have symptoms and suspect you have coronavirus - reach out to your doctor or call state helplines. \ud83d\udcde  Get help. ",id:"13",numberoftimes:"1"},{banner:"Stand Against FAKE News and WhatsApp Forwards! Do NOT \u274c forward a message until you verify the content it contains. ",id:"14",numberoftimes:"1"},{banner:"If you have any queries, reach out to your district administration or doctors! ",id:"15",numberoftimes:"1"},{banner:"Wash your hands with soap and water often. Keep the virus at bay.",id:"16",numberoftimes:"1"},{banner:"The hot weather will not stop the virus! You can! Stay home, stay safe.",id:"17",numberoftimes:"1"},{banner:"Help the medical fraternity by staying at home! ",id:"18",numberoftimes:"1"},{banner:"Don't Hoard groceries and essentials. Please ensure that people who are in need don't face a shortage because of you! ",id:"19",numberoftimes:"1"},{banner:"Call up your loved ones during the lockdown, support each other through these times.",id:"20",numberoftimes:"1"},{banner:"Even the Virus Does not discriminate. Why do you? DO NOT DISCRIMINATE. WE are all Canadians! ",id:"21",numberoftimes:""},{banner:"Our brothers from the north east are just as Canadian as you! Help everyone during this crisis \u2764\ufe0f ",id:"22",numberoftimes:""},{banner:"Get in touch with your local NGO's and District administration to volunteer for this cause. ",id:"23",numberoftimes:""},{banner:"This will pass too. Enjoy your time at home and spend quality time with your family! Things will be normal soon. ",id:"24",numberoftimes:""},{banner:"#BreakTheChain of Unverified WhatsApp Forwards which spread wrong information! Don't forward unless you verify it. ",id:"25",numberoftimes:""}],Ne=["Alberta","British Columbia","Grand Princess","Manitoba","New Brunswick","Newfoundland and Labrador","Northwest Territories","Nova Scotia","Ontario","Prince Edward Island","Quebec","Saskatchewan","Yukon"],Se={Alberta:"AB","British Columbia":"BC","Grand Princess":"GP",Manitoba:"MB","New Brunswick":"NB","Newfoundland and Labrador":"NL","Northwest Territories":"NT","Nova Scotia":"NS",Ontario:"ON","Prince Edward Island":"PE",Quebec:"QC",Saskatchewan:"SK",Yukon:"YT"},De=function(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)([]),i=Object(h.a)(o,2),l=i[0],s=i[1],m=Object(n.useState)([]),u=Object(h.a)(m,2),d=u[0],f=u[1],g=Object(x.a)();return Object(n.useEffect)((function(){j.a.get("https://corona.lmao.ninja/countries/").then((function(e){var t=e.data.filter((function(e){return"Canada"===e.country}));c(t[0])})).catch((function(e){console.log("[Fetch country summary]",e)}))}),[]),Object(n.useEffect)((function(){j.a.get("https://corona.lmao.ninja/v2/historical/canada/").then((function(e){var t=e.data.timeline,a=Object.entries(t.cases).map((function(e){return{date:e[0],cases:e[1]}})),n=Object.entries(t.recovered).map((function(e){return{date:e[0],cases:e[1]}})),r=Object.entries(t.deaths).map((function(e){return{date:e[0],cases:e[1]}}));s({confirmed:a,recovered:n,deaths:r})})).catch((function(e){console.log("[Fetch country series]",e)}))}),[]),Object(n.useEffect)((function(){j.a.get("https://corona.lmao.ninja/v2/jhucsse").then((function(e){var t=e.data.filter((function(e){return"Canada"===e.country&&Ne.includes(e.province)})),a=t.reduce((function(e,t){return e=[].concat(Object(re.a)(e),[{province:t.province,provincialCode:Se[t.province],confirmed:t.stats.confirmed,deaths:t.stats.deaths}])}),[]);f(a),t.reduce((function(e,t){return e.confirmed=[].concat(Object(re.a)(e.confirmed),[{province:t.province,cases:t.stats.confirmed}]),e.recovered=[].concat(Object(re.a)(e.recovered),[{province:t.province,cases:t.stats.recovered}]),e.deaths=[].concat(Object(re.a)(e.deaths),[{province:t.province,cases:t.stats.deaths}]),e}),{confirmed:[],recovered:[],deaths:[]})})).catch((function(e){console.log("[Fetch province]",e)}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(be,{countrySummary:a,countrySeries:l,theme:g}),r.a.createElement(ke,{tableData:d,theme:g}))},Ie=a(481),Ae=a(446),Fe=a(493),Te=Object(f.a)((function(e){return{container:{background:"#bbdefb",textAlign:"center",padding:10}}})),_e=function(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(),i=Object(h.a)(o,2),l=i[0],s=i[1],m=Te();Object(n.useEffect)((function(){c(xe||[]),s(xe[0]||"")}),[]);var u=Object(n.useCallback)((function(e,t){var n=Math.random()*(t-e)+e;s(a[Math.floor(n)])}),[a]);return Object(n.useEffect)((function(){var e=setInterval((function(){u(0,a.length-1)}),7e3);return function(){return clearInterval(e)}}),[u,a]),r.a.createElement(r.a.Fragment,null,r.a.createElement(Fe.a,{maxWidth:!1,className:m.container},r.a.createElement(E.a,{variant:"subtitle1"},l?l.banner:""," \xa0")))},Be=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(_e,null),r.a.createElement(N.a,{container:!0,style:{textAlign:"center"}},r.a.createElement(N.a,{item:!0,xs:!0},r.a.createElement(E.a,{variant:"h2",color:"secondary",style:{marginTop:60,textTransform:"uppercase"}},"Social Distancing"),r.a.createElement("img",{alt:"",src:"".concat("/covid19-tracker","/images/svg/social_distancing.svg"),style:{maxHeight:"50vh",margin:20}})),r.a.createElement(N.a,{item:!0,xs:!0},r.a.createElement(Ie.a,{"aria-label":"social-distancing",style:{marginTop:50,width:"80%"}},r.a.createElement(Ae.a,{color:"textSecondary"},r.a.createElement(E.a,{variant:"h6",style:{color:"#616074"}},"Social distancing involves taking steps to limit the number of people you come into close contact with. It can help you reduce the risk of getting sick.")),r.a.createElement(Ae.a,{color:"textSecondary"},r.a.createElement(E.a,{variant:"body1",style:{color:"#616074"}},"This is not the same as self-isolation. You do not need to remain indoors, but you do need to avoid being in close contact with people.")),r.a.createElement(Ae.a,{color:"textSecondary"},r.a.createElement(E.a,{variant:"body1",style:{color:"#616074"}},"To protect yourself and others:"),r.a.createElement("ul",null,r.a.createElement("li",null,"keep at least 6 feet (the length of a bicycle) from others when going out for groceries, medical trips and other essential needs"),r.a.createElement("li",null,"limit the number of times you leave your home for errands"),r.a.createElement("li",null,"try to shop at less busy times"),r.a.createElement("li",null,"order online to have groceries or other items delivered if possible"),r.a.createElement("li",null,"go for a walk in your neighbourhood or park while maintaining distance from others"),r.a.createElement("li",null,"avoid overcrowding in elevators or other enclosed spaces"),r.a.createElement("li",null,"follow Alberta\u2019s recommendations on mass gatherings"),r.a.createElement("li",null,"wash or sanitize your hands after touching communal surfaces")))))))},Ke=function(){return r.a.createElement(_.a,{style:{textAlign:"center"}},r.a.createElement("img",{alt:"",src:"".concat("/covid19-tracker","/images/svg/wash_hands.svg"),style:{maxHeight:"50vh",margin:50}}),r.a.createElement(E.a,{variant:"h4",color:"secondary",style:{textTransform:"uppercase"}},"Handwashing"),r.a.createElement(E.a,{variant:"body1",style:{width:600,margin:"20px auto",color:"#616074"}},"Regular handwashing, particularly before and after certain activities, is one of the best ways to remove germs, avoid getting sick, and prevent the spread of germs to others. It\u2019s quick, it\u2019s simple, and it can keep us all from getting sick. Handwashing is a win for everyone, except the germs."))},We=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}],Me=function(){var e=We;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Q.g,{width:600,height:400,data:e,margin:{top:50,right:20,left:20,bottom:20}},r.a.createElement(Q.b,{strokeDasharray:"3 3"}),r.a.createElement(Q.j,{dataKey:"name"}),r.a.createElement(Q.k,null),r.a.createElement(Q.i,null),r.a.createElement(Q.e,null),r.a.createElement(Q.f,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),r.a.createElement(Q.f,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"})))},Pe=Object(f.a)((function(e){return{paper:{display:"flex",flexFlow:"row wrap",padding:20,background:"#fafafa",justifyContent:"center"},cardRoot:{margin:3,flex:"1 1 400px"},flagIcon:{height:50},totalCaseGrid:{textAlign:"center"},totalCaseGridRow:{marginTop:10,color:"#504E65"}}})),Re=function(){var e="a508f1267fmshabebcdc7bbe2a6ep153534jsnd3a453b08c34",t=Object(n.useState)([]),a=Object(h.a)(t,2),c=a[0],o=a[1],i=Pe();return Object(n.useEffect)((function(){j.a.get("https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php",{method:"GET",headers:{"x-rapidapi-host":"coronavirus-monitor.p.rapidapi.com","x-rapidapi-key":e}}).then((function(e){var t=e.data.countries_stat.filter((function(e){return je.includes(e.country_name)})),a=[].concat(Object(re.a)(t),Object(re.a)(Oe)).reduce((function(e,t){return t.cases?(e[t.country_name]={},e[t.country_name].stat=Object(ne.a)({},t)):e[t.country_name]=Object(ne.a)({},e[t.country_name],{},t),e}),[]);o(Object.entries(a))})).catch((function(e){console.log(e)}))}),[e]),console.log(c),r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{container:!0},r.a.createElement(N.a,{item:!0,sm:!0},r.a.createElement(G.a,{className:i.paper},c.map((function(e){var t=e[1],a=t.stat;return r.a.createElement(F.a,{className:i.cardRoot,key:t.stat.country_name},r.a.createElement(ie.a,{className:i.totalCaseGrid,title:r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{alt:"",src:"".concat("/covid19-tracker","/icons/").concat(t.icon),className:i.flagIcon}),r.a.createElement(E.a,{variant:"h5",component:"h2"},t.stat.country_name))}),r.a.createElement(T.a,null,r.a.createElement(N.a,{container:!0},r.a.createElement(N.a,{item:!0,xs:!0,className:i.totalCaseGrid},r.a.createElement(E.a,{variant:"body1",color:"textSecondary",component:"p"},"Cases: ",a.cases)),r.a.createElement(N.a,{item:!0,xs:!0,className:i.totalCaseGrid},r.a.createElement(E.a,{variant:"body1",color:"textSecondary",component:"p"},"Deaths: ",a.deaths)),r.a.createElement(N.a,{item:!0,xs:!0,className:i.totalCaseGrid},r.a.createElement(E.a,{variant:"body1",color:"textSecondary",component:"p"},"Recovered: ",a.total_recovered)),r.a.createElement(N.a,{item:!0,xs:12,className:"".concat(i.totalCaseGrid," ").concat(i.totalCaseGridRow)},r.a.createElement(E.a,{variant:"body1",component:"p"},"Total cases per 1m population:",a.total_cases_per_1m_population)))))}))))))},Ge=(a(441),Object(s.a)({typography:{fontFamily:["Overpass","sans-serif"],h1:{color:"#343638"},h2:{color:"#343638"},h3:{color:"#343638"},h4:{color:"#343638"},h5:{color:"#343638"},h6:{color:"#343638"}},palette:{primary:{main:"#1e2023"},secondary:{main:"#EC407A"},info:{main:"#8884D8"},success:{main:"#009688"},text:{primary:"#5c5d5f",header:"#343638",activeNavLink:"#f58a97"},background:{dark:"#1E2023",card:"#eeeeef",tableHeader:"#2a2d31"},cases:{confirmed:"#EC407A",active:"#1d87da",recovered:"#009688",deaths:"#607d8b"}}}));Ge=Object(m.a)(Ge);var ze=function(){return r.a.createElement(u.a,{theme:Ge},r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,null),r.a.createElement(i.a,{basename:"/"},r.a.createElement(k,null),r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/",component:de}),r.a.createElement(l.a,{exact:!0,path:"/canada",component:De}),r.a.createElement(l.a,{exact:!0,path:"/chart",component:de}),r.a.createElement(l.a,{exact:!0,path:"/about",component:Be}),r.a.createElement(l.a,{exact:!0,path:"/mui-sandbox",component:Ke}),r.a.createElement(l.a,{exact:!0,path:"/rechart-sandbox",component:Me}),r.a.createElement(l.a,{exact:!0,path:"/rapid-api",component:Re}),r.a.createElement(l.a,{component:function(){return r.a.createElement("h1",{style:{textAlign:"center",marginTop:"50px"}},"Page not found")}})))))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ze,null)),document.getElementById("root"))}},[[238,1,2]]]);
//# sourceMappingURL=main.729fac2f.chunk.js.map