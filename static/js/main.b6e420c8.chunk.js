(this["webpackJsonpcrypto-tracker"]=this["webpackJsonpcrypto-tracker"]||[]).push([[0],{10:function(e,t,c){},11:function(e,t,c){},13:function(e,t,c){"use strict";c.r(t);var r=c(1),s=c.n(r),n=c(4),a=c.n(n),i=c(3),l=(c(10),c(5)),h=c.n(l),j=(c(11),c(0));var p=function(){return Object(j.jsx)("footer",{className:"mt-5",children:Object(j.jsxs)("div",{className:"d-{block} m-auto text-center",children:[Object(j.jsx)("h5",{children:"COVID-19 Tracker"}),Object(j.jsxs)("div",{className:"footer-stuff",children:[Object(j.jsx)("a",{href:"./html/charts.html",children:"Charts"}),Object(j.jsx)("a",{href:"https://talalzeini.com/",children:"Portfolio"}),Object(j.jsx)("a",{href:"https://telzeini.web.app",children:"Tree"})]}),Object(j.jsx)("p",{className:"copyright-text",children:"Copyright \xa9 2022 Talal El Zeini"})]})})};var o=function(){var e=Object(r.useState)([]),t=Object(i.a)(e,2),c=t[0],s=t[1],n=Object(r.useState)([]),a=Object(i.a)(n,2);return a[0],a[1],Object(r.useEffect)((function(){fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false").then((function(e){return e.json()})).then((function(e){return s(e)}))}),[]),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{className:"test",children:"Fun Crypto Tracking Terminal"}),Object(j.jsx)("h4",{className:"test",children:"Track popular coins, and analyze price changes with ease"}),Object(j.jsxs)("table",{id:"table",className:"tableClass",children:[Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{style:{margin:"10px"}}),Object(j.jsx)("th",{style:{margin:"10px"}}),Object(j.jsx)("th",{style:{margin:"10px"},children:"Name"}),Object(j.jsx)("th",{style:{margin:"10px"},children:"Price"}),Object(j.jsx)("th",{style:{margin:"10px"},children:"Change (24H) "}),Object(j.jsx)("th",{style:{padding:"20px",margin:"10px"},class:"optional",children:"Market Cap"})]}),c.map((function(e){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:e.market_cap_rank}),Object(j.jsx)("th",{children:Object(j.jsx)("img",{className:"table-image",src:e.image,alt:h()()})}),Object(j.jsx)("th",{children:e.name}),Object(j.jsxs)("th",{children:["$",e.current_price]}),e.price_change_percentage_24h<0&&Object(j.jsxs)("th",{style:{color:"red",border:"none"},children:[e.price_change_percentage_24h,"%"]}),e.price_change_percentage_24h>0&&Object(j.jsxs)("th",{style:{color:"green",border:"none"},children:[e.price_change_percentage_24h,"%"]}),Object(j.jsxs)("th",{class:"optional",style:{padding:"20px",fontSize:"12px "},children:["$",e.market_cap]})]})}))]}),Object(j.jsx)(p,{})]})};a.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(o,{})}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.b6e420c8.chunk.js.map