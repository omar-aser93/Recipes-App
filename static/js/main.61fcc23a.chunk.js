(this.webpackJsonpfood_recipes=this.webpackJsonpfood_recipes||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(4),i=n.n(r),o=(n(12),n(13),n(2)),l=n.n(o),s=n(5),u=n(1),m=function(e){var t=e.title,n=e.ingredients,a=e.calories,r=e.image;return c.a.createElement("div",{className:"recpieDetail"},c.a.createElement("h1",null,t),c.a.createElement("hr",null),c.a.createElement("ul",null,n.map((function(e){return c.a.createElement("li",null,e.text)}))," "),c.a.createElement("p",null," calories : ",a),c.a.createElement("img",{src:r,alt:t}))},p=n(6),f=n.n(p),h=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)(""),o=Object(u.a)(i,2),p=o[0],h=o[1],d=Object(a.useState)("chicken"),E=Object(u.a)(d,2),v=E[0],b=E[1];Object(a.useEffect)((function(){g()}),[v]);var g=function(){var e=Object(s.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(v,"&app_id=").concat("6fa4e747","&app_key=").concat("60328fb9a6d3b25839cc084927c8ca33"));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,r(n.hits);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",{onSubmit:function(e){e.preventDefault(),b(p),h("")}},c.a.createElement("form",{className:"recipe_form"},c.a.createElement("input",{className:"recipe_input",type:"search",placeholder:"Enter the meal name",value:p,onChange:function(e){return h(e.target.value)}}),c.a.createElement("button",{className:"recipe_button",type:"submit"}," search ")),c.a.createElement("div",{className:"recipesList"}," ",n.map((function(e){return c.a.createElement(m,{key:f()(),title:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,ingredients:e.recipe.ingredients})}))))};var d=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.61fcc23a.chunk.js.map