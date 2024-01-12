import e from"@csstools/postcss-progressive-custom-properties";import t from"postcss-value-parser";
/**
 * Simple matrix (and vector) multiplication
 * Warning: No error handling for incompatible dimensions!
 * @author Lea Verou 2020 MIT License
 *
 * @license W3C
 * https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 * @copyright This software or document includes material copied from or derived from https://github.com/w3c/csswg-drafts/blob/main/css-color-4/multiply-matrices.js. Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).
 *
 * @see https://github.com/w3c/csswg-drafts/blob/main/css-color-4/multiply-matrices.js
 */
function n(e,t){const n=e.length;let r,u;r=Array.isArray(e[0])?e:[e],Array.isArray(t[0])||(u=t.map((e=>[e])));const a=u[0].length,o=u[0].map(((e,t)=>u.map((e=>e[t]))));let s=r.map((e=>o.map((t=>Array.isArray(e)?e.reduce(((e,n,r)=>e+n*(t[r]||0)),0):t.reduce(((t,n)=>t+n*e),0)))));return 1===n&&(s=s[0]),1===a?s.map((e=>e[0])):s}
/**
 * @license W3C
 * https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 * @copyright This software or document includes material copied from or derived from https://github.com/w3c/csswg-drafts/blob/main/css-color-4/conversions.js. Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).
 *
 * @see https://github.com/w3c/csswg-drafts/blob/main/css-color-4/conversions.js
 */const r=[.3457/.3585,1,.2958/.3585];function u(e){return e.map((function(e){const t=e<0?-1:1,n=Math.abs(e);return n<.04045?e/12.92:t*Math.pow((n+.055)/1.055,2.4)}))}function a(e){return e.map((function(e){const t=e<0?-1:1,n=Math.abs(e);return n>.0031308?t*(1.055*Math.pow(n,1/2.4)-.055):12.92*e}))}function o(e){return n([[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],e)}function s(e){return n([[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]],e)}function i(e){return u(e)}function l(e){return a(e)}function c(e){return n([[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],e)}function p(e){return n([[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]],e)}function f(e){return n([[.9554734527042182,-.023098536874261423,.0632593086610217],[-.028369706963208136,1.0099954580058226,.021041398966943008],[.012314001688319899,-.020507696433477912,1.3303659366080753]],e)}function d(e){const t=24389/27,n=216/24389,u=[];u[1]=(e[0]+16)/116,u[0]=e[1]/500+u[1],u[2]=u[1]-e[2]/200;return[Math.pow(u[0],3)>n?Math.pow(u[0],3):(116*u[0]-16)/t,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/t,Math.pow(u[2],3)>n?Math.pow(u[2],3):(116*u[2]-16)/t].map(((e,t)=>e*r[t]))}function h(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]}function m(e){const t=n([[.8190224432164319,.3619062562801221,-.12887378261216414],[.0329836671980271,.9292868468965546,.03614466816999844],[.048177199566046255,.26423952494422764,.6335478258136937]],e);return n([[.2104542553,.793617785,-.0040720468],[1.9779984951,-2.428592205,.4505937099],[.0259040371,.7827717662,-.808675766]],t.map((e=>Math.cbrt(e))))}function v(e){const t=n([[.9999999984505198,.39633779217376786,.2158037580607588],[1.0000000088817609,-.10556134232365635,-.06385417477170591],[1.0000000546724108,-.08948418209496575,-1.2914855378640917]],e);return n([[1.2268798733741557,-.5578149965554813,.28139105017721583],[-.04057576262431372,1.1122868293970594,-.07171106666151701],[-.07637294974672142,-.4214933239627914,1.5869240244272418]],t.map((e=>e**3)))}function b(e){const t=180*Math.atan2(e[2],e[1])/Math.PI;return[e[0],Math.sqrt(e[1]**2+e[2]**2),t>=0?t:t+360]}function y(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]}
