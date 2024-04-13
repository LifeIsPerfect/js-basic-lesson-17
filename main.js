(()=>{"use strict";var n,e,t,r,a,o,i,s,c,p,d,u,l,f,m={208:(n,e,t)=>{t.d(e,{A:()=>s});var r=t(601),a=t.n(r),o=t(314),i=t.n(o)()(a());i.push([n.id,"* {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  gap: 10%;\n}\n\n.history {\n  flex-grow: 2;\n}\n\n.main-section {\n  flex-grow: 3;\n\n  display: grid;\n\n  grid-column-gap: 20px;\n  grid-row-gap: 5px;\n  grid-auto-flow: row;\n}\n\n@media (min-width: 901px) {\n  .main-section {\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: 20px repeat(1, 1fr);\n    grid-template-areas:\n      'search search-button'\n      'map weather-info';\n  }\n}\n\n@media (max-width: 900px) {\n  .main-section {\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: 20px repeat(2, 1fr);\n    grid-template-areas:\n      'search search-button'\n      'weather-info weather-info'\n      'map map';\n  }\n}\n\n.search__form {\n  grid-area: search;\n  width: 100%;\n}\n\n.search-button {\n  grid-area: search-button;\n  width: 160px;\n}\n\n.map {\n  grid-area: map;\n  border: 2px solid #2196f3;\n  background-color: #f7f7f7;\n  text-align: center;\n}\n\n.history__list {\n  padding: 0;\n  list-style-type: none;\n}\n\n.weather-info {\n  grid-area: weather-info;\n  border: 2px solid #2196f3;\n}\n\n@media (min-width: 900px) {\n  .history__title {\n    font-size: 24px;\n  }\n\n  .history__list {\n    font-size: 18px;\n  }\n}\n",""]);const s=i},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,a,o){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var p=0;p<n.length;p++){var d=[].concat(n[p]);r&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),e.push(d))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var o={},i=[],s=0;s<n.length;s++){var c=n[s],p=r.base?c[0]+r.base:c[0],d=o[p]||0,u="".concat(p," ").concat(d);o[p]=d+1;var l=t(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==l)e[l].references++,e[l].updater(f);else{var m=a(f,r);r.byIndex=s,e.splice(s,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var o=r(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var s=t(o[i]);e[s].references--}for(var c=r(n,a),p=0;p<o.length;p++){var d=t(o[p]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}o=c}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},h={};function v(n){var e=h[n];if(void 0!==e)return e.exports;var t=h[n]={id:n,exports:{}};return m[n](t,t.exports,v),t.exports}v.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return v.d(e,{a:e}),e},v.d=(n,e)=>{for(var t in e)v.o(e,t)&&!v.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},v.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),v.nc=void 0,n=v(72),e=v.n(n),t=v(825),r=v.n(t),a=v(659),o=v.n(a),i=v(56),s=v.n(i),c=v(540),p=v.n(c),d=v(113),u=v.n(d),l=v(208),(f={}).styleTagTransform=u(),f.setAttributes=s(),f.insert=o().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=p(),e()(l.A,f),l.A&&l.A.locals&&l.A.locals,console.log("Hello from index.js!")})();