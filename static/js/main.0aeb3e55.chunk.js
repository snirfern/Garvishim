(this.webpackJsonpgarvishim=this.webpackJsonpgarvishim||[]).push([[0],{15:function(A,e,t){},16:function(A,e,t){},18:function(A,e,t){},19:function(A,e,t){},20:function(A,e,t){"use strict";t.r(e);var n=t(0),r=t(2),a=t.n(r),c=t(8),s=t.n(c),i=(t(15),t(16),t(1)),o=t.n(i),p=t(3),l=t(6);t(18),t(19);function u(A){var e=A.heightPrm,t=A.widthPrm;A.borderTopPrm,A.color;return Object(n.jsx)("div",{className:"loader",style:{height:e||15,width:t||15}})}var v=t(9),d=["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"],f=function(){var A=Object(p.a)(o.a.mark((function A(){return o.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.abrupt("return",new Promise((function(A){window.gapi.client.load("sheets","v4",(function(){window.gapi.client.sheets.spreadsheets.values.get({spreadsheetId:"1DObmjG0kIOoqZJCqxKwkhwbZfYjXLv8i4kC-GNrURhw",range:"\u05d2\u05d9\u05dc\u05d9\u05d5\u05df1!A1"}).then((function(e){e&&e.result&&e.result.values&&e.result.values.length>0?A(e.result.values):(console.log("failed"),A(-1))})).catch((function(e){console.log(e),A(-1)}))}))})));case 1:case"end":return A.stop()}}),A)})));return function(){return A.apply(this,arguments)}}(),b=function(){var A=Object(p.a)(o.a.mark((function A(e,t){return o.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:window.gapi.client.load("sheets","v4",(function(){window.gapi.client.sheets.spreadsheets.values.update({spreadsheetId:"1DObmjG0kIOoqZJCqxKwkhwbZfYjXLv8i4kC-GNrURhw",range:"\u05d2\u05d9\u05dc\u05d9\u05d5\u05df1!"+t,values:Object(v.a)(e),valueInputOption:"USER_ENTERED"}).then((function(A){A&&A.result&&A.result.values&&A.result.values.length>0||console.log("failed")})).catch((function(A){console.log(A)}))}));case 1:case"end":return A.stop()}}),A)})));return function(e,t){return A.apply(this,arguments)}}(),h=function(){var A=Object(p.a)(o.a.mark((function A(){return o.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.abrupt("return",new Promise((function(A){window.gapi.load("client",Object(p.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.gapi.client&&window.gapi.client.init?window.gapi.client.init({apiKey:"AIzaSyCgX3fnbgdnEV-bo89ZFR4vzVyZfIegehU",clientId:"575052170802-r35v9eu54hfdqdmisv8aur6sgrksdud1.apps.googleusercontent.com",discoveryDocs:d,scope:"https://www.googleapis.com/auth/drive.metadata.readonly"}).then(Object(p.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:t=e.sent,A(t);case 4:case"end":return e.stop()}}),e)})))).catch((function(A){console.log(A)})):A(h());case 1:case"end":return e.stop()}}),e)}))))})));case 1:case"end":return A.stop()}}),A)})));return function(){return A.apply(this,arguments)}}();function O(){var A=a.a.useState(-1),e=Object(l.a)(A,2),t=e[0],r=e[1],c=a.a.useState(!0),s=Object(l.a)(c,2),i=s[0],v=s[1],d=a.a.useState(null),f=Object(l.a)(d,2),O=f[0],j=f[1];function m(){return(m=Object(p.a)(o.a.mark((function A(){var e;return o.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:(e=document.createElement("script")).src="https://apis.google.com/js/api.js",e.onload=Object(p.a)(o.a.mark((function A(){var e;return o.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return setTimeout((function(){i&&(v(!1),j("\u05d0\u05e8\u05e2\u05d4 \u05e9\u05d2\u05d9\u05d0\u05d4"))}),3e4),A.next=3,h();case 3:(e=A.sent)&&e.toString().indexOf("1")>-1&&r(parseInt(e[0])),v(!1);case 6:case"end":return A.stop()}}),A)}))),document.body.appendChild(e);case 4:case"end":return A.stop()}}),A)})))).apply(this,arguments)}return a.a.useEffect((function(){window.gapi||(alert("init"),function(){m.apply(this,arguments)}())}),[]),O?Object(n.jsx)("div",{className:"error_container",children:O}):Object(n.jsxs)("div",{className:"feed_container",children:[i&&Object(n.jsx)("div",{className:"spinner_container",children:Object(n.jsx)(u,{})}),!i&&Object(n.jsxs)("div",{className:"garvishon",style:{border:t>0?"1px solid green":"1px solid red"},children:[Object(n.jsx)("div",{className:"garvishon_image",children:Object(n.jsx)("img",{src:"data:image/jpeg;base64,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"})}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("div",{onClick:function(){r(t>0?-1:1),b([[t>0?-1:1]],"A1")},className:"garvishon_footer",style:{backgroundColor:t>0?"green":"red",color:"white"},children:t>0?"ALIVE":"DEAD"})]})]})}var j=function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)("h1",{children:"\u05d0\u05d5\u05dc\u05e4\u05df"}),Object(n.jsx)(O,{})]})},m=function(A){A&&A instanceof Function&&t.e(3).then(t.bind(null,21)).then((function(e){var t=e.getCLS,n=e.getFID,r=e.getFCP,a=e.getLCP,c=e.getTTFB;t(A),n(A),r(A),a(A),c(A)}))};s.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(j,{})}),document.getElementById("root")),m()}},[[20,1,2]]]);
//# sourceMappingURL=main.0aeb3e55.chunk.js.map