/**
 * @license W3C
 * https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 * @copyright This software or document includes material copied from or derived from https://github.com/w3c/csswg-drafts/blob/main/css-color-4/deltaEOK.js. Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).
 *
 * @see https://github.com/w3c/csswg-drafts/blob/main/css-color-4/deltaEOK.js
 */function M(e,t){const[n,r,u]=e,[a,o,s]=t,i=n-a,l=r-o,c=u-s;return Math.sqrt(i**2+l**2+c**2)}function g(e,t,n){return function(e,t,n){let r=0,u=e[1];const a=e;for(;u-r>1e-4;){const e=w(t(a));M(y(a),y(n(e)))-.02<1e-4?r=a[1]:u=a[1],a[1]=(u+r)/2}return w(t([...a]))}(e,t,n)}function w(e){return e.map((e=>e<0?0:e>1?1:e))}function x(e){const[t,n,r]=e;return t>=-1e-4&&t<=1.0001&&n>=-1e-4&&n<=1.0001&&r>=-1e-4&&r<=1.0001}function F(e){const[t,n,r]=e;let u=[Math.max(t,0),Math.min(Math.max(n,-160),160),Math.min(Math.max(r,-160),160)];u=d(u);let a=u.slice();return a=f(a),a=m(a),a=b(a),a[0]<1e-6&&(a=[0,0,0]),a[0]>.999999&&(a=[1,0,0]),u=f(u),u=p(u),u=l(u),x(u)?[w(u),!0]:[g(a,(e=>l(e=p(e=v(e=y(e))))),(e=>b(e=m(e=c(e=i(e)))))),!1]}function P(e){const[t,n,r]=e;let i=[Math.max(t,0),Math.min(Math.max(n,-160),160),Math.min(Math.max(r,-160),160)];i=d(i);let l=i.slice();return l=f(l),l=m(l),l=b(l),l[0]<1e-6&&(l=[0,0,0]),l[0]>.999999&&(l=[1,0,0]),i=f(i),i=s(i),i=a(i),x(i)?w(i).map((e=>Math.round(255*e))):g(l,(e=>a(e=s(e=v(e=y(e))))),(e=>b(e=m(e=o(e=u(e)))))).map((e=>Math.round(255*e)))}function C(e){const[t,n,r]=e;let u=[Math.max(t,0),n,r%360];u=h(u),u=d(u);let a=u.slice();return a=f(a),a=m(a),a=b(a),a[0]<1e-6&&(a=[0,0,0]),a[0]>.999999&&(a=[1,0,0]),u=f(u),u=p(u),u=l(u),x(u)?[w(u),!0]:[g(a,(e=>l(e=p(e=v(e=y(e))))),(e=>b(e=m(e=c(e=i(e)))))),!1]}function L(e){const[t,n,r]=e;let i=[Math.max(t,0),n,r%360];i=h(i),i=d(i);let l=i.slice();return l=f(l),l=m(l),l=b(l),l[0]<1e-6&&(l=[0,0,0]),l[0]>.999999&&(l=[1,0,0]),i=f(i),i=s(i),i=a(i),x(i)?w(i).map((e=>Math.round(255*e))):g(l,(e=>a(e=s(e=v(e=y(e))))),(e=>b(e=m(e=o(e=u(e)))))).map((e=>Math.round(255*e)))}function I(e){const n=e.value.toLowerCase(),r=e.nodes.slice().filter((e=>"comment"!==e.type&&"space"!==e.type));let u=null;if("lab"===n?u=E(r):"lch"===n&&(u=B(r)),!u)return;e.value="rgb",function(e,n,r){if(!n||!r)return;if(e.value="rgba",n.value=",",n.before="",!function(e){if(!e||"word"!==e.type)return!1;if(!D(e))return!1;const n=t.unit(e.value);if(!n)return!1;return!!n.number}(r))return;const u=t.unit(r.value);if(!u)return;"%"===u.unit&&(u.number=String(parseFloat(u.number)/100),r.value=String(u.number))}(e,u.slash,u.alpha);const[a,o,s]=k(u),[i,l,c]=q(u),p=("lab"===n?P:L)([i.number,l.number,c.number].map((e=>parseFloat(e))));e.nodes.splice(e.nodes.indexOf(a)+1,0,{sourceIndex:0,sourceEndIndex:1,value:",",type:"div",before:"",after:""}),e.nodes.splice(e.nodes.indexOf(o)+1,0,{sourceIndex:0,sourceEndIndex:1,value:",",type:"div",before:"",after:""}),$(e.nodes,a,{...a,value:String(p[0])}),$(e.nodes,o,{...o,value:String(p[1])}),$(e.nodes,s,{...s,value:String(p[2])})}function N(e){if(!e||"word"!==e.type)return!1;if(!D(e))return!1;const n=t.unit(e.value);return!!n&&("%"===n.unit||""===n.unit)}function S(e){return e&&"function"===e.type&&"calc"===e.value.toLowerCase()}function O(e){return e&&"function"===e.type&&"var"===e.value.toLowerCase()}function A(e){return e&&"div"===e.type&&"/"===e.value}function B(e){if(!N(e[0]))return null;if(!N(e[1]))return null;if(!function(e){if(!e||"word"!==e.type)return!1;if(!D(e))return!1;const n=t.unit(e.value);if(!n)return!1;const r=n.unit.toLowerCase();return!!n.number&&("deg"===r||"grad"===r||"rad"===r||"turn"===r||""===r)}(e[2]))return null;const n={l:t.unit(e[0].value),lNode:e[0],c:t.unit(e[1].value),cNode:e[1],h:t.unit(e[2].value),hNode:e[2]};return function(e){switch(e.unit.toLowerCase()){case"deg":return void(e.unit="");case"rad":return e.unit="",void(e.number=(180*parseFloat(e.number)/Math.PI).toString());case"grad":return e.unit="",void(e.number=(.9*parseFloat(e.number)).toString());case"turn":e.unit="",e.number=(360*parseFloat(e.number)).toString()}}(n.h),""!==n.h.unit?null:(A(e[3])&&(n.slash=e[3]),(N(e[4])||S(e[4])||O(e[4]))&&(n.alpha=e[4]),!(e.length>3)||n.slash&&n.alpha?("%"===n.l.unit&&(n.l.unit=""),"%"===n.c.unit&&(n.c.unit="",n.c.number=(parseFloat(n.c.number)/100*150).toFixed(10)),n):null)}function E(e){if(!N(e[0]))return null;if(!N(e[1]))return null;if(!N(e[2]))return null;const n={l:t.unit(e[0].value),lNode:e[0],a:t.unit(e[1].value),aNode:e[1],b:t.unit(e[2].value),bNode:e[2]};return A(e[3])&&(n.slash=e[3]),(N(e[4])||S(e[4])||O(e[4]))&&(n.alpha=e[4]),!(e.length>3)||n.slash&&n.alpha?("%"===n.l.unit&&(n.l.unit=""),"%"===n.a.unit&&(n.a.unit="",n.a.number=(parseFloat(n.a.number)/100*125).toFixed(10)),"%"===n.b.unit&&(n.b.unit="",n.b.number=(parseFloat(n.b.number)/100*125).toFixed(10)),n):null}function j(e){return void 0!==e.a}function k(e){return j(e)?[e.lNode,e.aNode,e.bNode]:[e.lNode,e.cNode,e.hNode]}function q(e){return j(e)?[e.l,e.a,e.b]:[e.l,e.c,e.h]}function $(e,t,n){const r=e.indexOf(t);e[r]=n}function D(e){if(!e||!e.value)return!1;try{return!1!==t.unit(e.value)}catch(e){return!1}}function G(e,n,r,u){let a;try{a=t(e)}catch(t){n.warn(r,`Failed to parse value '${e}' as a lab or lch function. Leaving the original value intact.`)}if(void 0===a)return;a.walk((e=>{e.type&&"function"===e.type&&("lab"!==e.value.toLowerCase()&&"lch"!==e.value.toLowerCase()||I(e))}));const o=String(a);if(o===e)return;const s=t(e);s.walk((e=>{e.type&&"function"===e.type&&("lab"!==e.value.toLowerCase()&&"lch"!==e.value.toLowerCase()||function(e,n,r,u){const a=t.stringify(e),o=e.value.toLowerCase(),s=e.nodes.slice().filter((e=>"comment"!==e.type&&"space"!==e.type));let i=null;if("lab"===o?i=E(s):"lch"===o&&(i=B(s)),!i)return;if(s.length>3&&(!i.slash||!i.alpha))return;e.value="color";const[l,c,p]=k(i),[f,d,h]=q(i),m="lab"===o?F:C,v=[f.number,d.number,h.number].map((e=>parseFloat(e))),[b,y]=m(v);!y&&u&&n.warn(r,`"${a}" is out of gamut for "display-p3". Given "preserve: true" is set, this will lead to unexpected results in some browsers.`),e.nodes.splice(0,0,{sourceIndex:0,sourceEndIndex:10,value:"display-p3",type:"word"}),e.nodes.splice(1,0,{sourceIndex:0,sourceEndIndex:1,value:" ",type:"space"}),$(e.nodes,l,{...l,value:b[0].toFixed(5)}),$(e.nodes,c,{...c,value:b[1].toFixed(5)}),$(e.nodes,p,{...p,value:b[2].toFixed(5)})}(e,n,r,u))}));return{rgb:o,displayP3:String(s)}}const z=e=>({postcssPlugin:"postcss-lab-function",Declaration:(t,{result:n})=>{if(function(e){const t=e.parent;if(!t)return!1;const n=t.index(e);for(let r=0;r<n;r++){const n=t.nodes[r];if("decl"===n.type&&n.prop.toLowerCase()===e.prop.toLowerCase())return!0}return!1}(t))return;if(function(e){let t=e.parent;for(;t;)if("atrule"===t.type){if("supports"===t.name.toLowerCase()){if(-1!==t.params.toLowerCase().indexOf("lab("))return!0;if(-1!==t.params.toLowerCase().indexOf("lch("))return!0}t=t.parent}else t=t.parent;return!1}(t))return;const r=t.value;if(!/(^|[^\w-])(lab|lch)\(/i.test(r.toLowerCase()))return;const u=G(r,t,n,e.preserve);void 0!==u&&(e.preserve?(t.cloneBefore({value:u.rgb}),e.subFeatures.displayP3&&t.cloneBefore({value:u.displayP3})):(t.cloneBefore({value:u.rgb}),e.subFeatures.displayP3&&t.cloneBefore({value:u.displayP3}),t.remove()))}});z.postcss=!0;const H=t=>{const n=Object.assign({enableProgressiveCustomProperties:!0,preserve:!1,subFeatures:{displayP3:!0}},t);return n.subFeatures=Object.assign({displayP3:!0},n.subFeatures),n.enableProgressiveCustomProperties&&(n.preserve||n.subFeatures.displayP3)?{postcssPlugin:"postcss-lab-function",plugins:[e(),z(n)]}:z(n)};H.postcss=!0;export{H as default};
