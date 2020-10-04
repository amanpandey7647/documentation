/*! For license information please see adeaf69e.50ef61ce.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{258:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(1),o=n(9),a=(n(0),n(329)),i=n(332),c={last_modified_on:"2020-10-04",title:"Github Actions",description:"Learn how to configure and plug your Github Actions account"},u={id:"using-qovery/configuration/business/build-platform/github-actions",title:"Github Actions",description:"Learn how to configure and plug your Github Actions account",source:"@site/docs/using-qovery/configuration/business/build-platform/github-actions.md",permalink:"/docs/using-qovery/configuration/business/build-platform/github-actions",editUrl:"https://github.com/Qovery/documentation/edit/master/website/docs/using-qovery/configuration/business/build-platform/github-actions.md",sidebar:"docs",previous:{title:"Circle CI",permalink:"/docs/using-qovery/configuration/business/build-platform/circle-ci"},next:{title:"Container Registry",permalink:"/docs/using-qovery/configuration/business/container-registry"}},s=[{value:"Available Build platforms",id:"available-build-platforms",children:[]}],l={rightToc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Github Actions is coming soon (",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://roadmap.qovery.com/c/42-github-actions"}),"see when"),"). Vote ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://roadmap.qovery.com/c/42-github-actions"}),"here")," to make it happen faster."),Object(a.b)("h2",{id:"available-build-platforms"},"Available Build platforms"),Object(a.b)(i.a,{to:"/docs/using-qovery/configuration/business/build-platform/qovery-ci",mdxType:"Jump"},"Qovery CI"))}p.isMDXComponent=!0},328:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var i=o.apply(null,r);i&&e.push(i)}else if("object"===a)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},329:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(n),b=r,m=p["".concat(i,".").concat(b)]||p[b]||f[b]||a;return n?o.a.createElement(m,c({ref:t},s,{components:n})):o.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},330:function(e,t,n){"use strict";var r=n(1),o=n(0),a=n.n(o),i=n(39),c=n(333),u=n(24),s=n.n(u);t.a=function(e){var t,n=e.to,u=e.href,l=n||u,p=Object(c.a)(l),f=Object(o.useRef)(!1),b=s.a.canUseIntersectionObserver;return Object(o.useEffect)((function(){return!b&&p&&window.docusaurus.prefetch(l),function(){b&&t&&t.disconnect()}}),[l,b,p]),l&&p?a.a.createElement(i.b,Object(r.a)({},e,{onMouseEnter:function(){f.current||(window.docusaurus.preload(l),f.current=!0)},innerRef:function(e){var n,r;b&&e&&p&&(n=e,r=function(){window.docusaurus.prefetch(l)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(n),t.disconnect(),r())}))}))).observe(n))},to:l})):a.a.createElement("a",Object(r.a)({},e,{href:l}))}},332:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(330),i=n(328),c=n.n(i);n(131);t.a=function(e){var t=e.children,n=e.className,r=e.badge,i=e.leftIcon,u=e.rightIcon,s=e.size,l=e.target,p=e.to,f=c()("jump-to","jump-to--"+s,n),b=o.a.createElement("div",{className:"jump-to--inner"},o.a.createElement("div",{className:"jump-to--inner-2"},i&&o.a.createElement("div",{className:"jump-to--left"},o.a.createElement("i",{className:"feather icon-"+i})),o.a.createElement("div",{className:"jump-to--main"},r?o.a.createElement("span",{className:"badge badge--primary badge--right"},r):"",t),o.a.createElement("div",{className:"jump-to--right"},o.a.createElement("i",{className:"feather icon-"+(u||"chevron-right")+" arrow"}))));return l?o.a.createElement("a",{href:p,target:l,className:f},b):o.a.createElement(a.a,{to:p,className:f},b)}},333:function(e,t,n){"use strict";function r(e){return!1===/^(https?:|\/\/)/.test(e)}n.d(t,"a",(function(){return r}))}}]);