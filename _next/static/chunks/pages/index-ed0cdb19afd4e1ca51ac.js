(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)}},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},6860:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},319:function(e,t,r){var n=r(3646),a=r(6860),i=r(379),o=r(8206);e.exports=function(e){return n(e)||a(e)||i(e)||o()}},3398:function(e,t,r){"use strict";var n;t.__esModule=!0,t.AmpStateContext=void 0;var a=((n=r(7294))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=a},6393:function(e,t,r){"use strict";t.__esModule=!0,t.isInAmpMode=o,t.useAmp=function(){return o(a.default.useContext(i.AmpStateContext))};var n,a=(n=r(7294))&&n.__esModule?n:{default:n},i=r(3398);function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,a=void 0!==n&&n,i=e.hasQuery,o=void 0!==i&&i;return r||a&&o}},2775:function(e,t,r){"use strict";var n=r(9713);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.__esModule=!0,t.defaultHead=p,t.default=void 0;var i,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var i=n?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(r,a,i):r[a]=e[a]}r.default=e,t&&t.set(e,r);return r}(r(7294)),s=(i=r(3244))&&i.__esModule?i:{default:i},c=r(3398),d=r(1165),l=r(6393);function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function p(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function m(e,t){return e.reduce((function(e,t){var r=o.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(f,[]).reverse().concat(p(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(a){var i=!0,o=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){o=!0;var s=a.key.slice(a.key.indexOf("$")+1);e.has(s)?i=!1:e.add(s)}switch(a.type){case"title":case"base":t.has(a.type)?i=!1:t.add(a.type);break;case"meta":for(var c=0,d=h.length;c<d;c++){var l=h[c];if(a.props.hasOwnProperty(l))if("charSet"===l)r.has(l)?i=!1:r.add(l);else{var u=a.props[l],p=n[l]||new Set;"name"===l&&o||!p.has(u)?(p.add(u),n[l]=p):i=!1}}}return i}}()).reverse().map((function(e,r){var i=e.key||r;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var s=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.props||{});return s["data-href"]=s.href,s.href=void 0,s["data-optimized-fonts"]=!0,o.default.cloneElement(e,s)}return o.default.cloneElement(e,{key:i})}))}var v=function(e){var t=e.children,r=(0,o.useContext)(c.AmpStateContext),n=(0,o.useContext)(d.HeadManagerContext);return o.default.createElement(s.default,{reduceComponentsToState:m,headManager:n,inAmpMode:(0,l.isInAmpMode)(r)},t)};t.default=v},3244:function(e,t,r){"use strict";var n=r(319),a=r(4575),i=r(3913),o=(r(1506),r(2205)),s=r(8585),c=r(9754);function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=c(e);if(t){var a=c(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return s(this,r)}}t.__esModule=!0,t.default=void 0;var l=r(7294),u=function(e){o(r,e);var t=d(r);function r(e){var i;return a(this,r),(i=t.call(this,e))._hasHeadManager=void 0,i.emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(n(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(l.Component);t.default=u},8118:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return f}});var n=r(5893),a=r(6156);function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(n=(o=s.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(c){a=!0,i=c}finally{try{n||null==s.return||s.return()}finally{if(a)throw i}}return r}}(e,t)||function(e,t){if(e){if("string"===typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var s=r(9008),c=r(7294),d=r(5323),l=r.n(d);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(){var e=o(c.useState({wave:1,initialfood:6,spawntime:6,rp_times:[],rp_food:[],reds:0,splash:0,processed:!1,results:""}),2),t=e[0],r=e[1],i=o(c.useState({hp:0,repoisons:[],time:0,poisontick:0,damage:0,health:0,tick1:0,tick2:0,tick3:0,tick4:0}),2),d=i[0],u=i[1],f=o(c.useState(!1),2),h=f[0],m=f[1],v=o(c.useState(""),2),y=v[0],j=v[1];c.useEffect((function(){h&&function(){var e=[],r=0,n=4,a=4*t.initialfood+3*t.reds+t.splash,i=t.spawntime,o=0,s=0,c=0,d=0,l=[27,32,37,43,49,55,60,67,76,60][t.wave-1],p=t.rp_food,f=[],h=[];j(""),t.rp_food.length!==t.rp_times.length&&j("rp food & rp times should be the same length");for(var m=0;m<t.rp_times.length;m++){for(var v=m+1;v<t.rp_times.length;v++)t.rp_times[m]==t.rp_times[v]&&(p[m]+=t.rp_food[v]);f.indexOf(t.rp_times[m])<0&&(f.push(t.rp_times[m]),h.push(p[m]))}for(var y=0;y<f.length;y++)e.push("-> "+f[y]+" with "+h[y]+" food");for(;a<l;){for(rptime in((i+=3)-spawntime)%60&&(e.push("here 1"),l+=1),f)if(rptime<i){food=f.indexOf(rptime),a+=4*h[food],r=0,n=4,e.push("---"),e.push("Rp with "+h[food]+" food"),e.push("---");var x=f.indexOf(rptime);f.splice(x,1);var b=f.indexOf(h[food]);f.splice(b,1);break}if(l-a<n?(l-a==3&&(c+=1),l-a==2&&(s+=1),l-a==1&&(o+=1)):l-a>=n&&(4==n&&(d+=1),3==n&&(c+=1),2==n&&(s+=1),1==n&&(o+=1)),a+=n,!((r+=1)%5)&&0==(n-=1))return void j("NOT ENOUGH FOOD")}u({hp:l,repoisons:[],time:i,poisontick:Math.min(n,Math.abs(l-a)),damage:a,health:Math.max(l-a,0),tick1:o,tick2:s,tick3:c,tick4:d})}(),m(!1)}));var x=function(e){var n=Number(e.target.value);r(p(p({},t),{},(0,a.Z)({},e.target.name,n))),m(!0)};return(0,n.jsxs)("div",{className:l().container,children:[(0,n.jsxs)(s.default,{children:[(0,n.jsx)("title",{children:"Capeshits Calc"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsxs)("main",{className:l().main,children:[(0,n.jsx)("h1",{className:l().title,children:"Capeshit's Calc"}),(0,n.jsxs)("code",{className:l().code,children:[(0,n.jsx)("span",{className:l().red,children:"wave"}),": wave number from 1-10.",(0,n.jsx)("br",{}),(0,n.jsx)("span",{className:l().red,children:"initialfood"})," : the amount of food used on the healer as it spawns. ",(0,n.jsx)("br",{}),(0,n.jsx)("span",{className:l().red,children:"spawntime"}),": the spawn time of the healer in seconds.",(0,n.jsx)("br",{}),(0,n.jsx)("span",{className:l().red,children:"rp_times"}),": every entry in the list is the time at which an rp is performed. ",(0,n.jsx)("br",{}),(0,n.jsx)("span",{className:l().red,children:"rp_food"}),": corresponds to the amount of food used in each rp above. ",(0,n.jsx)("br",{}),(0,n.jsx)("span",{className:l().red,children:"reds"}),": integer amount of red eggs shot directly at the healer. ",(0,n.jsx)("br",{}),(0,n.jsx)("span",{className:l().red,children:"splash"}),": integer splash damage from red eggs hitting other things."]}),(0,n.jsxs)("div",{className:l().displayContainer,children:[(0,n.jsxs)("form",{className:l().grid,children:[(0,n.jsxs)("div",{className:l().card,children:[(0,n.jsx)("label",{htmlFor:"wave",children:"Wave #"}),(0,n.jsx)("input",{id:"wave",name:"wave",type:"number",required:!0,value:t.wave,onChange:x,max:"10",min:"1"})]}),(0,n.jsxs)("div",{className:l().card,children:[(0,n.jsx)("label",{htmlFor:"initialfood",children:"Initial food"}),(0,n.jsx)("input",{id:"initialfood",name:"initialfood",type:"number",required:!0,value:t.initialfood,onChange:x})]}),(0,n.jsxs)("div",{className:l().card,children:[(0,n.jsx)("label",{htmlFor:"spawntime",children:"Spawn Time"}),(0,n.jsx)("input",{id:"spawntime",name:"spawntime",type:"number",required:!0,value:t.spawntime,onChange:x})]}),(0,n.jsxs)("div",{className:l().card,children:[(0,n.jsx)("label",{htmlFor:"rptimes",children:"RP Times"}),(0,n.jsx)("input",{id:"rptimes",name:"rptimes",type:"text"})]}),(0,n.jsxs)("div",{className:l().card,children:[(0,n.jsx)("label",{htmlFor:"rpfood",children:"RP Food"}),(0,n.jsx)("input",{id:"rpfood",name:"rpfood",type:"text"})]}),(0,n.jsxs)("div",{className:l().card,children:[(0,n.jsx)("label",{htmlFor:"reds",children:"Reds"}),(0,n.jsx)("input",{id:"reds",name:"reds",type:"number",value:t.reds,onChange:x})]}),(0,n.jsxs)("div",{className:l().card,children:[(0,n.jsx)("label",{htmlFor:"splashdamage",children:"Splash Damage"}),(0,n.jsx)("input",{id:"splashdamage",name:"splashdamage",type:"number",value:t.splash,onChange:x})]})]}),(0,n.jsx)("div",{className:l().results,children:y?(0,n.jsx)(n.Fragment,{children:y}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{children:["Total Health: ",d.health]}),(0,n.jsxs)("div",{children:["Total initial food:"," ",t.initialfood]}),(0,n.jsxs)("div",{children:["Repoisons at: ",d.repoisons]}),(0,n.jsxs)("div",{children:["Total Egg Damage:"," ",t.reds+t.splash]}),(0,n.jsxs)("div",{children:["Time: ",d.time]}),(0,n.jsxs)("div",{children:["Poison tick: ",d.poisontick]}),(0,n.jsxs)("div",{children:["Total Damage:"," ",t.reds+t.splash]}),(0,n.jsxs)("div",{children:["Health: ",d.health]}),(0,n.jsxs)("div",{children:["Healer dies at: ",d.time]}),(0,n.jsxs)("div",{children:["Time alive:"," ",d.time-t.spawntime]}),(0,n.jsxs)("div",{children:["4-ticks: ",d.tick4]}),(0,n.jsxs)("div",{children:["3-ticks: ",d.tick3]}),(0,n.jsxs)("div",{children:["2-ticks: ",d.tick2]}),(0,n.jsxs)("div",{children:["1-ticks: ",d.tick1]})]})})]})]}),(0,n.jsx)("footer",{className:l().footer,children:"site made by keepa"})]})}},8581:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(8118)}])},5323:function(e){e.exports={container:"Home_container__1EcsU",main:"Home_main__1x8gC",footer:"Home_footer__1WdhD",title:"Home_title__3DjR7",description:"Home_description__17Z4F",code:"Home_code__axx2Y",grid:"Home_grid__2Ei2F",displayContainer:"Home_displayContainer__Q2POQ",red:"Home_red__3k-sp",results:"Home_results__3xWM1",card:"Home_card__2SdtB",logo:"Home_logo__1YbrH"}},9008:function(e,t,r){e.exports=r(2775)}},function(e){e.O(0,[774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);