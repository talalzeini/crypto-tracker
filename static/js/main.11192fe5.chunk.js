(this["webpackJsonpcrypto-tracker"]=this["webpackJsonpcrypto-tracker"]||[]).push([[0],{11:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(4),s=c.n(a),i=(c(9),c(3)),o=c.n(i),d=c(0);var p=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{className:"test",children:"Crypto Tracker"}),Object(d.jsx)("div",{id:"data"})]})};window.onload=function(){o()(document).ready((function(){o.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false",(function(e){for(var t=0;t<e.length;t++)document.getElementById("data").innerHTML+="<button class='crypto'><img id='"+t+"' src='"+e[t].image+"'alt='' class='img'><p  class='name'>"+e[t].name+"</p><p class='price'>$ "+((""+e[t].current_price).replace(/(\d)(?=(\d\d\d)+(?!\d))/g,(function(e){return e+","}))+" USD</p></button>")}))}))},s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root"))},9:function(e,t,c){}},[[11,1,2]]]);
//# sourceMappingURL=main.11192fe5.chunk.js.map