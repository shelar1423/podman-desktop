"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2896],{35318:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>d});var n=o(27378);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(o),d=r,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return o?n.createElement(f,a(a({ref:t},c),{},{components:o})):n.createElement(f,a({ref:t},c))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=o[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},47191:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=o(25773),r=(o(27378),o(35318));const i={title:"Setting up Compose",description:"Podman Desktop can install the Compose engine.",sidebar_position:2,keywords:["compose"],tags:["compose"]},a="Setting up Compose",s={unversionedId:"compose/setting-up-compose",id:"compose/setting-up-compose",title:"Setting up Compose",description:"Podman Desktop can install the Compose engine.",source:"@site/docs/compose/setting-up-compose.md",sourceDirName:"compose",slug:"/compose/setting-up-compose",permalink:"/docs/compose/setting-up-compose",draft:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/compose/setting-up-compose.md",tags:[{label:"compose",permalink:"/docs/tags/compose"}],version:"current",sidebarPosition:2,frontMatter:{title:"Setting up Compose",description:"Podman Desktop can install the Compose engine.",sidebar_position:2,keywords:["compose"],tags:["compose"]},sidebar:"mySidebar",previous:{title:"Working with Compose",permalink:"/docs/compose/"},next:{title:"Running Compose files",permalink:"/docs/compose/running-compose"}},p={},l=[{value:"Procedure",id:"procedure",level:4},{value:"Verification",id:"verification",level:4},{value:"Additional resources",id:"additional-resources",level:4}],c={toc:l};function m(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"setting-up-compose"},"Setting up Compose"),(0,r.kt)("p",null,"Podman Desktop can install the Compose engine."),(0,r.kt)("h4",{id:"procedure"},"Procedure"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install the Compose engine: in the Podman Desktop status bar, click ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("icon",{icon:"fa-solid fa-download",size:"lg"}),"Compose"),", and follow the prompts."),(0,r.kt)("li",{parentName:"ol"},"To use the Compose engine from your terminal, ",(0,r.kt)("a",{parentName:"li",href:"/docs/migrating-from-docker/using-the-docker_host-environment-variable"},"set the DOCKER_HOST variable"),".")),(0,r.kt)("h4",{id:"verification"},"Verification"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open a terminal.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The Compose reference implementation is in your PATH, therefore, you can display the Compose engine version:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell-session"},"$ docker-compose version\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The DOCKER_HOST variable is set:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell-session"},"$ env | grep DOCKER_HOST\n")))),(0,r.kt)("h4",{id:"additional-resources"},"Additional resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"(Alternatively) ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-compose#installation"},"Installing Podman Compose"),": alternative Python implementation with Podman integration."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/docker/compose"},"Compose engine repository"),".")))}m.isMDXComponent=!0}}]);