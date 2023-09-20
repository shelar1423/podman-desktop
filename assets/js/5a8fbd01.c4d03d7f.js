"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4531],{35318:(n,t,e)=>{e.d(t,{Zo:()=>p,kt:()=>m});var i=e(27378);function a(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function o(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,i)}return e}function l(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?o(Object(e),!0).forEach((function(t){a(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function r(n,t){if(null==n)return{};var e,i,a=function(n,t){if(null==n)return{};var e,i,a={},o=Object.keys(n);for(i=0;i<o.length;i++)e=o[i],t.indexOf(e)>=0||(a[e]=n[e]);return a}(n,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(i=0;i<o.length;i++)e=o[i],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(a[e]=n[e])}return a}var s=i.createContext({}),d=function(n){var t=i.useContext(s),e=t;return n&&(e="function"==typeof n?n(t):l(l({},t),n)),e},p=function(n){var t=d(n.components);return i.createElement(s.Provider,{value:t},n.children)},c={inlineCode:"code",wrapper:function(n){var t=n.children;return i.createElement(i.Fragment,{},t)}},w=i.forwardRef((function(n,t){var e=n.components,a=n.mdxType,o=n.originalType,s=n.parentName,p=r(n,["components","mdxType","originalType","parentName"]),w=d(e),m=a,u=w["".concat(s,".").concat(m)]||w[m]||c[m]||o;return e?i.createElement(u,l(l({ref:t},p),{},{components:e})):i.createElement(u,l({ref:t},p))}));function m(n,t){var e=arguments,a=t&&t.mdxType;if("string"==typeof n||a){var o=e.length,l=new Array(o);l[0]=w;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=n,r.mdxType="string"==typeof n?n:a,l[1]=r;for(var d=2;d<o;d++)l[d]=e[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,e)}w.displayName="MDXCreateElement"},33561:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var i=e(25773),a=(e(27378),e(35318));const o={sidebar_position:1,title:"Windows",description:"How to install Podman on Windows.",tags:["podman-desktop","installing","windows"],keywords:["podman desktop","containers","podman","installing","installation","windows"]},l="Installing Podman Desktop using the Windows installer",r={unversionedId:"Installation/windows-install/index",id:"Installation/windows-install/index",title:"Windows",description:"How to install Podman on Windows.",source:"@site/docs/Installation/windows-install/index.md",sourceDirName:"Installation/windows-install",slug:"/Installation/windows-install/",permalink:"/docs/Installation/windows-install/",draft:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/Installation/windows-install/index.md",tags:[{label:"podman-desktop",permalink:"/docs/tags/podman-desktop"},{label:"installing",permalink:"/docs/tags/installing"},{label:"windows",permalink:"/docs/tags/windows"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Windows",description:"How to install Podman on Windows.",tags:["podman-desktop","installing","windows"],keywords:["podman desktop","containers","podman","installing","installation","windows"]},sidebar:"mySidebar",previous:{title:"Installing Podman Desktop",permalink:"/docs/Installation/"},next:{title:"Installing silently",permalink:"/docs/Installation/windows-install/installing-podman-desktop-silently-with-the-windows-installer"}},s={},d=[{value:"Procedure",id:"procedure",level:4},{value:"Next steps",id:"next-steps",level:4}],p={toc:d};function c(n){let{components:t,...e}=n;return(0,a.kt)("wrapper",(0,i.Z)({},p,e,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installing-podman-desktop-using-the-windows-installer"},"Installing Podman Desktop using the Windows installer"),(0,a.kt)("p",null,"Consider using this installation method if you don't require another method such as:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"windows-install/installing-podman-desktop-silently-with-the-windows-installer"},"Installing silently with the Windows installer")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"windows-install/installing-podman-desktop-with-chocolatey"},"Installing with Chocolatey")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"windows-install/installing-podman-desktop-with-scoop"},"Installing with Scoop")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"windows-install/installing-podman-desktop-with-winget"},"Installing with Winget")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"windows-install/installing-podman-desktop-and-podman-in-a-restricted-environment"},"Installing Podman Desktop and Podman in a restricted environment"))),(0,a.kt)("h4",{id:"procedure"},"Procedure"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/downloads/windows"},"Download the Windows installer"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open the downloaded file to start the Podman Desktop installer."))),(0,a.kt)("h4",{id:"next-steps"},"Next steps"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/onboarding"},"Onboarding"))))}c.isMDXComponent=!0}}]);