(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{117:function(e,t,n){e.exports=n(203)},12:function(e,t,n){"use strict";n.d(t,"b",function(){return c});var a=n(48),o=n(29),r={login:!1,auth:!0},c=function(e){return{type:"SET_LOADING",payload:{scope:e.scope,loading:e.loading}}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,t=arguments.length>1?arguments[1]:void 0;return"SET_LOADING"===t.type?Object(o.a)({},e,Object(a.a)({},t.payload.scope,t.payload.loading)):e}},122:function(e,t,n){},203:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(13),c=n.n(r),u=(n(122),n(108)),i=n(62),l=n(42),s=n(35),d=n(33),b=n(23),f=n(102),p=n(103),g=n.n(p),O=n(77),m=n(12),h=n(98),j=n(16),v=Object(j.a)(),w=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||b.d,y=Object(b.c)({router:Object(s.b)(v),global:O.b,loading:m.a}),k=Object(b.e)(y,{},w(Object(b.a)(Object(h.a)(v),f.a,g.a))),I=Object(i.a)(function(){return Promise.all([n.e(0),n.e(8),n.e(4)]).then(n.bind(null,414))}),_=Object(i.a)(function(){return Promise.all([n.e(0),n.e(9),n.e(2)]).then(n.bind(null,419))});var L=Object(u.hot)(function(){return o.a.createElement(d.a,{store:k},o.a.createElement(s.a,{history:v},o.a.createElement(l.d,null,o.a.createElement(l.b,{component:I,path:"/login",exact:!0}),o.a.createElement(l.b,{component:_,path:"/"}))))});c.a.render(o.a.createElement(L,null),document.getElementById("root"))},62:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(64),c=n.n(r),u=n(100),i=n.n(u),l=function(){return Object(a.useEffect)(function(){return c.a.start(),c.a.done},[]),o.a.createElement(o.a.Fragment,null)};t.a=function(e){return i()({loader:e,loading:l})}},77:function(e,t,n){"use strict";var a,o=n(29),r=n(37),c=n.n(r),u=(n(128),n(67)),i=n.n(u),l=n(66);!function(e){e.LOGIN_SUC="global/login-suc",e.LOGIN_FAIL="global/login-fail",e.AUTH_SUC="global/auth-suc",e.AUTH_FAIL="global/auth-fail",e.LOGOUT="globa/logout"}(a||(a={}));var s=n(12),d=n(104),b=n.n(d).a.create({baseURL:"https://www.easy-mock.com/mock/5cbfd4faeabcf940f34c10bb/api",timeout:1e4,withCredentials:!0});b.interceptors.response.use(function(e){return e},function(e){var t=e.response;return t&&t.data&&t.data.message?Promise.reject({message:t.data.message}):Promise.reject({message:"\u672a\u77e5\u9519\u8bef"})});var f,p=b,g=function(e){return p.request({url:"/login",method:"post",data:e})};!function(e){e.login="login",e.auth="auth"}(f||(f={}));var O=n(3),m=n(83);n.d(t,"c",function(){return w}),n.d(t,"a",function(){return y}),n.d(t,"d",function(){return k});var h=function(e){return{type:a.LOGIN_SUC,payload:e}},j=function(e){return{type:a.LOGIN_FAIL,payload:e}},v=function(e){return{type:a.AUTH_FAIL,payload:e}},w=function(e){return function(){var t=Object(l.a)(c.a.mark(function t(n){var a,o;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n(Object(s.b)({scope:f.login,loading:!0})),t.prev=1,t.next=4,g(e);case 4:a=t.sent,o=a.data.token,localStorage.setItem("token",o),n(h({token:o})),n(Object(s.b)({scope:f.login,loading:!1})),n(Object(O.d)("/")),t.next=17;break;case 12:t.prev=12,t.t0=t.catch(1),n(Object(s.b)({scope:f.login,loading:!1})),n(j(t.t0)),i.a.error({message:"\u767b\u5f55\u5931\u8d25",description:t.t0.message});case 17:case"end":return t.stop()}},t,null,[[1,12]])}));return function(e){return t.apply(this,arguments)}}()},y=function(){return function(){var e=Object(l.a)(c.a.mark(function e(t){var n,o,r,u;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(Object(m.a)()){e.next=4;break}-1===window.location.href.indexOf("login")?t(Object(O.d)("/login")):t(Object(s.b)({scope:f.auth,loading:!1})),e.next=24;break;case 4:return t(Object(s.b)({scope:f.auth,loading:!0})),e.prev=5,e.next=8,p.request({url:"/auth"});case 8:n=e.sent,o=n.data,r=o.username,u=o.routes,t((c={username:r,routes:u},{type:a.AUTH_SUC,payload:c})),t(Object(s.b)({scope:f.auth,loading:!1})),window.location.href.indexOf("login")>-1&&t(Object(O.d)("/")),e.next=24;break;case 17:e.prev=17,e.t0=e.catch(5),t(Object(s.b)({scope:f.auth,loading:!1})),localStorage.setItem("token",""),-1===window.location.href.indexOf("login")&&t(Object(O.d)("/login")),t(v(e.t0)),i.a.error({message:"\u83b7\u53d6\u57fa\u672c\u4fe1\u606f",description:e.t0.message});case 24:case"end":return e.stop()}var c},e,null,[[5,17]])}));return function(t){return e.apply(this,arguments)}}()},k=function(){return function(e){e({type:a.LOGOUT}),localStorage.setItem("token",""),e(Object(O.d)("/login"))}},I={token:localStorage.getItem("token")||"",username:"",routes:[]};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.LOGIN_SUC:return Object(o.a)({},e,{token:t.payload.token});case a.LOGIN_FAIL:case a.LOGOUT:case a.AUTH_FAIL:return Object(o.a)({},e,{token:"",username:"",routes:[]});case a.AUTH_SUC:return Object(o.a)({},e,t.payload);default:return e}}},83:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var a=function(){return!!localStorage.getItem("token")}}},[[117,6,7]]]);
//# sourceMappingURL=main.c018130e.chunk.js.map