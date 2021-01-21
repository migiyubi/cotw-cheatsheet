(()=>{"use strict";var e={469:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(476),i=n.n(a)()((function(e){return e[1]}));i.push([e.id,"body {\n  font-size: 0.9em;\n  font-family: Helvetica, Arial, sans-serif;\n  color: #d2d2d2;\n  background-color: #1a1d21;\n}\n\nbody > * {\n  margin: 12px;\n}\n\na {\n  color: #1d98d1;\n}\n\nselect {\n  font-size: 1.0em;\n  color: #d2d2d2;\n  background-color: #1a1d21;\n}\n\n#map-info {\n  display: flex;\n  align-items: flex-end;\n  font-size: 1.5em;\n}\n\n#map-image-link {\n  margin: 4px 40px;\n}\n\ntable {\n  border-collapse: collapse;\n}\n\ntd {\n  padding: 6px 18px;\n  border-bottom: 1px solid #888888;\n}\n\n.animal-name {\n  width: 30%;\n}\n\n.animal-name-en {\n  font-size: 0.6em;\n}\n\n.animal-class {\n  width: 5%;\n  text-align: center;\n}\n\n.animal-caller {\n  width: 30%;\n}\n\n.animal-difficulty {\n  width: 20%;\n}\n\n.animal-score {\n  width: 15%;\n  text-align: right;\n}\n",""]);const o=i},476:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,a){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(a)for(var o=0;o<this.length;o++){var r=this[o][0];null!=r&&(i[r]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);a&&i[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},892:(e,t,n)=>{var a,i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),o=[];function r(e){for(var t=-1,n=0;n<o.length;n++)if(o[n].identifier===e){t=n;break}return t}function d(e,t){for(var n={},a=[],i=0;i<e.length;i++){var d=e[i],l=t.base?d[0]+t.base:d[0],s=n[l]||0,c="".concat(l," ").concat(s);n[l]=s+1;var m=r(c),p={css:d[1],media:d[2],sourceMap:d[3]};-1!==m?(o[m].references++,o[m].updater(p)):o.push({identifier:c,updater:f(p,t),references:1}),a.push(c)}return a}function l(e){var t=document.createElement("style"),a=e.attributes||{};if(void 0===a.nonce){var o=n.nc;o&&(a.nonce=o)}if(Object.keys(a).forEach((function(e){t.setAttribute(e,a[e])})),"function"==typeof e.insert)e.insert(t);else{var r=i(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}return t}var s,c=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function m(e,t,n,a){var i=n?"":a.media?"@media ".concat(a.media," {").concat(a.css,"}"):a.css;if(e.styleSheet)e.styleSheet.cssText=c(t,i);else{var o=document.createTextNode(i),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(o,r[t]):e.appendChild(o)}}function p(e,t,n){var a=n.css,i=n.media,o=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}var u=null,h=0;function f(e,t){var n,a,i;if(t.singleton){var o=h++;n=u||(u=l(t)),a=m.bind(null,n,o,!1),i=m.bind(null,n,o,!0)}else n=l(t),a=p.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return a(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;a(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a));var n=d(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var a=0;a<n.length;a++){var i=r(n[a]);o[i].references--}for(var l=d(e,t),s=0;s<n.length;s++){var c=r(n[s]);0===o[c].references&&(o[c].updater(),o.splice(c,1))}n=l}}}}},t={};function n(a){if(t[a])return t[a].exports;var i=t[a]={id:a,exports:{}};return e[a](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(892),t=n.n(e),a=n(469);t()(a.Z,{insert:"head",singleton:!1}),a.Z.locals;class i{constructor(){this._initMaster().then((()=>{this._initCallerMap(this._data.caller),this._initMapSelector(document.body),this._initMapInfo(document.body),this._initAnimalTable(document.body),this._setMap("hirschfelden")}))}async _initMaster(){const e=await fetch("assets/master.json"),t=await e.json();this._data=t}_initCallerMap(e){const t={};for(const n in e){const a=e[n];for(const e of a.targets)void 0===t[e]&&(t[e]=n)}this._callerMap=t}_initMapSelector(e){const t=document.createElement("div");e.appendChild(t);const n=document.createElement("select");n.setAttribute("id","map-selector"),t.appendChild(n);for(const e in this._data.map){const t=document.createElement("option");t.textContent=this._data.map[e].display_name.en,t.value=e,n.appendChild(t)}n.addEventListener("change",(e=>{const t=n.children[n.selectedIndex].value;this._setMap(t)}))}_initMapInfo(e){const t=document.createElement("div");t.setAttribute("id","map-info"),e.appendChild(t),this._mapNameJp=document.createElement("div"),this._mapNameJp.setAttribute("id","map-name-jp"),t.appendChild(this._mapNameJp);const n=document.createElement("div");n.setAttribute("id","map-image-link"),t.appendChild(n),this._mapImageLinkA=document.createElement("a"),this._mapImageLinkA.textContent="MAP",this._mapImageLinkA.setAttribute("target","_blank"),this._mapImageLinkA.setAttribute("rel","noopener noreferrer"),n.appendChild(this._mapImageLinkA)}_initAnimalTable(e){this._table=document.createElement("table"),e.appendChild(this._table)}_clearDom(e){for(;e.children.length>0;)e.removeChild(e.children[0])}_setMap(e){this._mapNameJp.textContent=this._data.map[e].display_name.jp,this._mapImageLinkA.href=this._data.map[e].url_map,this._updateAnimalTable(this._table,this._data.map[e],this._data.animal,this._data.caller,this._data.difficulty)}_updateAnimalTable(e,t,n,a,i){this._clearDom(e);const o=document.createElement("thead");e.appendChild(o);const r=document.createElement("td");r.textContent="Animal",o.appendChild(r);const d=document.createElement("td");d.textContent="Class",o.appendChild(d);const l=document.createElement("td");l.textContent="Caller",o.appendChild(l);const s=document.createElement("td");s.textContent="Max Difficulty",o.appendChild(s);const c=document.createElement("td");c.textContent="Min Diamond Score",o.appendChild(c);const m=t.animals.slice();m.sort(((e,t)=>n[e].class-n[t].class));for(const t of m)this._addAnimalRow(e,n[t],a[this._callerMap[t]],i[n[t].max_difficulty])}_addAnimalRow(e,t,n,a){const i=document.createElement("tr");e.appendChild(i);const o=document.createElement("td"),r=document.createElement("div"),d=document.createElement("div");o.classList.add("animal-name"),r.classList.add("animal-name-en"),d.classList.add("animal-name-jp"),r.textContent=t.display_name.en,d.textContent=t.display_name.jp,o.appendChild(r),o.appendChild(d),i.appendChild(o);const l=document.createElement("td");l.classList.add("animal-class"),l.textContent=t.class.toString(10),i.appendChild(l);const s=document.createElement("td");s.classList.add("animal-caller"),s.textContent=void 0!==n?n.display_name.jp:"-",i.appendChild(s);const c=document.createElement("td");c.classList.add("animal-difficulty"),c.textContent=a.display_name.jp,i.appendChild(c);const m=document.createElement("td");return m.classList.add("animal-score"),m.textContent=t.min_diamond_score.toFixed(1),i.appendChild(m),i}}document.addEventListener("DOMContentLoaded",(()=>{new i}))})()})();