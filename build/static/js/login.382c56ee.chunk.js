(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{270:function(e,a,n){e.exports={con:"login_con__TTqGg",header:"login_header__3D3a1",form:"login_form__2ZnkI",loginBtn:"login_loginBtn__dlGQL",spin:"login_spin__38DOI"}},414:function(e,a,n){"use strict";n.r(a);n(236);var t=n(248),l=n.n(t),r=(n(222),n(232)),o=n.n(r),i=(n(263),n(355)),s=n.n(i),c=(n(265),n(273)),u=n.n(c),m=(n(213),n(69)),d=n.n(m),g=n(0),p=n.n(g),E=n(270),f=n.n(E),_=n(237),h=n.n(_),w=n(33),b=n(77),y=p.a.createElement(d.a,{type:"loading",style:{fontSize:80},spin:!0}),O=u.a.Item,N=u.a.create,j={username:[{required:!0,message:"Please input your username!"}],password:[{required:!0,message:"Please input your Password!"}]};a.default=Object(w.c)(function(e){return{loading:e.loading.login,authLoading:e.loading.auth}},function(e){return{login:function(a){return e(Object(b.c)(a))},auth:function(){return e(Object(b.a)())}}})(N()(Object(g.memo)(function(e){var a=e.form,n=e.loading,t=e.login,r=e.authLoading,i=e.auth,c=a.getFieldDecorator,m=a.validateFields;Object(g.useEffect)(function(){i()},[i]);return p.a.createElement(h.a,{title:"\u767b\u5f55"},p.a.createElement(l.a,{indicator:y,spinning:r,wrapperClassName:f.a.spin},p.a.createElement("main",{className:f.a.con},p.a.createElement("header",{className:f.a.header},p.a.createElement("h1",null,"REACT BACKEND BOILERPLATE")),p.a.createElement("section",{className:f.a.form},p.a.createElement(u.a,null,p.a.createElement(O,null,c("username",{rules:j.username})(p.a.createElement(s.a,{size:"large",autoFocus:!0,placeholder:"\u8d26\u53f7"}))),p.a.createElement(O,null,c("passsword",{rules:j.password})(p.a.createElement(s.a,{size:"large",type:"password",placeholder:"\u5bc6\u7801"}))),p.a.createElement(O,null,p.a.createElement(o.a,{loading:n,className:f.a.loginBtn,size:"large",type:"primary",onClick:function(){m(function(e,a){e||(console.log(a),t(a))})}},"\u767b\u5f55")))))))})))}}]);
//# sourceMappingURL=login.382c56ee.chunk.js.map