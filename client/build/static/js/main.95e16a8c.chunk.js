(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{178:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(14),c=a.n(i),s=a(28),o=a(17),l=a(12),j=a.n(l),d=a(18),u=a(7),b=a(212),m=a(70),h=a(213),x=a(53),p=a(210),O=a(209),f=a(123),g=Object(f.a)({palette:{primary:{main:"#ffff"},secondary:{main:"#11cb5f"}}}),v=a(2),y=Object(x.a)((function(e){return{root:{position:"fixed",flexDirection:"column",top:"94vh",minHeight:"104vh",textAlign:"center",width:"100vw"},footer:{padding:e.spacing(3,2),marginTop:"auto",backgroundColor:(e.palette.type,e.palette.grey[800])},text:{color:"#ffffff"}}}));function w(){var e=y();return Object(v.jsx)(O.a,{theme:g,children:Object(v.jsxs)("div",{className:e.root,children:[Object(v.jsx)(p.a,{}),Object(v.jsx)(b.a,{component:"main",className:e.main,maxWidth:"sm"}),Object(v.jsx)("footer",{className:e.footer,children:Object(v.jsxs)(m.a,{variant:"body2",className:e.text,children:["Made with \u2764\ufe0f by ",Object(v.jsx)(h.a,{color:"inherit",href:"https://www.linkedin.com/in/chirag-jaju-3a2b01205/",children:"Chirag Jaju"})," ",(new Date).getFullYear(),"."]})})]})})}var C=a(229),S=a(214),N=a(215),A=a(16),P=a.n(A),F=Object(n.createContext)();function I(e){var t=Object(n.useState)(void 0),a=Object(u.a)(t,2),r=a[0],i=a[1],c=Object(n.useState)(""),s=Object(u.a)(c,2),o=s[0],l=s[1],b=Object(n.useState)([{Pid:"",Pemail:"",Pname:"",Parrival:"",Pdestination:"",PdateAndTime:{date:"",month:"",year:"",hour:"",min:""},Preq:[{name:"",email:""}]}]),m=Object(u.a)(b,2),h=m[0],x=m[1],p=Object(n.useState)({name:"",email:""}),O=Object(u.a)(p,2),f=O[0],g=O[1];function y(){return w.apply(this,arguments)}function w(){return(w=Object(d.a)(j.a.mark((function e(){var t,a,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.get("/api/loggedIn");case 2:(t=e.sent).data.base64&&(a=JSON.parse(atob(t.data.base64)),n=a.user,l(n)),i(t.data.value);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){y()}),[]),Object(v.jsx)(F.Provider,{value:{loggedIn:r,getLoggedIn:y,userID:o,setUserID:l,userInfo:f,setUserInfo:g,notes:h,setNotes:x},children:e.children})}var k=F,T=a(81),D=a.n(T),q=Object(x.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)},div:{height:"100vh"}}}));function B(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(""),c=Object(u.a)(i,2),s=c[0],o=c[1],l=Object(n.useState)(void 0),h=Object(u.a)(l,2),x=h[0],O=h[1],f=q(),g=Object(n.useContext)(k).getLoggedIn,y=function(){var e=Object(d.a)(j.a.mark((function e(t){var n,i,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,n={email:s,password:a},e.next=5,P.a.post("/api/login",n);case 5:i=e.sent,c=i.data.value,O(c),c&&(o(""),r("")),g(),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)("div",{className:f.div,children:[Object(v.jsxs)(b.a,{component:"main",maxWidth:"xs",children:[Object(v.jsx)(p.a,{}),Object(v.jsxs)("div",{className:f.paper,children:[Object(v.jsx)(C.a,{className:f.avatar,children:Object(v.jsx)(D.a,{})}),Object(v.jsx)(m.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(v.jsxs)("form",{className:f.form,noValidate:!0,children:[Object(v.jsx)(S.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"off",autoFocus:!0,type:"email",value:s,onChange:function(e){o(e.target.value)}}),Object(v.jsx)(S.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"off",value:a,onChange:function(e){r(e.target.value)}}),Object(v.jsx)(N.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:f.submit,onClick:y,children:"Sign In"}),!1===x&&Object(v.jsx)(m.a,{style:{color:"#ff0000"},children:"Invalid Email or Password!"})]})]})]}),Object(v.jsx)(w,{})]})}var E=a(183),z=a(218),W=a(216),R=a(217),H=a(227),M=a(187),L=a(184),V=a(83),J=a(19),U=a(219),K=a(228),Y=a(188),_=Object(x.a)((function(e){return{card:{margin:"2.5vw 2.5vw",backgroundColor:"#DEE3E3",width:"95vw",padding:"20px"},root:{alignItems:"center"},formControl:{margin:e.spacing(0),width:"200px"},submitButton:{marginTop:"20px"},text:{color:"#33AB3E"}}}));var G=function(){var e=_(),t=Object(n.useState)("Airport"),a=Object(u.a)(t,2),r=a[0],i=a[1],c=Object(n.useState)("Campus"),o=Object(u.a)(c,2),l=o[0],b=o[1],h=Object(n.useState)(new Date),x=Object(u.a)(h,2),p=x[0],O=x[1],f=Object(n.useState)(!1),g=Object(u.a)(f,2),y=g[0],C=g[1],S=Object(n.useState)(),A=Object(u.a)(S,2),F=A[0],I=A[1],T=Object(n.useState)(void 0),D=Object(u.a)(T,2),q=D[0],B=D[1],G=Object(n.useContext)(k),Q=G.userID,X=G.setUserInfo,Z=G.userInfo,$=G.setNotes,ee=function(e){O(e)};Object(n.useEffect)((function(){(function(){var e=Object(d.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.get("/api/posts");case 2:t=e.sent,$(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[$]),Object(n.useEffect)((function(){var e,t=new Date,a=new Date(p);I((e=t,a.getTime()-e.getTime()<=-3e5))}),[p]),Object(n.useEffect)((function(){function e(){return(e=Object(d.a)(j.a.mark((function e(){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.get("/api/userInfo/"+Q);case 2:t=e.sent,a=t.data,X({name:a.name,email:a.email});case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[Q,X]);var te=function(){var e=Object(d.a)(j.a.mark((function e(t){var a,n,i,c,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),r!==l){e.next=7;break}return C(!0),B(void 0),e.abrupt("return");case 7:C(!1);case 8:if(!F){e.next=11;break}return B(void 0),e.abrupt("return");case 11:return a=new Date(p),n={date:a.getDate(),month:a.getMonth()+1,year:a.getFullYear(),hour:a.getHours(),min:a.getMinutes(),data:p},i={id:Q,name:Z.name,email:Z.email,dateAndTime:n,arrival:r,destination:l},e.next=16,P.a.post("/api/post/submit",i);case 16:c=e.sent,s=c.data.value,B(s);case 19:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)("div",{className:e.root,children:[Object(v.jsxs)(m.a,{variant:"h3",style:{margin:"1vw 2.5vw 0"},children:["Hello ",Z.name,","]}),Object(v.jsxs)(W.a,{variant:"outlined",className:e.card,children:[Object(v.jsx)(m.a,{variant:"h4",children:"Create Request:"}),Object(v.jsx)("form",{className:e.form,noValidate:!0,children:Object(v.jsxs)(R.a,{children:[Object(v.jsxs)(z.a,{container:!0,direction:"row",justifyContent:"flex-start",alignItems:"flex-start",children:[Object(v.jsx)(z.a,{item:!0,xs:6,children:Object(v.jsxs)(E.a,{required:!0,className:e.formControl,children:[Object(v.jsx)(Y.a,{id:"demo-simple-select-required-label",children:"Arrival"}),Object(v.jsxs)(M.a,{labelId:"demo-simple-select-required-label",id:"demo-simple-select-required",value:r,onChange:function(e){i(e.target.value)},className:e.selectEmpty,children:[Object(v.jsx)(H.a,{value:"Campus",children:"Campus"}),Object(v.jsx)(H.a,{value:"Airport",children:"Airport"}),Object(v.jsx)(H.a,{value:"Bustop",children:"Bustop"})]}),Object(v.jsx)(L.a,{children:"Required"})]})}),Object(v.jsx)(z.a,{item:!0,xs:6,children:Object(v.jsxs)(E.a,{required:!0,className:e.formControl,children:[Object(v.jsx)(Y.a,{id:"demo-simple-select-required-label",children:"Destination"}),Object(v.jsxs)(M.a,{labelId:"demo-simple-select-required-label",id:"demo-simple-select-required",value:l,onChange:function(e){b(e.target.value)},className:e.selectEmpty,children:[Object(v.jsx)(H.a,{value:"Campus",children:"Campus"}),Object(v.jsx)(H.a,{value:"Airport",children:"Airport"}),Object(v.jsx)(H.a,{value:"Bustop",children:"Bustop"})]}),Object(v.jsx)(L.a,{children:"Required"})]})}),Object(v.jsxs)(J.a,{utils:V.a,children:[Object(v.jsx)(z.a,{item:!0,xs:6,children:Object(v.jsx)(U.a,{margin:"normal",id:"date-picker-dialog",label:"Arrival Date",format:"dd/MM/yyyy",value:p,onChange:ee,KeyboardButtonProps:{"aria-label":"change date"}})}),Object(v.jsx)(z.a,{item:!0,xs:6,children:Object(v.jsx)(K.a,{margin:"normal",id:"time-picker",label:"Arrival Time",value:p,onChange:ee,KeyboardButtonProps:{"aria-label":"change time"}})})]}),Object(v.jsx)(N.a,{variant:"contained",style:{backgroundColor:"#FF1268",color:"#FFFFFF"},className:e.submitButton,onClick:te,children:"Submit"})]}),!0===y&&Object(v.jsx)(m.a,{variant:"h6",color:"error",children:"Please Choose Different Places!"}),!0===F&&Object(v.jsx)(m.a,{variant:"h6",color:"error",children:"Please Enter a Valid Date!"}),!0===q&&Object(v.jsx)(m.a,{variant:"h6",className:e.text,children:"Form successfully Submitted!"}),!1===q&&Object(v.jsx)(m.a,{variant:"h6",color:"error",children:"Form was not submitted. Please check for duplication."})]})})]}),Object(v.jsxs)(m.a,{variant:"h4",style:{margin:"1vw 2.5vw 0"},children:["To see your Posts click"," ",Object(v.jsx)(s.b,{to:"./yourposts",style:{color:"#FF1268"},children:"here"})]}),Object(v.jsx)(w,{})]})},Q=Object(x.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));function X(){var e=Q(),t=Object(n.useContext)(k).getLoggedIn,a=Object(n.useState)(""),r=Object(u.a)(a,2),i=r[0],c=r[1],s=Object(n.useState)(""),o=Object(u.a)(s,2),l=o[0],h=o[1],x=Object(n.useState)(""),O=Object(u.a)(x,2),f=O[0],g=O[1],y=Object(n.useState)(void 0),A=Object(u.a)(y,2),F=A[0],I=A[1],T=Object(n.useState)(void 0),q=Object(u.a)(T,2),B=q[0],E=q[1],W=void 0,R=function(){var e=Object(d.a)(j.a.mark((function e(a){var n,r,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),0!==i.trim().length&&0!==l.trim().length&&0!==f.trim().length&&l.trim().includes("@")?(W=!0,I(!0)):(W=!1,I(!1)),n={name:i,email:l,password:f},!W){e.next=11;break}return e.next=6,P.a.post("/api/signup",n);case 6:r=e.sent,(s=r.data).value&&(h(""),c(""),g("")),E(s.value),t();case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)("div",{children:[Object(v.jsxs)(b.a,{component:"main",maxWidth:"xs",children:[Object(v.jsx)(p.a,{}),Object(v.jsxs)("div",{className:e.paper,children:[Object(v.jsx)(C.a,{className:e.avatar,children:Object(v.jsx)(D.a,{})}),Object(v.jsx)(m.a,{component:"h1",variant:"h5",children:"Sign up"}),Object(v.jsxs)("form",{className:e.form,noValidate:!0,children:[Object(v.jsxs)(z.a,{container:!0,spacing:2,children:[Object(v.jsx)(z.a,{item:!0,xs:12,children:Object(v.jsx)(S.a,{autoComplete:"off",name:"Name",variant:"outlined",required:!0,fullWidth:!0,id:"Name",label:"Name",autoFocus:!0,onChange:function(e){c(e.target.value)},value:i})}),Object(v.jsx)(z.a,{item:!0,xs:12,children:Object(v.jsx)(S.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"off",onChange:function(e){h(e.target.value)},value:l,type:"email"})}),Object(v.jsx)(z.a,{item:!0,xs:12,children:Object(v.jsx)(S.a,{variant:"outlined",fullWidth:!0,name:"password",label:"Password",required:!0,type:"password",id:"password",autoComplete:"current-password",onChange:function(e){g(e.target.value)},value:f})})]}),Object(v.jsx)(N.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:R,children:"Sign Up"}),!1===F&&Object(v.jsx)(m.a,{style:{color:"#ff0000"},children:"Please Enter Valid Information!"}),!1===B&&Object(v.jsx)(m.a,{style:{color:"#ff0000"},children:"This Email is already Registered, Please Login."})]})]})]}),Object(v.jsx)(w,{})]})}var Z=a(225),$=Object(x.a)((function(e){return{card:{margin:"1vw 1.5vw",backgroundColor:"#E0E0E0",padding:"2vw"},arrow:{fontSize:"h6.fontSize",color:e.palette.grey[800],display:"inline"},gridItem:{marginBottom:"25px"},text:{color:"#33AB3E"},textFalse:{color:"#FF0000"}}}));function ee(e){var t=$(),a=Object(n.useState)(void 0),r=Object(u.a)(a,2),i=r[0],c=r[1],s=Object(n.useContext)(k).userInfo,o=function(){var t=Object(d.a)(j.a.mark((function t(a){var n,r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={Rname:s.name,Remail:s.email},t.next=3,P.a.post("/api/posts/request/"+e.post._id,n);case 3:r=t.sent,c(r.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(v.jsx)(z.a,{item:!0,xs:12,md:6,children:Object(v.jsx)(Z.a,{display:"inline-block",children:Object(v.jsx)(W.a,{variant:"outlined",className:t.card,children:Object(v.jsxs)(z.a,{container:!0,direction:"row",justifyContent:"flex-start",alignItems:"flex-start",children:[Object(v.jsxs)(z.a,{item:!0,xs:5,className:t.gridItem,children:[Object(v.jsx)(Z.a,{fontSize:"h4.fontSize",color:"fontWeightBold",display:"inline",children:e.post.Parrival}),Object(v.jsx)("hr",{})]}),Object(v.jsxs)(z.a,{item:!0,xs:2,className:t.gridItem,children:[Object(v.jsx)(Z.a,{className:t.arrow,display:"inline",fontSize:"h4.fontSize",children:Object(v.jsx)("i",{class:"fas fa-arrow-right"})}),Object(v.jsx)("hr",{})]}),Object(v.jsxs)(z.a,{item:!0,xs:5,style:{textAlign:"right"},className:t.gridItem,children:[Object(v.jsx)(Z.a,{fontSize:"h4.fontSize",color:"fontWeightBold",display:"inline",textAlign:"right",children:e.post.Pdestination}),Object(v.jsx)("hr",{})]}),Object(v.jsx)(z.a,{item:!0,xs:6,className:t.gridItem,children:Object(v.jsxs)(Z.a,{fontSize:"h5.fontSize",color:"fontWeightBold",display:"inline",children:["Date: ",e.post.PdateAndTime.date,"/",e.post.PdateAndTime.month,"/",e.post.PdateAndTime.year]})}),Object(v.jsx)(z.a,{item:!0,xs:6,style:{textAlign:"right"},className:t.gridItem,children:Object(v.jsxs)(Z.a,{fontSize:"h5.fontSize",color:"fontWeightBold",display:"inline",textAlign:"right",children:[" Time: ",e.post.PdateAndTime.hour<12?e.post.PdateAndTime.hour:e.post.PdateAndTime.hour-12,":",e.post.PdateAndTime.min>=10?e.post.PdateAndTime.min:"0"+e.post.PdateAndTime.min,e.post.PdateAndTime.hour<12?" am":" pm"]})}),Object(v.jsx)(z.a,{item:!0,xs:6,className:t.gridItem,children:Object(v.jsx)(Z.a,{fontSize:"h5.fontSize",color:"fontWeightBold",display:"inline",children:e.post.Pname})}),Object(v.jsx)(z.a,{item:!0,xs:6,style:{textAlign:"right"},className:t.gridItem,children:Object(v.jsx)(Z.a,{fontSize:"h5.fontSize",color:"fontWeightBold",display:"inline",textAlign:"right",children:e.post.Pemail})}),Object(v.jsx)(N.a,{variant:"contained",style:{backgroundColor:"#FF005D",color:"#FFFFFF"},className:t.submitButton,onClick:o,children:"Request"}),!0===i&&Object(v.jsx)(m.a,{variant:"h6",className:t.text,children:"Request Successfully Submitted!"}),!1===i&&Object(v.jsx)(m.a,{variant:"h6",className:t.textFalse,children:"Request was already sent."})]})})})})}var te=function(){var e=Object(n.useContext)(k),t=e.notes,a=e.setNotes,r=new Date,i=t.filter((function(e){return new Date(e.PdateAndTime.data).getTime()-r.getTime()>=0}));return Object(n.useEffect)((function(){(function(){var e=Object(d.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.get("/api/posts");case 2:t=e.sent,a(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[a,t]),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("div",{style:{padding:"0 2.5vw 50px"},children:Object(v.jsx)(z.a,{container:!0,direction:"row",justifyContent:"flex-start",alignItems:"flex-start",children:i.map((function(e){return Object(v.jsx)(ee,{post:e})}))})}),Object(v.jsx)(w,{})]})};function ae(e){return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)(Z.a,{fontSize:"h6.fontSize",color:"fontWeightBold",children:["From: ",e.req.name," \xa0||\xa0 Email: ",e.req.email]})})}var ne=Object(x.a)((function(e){return{card:{margin:"2.5vw 2.5vw",backgroundColor:"#E0E0E0",width:"95vw",padding:"20px"},arrow:{fontSize:"h6.fontSize",color:e.palette.grey[800],display:"inline"},gridItem:{marginBottom:"25px"}}}));function re(e){var t=ne();return Object(v.jsx)(W.a,{variant:"outlined",className:t.card,children:Object(v.jsxs)(z.a,{container:!0,direction:"row",justifyContent:"flex-start",alignItems:"flex-start",children:[Object(v.jsx)(z.a,{item:!0,xs:5,className:t.gridItem,children:Object(v.jsx)(Z.a,{fontSize:"h4.fontSize",color:"fontWeightBold",display:"inline",children:e.post.Parrival})}),Object(v.jsx)(z.a,{item:!0,xs:2,className:t.gridItem,children:Object(v.jsx)(Z.a,{className:t.arrow,display:"inline",fontSize:"h4.fontSize",children:Object(v.jsx)("i",{class:"fas fa-arrow-right"})})}),Object(v.jsx)(z.a,{item:!0,xs:5,style:{textAlign:"right"},className:t.gridItem,children:Object(v.jsx)(Z.a,{fontSize:"h4.fontSize",color:"fontWeightBold",display:"inline",textAlign:"right",children:e.post.Pdestination})}),Object(v.jsx)(z.a,{item:!0,xs:6,className:t.gridItem,children:Object(v.jsxs)(Z.a,{fontSize:"h5.fontSize",color:"fontWeightBold",display:"inline",children:["Date: ",e.post.PdateAndTime.date,"/",e.post.PdateAndTime.month,"/",e.post.PdateAndTime.year]})}),Object(v.jsx)(z.a,{item:!0,xs:6,style:{textAlign:"right"},className:t.gridItem,children:Object(v.jsxs)(Z.a,{fontSize:"h5.fontSize",color:"fontWeightBold",display:"inline",textAlign:"right",children:[" Time: ",e.post.PdateAndTime.hour<12?e.post.PdateAndTime.hour:e.post.PdateAndTime.hour-12,":",e.post.PdateAndTime.min>=10?e.post.PdateAndTime.min:"0"+e.post.PdateAndTime.min,e.post.PdateAndTime.hour<12?" am":" pm"]})}),e.post.Preq.map((function(e){return Object(v.jsx)(z.a,{item:!0,xs:12,children:Object(v.jsx)(ae,{req:e})})}))]})})}function ie(){var e=Object(n.useContext)(k),t=e.userID,a=e.notes,r=e.setNotes,i=new Date,c=[];Object(n.useEffect)((function(){(function(){var e=Object(d.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.get("/api/posts");case 2:t=e.sent,r(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[r,a]);var s=a.filter((function(e){return e.Pid===t&&(new Date(e.PdateAndTime.data).getTime()-i.getTime()>=0||(c.push(e),!1))}));return Object(v.jsxs)(v.Fragment,{children:[0===s.length&&0===c.length&&Object(v.jsx)(m.a,{variant:"h4",style:{margin:"1vw 1vw"},children:"No posts to Display."}),s.map((function(e){return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(re,{post:e})})})),0!==c.length&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("hr",{color:"red"}),Object(v.jsx)(m.a,{variant:"h4",style:{margin:"1vw 2.5vw 0"},children:"Request History:"})]}),c.map((function(e){return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(re,{post:e})})}))]})}var ce=a(92),se=a(221),oe=a(222),le=a(223),je=a(220),de=a(224),ue=a(122),be=a.n(ue);var me=function(){var e=Object(n.useContext)(k).getLoggedIn,t=Object(o.f)(),a=function(){var a=Object(d.a)(j.a.mark((function a(n){return j.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),a.next=3,P.a.get("/api/logout");case 3:return a.next=5,e();case 5:t.push("/login");case 6:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return Object(v.jsx)(N.a,{color:"#ffffff",variant:"contained",onClick:a,children:"Log Out"})},he=function(e){return Object(v.jsx)(N.a,{color:"#ffffff",variant:"contained",style:{marginRight:"1vw"},children:e.children})},xe=Object(x.a)((function(e){return{logOut:{textAlign:"right"}}})),pe=function(){var e=xe();return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)(z.a,{xs:11,md:6,className:e.logOut,children:[Object(v.jsx)(he,{children:Object(v.jsx)(s.b,{to:"/filter",style:{textDecoration:"none",color:"#424242"},children:"Filter"})}),Object(v.jsx)(he,{children:Object(v.jsx)(s.b,{to:"/posts",style:{textDecoration:"none",color:"#424242"},children:"All Posts"})}),Object(v.jsx)(me,{})]})})},Oe=Object(x.a)((function(e){return{logOut:{textAlign:"right"}}})),fe=function(e){var t=Oe();return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)(z.a,{item:!0,xs:11,md:6,className:t.logOut,children:[Object(v.jsx)(he,{children:Object(v.jsx)(s.b,{to:"./login",style:{textDecoration:"none",color:"#424242"},children:"Login"})}),Object(v.jsx)(he,{children:Object(v.jsx)(s.b,{to:"/signup",style:{textDecoration:"none",color:"#424242"},children:"Signup"})})]})})},ge=Object(x.a)((function(e){return{root:{position:"fixed",bottom:e.spacing(8),right:e.spacing(2)}}}));function ve(e){var t=e.children,a=e.window,n=ge(),r=Object(se.a)({target:a?a():void 0,disableHysteresis:!0,threshold:100});return Object(v.jsx)(oe.a,{in:r,children:Object(v.jsx)("div",{onClick:function(e){var t=(e.target.ownerDocument||document).querySelector("#back-to-top-anchor");t&&t.scrollIntoView({behavior:"smooth",block:"center"})},role:"presentation",className:n.root,children:t})})}function ye(e){var t=Object(n.useContext)(k).loggedIn;return Object(v.jsxs)(r.a.Fragment,{children:[Object(v.jsx)(p.a,{}),Object(v.jsx)(le.a,{style:{background:"#424242"},children:Object(v.jsx)(je.a,{children:Object(v.jsxs)(z.a,{container:!0,direction:"row",justifyContent:"flex-start",alignItems:"center",children:[Object(v.jsx)(z.a,{item:!0,xs:1,md:6,children:Object(v.jsx)(N.a,{color:"#ffffff",variant:"contained",children:Object(v.jsx)(s.b,{to:"/",style:{textDecoration:"none",color:"#424242"},children:"Home"})})}),t?Object(v.jsx)(pe,{}):Object(v.jsx)(fe,{})]})})}),Object(v.jsx)(je.a,{id:"back-to-top-anchor"}),Object(v.jsx)(ve,Object(ce.a)(Object(ce.a)({},e),{},{children:Object(v.jsx)(de.a,{color:"secondary",size:"small","aria-label":"scroll back to top",children:Object(v.jsx)(be.a,{})})}))]})}var we=Object(x.a)((function(e){return{card:{margin:"2.5vw 2.5vw",backgroundColor:"#DEE3E3",width:"95vw",padding:"20px"},root:{alignItems:"center"},formControl:{margin:e.spacing(0),width:"200px"},submitButton:{marginTop:"20px"},text:{color:"#33AB3E"}}}));function Ce(){var e=we(),t=Object(n.useContext)(k),a=t.notes,r=t.setNotes,i=Object(n.useState)("Airport"),c=Object(u.a)(i,2),s=c[0],o=c[1],l=Object(n.useState)("Campus"),b=Object(u.a)(l,2),h=b[0],x=b[1],p=Object(n.useState)(new Date),O=Object(u.a)(p,2),f=O[0],g=O[1],y=Object(n.useState)([]),w=Object(u.a)(y,2),C=w[0],S=w[1],A=Object(n.useState)(),F=Object(u.a)(A,2),I=F[0],T=F[1],D=function(){var e=Object(d.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.filter((function(e){var t=new Date(e.PdateAndTime.data);return Math.abs(t.setHours(0,0,0,0)-f.setHours(0,0,0,0))<=0}));case 2:t=e.sent,S(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){(function(){var e=Object(d.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.get("/api/posts");case 2:t=e.sent,r(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[r,a]),Object(n.useEffect)((function(){var e,t=new Date,a=new Date(f);T((e=t,a.setHours(0,0,0,0)-e.setHours(0,0,0,0)<0))}),[f]),Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{children:[Object(v.jsxs)(W.a,{variant:"outlined",className:e.card,children:[Object(v.jsx)(m.a,{variant:"h4",children:"Filter"}),Object(v.jsx)("form",{className:e.form,noValidate:!0,children:Object(v.jsxs)(R.a,{children:[Object(v.jsxs)(z.a,{container:!0,direction:"row",justifyContent:"flex-start",alignItems:"flex-start",children:[Object(v.jsx)(z.a,{item:!0,xs:4,children:Object(v.jsxs)(E.a,{required:!0,className:e.formControl,children:[Object(v.jsx)(Y.a,{id:"demo-simple-select-required-label",children:"Arrival"}),Object(v.jsxs)(M.a,{labelId:"demo-simple-select-required-label",id:"demo-simple-select-required",value:s,onChange:function(e){o(e.target.value)},className:e.selectEmpty,children:[Object(v.jsx)(H.a,{value:"Campus",children:"Campus"}),Object(v.jsx)(H.a,{value:"Airport",children:"Airport"}),Object(v.jsx)(H.a,{value:"Bustop",children:"Bustop"})]}),Object(v.jsx)(L.a,{children:"Required"})]})}),Object(v.jsx)(z.a,{item:!0,xs:4,children:Object(v.jsxs)(E.a,{required:!0,className:e.formControl,children:[Object(v.jsx)(Y.a,{id:"demo-simple-select-required-label",children:"Destination"}),Object(v.jsxs)(M.a,{labelId:"demo-simple-select-required-label",id:"demo-simple-select-required",value:h,onChange:function(e){x(e.target.value)},className:e.selectEmpty,children:[Object(v.jsx)(H.a,{value:"Campus",children:"Campus"}),Object(v.jsx)(H.a,{value:"Airport",children:"Airport"}),Object(v.jsx)(H.a,{value:"Bustop",children:"Bustop"})]}),Object(v.jsx)(L.a,{children:"Required"})]})}),Object(v.jsx)(J.a,{utils:V.a,children:Object(v.jsx)(z.a,{item:!0,xs:4,children:Object(v.jsx)(U.a,{margin:"normal",id:"date-picker-dialog",label:"Arrival Date",format:"dd/MM/yyyy",value:f,onChange:function(e){g(e)},KeyboardButtonProps:{"aria-label":"change date"}})})}),Object(v.jsx)(z.a,{item:!0,xs:4,children:Object(v.jsx)(N.a,{variant:"contained",style:{backgroundColor:"#FF1268",color:"#FFFFFF",marginTop:"50px"},className:e.submitButton,onClick:function(){var e=a.filter((function(e){if(e.Parrival===s&&e.Pdestination===h){var t=new Date;return new Date(e.PdateAndTime.data).getTime()-t.getTime()>=0}return!1}));S(e)},children:"By Place"})}),Object(v.jsx)(z.a,{item:!0,xs:4,children:Object(v.jsx)(N.a,{variant:"contained",style:{backgroundColor:"#FF1268",color:"#FFFFFF",marginTop:"50px"},className:e.submitButton,onClick:D,children:"By Date"})})]}),!0===I&&Object(v.jsx)(m.a,{variant:"h6",color:"textPrimary",style:{marginTop:"1vw"},children:"You are viewing Past Requests!"})]})})]}),Object(v.jsx)("hr",{}),0!==C.length&&Object(v.jsx)(m.a,{variant:"h4",style:{margin:"1vw 2.5vw 0"},children:"Results:"}),Object(v.jsx)("div",{style:{padding:"0 2.5vw 50px"},children:Object(v.jsx)(z.a,{container:!0,direction:"row",justifyContent:"flex-start",alignItems:"flex-start",children:C.map((function(e){return Object(v.jsx)(ee,{post:e})}))})})]})})}P.a.defaults.withCredentials=!0;var Se=function(){var e=Object(n.useContext)(k).loggedIn;return Object(v.jsxs)(s.a,{children:[Object(v.jsx)(ye,{}),Object(v.jsx)(o.b,{path:"/login",children:!0!==e?Object(v.jsx)(B,{}):Object(v.jsx)(o.a,{to:"/"})}),Object(v.jsx)(o.b,{path:"/",exact:!0,children:!0===e?Object(v.jsx)(G,{}):Object(v.jsx)(o.a,{to:"/login"})}),Object(v.jsx)(o.b,{path:"/signup",children:!0!==e?Object(v.jsx)(X,{}):Object(v.jsx)(o.a,{to:"/"})}),Object(v.jsx)(o.b,{path:"/posts",children:!0===e?Object(v.jsx)(te,{}):Object(v.jsx)(o.a,{to:"/login"})}),Object(v.jsx)(o.b,{path:"/yourposts",children:!0===e?Object(v.jsx)(ie,{}):Object(v.jsx)(o.a,{to:"/login"})}),Object(v.jsx)(o.b,{path:"/filter",children:!0===e?Object(v.jsx)(Ce,{}):Object(v.jsx)(o.a,{to:"/login"})})]})};c.a.render(Object(v.jsx)(I,{children:Object(v.jsx)(Se,{})}),document.getElementById("root"))}},[[178,1,2]]]);
//# sourceMappingURL=main.95e16a8c.chunk.js.map