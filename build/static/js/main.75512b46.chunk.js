(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{175:function(e,t,n){},240:function(e,t,n){},241:function(e,t,n){},243:function(e,t,n){},249:function(e,t,n){},250:function(e,t,n){},252:function(e,t,n){},369:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(24),i=n.n(r),s=n(28),o=(n(240),n(22)),l=n(35),j=n(123),b=n.n(j),d=n(206),u=n.n(d),m=n(205),h=n.n(m),O=(n(241),n(3)),x=["btn--primary","btn--outline"],p=["btn--medium","btn--large","btn--mobile","btn--wide"],f=["primary","blue","red","green"],g=function(e){var t=e.children,n=e.type,a=e.onClick,c=e.buttonStyle,r=e.buttonSize,i=e.buttonColour,s=x.includes(c)?c:x[0],o=p.includes(r)?r:p[0],l=f.includes(i)?i:null;return Object(O.jsx)("button",{className:"btn ".concat(s," ").concat(o," ").concat(l),onClick:a,type:n,children:t})};n(243);var v=function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(!0),i=Object(s.a)(r,2),l=i[0],j=i[1],d=function(){return c(!1)},m=function(){window.innerWidth<=960?j(!1):j(!0)};return Object(a.useEffect)((function(){m()}),[]),window.addEventListener("resize",m),Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:"navbar",children:Object(O.jsxs)("div",{className:"navbar-container container",children:[Object(O.jsxs)(o.b,{to:"/",className:"navbar-logo",onClick:d,children:[Object(O.jsx)(b.a,{className:"navbar-icon",children:" "}),"COVID BOOKING"]}),Object(O.jsx)("div",{className:"menu-icon",onClick:function(){return c(!n)},children:n?Object(O.jsx)(h.a,{}):Object(O.jsx)(u.a,{})}),Object(O.jsxs)("ul",{className:n?"nav-menu active":"nav-menu",children:[Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)(o.b,{to:"/",className:"nav-links",onClick:d,children:"Home"})}),Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)(o.b,{to:"/about",className:"nav-links",onClick:d,children:"About"})}),Object(O.jsx)("li",{className:"nav-login-btn",children:l?Object(O.jsx)(o.b,{to:"/centre/login",className:"login-btn-link",children:Object(O.jsx)(g,{buttonStyle:"btn--outline",children:" Centre Login "})}):Object(O.jsx)(o.b,{to:"/centre/login",className:"login-btn-link",onClick:d,children:Object(O.jsx)(g,{buttonStyle:"btn--outline",buttonSize:"btn--mobile",children:" Centre Login "})})}),Object(O.jsx)("li",{className:"nav-login-btn",children:l?Object(O.jsx)(o.b,{to:"/user/login",className:"login-btn-link",children:Object(O.jsx)(g,{buttonStyle:"btn--outline",children:" User Login "})}):Object(O.jsx)(o.b,{to:"/user/login",className:"login-btn-link",onClick:d,children:Object(O.jsx)(g,{buttonStyle:"btn--outline",buttonSize:"btn--mobile",children:" User Login "})})})]})]})})})},y=n(13);n(249),n(250);var C=function(e){var t=e.imageAlignment,n=e.topLine,a=e.headline,c=e.isLightText,r=e.description,i=e.isLightTextDescription,s=e.buttonLabel,l=e.image,j=e.alt;return Object(O.jsxs)("div",{className:"row section-row",style:{display:"flex",flexDirection:"left"===t?"row-reverse":"row"},children:[Object(O.jsx)("div",{className:"col",children:Object(O.jsxs)("div",{className:"section-row-text-wrapper",children:[Object(O.jsx)("div",{className:"top-line",children:n}),Object(O.jsx)("h1",{className:c?"heading":"heading dark",children:a}),Object(O.jsx)("p",{className:i?"section-row-subtitle":"section-row-subtitle dark",children:r}),Object(O.jsx)(o.b,{to:"user/register",children:Object(O.jsx)(g,{buttonSize:"btn--wide",buttonColour:"blue",children:s})})]})}),Object(O.jsx)("div",{className:"col",children:Object(O.jsx)("div",{className:"section-row-img-wrapper",children:Object(O.jsx)("img",{src:l,alt:j,className:"section-row-img"})})})]})};var k=function(e){var t=e.isLightBackground,n=e.imageAlignment,a=e.topLine,c=e.headline,r=e.isLightText,i=e.description,s=e.isLightTextDescription,o=e.buttonLabel,l=e.image,j=e.alt;return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:t?"home__main-section":"home__main-section dark-background",children:Object(O.jsx)("div",{className:"container",children:Object(O.jsx)(C,{imageAlignment:n,topLine:a,headline:c,isLightText:r,description:i,isLightTextDescription:s,buttonLabel:o,image:l,alt:j})})})})},N={isLightBackground:!1,imageAlignment:"",topLine:"Test text here",headline:"MORE TEST TEXT HERE",isLightText:!0,description:"Insert blurb about how to use this app here",isLightTextDescription:!0,buttonLabel:"Register Today",image:"schedule_calendar_home.svg",alt:"Alternate text"},w={isLightBackground:!0,imageAlignment:"left",topLine:"Test text here",headline:"MORE TEST TEXT HERE",isLightText:!1,description:"Insert blurb about how to use this app here",isLightTextDescription:!1,buttonLabel:"Get Started",image:"COVID-icon-vaccine.svg",alt:"Alternate text"},D={isLightBackground:!1,imageAlignment:"",topLine:"Test text here",headline:"MORE TEST TEXT HERE",isLightText:!0,description:"Insert blurb about how to use this app here",isLightTextDescription:!0,buttonLabel:"Register Today",image:"gym_home.svg",alt:"Alternate text"};var T=function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(k,Object(y.a)({},N)),Object(O.jsx)(k,Object(y.a)({},w)),Object(O.jsx)(k,Object(y.a)({},D))]})},S=n(19),L=n.n(S),E=n(80),B=n(37),A=n(372),I=n(29),V=n(18),q=n(60),F=n(23),R=(n(175),["children","style"]),H=["onFieldChange","appointmentData"];var P=function(){var e=[],t=Object(a.useState)(e),n=Object(s.a)(t,2),c=n[0],r=n[1];function i(){return o.apply(this,arguments)}function o(){return(o=Object(B.a)(L.a.mark((function t(){return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://rec-center-booking.herokuapp.com/rec-center").then((function(e){return e.json()})).then((function(t){return e=t})).catch((function(e){return e}));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(){return(l=Object(B.a)(L.a.mark((function e(t){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://rec-center-booking.herokuapp.com/rec-center",{method:"post",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then((function(e){return console.log("Added appointment")})).catch((function(e){return e}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(){return(j=Object(B.a)(L.a.mark((function e(t){var n;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object.keys(t)[0],console.log(t[n]),e.next=4,fetch("https://rec-center-booking.herokuapp.com/rec-center/"+n,{method:"PATCH",body:JSON.stringify(t[n]),headers:{"Content-Type":"application/json","x-Trigger":"CORS"}}).then((function(e){return console.log("Edited card")})).catch((function(e){return e}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(){return(b=Object(B.a)(L.a.mark((function e(t){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://rec-center-booking.herokuapp.com/rec-center/"+t,{method:"delete"}).then((function(e){return console.log("Deleted appointment")})).catch((function(e){return e}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(a.useEffect)((function(){i().then((function(){return r(e)})).catch((function(e){return e}))}),[]);var d=Object(q.a)((function(e){return{today:{backgroundColor:Object(F.fade)(e.palette.primary.main,.16)},weekend:{backgroundColor:Object(F.fade)(e.palette.action.disabledBackground,.06)},todayCell:{backgroundColor:Object(F.fade)(e.palette.primary.main,.1),"&:hover":{backgroundColor:Object(F.fade)(e.palette.primary.main,.14)},"&:focus":{backgroundColor:Object(F.fade)(e.palette.primary.main,.16)}},weekendCell:{backgroundColor:Object(F.fade)(e.palette.action.disabledBackground,.04),"&:hover":{backgroundColor:Object(F.fade)(e.palette.action.disabledBackground,.04)},"&:focus":{backgroundColor:Object(F.fade)(e.palette.action.disabledBackground,.04)}},todayApp:{backgroundColor:"#0EA5E9",borderRadius:"8px"}}}));return Object(O.jsx)("div",{id:"main-panel",children:Object(O.jsx)(A.a,{id:"calendar",children:Object(O.jsxs)(V.f,{data:c,locale:"en-US",children:[Object(O.jsx)(I.s,{}),Object(O.jsx)(I.k,{onCommitChanges:function(t){var n=t.added,a=t.changed,c=t.deleted;n&&(function(e){return l.apply(this,arguments)}(n).then((function(){return console.log(n)})),i().then((function(e){return console.log(e)})).then((function(){return r(e)}))),a&&(function(e){return j.apply(this,arguments)}(a).then((function(){return console.log(a)})),i().then((function(e){return console.log(e)})).then((function(){return r(e)})).then((function(){return console.log(e)}))),void 0!==c&&(function(e){return b.apply(this,arguments)}(c).then((function(){return console.log(c)})),i().then((function(e){return console.log(e)})).then((function(){return r(e)})).then((function(){return console.log(e)})))}}),Object(O.jsx)(I.m,{}),Object(O.jsx)(V.i,{startDayHour:9,endDayHour:19,timeTableCellComponent:function(e){var t=d(),n=e.startDate,a=new Date(n);return a.getDate()===(new Date).getDate()?Object(O.jsx)(V.i.TimeTableCell,Object(y.a)(Object(y.a)({},e),{},{className:t.todayCell})):0===a.getDay()||6===a.getDay()?Object(O.jsx)(V.i.TimeTableCell,Object(y.a)(Object(y.a)({},e),{},{className:t.weekendCell})):Object(O.jsx)(V.i.TimeTableCell,Object(y.a)({},e))},dayScaleCellComponent:function(e){var t=d(),n=e.startDate;return e.today?Object(O.jsx)(V.i.DayScaleCell,Object(y.a)(Object(y.a)({},e),{},{className:t.today})):0===n.getDay()||6===n.getDay()?Object(O.jsx)(V.i.DayScaleCell,Object(y.a)(Object(y.a)({},e),{},{className:t.weekend})):Object(O.jsx)(V.i.DayScaleCell,Object(y.a)({},e))}}),Object(O.jsx)(V.d,{}),Object(O.jsx)(V.h,{}),Object(O.jsx)(V.e,{}),Object(O.jsx)(V.g,{}),Object(O.jsx)(V.c,{appointmentComponent:function(e){var t=e.children,n=(e.style,Object(E.a)(e,R));return Object(O.jsx)(V.c.Appointment,Object(y.a)(Object(y.a)({},n),{},{className:d().todayApp,children:t}))}}),Object(O.jsx)(V.b,{showCloseButton:!0,showOpenButton:!0}),Object(O.jsx)(V.a,{basicLayoutComponent:function(e){var t=e.onFieldChange,n=e.appointmentData,a=Object(E.a)(e,H);return Object(O.jsxs)(V.a.BasicLayout,Object(y.a)(Object(y.a)({appointmentData:n,onFieldChange:t},a),{},{children:[Object(O.jsx)(V.a.Label,{text:"Location",type:"title"}),Object(O.jsx)(V.a.TextEditor,{placeholder:"Room location",type:"ordinaryTextEditor",value:n.location,onValueChange:function(e){t({location:e})}}),Object(O.jsx)(V.a.Label,{text:"Maximum Class Size",type:"title"}),Object(O.jsx)(V.a.TextEditor,{placeholder:"0",type:"numberEditor",value:n.maxClassSize,onValueChange:function(e){t({maxClassSize:e})}}),Object(O.jsx)(V.a.BooleanEditor,{label:"Vaccinated participants only?",readOnly:!1,value:n.vaccinatedOnly,onValueChange:function(e){t({vaccinationOnly:e})}})]}))},booleanEditorComponent:function(e){return Object(O.jsx)(V.a.BooleanEditor,Object(y.a)(Object(y.a)({},e),{},{readOnly:!0}))},messages:{moreInformationLabel:"Class Description"}})]})})})},_=n(167),M=n(213),W=n.n(M),z=n(421),U=n(139),J=n.n(U),K=n(10),G=["children","style"],Y=["children","appointmentData","classes"],X=["children","appointmentData","classes"],Q=["classes"];var Z=function(){var e=[],t=Object(a.useState)(e),n=Object(s.a)(t,2),c=n[0],r=n[1];function i(){return(i=Object(B.a)(L.a.mark((function t(){return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://rec-center-booking.herokuapp.com/user-cal").then((function(e){return e.json()})).then((function(t){return e=t})).catch((function(e){return e}));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function o(){return(o=Object(B.a)(L.a.mark((function e(t){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://rec-center-booking.herokuapp.com/user-cal/"+t,{method:"PATCH",body:JSON.stringify(t),headers:{"Content-Type":"application/json","x-Trigger":"CORS"}}).then((function(e){return console.log("Edited card")})).catch((function(e){return e}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(a.useEffect)((function(){(function(){return i.apply(this,arguments)})().then((function(){return r(e)})).catch((function(e){return e}))}),[]);var l=Object(q.a)((function(e){return{today:{backgroundColor:Object(F.fade)(e.palette.primary.main,.16)},weekend:{backgroundColor:Object(F.fade)(e.palette.action.disabledBackground,.06)},todayCell:{backgroundColor:Object(F.fade)(e.palette.primary.main,.1),"&:hover":{backgroundColor:Object(F.fade)(e.palette.primary.main,.14)},"&:focus":{backgroundColor:Object(F.fade)(e.palette.primary.main,.16)}},weekendCell:{backgroundColor:Object(F.fade)(e.palette.action.disabledBackground,.04),"&:hover":{backgroundColor:Object(F.fade)(e.palette.action.disabledBackground,.04)},"&:focus":{backgroundColor:Object(F.fade)(e.palette.action.disabledBackground,.04)}},todayApp:{backgroundColor:"#558d60",borderRadius:"8px"}}})),j=function(e){return{icon:{color:e.palette.action.active},textCenter:{textAlign:"center"},headerColor:{backgroundColor:"#558d60"},header:{height:"260px",backgroundSize:"cover"},commandButton:{backgroundColor:"#96cfa9"}}},b=Object(K.a)(j,{name:"Header"})((function(e){e.children;var t=e.appointmentData,n=e.classes,a=Object(E.a)(e,Y);return Object(O.jsx)(V.b.Header,Object(y.a)(Object(y.a)({},a),{},{className:n.headerColor,appointmentData:t,children:Object(O.jsx)(_.a,{onClick:function(){return function(e){return o.apply(this,arguments)}(t._id)},className:n.commandButton,children:Object(O.jsx)(W.a,{})})}))})),d=Object(K.a)(j,{name:"Content"})((function(e){e.children;var t=e.appointmentData,n=e.classes,a=Object(E.a)(e,X);return Object(O.jsx)(V.b.Content,Object(y.a)(Object(y.a)({},a),{},{appointmentData:t,children:Object(O.jsxs)(z.a,{container:!0,alignItems:"center",children:[Object(O.jsx)(z.a,{item:!0,xs:2,className:n.textCenter,children:Object(O.jsx)(J.a,{className:n.icon})}),Object(O.jsx)(z.a,{item:!0,xs:10,children:Object(O.jsx)("span",{children:t.location})}),Object(O.jsx)(z.a,{item:!0,xs:2,className:n.textCenter,children:Object(O.jsx)(J.a,{className:n.icon})}),Object(O.jsx)(z.a,{item:!0,xs:10,children:Object(O.jsx)("span",{children:t.notes})}),Object(O.jsx)(z.a,{item:!0,xs:2,className:n.textCenter,children:Object(O.jsx)(J.a,{className:n.icon})}),Object(O.jsx)(z.a,{item:!0,xs:10,children:Object(O.jsxs)("span",{children:["Max ",t.maxClassSize," people in the class."]})})]})}))})),u=Object(K.a)(j,{name:"CommandButton"})((function(e){var t=e.classes,n=Object(E.a)(e,Q);return Object(O.jsx)(V.b.CommandButton,Object(y.a)(Object(y.a)({},n),{},{className:t.commandButton}))}));return Object(O.jsx)("div",{id:"main-panel",children:Object(O.jsx)(A.a,{id:"calendar",children:Object(O.jsxs)(V.f,{data:c,locale:"en-US",children:[Object(O.jsx)(I.s,{}),Object(O.jsx)(V.i,{startDayHour:9,endDayHour:19,timeTableCellComponent:function(e){var t=l(),n=e.startDate,a=new Date(n);return a.getDate()===(new Date).getDate()?Object(O.jsx)(V.i.TimeTableCell,Object(y.a)(Object(y.a)({},e),{},{className:t.todayCell})):0===a.getDay()||6===a.getDay()?Object(O.jsx)(V.i.TimeTableCell,Object(y.a)(Object(y.a)({},e),{},{className:t.weekendCell})):Object(O.jsx)(V.i.TimeTableCell,Object(y.a)({},e))},dayScaleCellComponent:function(e){var t=l(),n=e.startDate;return e.today?Object(O.jsx)(V.i.DayScaleCell,Object(y.a)(Object(y.a)({},e),{},{className:t.today})):0===n.getDay()||6===n.getDay()?Object(O.jsx)(V.i.DayScaleCell,Object(y.a)(Object(y.a)({},e),{},{className:t.weekend})):Object(O.jsx)(V.i.DayScaleCell,Object(y.a)({},e))}}),Object(O.jsx)(V.h,{}),Object(O.jsx)(V.e,{}),Object(O.jsx)(V.g,{}),Object(O.jsx)(V.c,{appointmentComponent:function(e){var t=e.children,n=(e.style,Object(E.a)(e,G));return Object(O.jsx)(V.c.Appointment,Object(y.a)(Object(y.a)({},n),{},{className:l().todayApp,children:t}))}}),Object(O.jsx)(V.b,{headerComponent:b,contentComponent:d,commandButtonComponent:u,showCloseButton:!0})]})})})},$=(n(252),n(97));var ee=function(){return Object(O.jsxs)("div",{className:"footer-container",children:[Object(O.jsxs)("section",{className:"footer-subscription",children:[Object(O.jsx)("p",{className:"footer-subscription-heading",children:"Join our mailing list to receive the latest updates"}),Object(O.jsx)("p",{className:"footer-subscription-text",children:"You can unsubscribe at any time."}),Object(O.jsx)("div",{className:"input-areas",children:Object(O.jsxs)("form",{children:[Object(O.jsx)("input",{className:"footer-input",name:"email",type:"email",placeholder:"Your Email"}),Object(O.jsx)(g,{buttonStyle:"btn--outline",children:"Subscribe"})]})})]}),Object(O.jsxs)("div",{className:"footer-links",children:[Object(O.jsxs)("div",{className:"footer-link-wrapper",children:[Object(O.jsxs)("div",{className:"footer-link-items",children:[Object(O.jsx)("h2",{children:"About Us"}),Object(O.jsx)(o.b,{to:"/",children:"How it works"}),Object(O.jsx)(o.b,{to:"/",children:"Careers"}),Object(O.jsx)(o.b,{to:"/",children:"Investors"}),Object(O.jsx)(o.b,{to:"/",children:"Terms of Service"})]}),Object(O.jsxs)("div",{className:"footer-link-items",children:[Object(O.jsx)("h2",{children:"Contact Us"}),Object(O.jsx)(o.b,{to:"/",children:"Contact"}),Object(O.jsx)(o.b,{to:"/",children:"Support"}),Object(O.jsx)(o.b,{to:"/",children:"Destinations"}),Object(O.jsx)(o.b,{to:"/",children:"Sponsorships"})]})]}),Object(O.jsxs)("div",{className:"footer-link-wrapper",children:[Object(O.jsxs)("div",{className:"footer-link-items",children:[Object(O.jsx)("h2",{children:"Videos"}),Object(O.jsx)(o.b,{to:"/",children:"Submit Video"}),Object(O.jsx)(o.b,{to:"/",children:"Ambassadors"}),Object(O.jsx)(o.b,{to:"/",children:"Agency"}),Object(O.jsx)(o.b,{to:"/",children:"Influencer"})]}),Object(O.jsxs)("div",{className:"footer-link-items",children:[Object(O.jsx)("h2",{children:"Social Media"}),Object(O.jsx)(o.b,{to:"/",children:"Instagram"}),Object(O.jsx)(o.b,{to:"/",children:"Facebook"}),Object(O.jsx)(o.b,{to:"/",children:"Youtube"}),Object(O.jsx)(o.b,{to:"/",children:"Twitter"})]})]})]}),Object(O.jsx)("section",{className:"social-media",children:Object(O.jsxs)("div",{className:"social-media-wrap",children:[Object(O.jsx)("div",{className:"footer-logo",children:Object(O.jsxs)(o.b,{to:"/",className:"social-logo",children:[Object(O.jsx)(b.a,{className:"navbar-icon"}),"COVID BOOKING"]})}),Object(O.jsx)("small",{className:"website-rights",children:"COVID BOOKING \xa9 2020"}),Object(O.jsxs)("div",{className:"social-icons",children:[Object(O.jsx)(o.b,{className:"social-icon-link",to:"/",target:"_blank","aria-label":"Facebook",children:Object(O.jsx)($.a,{})}),Object(O.jsx)(o.b,{className:"social-icon-link",to:"/",target:"_blank","aria-label":"Instagram",children:Object(O.jsx)($.b,{})}),Object(O.jsx)(o.b,{className:"social-icon-link",to:"/",target:"_blank","aria-label":"Youtube",children:Object(O.jsx)($.e,{})}),Object(O.jsx)(o.b,{className:"social-icon-link",to:"/",target:"_blank","aria-label":"Twitter",children:Object(O.jsx)($.d,{})}),Object(O.jsx)(o.b,{className:"social-icon-link",to:"/",target:"_blank","aria-label":"LinkedIn",children:Object(O.jsx)($.c,{})})]})]})})]})},te=n(433),ne=n(107),ae=n(427),ce=n(218),re=n(425),ie=n(431),se=n(428),oe=n(130),le=n.n(oe),je=n(81),be=n(426),de=n(42),ue=n(131),me=n(58),he=n(163),Oe=n.n(he),xe="http://localhost:8000";var pe=Object(q.a)((function(e){return{paper:{marginTop:e.spacing(5),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1),marginBottom:e.spacing(5)},submit:{margin:e.spacing(3,0,2)}}})),fe=me.b().shape({email:me.c().required("Email is required").email("Email is invalid"),password:me.c().required("Password is required").min(6,"Password must be at least 6 characters in length").max(50,"Password must not exceed 50 characters in length")});var ge=function(e){var t=e.user,n=pe(),a=Object(de.e)({resolver:Object(ue.a)(fe)}),c=a.handleSubmit,r=a.control;return Object(O.jsxs)(be.a,{component:"main",maxWidth:"xs",children:[Object(O.jsx)(ae.a,{}),Object(O.jsxs)("div",{className:n.paper,children:[Object(O.jsx)(te.a,{className:n.avatar,children:Object(O.jsx)(le.a,{})}),Object(O.jsxs)(je.a,{component:"h1",variant:"h5",children:[t," Sign In"]}),Object(O.jsxs)("form",{onSubmit:c((function(e){alert(JSON.stringify(e)),function(e){Oe.a.post("".concat(xe,"/user/login"),e).then((function(e){console.log(e)}))}(e)})),className:n.form,noValidate:!0,children:[Object(O.jsx)(de.a,{control:r,name:"email",defaultValue:"",render:function(e){var t=e.field,n=e.fieldState.error;return Object(O.jsx)(ce.a,Object(y.a)(Object(y.a)({},t),{},{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,error:!!n,helperText:n?n.message:null}))}}),Object(O.jsx)(de.a,{control:r,name:"password",defaultValue:"",render:function(e){var t=e.field,n=e.fieldState.error;return Object(O.jsx)(ce.a,Object(y.a)(Object(y.a)({},t),{},{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",error:!!n,helperText:n?n.message:null}))}}),Object(O.jsx)(de.a,{control:r,name:"rememberMe",render:function(e){var t=e.field,n=t.value,a=t.onChange;return Object(O.jsx)(re.a,{control:Object(O.jsx)(ie.a,{checked:n,onChange:a,value:"remember",color:"primary"}),label:"Remember me"})}}),Object(O.jsx)(ne.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:n.submit,children:"Sign In"}),Object(O.jsx)(z.a,{container:!0,justifyContent:"center",children:Object(O.jsx)(z.a,{item:!0,children:Object(O.jsx)(se.a,{href:"/user/register",variant:"body2",children:"Don't have an account? Sign Up"})})})]})]})]})};var ve=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(ge,{user:"User"})})};var ye=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(ge,{user:"Recreation Centre"})})},Ce=n(424),ke=n(164),Ne=n(34),we=n(429),De=Object(q.a)((function(e){return{paper:{marginTop:e.spacing(5),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3),marginBottom:e.spacing(5)},submit:{margin:e.spacing(3,0,2)}}})),Te=me.b().shape({firstName:me.c().required("First name is required"),lastName:me.c().required("Last name is required"),email:me.c().required("Email is required").email("Email is invalid"),password:me.c().required("Password is required").min(6,"Password must be at least 6 characters in length").max(50,"Password must not exceed 50 characters in length"),firstDose:me.a().notRequired(),secondDose:me.a().notRequired()});function Se(){var e=De(),t=Object(de.e)({resolver:Object(ue.a)(Te)}),n=t.handleSubmit,c=t.control,r=t.setValue,i=Object(a.useState)(null),o=Object(s.a)(i,2),l=o[0],j=o[1],b=Object(a.useState)(null),d=Object(s.a)(b,2),u=d[0],m=d[1];return Object(O.jsxs)(be.a,{component:"main",maxWidth:"xs",children:[Object(O.jsx)(ae.a,{}),Object(O.jsxs)("div",{className:e.paper,children:[Object(O.jsx)(te.a,{className:e.avatar,children:Object(O.jsx)(le.a,{})}),Object(O.jsx)(je.a,{component:"h1",variant:"h5",children:"Sign up"}),Object(O.jsxs)("form",{onSubmit:n((function(e){alert(JSON.stringify(e)),function(e){Oe.a.post("".concat(xe,"/user/register"),e).then((function(e){console.log(e)}))}(e)})),className:e.form,noValidate:!0,children:[Object(O.jsxs)(z.a,{container:!0,spacing:2,children:[Object(O.jsx)(z.a,{item:!0,xs:12,sm:6,children:Object(O.jsx)(de.a,{control:c,name:"firstName",defaultValue:"",render:function(e){var t=e.field,n=e.fieldState.error;return Object(O.jsx)(ce.a,Object(y.a)(Object(y.a)({},t),{},{autoComplete:"fname",name:"firstName",variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0,error:!!n,helperText:n?n.message:null}))}})}),Object(O.jsx)(z.a,{item:!0,xs:12,sm:6,children:Object(O.jsx)(de.a,{control:c,name:"lastName",defaultValue:"",render:function(e){var t=e.field,n=e.fieldState.error;return Object(O.jsx)(ce.a,Object(y.a)(Object(y.a)({},t),{},{autoComplete:"lname",name:"lastName",variant:"outlined",required:!0,fullWidth:!0,id:"lastName",label:"Last Name",autoFocus:!0,error:!!n,helperText:n?n.message:null}))}})}),Object(O.jsx)(z.a,{item:!0,xs:12,children:Object(O.jsx)(de.a,{control:c,name:"email",defaultValue:"",render:function(e){var t=e.field,n=e.fieldState.error;return Object(O.jsx)(ce.a,Object(y.a)(Object(y.a)({},t),{},{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,error:!!n,helperText:n?n.message:null}))}})}),Object(O.jsx)(z.a,{item:!0,xs:12,children:Object(O.jsx)(de.a,{control:c,name:"password",defaultValue:"",render:function(e){var t=e.field,n=e.fieldState.error;return Object(O.jsx)(ce.a,Object(y.a)(Object(y.a)({},t),{},{autoComplete:"current-password",name:"password",variant:"outlined",required:!0,fullWidth:!0,id:"password",type:"password",label:"Password",autoFocus:!0,error:!!n,helperText:n?n.message:null}))}})}),Object(O.jsx)(z.a,{item:!0,xs:12,children:Object(O.jsx)(Ce.a,{children:" Please select the date you received your vaccination dose(s) below. Omit if you haven't been vaccinated."})}),Object(O.jsx)(Ne.a,{utils:ke.a,children:Object(O.jsx)(z.a,{item:!0,xs:12,sm:6,children:Object(O.jsx)(we.a,{disableToolbar:!0,variant:"inline",format:"MM/dd/yyyy",margin:"normal",id:"firstDose",emptyLabel:"Dose 1 Date",value:l,onChange:function(e){j(e),r("firstDose",e,{shouldValidate:!0,shouldDirty:!0})},disableFuture:"true",KeyboardButtonProps:{"aria-label":"change date"}})})}),Object(O.jsx)(Ne.a,{utils:ke.a,children:Object(O.jsx)(z.a,{item:!0,xs:12,sm:6,children:Object(O.jsx)(we.a,{disableToolbar:!0,variant:"inline",format:"MM/dd/yyyy",margin:"normal",id:"secondDose",emptyLabel:"Dose 2 Date",value:u,onChange:function(e){m(e),r("secondDose",e,{shouldValidate:!0,shouldDirty:!0})},disableFuture:"true",KeyboardButtonProps:{"aria-label":"change date"}})})})]}),Object(O.jsx)(ne.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:"Sign Up"}),Object(O.jsx)(z.a,{container:!0,justifyContent:"center",children:Object(O.jsx)(z.a,{item:!0,children:Object(O.jsx)(se.a,{href:"/user/login",variant:"body2",children:"Already have an account? Sign in"})})})]})]})]})}var Le=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(Se,{})})};var Ee=function(){var e=Object(a.useState)(!0),t=Object(s.a)(e,2);return t[0],t[1],Object(O.jsx)("div",{children:Object(O.jsxs)(o.a,{children:[Object(O.jsx)(v,{}),Object(O.jsxs)(l.c,{children:[Object(O.jsx)(l.a,{path:"/",exact:!0,component:T}),Object(O.jsx)(l.a,{exact:!0,path:"/user/login",component:ve}),Object(O.jsx)(l.a,{exact:!0,path:"/user/register",component:Le}),Object(O.jsx)(l.a,{path:"/user/:id/classes"}),Object(O.jsx)(l.a,{exact:!0,path:"/centre/login",component:ye}),Object(O.jsx)(l.a,{exact:!0,path:"/centre/register"}),Object(O.jsx)(l.a,{exact:!0,path:"/centre/:id/classes"}),Object(O.jsx)(l.a,{exact:!0,path:"/about"}),Object(O.jsx)(l.a,{path:"/rec-center",component:P}),Object(O.jsx)(l.a,{path:"/user-cal",component:Z})]}),Object(O.jsx)(ee,{})]})})};i.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(Ee,{})}),document.getElementById("root"))}},[[369,1,2]]]);
//# sourceMappingURL=main.75512b46.chunk.js.map