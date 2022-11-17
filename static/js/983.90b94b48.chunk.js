"use strict";(self.webpackChunkownrecipes_web=self.webpackChunkownrecipes_web||[]).push([[983],{8949:function(e,r,a){a.d(r,{Z:function(){return B}});var n=a(1413),t=a(557),i=a(1694),c=a.n(i),o=a(2791),s=a(239),l=a(162),u=a(7858);function d(e,r){return Array.isArray(e)?e.includes(r):e===r}var v=o.createContext({});v.displayName="AccordionContext";var f=v,Z=a(184),m=["as","bsPrefix","className","children","eventKey"],y=o.forwardRef((function(e,r){var a=e.as,i=void 0===a?"div":a,s=e.bsPrefix,v=e.className,y=e.children,b=e.eventKey,p=(0,t.Z)(e,m),x=(0,o.useContext)(f).activeEventKey;return s=(0,l.vE)(s,"accordion-collapse"),(0,Z.jsx)(u.Z,(0,n.Z)((0,n.Z)({ref:r,in:d(x,b)},p),{},{className:c()(v,s),children:(0,Z.jsx)(i,{children:o.Children.only(y)})}))}));y.displayName="AccordionCollapse";var b=y,p=o.createContext({eventKey:""});p.displayName="AccordionItemContext";var x=p,h=["as","bsPrefix","className"],N=o.forwardRef((function(e,r){var a=e.as,i=void 0===a?"div":a,s=e.bsPrefix,u=e.className,d=(0,t.Z)(e,h);s=(0,l.vE)(s,"accordion-body");var v=(0,o.useContext)(x).eventKey;return(0,Z.jsx)(b,{eventKey:v,children:(0,Z.jsx)(i,(0,n.Z)((0,n.Z)({ref:r},d),{},{className:c()(u,s)}))})}));N.displayName="AccordionBody";var j=N,P=a(2982),g=["as","bsPrefix","className","onClick"];var w=o.forwardRef((function(e,r){var a=e.as,i=void 0===a?"button":a,s=e.bsPrefix,u=e.className,v=e.onClick,m=(0,t.Z)(e,g);s=(0,l.vE)(s,"accordion-button");var y=(0,o.useContext)(x).eventKey,b=function(e,r){var a=(0,o.useContext)(f),n=a.activeEventKey,t=a.onSelect,i=a.alwaysOpen;return function(a){var c=e===n?null:e;i&&(c=Array.isArray(n)?n.includes(e)?n.filter((function(r){return r!==e})):[].concat((0,P.Z)(n),[e]):[e]),null==t||t(c,a),null==r||r(a)}}(y,v),p=(0,o.useContext)(f).activeEventKey;return"button"===i&&(m.type="button"),(0,Z.jsx)(i,(0,n.Z)((0,n.Z)({ref:r,onClick:b},m),{},{"aria-expanded":y===p,className:c()(u,s,!d(p,y)&&"collapsed")}))}));w.displayName="AccordionButton";var C=w,E=["as","bsPrefix","className","children","onClick"],K=o.forwardRef((function(e,r){var a=e.as,i=void 0===a?"h2":a,o=e.bsPrefix,s=e.className,u=e.children,d=e.onClick,v=(0,t.Z)(e,E);return o=(0,l.vE)(o,"accordion-header"),(0,Z.jsx)(i,(0,n.Z)((0,n.Z)({ref:r},v),{},{className:c()(s,o),children:(0,Z.jsx)(C,{onClick:d,children:u})}))}));K.displayName="AccordionHeader";var k=K,A=["as","bsPrefix","className","eventKey"],O=o.forwardRef((function(e,r){var a=e.as,i=void 0===a?"div":a,s=e.bsPrefix,u=e.className,d=e.eventKey,v=(0,t.Z)(e,A);s=(0,l.vE)(s,"accordion-item");var f=(0,o.useMemo)((function(){return{eventKey:d}}),[d]);return(0,Z.jsx)(x.Provider,{value:f,children:(0,Z.jsx)(i,(0,n.Z)((0,n.Z)({ref:r},v),{},{className:c()(u,s)}))})}));O.displayName="AccordionItem";var R=O,I=["as","activeKey","bsPrefix","className","onSelect","flush","alwaysOpen"],S=o.forwardRef((function(e,r){var a=(0,s.Ch)(e,{activeKey:"onSelect"}),i=a.as,u=void 0===i?"div":i,d=a.activeKey,v=a.bsPrefix,m=a.className,y=a.onSelect,b=a.flush,p=a.alwaysOpen,x=(0,t.Z)(a,I),h=(0,l.vE)(v,"accordion"),N=(0,o.useMemo)((function(){return{activeEventKey:d,onSelect:y,alwaysOpen:p}}),[d,y,p]);return(0,Z.jsx)(f.Provider,{value:N,children:(0,Z.jsx)(u,(0,n.Z)((0,n.Z)({ref:r},x),{},{className:c()(m,h,b&&"".concat(h,"-flush"))}))})}));S.displayName="Accordion";var B=Object.assign(S,{Button:C,Collapse:b,Item:R,Header:k,Body:j})},9140:function(e,r,a){a.d(r,{Z:function(){return A}});var n=a(1413),t=a(557),i=a(1694),c=a.n(i),o=a(2791),s=a(162),l=a(6543),u=a(7472),d=a(184),v=["bsPrefix","className","variant","as"],f=o.forwardRef((function(e,r){var a=e.bsPrefix,i=e.className,o=e.variant,l=e.as,u=void 0===l?"img":l,f=(0,t.Z)(e,v),Z=(0,s.vE)(a,"card-img");return(0,d.jsx)(u,(0,n.Z)({ref:r,className:c()(o?"".concat(Z,"-").concat(o):Z,i)},f))}));f.displayName="CardImg";var Z=f,m=a(6040),y=["bsPrefix","className","as"],b=o.forwardRef((function(e,r){var a=e.bsPrefix,i=e.className,l=e.as,u=void 0===l?"div":l,v=(0,t.Z)(e,y),f=(0,s.vE)(a,"card-header"),Z=(0,o.useMemo)((function(){return{cardHeaderBsPrefix:f}}),[f]);return(0,d.jsx)(m.Z.Provider,{value:Z,children:(0,d.jsx)(u,(0,n.Z)((0,n.Z)({ref:r},v),{},{className:c()(i,f)}))})}));b.displayName="CardHeader";var p=b,x=["bsPrefix","className","bg","text","border","body","children","as"],h=(0,u.Z)("h5"),N=(0,u.Z)("h6"),j=(0,l.Z)("card-body"),P=(0,l.Z)("card-title",{Component:h}),g=(0,l.Z)("card-subtitle",{Component:N}),w=(0,l.Z)("card-link",{Component:"a"}),C=(0,l.Z)("card-text",{Component:"p"}),E=(0,l.Z)("card-footer"),K=(0,l.Z)("card-img-overlay"),k=o.forwardRef((function(e,r){var a=e.bsPrefix,i=e.className,o=e.bg,l=e.text,u=e.border,v=e.body,f=e.children,Z=e.as,m=void 0===Z?"div":Z,y=(0,t.Z)(e,x),b=(0,s.vE)(a,"card");return(0,d.jsx)(m,(0,n.Z)((0,n.Z)({ref:r},y),{},{className:c()(i,b,o&&"bg-".concat(o),l&&"text-".concat(l),u&&"border-".concat(u)),children:v?(0,d.jsx)(j,{children:f}):f}))}));k.displayName="Card",k.defaultProps={body:!1};var A=Object.assign(k,{Img:Z,Title:P,Subtitle:g,Body:j,Link:w,Text:C,Header:p,Footer:E,ImgOverlay:K})},8116:function(e,r,a){a.d(r,{Z:function(){return P}});var n=a(1413),t=a(557),i=a(1694),c=a.n(i),o=a(2791),s=a(162),l=a(6445),u=a(184),d=["active","disabled","className","style","activeLabel","children"],v=["children"],f=o.forwardRef((function(e,r){var a=e.active,i=e.disabled,o=e.className,s=e.style,v=e.activeLabel,f=e.children,Z=(0,t.Z)(e,d),m=a||i?"span":l.Z;return(0,u.jsx)("li",{ref:r,style:s,className:c()(o,"page-item",{active:a,disabled:i}),children:(0,u.jsxs)(m,(0,n.Z)((0,n.Z)({className:"page-link"},Z),{},{children:[f,a&&v&&(0,u.jsx)("span",{className:"visually-hidden",children:v})]}))})}));f.defaultProps={active:!1,disabled:!1,activeLabel:"(current)"},f.displayName="PageItem";var Z=f;function m(e,r){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e,i=o.forwardRef((function(e,i){var c=e.children,o=(0,t.Z)(e,v);return(0,u.jsxs)(f,(0,n.Z)((0,n.Z)({},o),{},{ref:i,children:[(0,u.jsx)("span",{"aria-hidden":"true",children:c||r}),(0,u.jsx)("span",{className:"visually-hidden",children:a})]}))}));return i.displayName=e,i}var y=m("First","\xab"),b=m("Prev","\u2039","Previous"),p=m("Ellipsis","\u2026","More"),x=m("Next","\u203a"),h=m("Last","\xbb"),N=["bsPrefix","className","size"],j=o.forwardRef((function(e,r){var a=e.bsPrefix,i=e.className,o=e.size,l=(0,t.Z)(e,N),d=(0,s.vE)(a,"pagination");return(0,u.jsx)("ul",(0,n.Z)((0,n.Z)({ref:r},l),{},{className:c()(i,d,o&&"".concat(d,"-").concat(o))}))}));j.displayName="Pagination";var P=Object.assign(j,{First:y,Prev:b,Ellipsis:p,Item:Z,Next:x,Last:h})},9743:function(e,r,a){var n=a(1413),t=a(557),i=a(1694),c=a.n(i),o=a(2791),s=a(162),l=a(184),u=["bsPrefix","className","as"],d=o.forwardRef((function(e,r){var a=e.bsPrefix,i=e.className,o=e.as,d=void 0===o?"div":o,v=(0,t.Z)(e,u),f=(0,s.vE)(a,"row"),Z=(0,s.pi)(),m=(0,s.zG)(),y="".concat(f,"-cols"),b=[];return Z.forEach((function(e){var r,a=v[e];delete v[e],r=null!=a&&"object"===typeof a?a.cols:a;var n=e!==m?"-".concat(e):"";null!=r&&b.push("".concat(y).concat(n,"-").concat(r))})),(0,l.jsx)(d,(0,n.Z)((0,n.Z)({ref:r},v),{},{className:c().apply(void 0,[i,f].concat(b))}))}));d.displayName="Row",r.Z=d},5534:function(e,r,a){var n=a(7034);r.Z=function(e){return(0,n.Z)(e,5)}},2296:function(e,r,a){a.d(r,{Z:function(){return U}});var n=a(1331),t=a(1452),i=a(1304);var c=function(e,r,a){(void 0!==a&&!(0,i.Z)(e[r],a)||void 0===a&&!(r in e))&&(0,t.Z)(e,r,a)};var o=function(e){return function(r,a,n){for(var t=-1,i=Object(r),c=n(r),o=c.length;o--;){var s=c[e?o:++t];if(!1===a(i[s],s,i))break}return r}}(),s=a(8561),l=a(1836),u=a(4278),d=a(8133),v=a(4609),f=a(8567),Z=a(2104),m=a(8809);var y=function(e){return(0,m.Z)(e)&&(0,Z.Z)(e)},b=a(4932),p=a(9884),x=a(8465),h=a(5275),N=a(8846),j=Function.prototype,P=Object.prototype,g=j.toString,w=P.hasOwnProperty,C=g.call(Object);var E=function(e){if(!(0,m.Z)(e)||"[object Object]"!=(0,h.Z)(e))return!1;var r=(0,N.Z)(e);if(null===r)return!0;var a=w.call(r,"constructor")&&r.constructor;return"function"==typeof a&&a instanceof a&&g.call(a)==C},K=a(8939);var k=function(e,r){if(("constructor"!==r||"function"!==typeof e[r])&&"__proto__"!=r)return e[r]},A=a(750),O=a(8886);var R=function(e){return(0,A.Z)(e,(0,O.Z)(e))};var I=function(e,r,a,n,t,i,o){var Z=k(e,a),m=k(r,a),h=o.get(m);if(h)c(e,a,h);else{var N=i?i(Z,m,a+"",e,r,o):void 0,j=void 0===N;if(j){var P=(0,f.Z)(m),g=!P&&(0,b.Z)(m),w=!P&&!g&&(0,K.Z)(m);N=m,P||g||w?(0,f.Z)(Z)?N=Z:y(Z)?N=(0,u.Z)(Z):g?(j=!1,N=(0,s.Z)(m,!0)):w?(j=!1,N=(0,l.Z)(m,!0)):N=[]:E(m)||(0,v.Z)(m)?(N=Z,(0,v.Z)(Z)?N=R(Z):(0,x.Z)(Z)&&!(0,p.Z)(Z)||(N=(0,d.Z)(m))):j=!1}j&&(o.set(m,N),t(N,m,n,i,o),o.delete(m)),c(e,a,N)}};var S=function e(r,a,t,i,s){r!==a&&o(a,(function(o,l){if(s||(s=new n.Z),(0,x.Z)(o))I(r,a,l,t,e,i,s);else{var u=i?i(k(r,l),o,l+"",r,a,s):void 0;void 0===u&&(u=o),c(r,l,u)}}),O.Z)};var B=function(e){return e};var L=function(e,r,a){switch(a.length){case 0:return e.call(r);case 1:return e.call(r,a[0]);case 2:return e.call(r,a[0],a[1]);case 3:return e.call(r,a[0],a[1],a[2])}return e.apply(r,a)},_=Math.max;var H=function(e,r,a){return r=_(void 0===r?e.length-1:r,0),function(){for(var n=arguments,t=-1,i=_(n.length-r,0),c=Array(i);++t<i;)c[t]=n[r+t];t=-1;for(var o=Array(r+1);++t<r;)o[t]=n[t];return o[r]=a(c),L(e,this,o)}};var M=function(e){return function(){return e}},F=a(3756),z=F.Z?function(e,r){return(0,F.Z)(e,"toString",{configurable:!0,enumerable:!1,value:M(r),writable:!0})}:B,T=Date.now;var D=function(e){var r=0,a=0;return function(){var n=T(),t=16-(n-a);if(a=n,t>0){if(++r>=800)return arguments[0]}else r=0;return e.apply(void 0,arguments)}},G=D(z);var q=function(e,r){return G(H(e,r,B),e+"")},J=a(6825);var Q=function(e,r,a){if(!(0,x.Z)(a))return!1;var n=typeof r;return!!("number"==n?(0,Z.Z)(a)&&(0,J.Z)(r,a.length):"string"==n&&r in a)&&(0,i.Z)(a[r],e)};var U=function(e){return q((function(r,a){var n=-1,t=a.length,i=t>1?a[t-1]:void 0,c=t>2?a[2]:void 0;for(i=e.length>3&&"function"==typeof i?(t--,i):void 0,c&&Q(a[0],a[1],c)&&(i=t<3?void 0:i,t=1),r=Object(r);++n<t;){var o=a[n];o&&e(r,o,n,i)}return r}))}((function(e,r,a){S(e,r,a)}))}}]);
//# sourceMappingURL=983.90b94b48.chunk.js.map