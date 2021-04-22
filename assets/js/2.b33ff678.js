(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{248:function(e,t,n){"use strict";var a=n(0),r=n(249);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},249:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},256:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(247),o=n(253),l=n(22),i=n(88),s=n.n(i);function u(e){e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex")}var m=function(){var e=Object(a.useRef)(null),t=Object(l.useLocation)();return Object(a.useEffect)((function(){!t.hash&&e.current&&u(e.current)}),[t.pathname]),r.a.createElement("div",{ref:e},r.a.createElement("a",{href:"#main",className:s.a.skipToContent,onClick:function(e){e.preventDefault();var t=document.querySelector("main:first-of-type")||document.querySelector(".main-wrapper");t&&u(t)}},r.a.createElement(o.a,{id:"theme.common.skipToMainContent",description:"The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"},"Skip to main content")))},d=n(252),f=n(248),b=n(89),v=n.n(b);var h=function(){var e,t=Object(f.a)(),n=t.isAnnouncementBarClosed,a=t.closeAnnouncementBar,l=Object(d.useThemeConfig)().announcementBar;if(!l)return null;var i=l.content,s=l.backgroundColor,u=l.textColor,m=l.isCloseable;return!i||m&&n?null:r.a.createElement("div",{className:v.a.announcementBar,style:{backgroundColor:s,color:u},role:"banner"},r.a.createElement("div",{className:Object(c.a)(v.a.announcementBarContent,(e={},e[v.a.announcementBarCloseable]=m,e)),dangerouslySetInnerHTML:{__html:i}}),m?r.a.createElement("button",{type:"button",className:v.a.announcementBarClose,onClick:a,"aria-label":Object(o.b)({id:"theme.AnnouncementBar.closeButtonAriaLabel",message:"Close",description:"The ARIA label for close button of announcement bar"})},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null)},g=n(3),O=n(7),p=n(25),j=n(16),E=n(255),y=n(254),k=n(23),C=n(286);function w(){return r.a.createElement("svg",{width:"15",height:"15",className:"DocSearch-Control-Key-Icon"},r.a.createElement("path",{d:"M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953",strokeWidth:"1.2",stroke:"currentColor",fill:"none",strokeLinecap:"square"}))}var N=n(287);function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function S(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,c=void 0;try{for(var o,l=e[Symbol.iterator]();!(a=(o=l.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(i){r=!0,c=i}finally{try{a||null==l.return||l.return()}finally{if(r)throw c}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return L(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return L(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function L(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function A(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var D="Ctrl";var I=r.a.forwardRef((function(e,t){var n=e.translations,c=void 0===n?{}:n,o=A(e,["translations"]),l=c.buttonText,i=void 0===l?"Search":l,s=c.buttonAriaLabel,u=void 0===s?"Search":s,m=S(Object(a.useState)(null),2),d=m[0],f=m[1];return Object(a.useEffect)((function(){"undefined"!=typeof navigator&&f(/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)?"\u2318":D)}),[]),r.a.createElement("button",_({type:"button",className:"DocSearch DocSearch-Button","aria-label":u},o,{ref:t}),r.a.createElement("span",{className:"DocSearch-Button-Container"},r.a.createElement(N.a,null),r.a.createElement("span",{className:"DocSearch-Button-Placeholder"},i)),null!==d&&r.a.createElement("span",{className:"DocSearch-Button-Keys"},r.a.createElement("span",{className:"DocSearch-Button-Key"},d===D?r.a.createElement(w,null):d),r.a.createElement("span",{className:"DocSearch-Button-Key"},"K")))})),T=n(257);function B(){var e=function(){var e=Object(j.default)().i18n,t=Object(T.useAllDocsData)(),n=Object(T.useActivePluginAndVersion)(),a=Object(d.useDocsPreferredVersionByPluginId)(),r=[d.DEFAULT_SEARCH_TAG].concat(Object.keys(t).map((function(e){var r,c,o=(null==n||null===(r=n.activePlugin)||void 0===r?void 0:r.pluginId)===e?n.activeVersion:void 0,l=a[e],i=t[e].versions.find((function(e){return e.isLast})),s=null!==(c=null!=o?o:l)&&void 0!==c?c:i;return Object(d.docVersionSearchTag)(e,s.name)})));return{locale:e.currentLocale,tags:r}}();return["language:"+e.locale,e.tags.map((function(e){return"docusaurus_tag:"+e}))]}var P=null;function x(e){var t=e.hit,n=e.children;return r.a.createElement(y.a,{to:t.url},n)}function M(e){var t=e.state,n=e.onClose,a=Object(C.a)().generateSearchPageLink;return r.a.createElement(y.a,{to:a(t.query),onClick:n},"See all ",t.context.nbHits," results")}function V(e){var t,c,i=e.contextualSearch,s=Object(O.a)(e,["contextualSearch"]),u=Object(j.default)().siteMetadata,m=B(),d=null!==(t=null===(c=s.searchParameters)||void 0===c?void 0:c.facetFilters)&&void 0!==t?t:[],f=i?[].concat(m,d):d,b=Object.assign({},s.searchParameters,{facetFilters:f}),v=Object(E.b)().withBaseUrl,h=Object(l.useHistory)(),y=Object(a.useRef)(null),C=Object(a.useRef)(null),w=Object(a.useState)(!1),N=w[0],_=w[1],S=Object(a.useState)(null),L=S[0],A=S[1],D=Object(a.useCallback)((function(){return P?Promise.resolve():Promise.all([n.e(165).then(n.bind(null,360)),Promise.all([n.e(0),n.e(166)]).then(n.bind(null,359)),n.e(0).then(n.t.bind(null,245,7))]).then((function(e){var t=e[0].DocSearchModal;P=t}))}),[]),T=Object(a.useCallback)((function(){D().then((function(){y.current=document.createElement("div"),document.body.insertBefore(y.current,document.body.firstChild),_(!0)}))}),[D,_]),V=Object(a.useCallback)((function(){_(!1),y.current.remove()}),[_]),R=Object(a.useCallback)((function(e){D().then((function(){_(!0),A(e.key)}))}),[D,_,A]),U=Object(a.useRef)({navigate:function(e){var t=e.itemUrl;h.push(t)}}).current,H=Object(a.useRef)((function(e){return e.map((function(e){var t=document.createElement("a");return t.href=e.url,Object.assign({},e,{url:v(""+t.pathname+t.hash)})}))})).current,F=Object(a.useMemo)((function(){return function(e){return r.a.createElement(M,Object(g.a)({},e,{onClose:V}))}}),[V]),K=Object(a.useCallback)((function(e){return e.addAlgoliaAgent("docusaurus",u.docusaurusVersion),e}),[u.docusaurusVersion]);!function(e){var t=e.isOpen,n=e.onOpen,a=e.onClose,c=e.onInput,o=e.searchButtonRef;r.a.useEffect((function(){function e(e){(27===e.keyCode&&t||"k"===e.key&&(e.metaKey||e.ctrlKey)||!function(e){var t=e.target,n=t.tagName;return t.isContentEditable||"INPUT"===n||"SELECT"===n||"TEXTAREA"===n}(e)&&"/"===e.key&&!t)&&(e.preventDefault(),t?a():document.body.classList.contains("DocSearch--active")||document.body.classList.contains("DocSearch--active")||n()),o&&o.current===document.activeElement&&c&&/[a-zA-Z0-9]/.test(String.fromCharCode(e.keyCode))&&c(e)}return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t,n,a,c,o])}({isOpen:N,onOpen:T,onClose:V,onInput:R,searchButtonRef:C});var z=Object(o.b)({id:"theme.SearchBar.label",message:"Search",description:"The ARIA label and placeholder for search button"});return r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,null,r.a.createElement("link",{rel:"preconnect",href:"https://"+s.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),r.a.createElement(I,{onTouchStart:D,onFocus:D,onMouseOver:D,onClick:T,ref:C,translations:{buttonText:z,buttonAriaLabel:z}}),N&&Object(p.createPortal)(r.a.createElement(P,Object(g.a)({onClose:V,initialScrollY:window.scrollY,initialQuery:L,navigator:U,transformItems:H,hitComponent:x,resultsFooterComponent:F,transformSearchClient:K},s,{searchParameters:b})),y.current))}var R=function(){var e=Object(j.default)().siteConfig;return r.a.createElement(V,e.themeConfig.algolia)},U=n(90),H=n.n(U),F=function(e){var t=e.icon,n=e.style;return r.a.createElement("span",{className:Object(c.a)(H.a.toggle,H.a.dark),style:n},t)},K=function(e){var t=e.icon,n=e.style;return r.a.createElement("span",{className:Object(c.a)(H.a.toggle,H.a.light),style:n},t)},z=Object(a.memo)((function(e){var t=e.className,n=e.icons,o=e.checked,l=e.disabled,i=e.onChange,s=Object(a.useState)(o),u=s[0],m=s[1],d=Object(a.useState)(!1),f=d[0],b=d[1],v=Object(a.useRef)(null);return r.a.createElement("div",{className:Object(c.a)("react-toggle",t,{"react-toggle--checked":u,"react-toggle--focus":f,"react-toggle--disabled":l}),role:"button",tabIndex:-1,onClick:function(e){var t=v.current;if(t)return e.target!==t?(e.preventDefault(),t.focus(),void t.click()):void m(null==t?void 0:t.checked)}},r.a.createElement("div",{className:"react-toggle-track"},r.a.createElement("div",{className:"react-toggle-track-check"},n.checked),r.a.createElement("div",{className:"react-toggle-track-x"},n.unchecked)),r.a.createElement("div",{className:"react-toggle-thumb"}),r.a.createElement("input",{ref:v,checked:u,type:"checkbox",className:"react-toggle-screenreader-only","aria-label":"Switch between dark and light mode",onChange:i,onFocus:function(){return b(!0)},onBlur:function(){return b(!1)}}))})),q=function(e){var t=Object(d.useThemeConfig)().colorMode.switchConfig,n=t.darkIcon,a=t.darkIconStyle,c=t.lightIcon,o=t.lightIconStyle,l=Object(j.default)().isClient;return r.a.createElement(z,Object(g.a)({disabled:!l,icons:{checked:r.a.createElement(F,{icon:n,style:a}),unchecked:r.a.createElement(K,{icon:c,style:o})}},e))},G=n(273),W=n(289),Y=function(e){var t=Object(l.useLocation)(),n=Object(a.useState)(e),r=n[0],c=n[1],o=Object(a.useRef)(!1),i=Object(a.useState)(0),s=i[0],u=i[1],m=Object(a.useCallback)((function(e){null!==e&&u(e.getBoundingClientRect().height)}),[]);return Object(W.a)((function(t,n){var a=t.scrollY,r=n.scrollY;if(e)if(a<s)c(!0);else{if(o.current)return o.current=!1,void c(!1);r&&0===a&&c(!0);var l=document.documentElement.scrollHeight-s,i=window.innerHeight;r&&a>=r?c(!1):a+i<l&&c(!0)}}),[s,o]),Object(a.useEffect)((function(){e&&c(!0)}),[t.pathname]),Object(a.useEffect)((function(){e&&t.hash&&(o.current=!0)}),[t.hash]),{navbarRef:m,isNavbarVisible:r}},Q=n(290),X=n(291),J=n(263),$=function(e){var t=e.width,n=void 0===t?20:t,a=e.height,c=void 0===a?20:a,o=Object(O.a)(e,["width","height"]);return r.a.createElement("svg",Object(g.a)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",width:n,height:c},o),r.a.createElement("path",{fill:"currentColor",d:"M19.753 10.909c-.624-1.707-2.366-2.726-4.661-2.726-.09 0-.176.002-.262.006l-.016-2.063 3.525-.607c.115-.019.133-.119.109-.231-.023-.111-.167-.883-.188-.976-.027-.131-.102-.127-.207-.109-.104.018-3.25.461-3.25.461l-.013-2.078c-.001-.125-.069-.158-.194-.156l-1.025.016c-.105.002-.164.049-.162.148l.033 2.307s-3.061.527-3.144.543c-.084.014-.17.053-.151.143.019.09.19 1.094.208 1.172.018.08.072.129.188.107l2.924-.504.035 2.018c-1.077.281-1.801.824-2.256 1.303-.768.807-1.207 1.887-1.207 2.963 0 1.586.971 2.529 2.328 2.695 3.162.387 5.119-3.06 5.769-4.715 1.097 1.506.256 4.354-2.094 5.98-.043.029-.098.129-.033.207l.619.756c.08.096.206.059.256.023 2.51-1.73 3.661-4.515 2.869-6.683zm-7.386 3.188c-.966-.121-.944-.914-.944-1.453 0-.773.327-1.58.876-2.156a3.21 3.21 0 011.229-.799l.082 4.277a2.773 2.773 0 01-1.243.131zm2.427-.553l.046-4.109c.084-.004.166-.01.252-.01.773 0 1.494.145 1.885.361.391.217-1.023 2.713-2.183 3.758zm-8.95-7.668a.196.196 0 00-.196-.145h-1.95a.194.194 0 00-.194.144L.008 16.916c-.017.051-.011.076.062.076h1.733c.075 0 .099-.023.114-.072l1.008-3.318h3.496l1.008 3.318c.016.049.039.072.113.072h1.734c.072 0 .078-.025.062-.076-.014-.05-3.083-9.741-3.494-11.04zm-2.618 6.318l1.447-5.25 1.447 5.25H3.226z"}))};function Z(e){var t=e.mobile,n=e.dropdownItemsBefore,a=e.dropdownItemsAfter,c=Object(O.a)(e,["mobile","dropdownItemsBefore","dropdownItemsAfter"]),o=Object(j.default)().i18n,l=o.currentLocale,i=o.locales,s=o.localeConfigs,u=Object(d.useAlternatePageUtils)();function m(e){return s[e].label}var f=i.map((function(e){var t="pathname://"+u.createUrl({locale:e,fullyQualified:!1});return{isNavLink:!0,label:m(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===l?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),b=[].concat(n,f,a),v=t?"Languages":m(l);return r.a.createElement(J.a,Object(g.a)({},c,{href:"#",mobile:t,label:r.a.createElement("span",null,r.a.createElement($,{style:{verticalAlign:"text-bottom",marginRight:5}}),r.a.createElement("span",null,v)),items:b}))}var ee=n(91),te=n.n(ee);function ne(e){return e.mobile?null:r.a.createElement("div",{className:te.a.searchWrapper},r.a.createElement(R,null))}var ae={default:function(){return J.a},localeDropdown:function(){return Z},search:function(){return ne},docsVersion:function(){return n(320).default},docsVersionDropdown:function(){return n(321).default},doc:function(){return n(322).default}};function re(e){var t=e.type,n=Object(O.a)(e,["type"]),a=function(e){void 0===e&&(e="default");var t=ae[e];if(!t)throw new Error("No NavbarItem component found for type="+e+".");return t()}(t);return r.a.createElement(a,n)}var ce=n(292),oe=n(294),le=n(93),ie=n.n(le),se="right";var ue=function(){var e,t=Object(d.useThemeConfig)(),n=t.navbar,o=n.items,l=n.hideOnScroll,i=n.style,s=t.colorMode.disableSwitch,u=Object(a.useState)(!1),m=u[0],f=u[1],b=Object(G.a)(),v=b.isDarkTheme,h=b.setLightTheme,O=b.setDarkTheme,p=Y(l),j=p.navbarRef,E=p.isNavbarVisible;Object(Q.a)(m);var y=Object(a.useCallback)((function(){f(!0)}),[f]),k=Object(a.useCallback)((function(){f(!1)}),[f]),C=Object(a.useCallback)((function(e){return e.target.checked?O():h()}),[h,O]),w=Object(X.a)();Object(a.useEffect)((function(){w===X.b.desktop&&f(!1)}),[w]);var N=o.some((function(e){return"search"===e.type})),_=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!==(t=e.position)&&void 0!==t?t:se)})),rightItems:e.filter((function(e){var t;return"right"===(null!==(t=e.position)&&void 0!==t?t:se)}))}}(o),S=_.leftItems,L=_.rightItems;return r.a.createElement("nav",{ref:j,className:Object(c.a)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===i,"navbar--primary":"primary"===i,"navbar-sidebar--show":m},e[ie.a.navbarHideable]=l,e[ie.a.navbarHidden]=l&&!E,e))},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},null!=o&&0!==o.length&&r.a.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",type:"button",tabIndex:0,onClick:y,onKeyDown:y},r.a.createElement(oe.a,null)),r.a.createElement(ce.a,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:Object(c.a)("navbar__title")}),S.map((function(e,t){return r.a.createElement(re,Object(g.a)({},e,{key:t}))}))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},L.map((function(e,t){return r.a.createElement(re,Object(g.a)({},e,{key:t}))})),!s&&r.a.createElement(q,{className:ie.a.displayOnlyInLargeViewport,checked:v,onChange:C}),!N&&r.a.createElement(R,null))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:k}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(ce.a,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title",onClick:k}),!s&&m&&r.a.createElement(q,{checked:v,onChange:C})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},o.map((function(e,t){return r.a.createElement(re,Object(g.a)({mobile:!0},e,{onClick:k,key:t}))})))))))},me=n(94),de=n.n(me),fe=n(293);function be(e){var t=e.to,n=e.href,a=e.label,c=e.prependBaseUrlToHref,o=Object(O.a)(e,["to","href","label","prependBaseUrlToHref"]),l=Object(E.a)(t),i=Object(E.a)(n,{forcePrependBaseUrl:!0});return r.a.createElement(y.a,Object(g.a)({className:"footer__link-item"},n?{href:c?i:n}:{to:l},o),a)}var ve=function(e){var t=e.sources,n=e.alt;return r.a.createElement(fe.a,{className:"footer__logo",alt:n,sources:t})};var he=function(){var e=Object(d.useThemeConfig)().footer,t=e||{},n=t.copyright,a=t.links,o=void 0===a?[]:a,l=t.logo,i=void 0===l?{}:l,s={light:Object(E.a)(i.src),dark:Object(E.a)(i.srcDark||i.src)};return e?r.a.createElement("footer",{className:Object(c.a)("footer",{"footer--dark":"dark"===e.style})},r.a.createElement("div",{className:"container"},o&&o.length>0&&r.a.createElement("div",{className:"row footer__links"},o.map((function(e,t){return r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?r.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(be,e))}))):null)}))),(i||n)&&r.a.createElement("div",{className:"footer__bottom text--center"},i&&(i.src||i.srcDark)&&r.a.createElement("div",{className:"margin-bottom--sm"},i.href?r.a.createElement(y.a,{href:i.href,className:de.a.footerLogoLink},r.a.createElement(ve,{alt:i.alt,sources:s})):r.a.createElement(ve,{alt:i.alt,sources:s})),n?r.a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:n}}):null))):null},ge=n(8),Oe=Object(d.createStorageSlot)("theme"),pe="light",je="dark",Ee=function(e){return e===je?je:pe},ye=function(e){Object(d.createStorageSlot)("theme").set(Ee(e))},ke=function(){var e=Object(d.useThemeConfig)().colorMode,t=e.defaultMode,n=e.disableSwitch,r=e.respectPrefersColorScheme,c=Object(a.useState)(function(e){return ge.a.canUseDOM?Ee(document.documentElement.getAttribute("data-theme")):Ee(e)}(t)),o=c[0],l=c[1],i=Object(a.useCallback)((function(){l(pe),ye(pe)}),[]),s=Object(a.useCallback)((function(){l(je),ye(je)}),[]);return Object(a.useEffect)((function(){document.documentElement.setAttribute("data-theme",Ee(o))}),[o]),Object(a.useEffect)((function(){if(!n)try{var e=Oe.get();null!==e&&l(Ee(e))}catch(t){console.error(t)}}),[l]),Object(a.useEffect)((function(){n&&!r||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;l(t?je:pe)}))}),[]),{isDarkTheme:o===je,setLightTheme:i,setDarkTheme:s}},Ce=n(288);var we=function(e){var t=ke(),n=t.isDarkTheme,a=t.setLightTheme,c=t.setDarkTheme;return r.a.createElement(Ce.a.Provider,{value:{isDarkTheme:n,setLightTheme:a,setDarkTheme:c}},e.children)};function Ne(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function _e(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return Ne(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Ne(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var a=0;return function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var Se="docusaurus.tab.",Le=function(){var e=Object(a.useState)({}),t=e[0],n=e[1],r=Object(a.useCallback)((function(e,t){Object(d.createStorageSlot)("docusaurus.tab."+e).set(t)}),[]);return Object(a.useEffect)((function(){try{for(var e,t={},a=_e(Object(d.listStorageKeys)());!(e=a()).done;){var r=e.value;if(r.startsWith(Se))t[r.substring(Se.length)]=Object(d.createStorageSlot)(r).get()}n(t)}catch(c){console.error(c)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){n((function(n){var a;return Object.assign({},n,((a={})[e]=t,a))})),r(e,t)}}},Ae=Object(d.createStorageSlot)("docusaurus.announcement.dismiss"),De=Object(d.createStorageSlot)("docusaurus.announcement.id"),Ie=function(){var e=Object(d.useThemeConfig)().announcementBar,t=Object(a.useState)(!0),n=t[0],r=t[1],c=Object(a.useCallback)((function(){Ae.set("true"),r(!0)}),[]);return Object(a.useEffect)((function(){if(e){var t=e.id,n=De.get();"annoucement-bar"===n&&(n="announcement-bar");var a=t!==n;De.set(t),a&&Ae.set("false"),(a||"false"===Ae.get())&&r(!1)}}),[]),{isAnnouncementBarClosed:n,closeAnnouncementBar:c}},Te=n(249);var Be=function(e){var t=Le(),n=t.tabGroupChoices,a=t.setTabGroupChoices,c=Ie(),o=c.isAnnouncementBarClosed,l=c.closeAnnouncementBar;return r.a.createElement(Te.a.Provider,{value:{tabGroupChoices:n,setTabGroupChoices:a,isAnnouncementBarClosed:o,closeAnnouncementBar:l}},e.children)};function Pe(e){var t=e.children;return r.a.createElement(we,null,r.a.createElement(Be,null,r.a.createElement(d.DocsPreferredVersionContextProvider,null,t)))}function xe(e){var t=e.locale,n=e.version,a=e.tag,c=t;return r.a.createElement(k.a,null,c&&r.a.createElement("meta",{name:"docsearch:language",content:c}),n&&r.a.createElement("meta",{name:"docsearch:version",content:n}),a&&r.a.createElement("meta",{name:"docsearch:docusaurus_tag",content:a}))}var Me=n(264);function Ve(){var e=Object(j.default)().i18n,t=e.defaultLocale,n=e.locales,a=Object(d.useAlternatePageUtils)();return r.a.createElement(k.a,null,n.map((function(e){return r.a.createElement("link",{key:e,rel:"alternate",href:a.createUrl({locale:e,fullyQualified:!0}),hrefLang:e})})),r.a.createElement("link",{rel:"alternate",href:a.createUrl({locale:t,fullyQualified:!0}),hrefLang:"x-default"}))}function Re(e){var t=e.permalink,n=Object(j.default)().siteConfig.url,a=function(){var e=Object(j.default)().siteConfig.url,t=Object(l.useLocation)().pathname;return e+Object(E.a)(t)}(),c=t?""+n+t:a;return r.a.createElement(k.a,null,r.a.createElement("meta",{property:"og:url",content:c}),r.a.createElement("link",{rel:"canonical",href:c}))}function Ue(e){var t=Object(j.default)(),n=t.siteConfig,a=n.favicon,c=n.themeConfig.metadatas,o=t.i18n,l=o.currentLocale,i=o.localeConfigs,s=e.title,u=e.description,m=e.image,f=e.keywords,b=e.searchMetadatas,v=Object(E.a)(a),h=l,O=i[l].direction;return r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,null,r.a.createElement("html",{lang:h,dir:O}),a&&r.a.createElement("link",{rel:"shortcut icon",href:v})),r.a.createElement(Me.a,{title:s,description:u,keywords:f,image:m}),r.a.createElement(Re,null),r.a.createElement(Ve,null),r.a.createElement(xe,Object(g.a)({tag:d.DEFAULT_SEARCH_TAG,locale:l},b)),r.a.createElement(k.a,null,c.map((function(e,t){return r.a.createElement("meta",Object(g.a)({key:"metadata_"+t},e))}))))}n(95);var He=function(){Object(a.useEffect)((function(){var e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),function(){document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};n(96);t.a=function(e){var t=e.children,n=e.noFooter,a=e.wrapperClassName,o=e.pageClassName;return He(),r.a.createElement(Pe,null,r.a.createElement(Ue,e),r.a.createElement(m,null),r.a.createElement(h,null),r.a.createElement(ue,null),r.a.createElement("div",{className:Object(c.a)(d.ThemeClassNames.wrapper.main,a,o)},t),!n&&r.a.createElement(he,null))}},263:function(e,t,n){"use strict";var a=n(3),r=n(7),c=n(0),o=n.n(c),l=n(247),i=n(254),s=n(255),u=n(22),m=n(252);function d(e){var t=e.activeBasePath,n=e.activeBaseRegex,c=e.to,l=e.href,u=e.label,m=e.activeClassName,d=void 0===m?"navbar__link--active":m,f=e.prependBaseUrlToHref,b=Object(r.a)(e,["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"]),v=Object(s.a)(c),h=Object(s.a)(t),g=Object(s.a)(l,{forcePrependBaseUrl:!0});return o.a.createElement(i.a,Object(a.a)({},l?{href:f?g:l}:Object.assign({isNavLink:!0,activeClassName:d,to:v},t||n?{isActive:function(e,t){return n?new RegExp(n).test(t.pathname):t.pathname.startsWith(h)}}:null),b),u)}function f(e){var t,n=e.items,i=e.position,s=e.className,u=Object(r.a)(e,["items","position","className"]),m=Object(c.useRef)(null),f=Object(c.useRef)(null),b=Object(c.useState)(!1),v=b[0],h=b[1];Object(c.useEffect)((function(){var e=function(e){m.current&&!m.current.contains(e.target)&&h(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[m]);var g=function(e,t){return void 0===t&&(t=!1),Object(l.a)({"navbar__item navbar__link":!t,dropdown__link:t},e)};return n?o.a.createElement("div",{ref:m,className:Object(l.a)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===i,"dropdown--right":"right"===i,"dropdown--show":v})},o.a.createElement(d,Object(a.a)({className:g(s)},u,{onClick:u.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),h(!v))}}),null!==(t=u.children)&&void 0!==t?t:u.label),o.a.createElement("ul",{ref:f,className:"dropdown__menu"},n.map((function(e,t){var c=e.className,l=Object(r.a)(e,["className"]);return o.a.createElement("li",{key:t},o.a.createElement(d,Object(a.a)({onKeyDown:function(e){if(t===n.length-1&&"Tab"===e.key){e.preventDefault(),h(!1);var a=m.current.nextElementSibling;a&&a.focus()}},activeClassName:"dropdown__link--active",className:g(c,!0)},l)))})))):o.a.createElement(d,Object(a.a)({className:g(s)},u))}function b(e){var t,n,i,s=e.items,f=e.className,b=(e.position,Object(r.a)(e,["items","className","position"])),v=Object(c.useRef)(null),h=Object(u.useLocation)().pathname,g=Object(c.useState)((function(){var e;return null===(e=!(null!=s&&s.some((function(e){return Object(m.isSamePath)(e.to,h)}))))||void 0===e||e})),O=g[0],p=g[1],j=function(e,t){return void 0===t&&(t=!1),Object(l.a)("menu__link",{"menu__link--sublist":t},e)};if(!s)return o.a.createElement("li",{className:"menu__list-item"},o.a.createElement(d,Object(a.a)({className:j(f)},b)));var E=null!==(t=v.current)&&void 0!==t&&t.scrollHeight?(null===(n=v.current)||void 0===n?void 0:n.scrollHeight)+"px":void 0;return o.a.createElement("li",{className:Object(l.a)("menu__list-item",{"menu__list-item--collapsed":O})},o.a.createElement(d,Object(a.a)({role:"button",className:j(f,!0)},b,{onClick:function(e){e.preventDefault(),p((function(e){return!e}))}}),null!==(i=b.children)&&void 0!==i?i:b.label),o.a.createElement("ul",{className:"menu__list",ref:v,style:{height:O?void 0:E}},s.map((function(e,t){var n=e.className,c=Object(r.a)(e,["className"]);return o.a.createElement("li",{className:"menu__list-item",key:t},o.a.createElement(d,Object(a.a)({activeClassName:"menu__link--active",className:j(n)},c,{onClick:b.onClick})))}))))}t.a=function(e){var t=e.mobile,n=void 0!==t&&t,a=Object(r.a)(e,["mobile"]),c=n?b:f;return o.a.createElement(c,a)}},273:function(e,t,n){"use strict";var a=n(0),r=n(288);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://docusaurus.io/docs/api/themes/configuration#usethemecontext.");return e}},286:function(e,t,n){"use strict";var a=n(22),r=n(8),c=n(16);t.a=function(){var e=Object(a.useHistory)(),t=Object(a.useLocation)(),n=Object(c.default)().siteConfig,o=(n=void 0===n?{}:n).baseUrl;return{searchValue:r.a.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:function(n){var a=new URLSearchParams(t.search);n?a.set("q",n):a.delete("q"),e.replace({search:a.toString()})},generateSearchPageLink:function(e){return o+"search?q="+encodeURIComponent(e)}}}},287:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(0),r=n.n(a);function c(){return r.a.createElement("svg",{width:"20",height:"20",className:"DocSearch-Search-Icon",viewBox:"0 0 20 20"},r.a.createElement("path",{d:"M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"}))}},288:function(e,t,n){"use strict";var a=n(0),r=n.n(a).a.createContext(void 0);t.a=r},289:function(e,t,n){"use strict";var a=n(0),r=n(8),c=function(){return{scrollX:r.a.canUseDOM?window.pageXOffset:0,scrollY:r.a.canUseDOM?window.pageYOffset:0}};t.a=function(e,t){void 0===t&&(t=[]);var n=Object(a.useRef)(c()),r=function(){var t=c();e&&e(t,n.current),n.current=t};Object(a.useEffect)((function(){var e={passive:!0};return r(),window.addEventListener("scroll",r,e),function(){return window.removeEventListener("scroll",r,e)}}),t)}},290:function(e,t,n){"use strict";var a=n(0);t.a=function(e){void 0===e&&(e=!0),Object(a.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])}},291:function(e,t,n){"use strict";n.d(t,"b",(function(){return c}));var a=n(0),r=n(8),c={desktop:"desktop",mobile:"mobile"};t.a=function(){var e=r.a.canUseDOM;function t(){if(e)return window.innerWidth>996?c.desktop:c.mobile}var n=Object(a.useState)(t),o=n[0],l=n[1];return Object(a.useEffect)((function(){if(e)return window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)};function n(){l(t())}}),[]),o}},292:function(e,t,n){"use strict";var a=n(3),r=n(7),c=n(0),o=n.n(c),l=n(254),i=n(293),s=n(255),u=n(16),m=n(252);t.a=function(e){var t=Object(u.default)().isClient,n=Object(m.useThemeConfig)().navbar,c=n.title,d=n.logo,f=void 0===d?{src:""}:d,b=e.imageClassName,v=e.titleClassName,h=Object(r.a)(e,["imageClassName","titleClassName"]),g=Object(s.a)(f.href||"/"),O={light:Object(s.a)(f.src),dark:Object(s.a)(f.srcDark||f.src)};return o.a.createElement(l.a,Object(a.a)({to:g},h,f.target&&{target:f.target}),f.src&&o.a.createElement(i.a,{key:t,className:b,sources:O,alt:f.alt||c||"Logo"}),null!=c&&o.a.createElement("strong",{className:v},c))}},293:function(e,t,n){"use strict";var a=n(3),r=n(7),c=n(0),o=n.n(c),l=n(247),i=n(16),s=n(273),u=n(92),m=n.n(u);t.a=function(e){var t=Object(i.default)().isClient,n=Object(s.a)().isDarkTheme,c=e.sources,u=e.className,d=e.alt,f=void 0===d?"":d,b=Object(r.a)(e,["sources","className","alt"]),v=t?n?["dark"]:["light"]:["light","dark"];return o.a.createElement(o.a.Fragment,null,v.map((function(e){return o.a.createElement("img",Object(a.a)({key:e,src:c[e],alt:f,className:Object(l.a)(m.a.themedImage,m.a["themedImage--"+e],u)},b))})))}},294:function(e,t,n){"use strict";var a=n(3),r=n(7),c=n(0),o=n.n(c);t.a=function(e){var t=e.width,n=void 0===t?30:t,c=e.height,l=void 0===c?30:c,i=e.className,s=Object(r.a)(e,["width","height","className"]);return o.a.createElement("svg",Object(a.a)({"aria-label":"Menu",className:i,width:n,height:l,viewBox:"0 0 30 30",role:"img",focusable:"false"},s),o.a.createElement("title",null,"Menu"),o.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))}},320:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),c=n(0),o=n.n(c),l=n(263),i=n(257),s=n(252);function u(e){var t,n=e.label,c=e.to,u=e.docsPluginId,m=Object(r.a)(e,["label","to","docsPluginId"]),d=Object(i.useActiveVersion)(u),f=Object(s.useDocsPreferredVersion)(u).preferredVersion,b=Object(i.useLatestVersion)(u),v=null!==(t=null!=d?d:f)&&void 0!==t?t:b,h=null!=n?n:v.label,g=null!=c?c:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(v).path;return o.a.createElement(l.a,Object(a.a)({},m,{label:h,to:g}))}},321:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return m}));var a=n(3),r=n(7),c=n(0),o=n.n(c),l=n(263),i=n(257),s=n(252),u=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};function m(e){var t,n,c=e.mobile,m=e.docsPluginId,d=e.dropdownActiveClassDisabled,f=e.dropdownItemsBefore,b=e.dropdownItemsAfter,v=Object(r.a)(e,["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"]),h=Object(i.useActiveDocContext)(m),g=Object(i.useVersions)(m),O=Object(i.useLatestVersion)(m),p=Object(s.useDocsPreferredVersion)(m),j=p.preferredVersion,E=p.savePreferredVersionName;var y=null!==(t=null!==(n=h.activeVersion)&&void 0!==n?n:j)&&void 0!==t?t:O,k=c?"Versions":y.label,C=c?void 0:u(y).path;return o.a.createElement(l.a,Object(a.a)({},v,{mobile:c,label:k,to:C,items:function(){var e=g.map((function(e){var t=(null==h?void 0:h.alternateDocVersions[e.name])||u(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==h?void 0:h.activeVersion)},onClick:function(){E(e.name)}}})),t=[].concat(f,e,b);if(!(t.length<=1))return t}(),isActive:d?function(){return!1}:void 0}))}},322:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return m}));var a=n(3),r=n(7),c=n(0),o=n.n(c),l=n(263),i=n(257),s=n(247),u=n(252);function m(e){var t,n,c=e.docId,m=e.activeSidebarClassName,d=e.label,f=e.docsPluginId,b=Object(r.a)(e,["docId","activeSidebarClassName","label","docsPluginId"]),v=Object(i.useActiveDocContext)(f),h=v.activeVersion,g=v.activeDoc,O=Object(u.useDocsPreferredVersion)(f).preferredVersion,p=Object(i.useLatestVersion)(f),j=null!==(t=null!=h?h:O)&&void 0!==t?t:p,E=j.docs.find((function(e){return e.id===c}));if(!E){var y=j.docs.map((function(e){return e.id})).join("\n- ");throw new Error("DocNavbarItem: couldn't find any doc with id="+c+" in version "+j.name+".\nAvailable docIds=\n- "+y)}return o.a.createElement(l.a,Object(a.a)({exact:!0},b,{className:Object(s.a)(b.className,(n={},n[m]=g&&g.sidebar===E.sidebar,n)),label:null!=d?d:E.id,to:E.path}))}}}]);