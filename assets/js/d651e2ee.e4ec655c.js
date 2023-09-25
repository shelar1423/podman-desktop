"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8514],{35318:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var n=o(27378);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(o),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return o?n.createElement(h,i(i({ref:t},c),{},{components:o})):n.createElement(h,i({ref:t},c))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=o[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},24280:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=o(25773),r=(o(27378),o(35318));const a={sidebar_position:7},i="Troubleshooting",s={unversionedId:"troubleshooting/index",id:"troubleshooting/index",title:"Troubleshooting",description:"If you cannot find your issue here or in the documentation, please fill an issue on our repository. You can also explore the discussions and do a search on similar issues on the repository.",source:"@site/docs/troubleshooting/index.md",sourceDirName:"troubleshooting",slug:"/troubleshooting/",permalink:"/docs/troubleshooting/",draft:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/troubleshooting/index.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"mySidebar",previous:{title:"Installing",permalink:"/docs/extensions/install/"},next:{title:"Troubleshooting Podman",permalink:"/docs/troubleshooting/troubleshooting-podman"}},l={},p=[{value:"Using the <strong>Troubleshooting</strong> page",id:"using-the-troubleshooting-page",level:2},{value:"Procedure",id:"procedure",level:4},{value:"Additional resources",id:"additional-resources",level:4}],c={toc:p};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("p",null,"If you cannot find your issue here or in the documentation, please fill an issue on our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/issues"},"repository"),". You can also explore the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/discussions"},"discussions")," and do a search on similar issues on the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/issues"},"repository"),"."),(0,r.kt)("h2",{id:"using-the-troubleshooting-page"},"Using the ",(0,r.kt)("strong",{parentName:"h2"},"Troubleshooting")," page"),(0,r.kt)("p",null,"Podman Desktop has a ",(0,r.kt)("strong",{parentName:"p"},"Troubleshooting")," page to help identify and fix most common errors."),(0,r.kt)("h4",{id:"procedure"},"Procedure"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To open the ",(0,r.kt)("strong",{parentName:"p"},"Troubleshooting")," page, click the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("icon",{icon:"fa-solid fa-lightbulb",size:"lg"}))," icon.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To test the connection to the container engine, click the ",(0,r.kt)("strong",{parentName:"p"},"Ping")," button."),(0,r.kt)("p",{parentName:"li"},"Expect a reply such as: ",(0,r.kt)("em",{parentName:"p"},"Responded: 79,75 (9.10ms)"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To test Click the ",(0,r.kt)("strong",{parentName:"p"},"Check containers")," button."),(0,r.kt)("p",{parentName:"li"},"Expect a reply such as: ",(0,r.kt)("em",{parentName:"p"},"Responded: 16 containers (108.70ms)"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"When connection to the container engine failed, to recreate connections to the sockets, click the ",(0,r.kt)("strong",{parentName:"p"},"Reconnect providers")," button."),(0,r.kt)("p",{parentName:"li"},"Expect a reply such as: ",(0,r.kt)("em",{parentName:"p"},"Done in (5.00ms)"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Search for errors in the ",(0,r.kt)("strong",{parentName:"p"},"Logs")," section."))),(0,r.kt)("h4",{id:"additional-resources"},"Additional resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/troubleshooting/troubleshooting-podman"},"Troubleshooting Podman")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/troubleshooting/troubleshooting-podman-on-windows"},"Troubleshooting Podman on Windows")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/troubleshooting/troubleshooting-podman-on-macos"},"Troubleshooting Podman on macOS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/troubleshooting/troubleshooting-podman-on-linux"},"Troubleshooting Podman on Linux")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/troubleshooting/troubleshooting-openshift-local"},"Troubleshooting OpenShift Local"))))}u.isMDXComponent=!0}}]);