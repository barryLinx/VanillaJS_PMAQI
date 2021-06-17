/*! For license information please see vendor.c730dc7f.js.LICENSE.txt */
(self.webpackChunk_12=self.webpackChunk_12||[]).push([[736],{750:(e,t,n)=>{"use strict";n.r(t),n.d(t,{afterMain:()=>E,afterRead:()=>b,afterWrite:()=>j,applyStyles:()=>M,arrow:()=>J,auto:()=>s,basePlacements:()=>c,beforeMain:()=>w,beforeRead:()=>v,beforeWrite:()=>x,bottom:()=>o,clippingParents:()=>l,computeStyles:()=>Z,createPopper:()=>Le,createPopperBase:()=>De,createPopperLite:()=>Te,detectOverflow:()=>he,end:()=>f,eventListeners:()=>te,flip:()=>ge,hide:()=>be,left:()=>a,main:()=>O,modifierPhases:()=>A,offset:()=>we,placements:()=>g,popper:()=>p,popperGenerator:()=>ke,popperOffsets:()=>Oe,preventOverflow:()=>Ee,read:()=>y,reference:()=>m,right:()=>i,start:()=>u,top:()=>r,variationPlacements:()=>h,viewport:()=>d,write:()=>_});var r="top",o="bottom",i="right",a="left",s="auto",c=[r,o,i,a],u="start",f="end",l="clippingParents",d="viewport",p="popper",m="reference",h=c.reduce((function(e,t){return e.concat([t+"-"+u,t+"-"+f])}),[]),g=[].concat(c,[s]).reduce((function(e,t){return e.concat([t,t+"-"+u,t+"-"+f])}),[]),v="beforeRead",y="read",b="afterRead",w="beforeMain",O="main",E="afterMain",x="beforeWrite",_="write",j="afterWrite",A=[v,y,b,w,O,E,x,_,j];function k(e){return e?(e.nodeName||"").toLowerCase():null}function D(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function L(e){return e instanceof D(e).Element||e instanceof Element}function T(e){return e instanceof D(e).HTMLElement||e instanceof HTMLElement}function C(e){return"undefined"!=typeof ShadowRoot&&(e instanceof D(e).ShadowRoot||e instanceof ShadowRoot)}const M={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e];T(o)&&k(o)&&(Object.assign(o.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});T(r)&&k(r)&&(Object.assign(r.style,i),Object.keys(o).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]};function S(e){return e.split("-")[0]}function N(e){var t=e.getBoundingClientRect();return{width:t.width,height:t.height,top:t.top,right:t.right,bottom:t.bottom,left:t.left,x:t.left,y:t.top}}function P(e){var t=N(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function R(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&C(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function B(e){return D(e).getComputedStyle(e)}function H(e){return["table","td","th"].indexOf(k(e))>=0}function I(e){return((L(e)?e.ownerDocument:e.document)||window.document).documentElement}function q(e){return"html"===k(e)?e:e.assignedSlot||e.parentNode||(C(e)?e.host:null)||I(e)}function W(e){return T(e)&&"fixed"!==B(e).position?e.offsetParent:null}function $(e){for(var t=D(e),n=W(e);n&&H(n)&&"static"===B(n).position;)n=W(n);return n&&("html"===k(n)||"body"===k(n)&&"static"===B(n).position)?t:n||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&T(e)&&"fixed"===B(e).position)return null;for(var n=q(e);T(n)&&["html","body"].indexOf(k(n))<0;){var r=B(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}function U(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}var F=Math.max,K=Math.min,V=Math.round;function Y(e,t,n){return F(e,K(t,n))}function z(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function Q(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}const J={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,s=e.name,u=e.options,f=n.elements.arrow,l=n.modifiersData.popperOffsets,d=S(n.placement),p=U(d),m=[a,i].indexOf(d)>=0?"height":"width";if(f&&l){var h=function(e,t){return z("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:Q(e,c))}(u.padding,n),g=P(f),v="y"===p?r:a,y="y"===p?o:i,b=n.rects.reference[m]+n.rects.reference[p]-l[p]-n.rects.popper[m],w=l[p]-n.rects.reference[p],O=$(f),E=O?"y"===p?O.clientHeight||0:O.clientWidth||0:0,x=b/2-w/2,_=h[v],j=E-g[m]-h[y],A=E/2-g[m]/2+x,k=Y(_,A,j),D=p;n.modifiersData[s]=((t={})[D]=k,t.centerOffset=k-A,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!=typeof r||(r=t.elements.popper.querySelector(r)))&&R(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};var X={top:"auto",right:"auto",bottom:"auto",left:"auto"};function G(e){var t,n=e.popper,s=e.popperRect,c=e.placement,u=e.offsets,f=e.position,l=e.gpuAcceleration,d=e.adaptive,p=e.roundOffsets,m=!0===p?function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:V(V(t*r)/r)||0,y:V(V(n*r)/r)||0}}(u):"function"==typeof p?p(u):u,h=m.x,g=void 0===h?0:h,v=m.y,y=void 0===v?0:v,b=u.hasOwnProperty("x"),w=u.hasOwnProperty("y"),O=a,E=r,x=window;if(d){var _=$(n),j="clientHeight",A="clientWidth";_===D(n)&&"static"!==B(_=I(n)).position&&(j="scrollHeight",A="scrollWidth"),_=_,c===r&&(E=o,y-=_[j]-s.height,y*=l?1:-1),c===a&&(O=i,g-=_[A]-s.width,g*=l?1:-1)}var k,L=Object.assign({position:f},d&&X);return l?Object.assign({},L,((k={})[E]=w?"0":"",k[O]=b?"0":"",k.transform=(x.devicePixelRatio||1)<2?"translate("+g+"px, "+y+"px)":"translate3d("+g+"px, "+y+"px, 0)",k)):Object.assign({},L,((t={})[E]=w?y+"px":"",t[O]=b?g+"px":"",t.transform="",t))}const Z={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,c=void 0===s||s,u={placement:S(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,G(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,G(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}};var ee={passive:!0};const te={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=void 0===o||o,a=r.resize,s=void 0===a||a,c=D(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&u.forEach((function(e){e.addEventListener("scroll",n.update,ee)})),s&&c.addEventListener("resize",n.update,ee),function(){i&&u.forEach((function(e){e.removeEventListener("scroll",n.update,ee)})),s&&c.removeEventListener("resize",n.update,ee)}},data:{}};var ne={left:"right",right:"left",bottom:"top",top:"bottom"};function re(e){return e.replace(/left|right|bottom|top/g,(function(e){return ne[e]}))}var oe={start:"end",end:"start"};function ie(e){return e.replace(/start|end/g,(function(e){return oe[e]}))}function ae(e){var t=D(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function se(e){return N(I(e)).left+ae(e).scrollLeft}function ce(e){var t=B(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function ue(e){return["html","body","#document"].indexOf(k(e))>=0?e.ownerDocument.body:T(e)&&ce(e)?e:ue(q(e))}function fe(e,t){var n;void 0===t&&(t=[]);var r=ue(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),i=D(r),a=o?[i].concat(i.visualViewport||[],ce(r)?r:[]):r,s=t.concat(a);return o?s:s.concat(fe(q(a)))}function le(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function de(e,t){return t===d?le(function(e){var t=D(e),n=I(e),r=t.visualViewport,o=n.clientWidth,i=n.clientHeight,a=0,s=0;return r&&(o=r.width,i=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(a=r.offsetLeft,s=r.offsetTop)),{width:o,height:i,x:a+se(e),y:s}}(e)):T(t)?function(e){var t=N(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):le(function(e){var t,n=I(e),r=ae(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=F(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=F(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-r.scrollLeft+se(e),c=-r.scrollTop;return"rtl"===B(o||n).direction&&(s+=F(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:c}}(I(e)))}function pe(e){return e.split("-")[1]}function me(e){var t,n=e.reference,s=e.element,c=e.placement,l=c?S(c):null,d=c?pe(c):null,p=n.x+n.width/2-s.width/2,m=n.y+n.height/2-s.height/2;switch(l){case r:t={x:p,y:n.y-s.height};break;case o:t={x:p,y:n.y+n.height};break;case i:t={x:n.x+n.width,y:m};break;case a:t={x:n.x-s.width,y:m};break;default:t={x:n.x,y:n.y}}var h=l?U(l):null;if(null!=h){var g="y"===h?"height":"width";switch(d){case u:t[h]=t[h]-(n[g]/2-s[g]/2);break;case f:t[h]=t[h]+(n[g]/2-s[g]/2)}}return t}function he(e,t){void 0===t&&(t={});var n=t,a=n.placement,s=void 0===a?e.placement:a,u=n.boundary,f=void 0===u?l:u,h=n.rootBoundary,g=void 0===h?d:h,v=n.elementContext,y=void 0===v?p:v,b=n.altBoundary,w=void 0!==b&&b,O=n.padding,E=void 0===O?0:O,x=z("number"!=typeof E?E:Q(E,c)),_=y===p?m:p,j=e.elements.reference,A=e.rects.popper,D=e.elements[w?_:y],C=function(e,t,n){var r="clippingParents"===t?function(e){var t=fe(q(e)),n=["absolute","fixed"].indexOf(B(e).position)>=0&&T(e)?$(e):e;return L(n)?t.filter((function(e){return L(e)&&R(e,n)&&"body"!==k(e)})):[]}(e):[].concat(t),o=[].concat(r,[n]),i=o[0],a=o.reduce((function(t,n){var r=de(e,n);return t.top=F(r.top,t.top),t.right=K(r.right,t.right),t.bottom=K(r.bottom,t.bottom),t.left=F(r.left,t.left),t}),de(e,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}(L(D)?D:D.contextElement||I(e.elements.popper),f,g),M=N(j),S=me({reference:M,element:A,strategy:"absolute",placement:s}),P=le(Object.assign({},A,S)),H=y===p?P:M,W={top:C.top-H.top+x.top,bottom:H.bottom-C.bottom+x.bottom,left:C.left-H.left+x.left,right:H.right-C.right+x.right},U=e.modifiersData.offset;if(y===p&&U){var V=U[s];Object.keys(W).forEach((function(e){var t=[i,o].indexOf(e)>=0?1:-1,n=[r,o].indexOf(e)>=0?"y":"x";W[e]+=V[n]*t}))}return W}const ge={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,f=e.name;if(!t.modifiersData[f]._skip){for(var l=n.mainAxis,d=void 0===l||l,p=n.altAxis,m=void 0===p||p,v=n.fallbackPlacements,y=n.padding,b=n.boundary,w=n.rootBoundary,O=n.altBoundary,E=n.flipVariations,x=void 0===E||E,_=n.allowedAutoPlacements,j=t.options.placement,A=S(j),k=v||(A!==j&&x?function(e){if(S(e)===s)return[];var t=re(e);return[ie(e),t,ie(t)]}(j):[re(j)]),D=[j].concat(k).reduce((function(e,n){return e.concat(S(n)===s?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,u=n.allowedAutoPlacements,f=void 0===u?g:u,l=pe(r),d=l?s?h:h.filter((function(e){return pe(e)===l})):c,p=d.filter((function(e){return f.indexOf(e)>=0}));0===p.length&&(p=d);var m=p.reduce((function(t,n){return t[n]=he(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[S(n)],t}),{});return Object.keys(m).sort((function(e,t){return m[e]-m[t]}))}(t,{placement:n,boundary:b,rootBoundary:w,padding:y,flipVariations:x,allowedAutoPlacements:_}):n)}),[]),L=t.rects.reference,T=t.rects.popper,C=new Map,M=!0,N=D[0],P=0;P<D.length;P++){var R=D[P],B=S(R),H=pe(R)===u,I=[r,o].indexOf(B)>=0,q=I?"width":"height",W=he(t,{placement:R,boundary:b,rootBoundary:w,altBoundary:O,padding:y}),$=I?H?i:a:H?o:r;L[q]>T[q]&&($=re($));var U=re($),F=[];if(d&&F.push(W[B]<=0),m&&F.push(W[$]<=0,W[U]<=0),F.every((function(e){return e}))){N=R,M=!1;break}C.set(R,F)}if(M)for(var K=function(e){var t=D.find((function(t){var n=C.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return N=t,"break"},V=x?3:1;V>0&&"break"!==K(V);V--);t.placement!==N&&(t.modifiersData[f]._skip=!0,t.placement=N,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function ve(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function ye(e){return[r,i,o,a].some((function(t){return e[t]>=0}))}const be={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=he(t,{elementContext:"reference"}),s=he(t,{altBoundary:!0}),c=ve(a,r),u=ve(s,o,i),f=ye(c),l=ye(u);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:u,isReferenceHidden:f,hasPopperEscaped:l},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":f,"data-popper-escaped":l})}},we={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,o=e.name,s=n.offset,c=void 0===s?[0,0]:s,u=g.reduce((function(e,n){return e[n]=function(e,t,n){var o=S(e),s=[a,r].indexOf(o)>=0?-1:1,c="function"==typeof n?n(Object.assign({},t,{placement:e})):n,u=c[0],f=c[1];return u=u||0,f=(f||0)*s,[a,i].indexOf(o)>=0?{x:f,y:u}:{x:u,y:f}}(n,t.rects,c),e}),{}),f=u[t.placement],l=f.x,d=f.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=l,t.modifiersData.popperOffsets.y+=d),t.modifiersData[o]=u}},Oe={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=me({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},Ee={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,s=e.name,c=n.mainAxis,f=void 0===c||c,l=n.altAxis,d=void 0!==l&&l,p=n.boundary,m=n.rootBoundary,h=n.altBoundary,g=n.padding,v=n.tether,y=void 0===v||v,b=n.tetherOffset,w=void 0===b?0:b,O=he(t,{boundary:p,rootBoundary:m,padding:g,altBoundary:h}),E=S(t.placement),x=pe(t.placement),_=!x,j=U(E),A="x"===j?"y":"x",k=t.modifiersData.popperOffsets,D=t.rects.reference,L=t.rects.popper,T="function"==typeof w?w(Object.assign({},t.rects,{placement:t.placement})):w,C={x:0,y:0};if(k){if(f||d){var M="y"===j?r:a,N="y"===j?o:i,R="y"===j?"height":"width",B=k[j],H=k[j]+O[M],I=k[j]-O[N],q=y?-L[R]/2:0,W=x===u?D[R]:L[R],V=x===u?-L[R]:-D[R],z=t.elements.arrow,Q=y&&z?P(z):{width:0,height:0},J=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},X=J[M],G=J[N],Z=Y(0,D[R],Q[R]),ee=_?D[R]/2-q-Z-X-T:W-Z-X-T,te=_?-D[R]/2+q+Z+G+T:V+Z+G+T,ne=t.elements.arrow&&$(t.elements.arrow),re=ne?"y"===j?ne.clientTop||0:ne.clientLeft||0:0,oe=t.modifiersData.offset?t.modifiersData.offset[t.placement][j]:0,ie=k[j]+ee-oe-re,ae=k[j]+te-oe;if(f){var se=Y(y?K(H,ie):H,B,y?F(I,ae):I);k[j]=se,C[j]=se-B}if(d){var ce="x"===j?r:a,ue="x"===j?o:i,fe=k[A],le=fe+O[ce],de=fe-O[ue],me=Y(y?K(le,ie):le,fe,y?F(de,ae):de);k[A]=me,C[A]=me-fe}}t.modifiersData[s]=C}},requiresIfExists:["offset"]};function xe(e,t,n){void 0===n&&(n=!1);var r,o,i=I(t),a=N(e),s=T(t),c={scrollLeft:0,scrollTop:0},u={x:0,y:0};return(s||!s&&!n)&&(("body"!==k(t)||ce(i))&&(c=(r=t)!==D(r)&&T(r)?{scrollLeft:(o=r).scrollLeft,scrollTop:o.scrollTop}:ae(r)),T(t)?((u=N(t)).x+=t.clientLeft,u.y+=t.clientTop):i&&(u.x=se(i))),{x:a.left+c.scrollLeft-u.x,y:a.top+c.scrollTop-u.y,width:a.width,height:a.height}}function _e(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}var je={placement:"bottom",modifiers:[],strategy:"absolute"};function Ae(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function ke(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,i=void 0===o?je:o;return function(e,t,n){void 0===n&&(n=i);var o,a,s={placement:"bottom",orderedModifiers:[],options:Object.assign({},je,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},c=[],u=!1,f={state:s,setOptions:function(n){l(),s.options=Object.assign({},i,s.options,n),s.scrollParents={reference:L(e)?fe(e):e.contextElement?fe(e.contextElement):[],popper:fe(t)};var o,a,u=function(e){var t=_e(e);return A.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}((o=[].concat(r,s.options.modifiers),a=o.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{}),Object.keys(a).map((function(e){return a[e]}))));return s.orderedModifiers=u.filter((function(e){return e.enabled})),s.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,o=e.effect;if("function"==typeof o){var i=o({state:s,name:t,instance:f,options:r});c.push(i||function(){})}})),f.update()},forceUpdate:function(){if(!u){var e=s.elements,t=e.reference,n=e.popper;if(Ae(t,n)){s.rects={reference:xe(t,$(n),"fixed"===s.options.strategy),popper:P(n)},s.reset=!1,s.placement=s.options.placement,s.orderedModifiers.forEach((function(e){return s.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<s.orderedModifiers.length;r++)if(!0!==s.reset){var o=s.orderedModifiers[r],i=o.fn,a=o.options,c=void 0===a?{}:a,l=o.name;"function"==typeof i&&(s=i({state:s,options:c,name:l,instance:f})||s)}else s.reset=!1,r=-1}}},update:(o=function(){return new Promise((function(e){f.forceUpdate(),e(s)}))},function(){return a||(a=new Promise((function(e){Promise.resolve().then((function(){a=void 0,e(o())}))}))),a}),destroy:function(){l(),u=!0}};if(!Ae(e,t))return f;function l(){c.forEach((function(e){return e()})),c=[]}return f.setOptions(n).then((function(e){!u&&n.onFirstUpdate&&n.onFirstUpdate(e)})),f}}var De=ke(),Le=ke({defaultModifiers:[te,Oe,Z,M,we,ge,Ee,J,be]}),Te=ke({defaultModifiers:[te,Oe,Z,M]})},695:function(e,t,n){e.exports=function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=r(e),i=r(t),a=r(n);const s="transitionend",c=(e,t)=>{let n=!1;const r=t+5;e.addEventListener(s,(function t(){n=!0,e.removeEventListener(s,t)})),setTimeout((()=>{n||(e=>{e.dispatchEvent(new Event(s))})(e)}),r)},u=e=>{"function"==typeof e&&e()};return class{constructor(e){var t;(e=(e=>!(!e||"object"!=typeof e)&&(void 0!==e.jquery&&(e=e[0]),void 0!==e.nodeType))(t=e)?t.jquery?t[0]:t:"string"==typeof t&&t.length>0?i.default.findOne(t):null)&&(this._element=e,o.default.set(this._element,this.constructor.DATA_KEY,this))}dispose(){o.default.remove(this._element,this.constructor.DATA_KEY),a.default.off(this._element,this.constructor.EVENT_KEY),Object.getOwnPropertyNames(this).forEach((e=>{this[e]=null}))}_queueCallback(e,t,n=!0){if(!n)return void u(e);const r=(e=>{if(!e)return 0;let{transitionDuration:t,transitionDelay:n}=window.getComputedStyle(e);const r=Number.parseFloat(t),o=Number.parseFloat(n);return r||o?(t=t.split(",")[0],n=n.split(",")[0],1e3*(Number.parseFloat(t)+Number.parseFloat(n))):0})(t);a.default.one(t,"transitionend",(()=>u(e))),c(t,r)}static getInstance(e){return o.default.get(e,this.DATA_KEY)}static get VERSION(){return"5.0.1"}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}}}(n(493),n(737),n(286))},493:function(e){e.exports=function(){"use strict";const e=new Map;return{set(t,n,r){e.has(t)||e.set(t,new Map);const o=e.get(t);o.has(n)||0===o.size?o.set(n,r):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(o.keys())[0]}.`)},get:(t,n)=>e.has(t)&&e.get(t).get(n)||null,remove(t,n){if(!e.has(t))return;const r=e.get(t);r.delete(n),0===r.size&&e.delete(t)}}}()},286:function(e){e.exports=function(){"use strict";const e=/[^.]*(?=\..*)\.|.*/,t=/\..*/,n=/::\d+$/,r={};let o=1;const i={mouseenter:"mouseover",mouseleave:"mouseout"},a=/^(mouseenter|mouseleave)/i,s=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function c(e,t){return t&&`${t}::${o++}`||e.uidEvent||o++}function u(e){const t=c(e);return e.uidEvent=t,r[t]=r[t]||{},r[t]}function f(e,t,n=null){const r=Object.keys(e);for(let o=0,i=r.length;o<i;o++){const i=e[r[o]];if(i.originalHandler===t&&i.delegationSelector===n)return i}return null}function l(e,t,n){const r="string"==typeof t,o=r?n:t;let i=m(e);return s.has(i)||(i=e),[r,o,i]}function d(t,n,r,o,i){if("string"!=typeof n||!t)return;if(r||(r=o,o=null),a.test(n)){const e=e=>function(t){if(!t.relatedTarget||t.relatedTarget!==t.delegateTarget&&!t.delegateTarget.contains(t.relatedTarget))return e.call(this,t)};o?o=e(o):r=e(r)}const[s,d,p]=l(n,r,o),m=u(t),g=m[p]||(m[p]={}),v=f(g,d,s?r:null);if(v)return void(v.oneOff=v.oneOff&&i);const y=c(d,n.replace(e,"")),b=s?function(e,t,n){return function r(o){const i=e.querySelectorAll(t);for(let{target:a}=o;a&&a!==this;a=a.parentNode)for(let s=i.length;s--;)if(i[s]===a)return o.delegateTarget=a,r.oneOff&&h.off(e,o.type,t,n),n.apply(a,[o]);return null}}(t,r,o):function(e,t){return function n(r){return r.delegateTarget=e,n.oneOff&&h.off(e,r.type,t),t.apply(e,[r])}}(t,r);b.delegationSelector=s?r:null,b.originalHandler=d,b.oneOff=i,b.uidEvent=y,g[y]=b,t.addEventListener(p,b,s)}function p(e,t,n,r,o){const i=f(t[n],r,o);i&&(e.removeEventListener(n,i,Boolean(o)),delete t[n][i.uidEvent])}function m(e){return e=e.replace(t,""),i[e]||e}const h={on(e,t,n,r){d(e,t,n,r,!1)},one(e,t,n,r){d(e,t,n,r,!0)},off(e,t,r,o){if("string"!=typeof t||!e)return;const[i,a,s]=l(t,r,o),c=s!==t,f=u(e),d=t.startsWith(".");if(void 0!==a){if(!f||!f[s])return;return void p(e,f,s,a,i?r:null)}d&&Object.keys(f).forEach((n=>{!function(e,t,n,r){const o=t[n]||{};Object.keys(o).forEach((i=>{if(i.includes(r)){const r=o[i];p(e,t,n,r.originalHandler,r.delegationSelector)}}))}(e,f,n,t.slice(1))}));const m=f[s]||{};Object.keys(m).forEach((r=>{const o=r.replace(n,"");if(!c||t.includes(o)){const t=m[r];p(e,f,s,t.originalHandler,t.delegationSelector)}}))},trigger(e,t,n){if("string"!=typeof t||!e)return null;const r=(()=>{const{jQuery:e}=window;return e&&!document.body.hasAttribute("data-bs-no-jquery")?e:null})(),o=m(t),i=t!==o,a=s.has(o);let c,u=!0,f=!0,l=!1,d=null;return i&&r&&(c=r.Event(t,n),r(e).trigger(c),u=!c.isPropagationStopped(),f=!c.isImmediatePropagationStopped(),l=c.isDefaultPrevented()),a?(d=document.createEvent("HTMLEvents"),d.initEvent(o,u,!0)):d=new CustomEvent(t,{bubbles:u,cancelable:!0}),void 0!==n&&Object.keys(n).forEach((e=>{Object.defineProperty(d,e,{get:()=>n[e]})})),l&&d.preventDefault(),f&&e.dispatchEvent(d),d.defaultPrevented&&void 0!==c&&c.preventDefault(),d}};return h}()},175:function(e){e.exports=function(){"use strict";function e(e){return"true"===e||"false"!==e&&(e===Number(e).toString()?Number(e):""===e||"null"===e?null:e)}function t(e){return e.replace(/[A-Z]/g,(e=>`-${e.toLowerCase()}`))}return{setDataAttribute(e,n,r){e.setAttribute(`data-bs-${t(n)}`,r)},removeDataAttribute(e,n){e.removeAttribute(`data-bs-${t(n)}`)},getDataAttributes(t){if(!t)return{};const n={};return Object.keys(t.dataset).filter((e=>e.startsWith("bs"))).forEach((r=>{let o=r.replace(/^bs/,"");o=o.charAt(0).toLowerCase()+o.slice(1,o.length),n[o]=e(t.dataset[r])})),n},getDataAttribute:(n,r)=>e(n.getAttribute(`data-bs-${t(r)}`)),offset(e){const t=e.getBoundingClientRect();return{top:t.top+document.body.scrollTop,left:t.left+document.body.scrollLeft}},position:e=>({top:e.offsetTop,left:e.offsetLeft})}}()},737:function(e){e.exports=function(){"use strict";return{find:(e,t=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(t,e)),findOne:(e,t=document.documentElement)=>Element.prototype.querySelector.call(t,e),children:(e,t)=>[].concat(...e.children).filter((e=>e.matches(t))),parents(e,t){const n=[];let r=e.parentNode;for(;r&&r.nodeType===Node.ELEMENT_NODE&&3!==r.nodeType;)r.matches(t)&&n.push(r),r=r.parentNode;return n},prev(e,t){let n=e.previousElementSibling;for(;n;){if(n.matches(t))return[n];n=n.previousElementSibling}return[]},next(e,t){let n=e.nextElementSibling;for(;n;){if(n.matches(t))return[n];n=n.nextElementSibling}return[]}}}()},872:function(e,t,n){e.exports=function(e,t,n,r,o,i){"use strict";function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function s(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(n){if("default"!==n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}})),t.default=e,Object.freeze(t)}var c=s(e),u=a(t),f=a(n),l=a(r),d=a(o),p=a(i);const m=e=>!(!e||"object"!=typeof e)&&(void 0!==e.jquery&&(e=e[0]),void 0!==e.nodeType),h=e=>{if(!e)return!1;if(e.style&&e.parentNode&&e.parentNode.style){const t=getComputedStyle(e),n=getComputedStyle(e.parentNode);return"none"!==t.display&&"none"!==n.display&&"hidden"!==t.visibility}return!1},g=e=>!e||e.nodeType!==Node.ELEMENT_NODE||!!e.classList.contains("disabled")||(void 0!==e.disabled?e.disabled:e.hasAttribute("disabled")&&"false"!==e.getAttribute("disabled")),v=()=>{},y=()=>"rtl"===document.documentElement.dir,b="dropdown",w="bs.dropdown",O="Escape",E="Space",x="ArrowUp",_="ArrowDown",j=new RegExp("ArrowUp|ArrowDown|Escape"),A="click.bs.dropdown.data-api",k="keydown.bs.dropdown.data-api",D="show",L='[data-bs-toggle="dropdown"]',T=".dropdown-menu",C=y()?"top-end":"top-start",M=y()?"top-start":"top-end",S=y()?"bottom-end":"bottom-start",N=y()?"bottom-start":"bottom-end",P=y()?"left-start":"right-start",R=y()?"right-start":"left-start",B={offset:[0,2],boundary:"clippingParents",reference:"toggle",display:"dynamic",popperConfig:null,autoClose:!0},H={offset:"(array|string|function)",boundary:"(string|element)",reference:"(string|element|object)",display:"string",popperConfig:"(null|object|function)",autoClose:"(boolean|string)"};class I extends p.default{constructor(e,t){super(e),this._popper=null,this._config=this._getConfig(t),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}static get Default(){return B}static get DefaultType(){return H}static get NAME(){return b}toggle(){g(this._element)||(this._element.classList.contains(D)?this.hide():this.show())}show(){if(g(this._element)||this._menu.classList.contains(D))return;const e=I.getParentFromElement(this._element),t={relatedTarget:this._element};if(!l.default.trigger(this._element,"show.bs.dropdown",t).defaultPrevented){if(this._inNavbar)d.default.setDataAttribute(this._menu,"popper","none");else{if(void 0===c)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let t=this._element;"parent"===this._config.reference?t=e:m(this._config.reference)?(n=this._config.reference,t=m(n)?n.jquery?n[0]:n:"string"==typeof n&&n.length>0?u.default.findOne(n):null):"object"==typeof this._config.reference&&(t=this._config.reference);const r=this._getPopperConfig(),o=r.modifiers.find((e=>"applyStyles"===e.name&&!1===e.enabled));this._popper=c.createPopper(t,this._menu,r),o&&d.default.setDataAttribute(this._menu,"popper","static")}"ontouchstart"in document.documentElement&&!e.closest(".navbar-nav")&&[].concat(...document.body.children).forEach((e=>l.default.on(e,"mouseover",v))),this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.toggle(D),this._element.classList.toggle(D),l.default.trigger(this._element,"shown.bs.dropdown",t)}var n}hide(){if(g(this._element)||!this._menu.classList.contains(D))return;const e={relatedTarget:this._element};this._completeHide(e)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_addEventListeners(){l.default.on(this._element,"click.bs.dropdown",(e=>{e.preventDefault(),this.toggle()}))}_completeHide(e){l.default.trigger(this._element,"hide.bs.dropdown",e).defaultPrevented||("ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach((e=>l.default.off(e,"mouseover",v))),this._popper&&this._popper.destroy(),this._menu.classList.remove(D),this._element.classList.remove(D),this._element.setAttribute("aria-expanded","false"),d.default.removeDataAttribute(this._menu,"popper"),l.default.trigger(this._element,"hidden.bs.dropdown",e))}_getConfig(e){if(e={...this.constructor.Default,...d.default.getDataAttributes(this._element),...e},((e,t,n)=>{Object.keys(n).forEach((r=>{const o=n[r],i=t[r],a=i&&m(i)?"element":null==(s=i)?`${s}`:{}.toString.call(s).match(/\s([a-z]+)/i)[1].toLowerCase();var s;if(!new RegExp(o).test(a))throw new TypeError(`${e.toUpperCase()}: Option "${r}" provided type "${a}" but expected type "${o}".`)}))})(b,e,this.constructor.DefaultType),"object"==typeof e.reference&&!m(e.reference)&&"function"!=typeof e.reference.getBoundingClientRect)throw new TypeError(`${b.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return e}_getMenuElement(){return u.default.next(this._element,T)[0]}_getPlacement(){const e=this._element.parentNode;if(e.classList.contains("dropend"))return P;if(e.classList.contains("dropstart"))return R;const t="end"===getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();return e.classList.contains("dropup")?t?M:C:t?N:S}_detectNavbar(){return null!==this._element.closest(".navbar")}_getOffset(){const{offset:e}=this._config;return"string"==typeof e?e.split(",").map((e=>Number.parseInt(e,10))):"function"==typeof e?t=>e(t,this._element):e}_getPopperConfig(){const e={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return"static"===this._config.display&&(e.modifiers=[{name:"applyStyles",enabled:!1}]),{...e,..."function"==typeof this._config.popperConfig?this._config.popperConfig(e):this._config.popperConfig}}_selectMenuItem(e){const t=u.default.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter(h);if(!t.length)return;let n=t.indexOf(e.target);e.key===x&&n>0&&n--,e.key===_&&n<t.length-1&&n++,n=-1===n?0:n,t[n].focus()}static dropdownInterface(e,t){let n=f.default.get(e,w);if(n||(n=new I(e,"object"==typeof t?t:null)),"string"==typeof t){if(void 0===n[t])throw new TypeError(`No method named "${t}"`);n[t]()}}static jQueryInterface(e){return this.each((function(){I.dropdownInterface(this,e)}))}static clearMenus(e){if(e&&(2===e.button||"keyup"===e.type&&"Tab"!==e.key))return;const t=u.default.find(L);for(let n=0,r=t.length;n<r;n++){const r=f.default.get(t[n],w);if(!r||!1===r._config.autoClose)continue;if(!r._element.classList.contains(D))continue;const o={relatedTarget:r._element};if(e){const t=e.composedPath(),n=t.includes(r._menu);if(t.includes(r._element)||"inside"===r._config.autoClose&&!n||"outside"===r._config.autoClose&&n)continue;if(r._menu.contains(e.target)&&("keyup"===e.type&&"Tab"===e.key||/input|select|option|textarea|form/i.test(e.target.tagName)))continue;"click"===e.type&&(o.clickEvent=e)}r._completeHide(o)}}static getParentFromElement(e){return(e=>{const t=(e=>{let t=e.getAttribute("data-bs-target");if(!t||"#"===t){let n=e.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),t=n&&"#"!==n?n.trim():null}return t})(e);return t?document.querySelector(t):null})(e)||e.parentNode}static dataApiKeydownHandler(e){if(/input|textarea/i.test(e.target.tagName)?e.key===E||e.key!==O&&(e.key!==_&&e.key!==x||e.target.closest(T)):!j.test(e.key))return;const t=this.classList.contains(D);if(!t&&e.key===O)return;if(e.preventDefault(),e.stopPropagation(),g(this))return;const n=()=>this.matches(L)?this:u.default.prev(this,L)[0];if(e.key===O)return n().focus(),void I.clearMenus();t||e.key!==x&&e.key!==_?t&&e.key!==E?I.getInstance(n())._selectMenuItem(e):I.clearMenus():n().click()}}return l.default.on(document,k,L,I.dataApiKeydownHandler),l.default.on(document,k,T,I.dataApiKeydownHandler),l.default.on(document,A,I.clearMenus),l.default.on(document,"keyup.bs.dropdown.data-api",I.clearMenus),l.default.on(document,A,L,(function(e){e.preventDefault(),I.dropdownInterface(this)})),q=I,W=()=>{const e=(()=>{const{jQuery:e}=window;return e&&!document.body.hasAttribute("data-bs-no-jquery")?e:null})();if(e){const t=q.NAME,n=e.fn[t];e.fn[t]=q.jQueryInterface,e.fn[t].Constructor=q,e.fn[t].noConflict=()=>(e.fn[t]=n,q.jQueryInterface)}},"loading"===document.readyState?document.addEventListener("DOMContentLoaded",W):W(),I;var q,W}(n(750),n(737),n(493),n(286),n(175),n(695))},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},15:e=>{"use strict";function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}e.exports=function(e){var n,r,o=(r=4,function(e){if(Array.isArray(e))return e}(n=e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var r,o,i=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){s=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(s)throw o}}return i}}(n,r)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=o[1],a=o[3];if("function"==typeof btoa){var s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),u="/*# ".concat(c," */"),f=a.sources.map((function(e){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(e," */")}));return[i].concat(f).concat([u]).join("\n")}return[i].join("\n")}},379:(e,t,n)=>{"use strict";var r,o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function a(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},r=[],o=0;o<e.length;o++){var s=e[o],c=t.base?s[0]+t.base:s[0],u=n[c]||0,f="".concat(c," ").concat(u);n[c]=u+1;var l=a(f),d={css:s[1],media:s[2],sourceMap:s[3]};-1!==l?(i[l].references++,i[l].updater(d)):i.push({identifier:f,updater:h(d,t),references:1}),r.push(f)}return r}function c(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var u,f=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function l(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=f(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function d(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,m=0;function h(e,t){var n,r,o;if(t.singleton){var i=m++;n=p||(p=c(t)),r=l.bind(null,n,i,!1),o=l.bind(null,n,i,!0)}else n=c(t),r=d.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=a(n[r]);i[o].references--}for(var c=s(e,t),u=0;u<n.length;u++){var f=a(n[u]);0===i[f].references&&(i[f].updater(),i.splice(f,1))}n=c}}}}}]);
//# sourceMappingURL=vendor.c730dc7f.js.map