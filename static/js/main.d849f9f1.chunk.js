(this.webpackJsonpmoviedb=this.webpackJsonpmoviedb||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(2),c=n.n(s),i=n(15),r=n.n(i),o=(n(26),n(27),function(e){return e.children}),u=n(3),l=n(16),h=n(17),j=n(20),d=n(19),b=n(18),m=n.n(b),O=n(6),f=(n(46),function(e){var t=Object(s.useState)(0),n=Object(O.a)(t,2),c=n[0],i=n[1],r=Object(s.useState)([]),o=Object(O.a)(r,2),u=(o[0],o[1],function(){i(c+1)}),l=e.results.map((function(e){return Object(a.jsxs)("section",{className:"resultList",children:["Title : ",e.Title,"Year released: ",e.Year,Object(a.jsx)("button",{onClick:u,children:"Add"})]},e.id)}));return Object(a.jsxs)("div",{className:"DisplayPannel",children:[Object(a.jsxs)("strong",{children:["Searched results for: ",e.typed]}),Object(a.jsxs)("strong",{style:{textAlign:"right"},children:["Number of Nominations: ",c]}),Object(a.jsx)("ul",{children:l})]})}),g=n(5),v=(n(47),function(e){return Object(a.jsx)("input",Object(g.a)(Object(g.a)({},e),{},{className:"SearchBar",type:"text",size:"100",placeholder:"Enter movie here.."}))}),p=(n(48),function(e){return Object(a.jsx)("button",{className:"SearchButton",children:"Search"})}),x=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).handleSubmit=function(e){e.preventDefault(),console.log("here is the submit",a.state.movieName),a.state.movieName.length>1&&(a.getInfo(),a.setState({query:a.state.movieName})),console.log("here is th quer::",a.state.query)},a.handleInputChange=function(e){e.preventDefault(),console.log("Input change : ",e.target.name),a.setState(Object(u.a)({},e.target.name,e.target.value))},a.getInfo=function(){m.a.get("".concat("http://www.omdbapi.com/?i=tt3896198&apikey=cba1d777","&s=").concat(a.state.movieName)).then((function(e){var t=e.data;console.log("here is data::",t),console.log("here is data.data::",t.Response),"True"===t.Response?a.setState({results:t.Search}):alert("Please enter the movie name again!")}))},a.state={movieName:"",query:"",results:[]},a}return Object(h.a)(n,[{key:"render",value:function(){var e=this.state.movieName;return Object(a.jsxs)("div",{children:[Object(a.jsxs)("strong",{children:["Movie name is : ",e]}),Object(a.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(a.jsx)(v,{name:"movieName",onChange:this.handleInputChange}),Object(a.jsx)(p,{})]}),Object(a.jsx)(f,{typed:e,results:this.state.results})]})}}]),n}(s.Component);var N=function(){return Object(a.jsx)(o,{children:Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("header",{className:"App-header",children:Object(a.jsx)("h1",{children:"Your movie nomination list!"})}),Object(a.jsx)(x,{})]})})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,50)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),c(e),i(e)}))};r.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(N,{})}),document.getElementById("root")),S()}},[[49,1,2]]]);
//# sourceMappingURL=main.d849f9f1.chunk.js.map