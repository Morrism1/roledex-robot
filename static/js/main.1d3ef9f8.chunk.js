(this["webpackJsonpmonsters-deckx"]=this["webpackJsonpmonsters-deckx"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(20)},,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(3),c=n.n(o),s=(n(14),n(1)),i=n.n(s),l=n(4),u=n(5),m=n(6),h=n(8),d=n(7),f=(n(16),n(17),n(18),function(e){return a.a.createElement("div",{className:"card-container"},a.a.createElement("img",{src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=180x180"),alt:"monster"}),a.a.createElement("h2",null,e.monster.name),a.a.createElement("p",null,e.monster.email))}),p=function(e){return a.a.createElement("div",{className:"card-list"}," ",e.monsters.map((function(e){return a.a.createElement(f,{key:e.id,monster:e})})))},v=(n(19),function(e){var t=e.placeholder,n=e.handleChange;return a.a.createElement("input",{className:"search",type:"search",placeholder:t,onChange:n})}),E=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).state={monsters:[],searchField:""},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){return t.setState({monsters:e})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,n=t.monsters,r=t.searchField,o=n.filter((function(e){return e.name.toLowerCase().includes(r.toLowerCase())}));return a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"Monsters Roledex"),a.a.createElement(v,{placeholder:"Enter monster name",handleChange:function(t){return e.setState({searchField:t.target.value})}}),a.a.createElement(p,{monsters:o}))}}]),n}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.1d3ef9f8.chunk.js.map