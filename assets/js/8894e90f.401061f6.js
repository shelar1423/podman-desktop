"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[505],{544:function(e,t,n){var r=n(7378),a=n(161);t.Z=function(){function e(){var e;if(document&&document.documentElement){var t=document.documentElement;"dark"===(null==(e=t.dataset)?void 0:e.theme)?(t.classList.add("dark"),setTimeout((function(){t.classList.add("dark")}),100)):(t.classList.remove("dark"),setTimeout((function(){t.classList.remove("dark")}),100))}}return(0,r.useEffect)((function(){a.Z.canUseDOM&&e()}),[a.Z.canUseDOM]),(0,r.useEffect)((function(){if(a.Z.canUseDOM){var t=new MutationObserver((function(t){t.forEach((function(t){"data-theme"===t.attributeName&&"attributes"==t.type&&e()}))}));return t.observe(document.documentElement,{attributes:!0,childList:!1,subtree:!1}),function(){t.disconnect()}}}),[a.Z.canUseDOM]),r.createElement("div",null)}},919:function(e,t,n){n.r(t),n.d(t,{MacOSDownloads:function(){return b},default:function(){return h}});var r=n(7791),a=n(7135),l=n.n(a),s=n(353),c=n(2676),i=n(7378),o=n(544),m=n(1884),u=n(6443),d=n(1417),f=n(1436),x=!1;function p(){return(p=(0,r.Z)(l().mark((function e(t){var n,r,a,s,c,i,o,m,u,d;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!x){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,fetch("https://api.github.com/repos/containers/podman-desktop/releases/latest");case 4:return n=e.sent,e.next=7,n.json();case 7:if(r=e.sent,a=r.assets,1===(s=a.filter((function(e){return e.name.endsWith("-arm64.dmg")}))).length){e.next=12;break}throw new Error("Unable to grab arm64 dmg");case 12:if(c=s[0],1===(i=a.filter((function(e){return e.name.endsWith("-x64.dmg")}))).length){e.next=16;break}throw new Error("Unable to grab x64 dmg");case 16:if(o=i[0],1===(m=a.filter((function(e){return e.name.endsWith(".dmg")&&e.name!==c.name&&e.name!==o.name}))).length){e.next=20;break}throw new Error("Unable to grab unified dmg");case 20:u=m[0],d={version:r.name,universal:u.browser_download_url,x64:o.browser_download_url,arm64:c.browser_download_url},t(d),x=!0;case 24:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(){var e=(0,i.useState)({version:"",universal:"",x64:"",arm64:""}),t=e[0],n=e[1];return(0,i.useEffect)((function(){!function(e){p.apply(this,arguments)}(n)})),i.createElement("section",{className:" dark:bg-zinc-900 bg-zinc-100 py-24 dark:text-gray-300 text-gray-700"},i.createElement("div",{className:"w-5/6 mx-auto"},i.createElement("div",{className:"flex rounded-lg bg-zinc-300 dark:bg-zinc-700 bg-opacity-60 p-8 flex-col md:flex-row  "},i.createElement("div",{className:"flex align-middle items-center mb-3 flex-col "},i.createElement(u.G,{size:"8x",icon:d.Av$}),i.createElement("div",{className:"inline-flex items-center justify-center rounded-full  flex-shrink-0"}),i.createElement("h2",{className:" text-lg title-font font-medium"},"macOS")),i.createElement("div",{className:"h-full flex w-full flex-col align-middle items-center"},i.createElement("div",{className:"flex flex-col align-middle items-center"},i.createElement("div",{className:"items-center text-center"},i.createElement("p",{className:"text-base "},i.createElement(u.G,{size:"4x",icon:f.v8y,className:"ml-2"})),i.createElement("p",{className:"text-base "},"Using Brew ?"),i.createElement("p",{className:"text-base dark:text-purple-300 text-purple-700"},i.createElement(u.G,{size:"1x",icon:f.Jw3,className:"mr-2"}),"brew install podman-desktop",i.createElement("button",{title:"Copy To Clipboard",className:"mr-5"}," ",i.createElement(u.G,{size:"xs",icon:f.O4,className:"ml-3  cursor-pointer text-3xl  text-white-500",onClick:function(){navigator.clipboard.writeText("brew install podman-desktop")}})))),i.createElement("div",{className:"pt-8 space-x-4"},i.createElement(m.Z,{className:"no-underline hover:no-underline inline-flex text-white hover:text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-sm",to:t.universal},i.createElement(u.G,{size:"1x",icon:f.q7m,className:"mr-2"}),"universal"),i.createElement(m.Z,{className:"no-underline hover:no-underline inline-flex text-white hover:text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-sm",to:t.x64},i.createElement(u.G,{size:"1x",icon:f.q7m,className:"mr-2"}),"Intel"),i.createElement(m.Z,{className:"no-underline hover:no-underline inline-flex text-white hover:text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-sm",to:t.x64},i.createElement(u.G,{size:"1x",icon:f.q7m,className:"mr-2"}),"Arm")),i.createElement("div",{className:"font-light mt-4"},"Version ",t.version))))))}function h(){var e=(0,s.Z)().siteConfig;return i.createElement(c.Z,{title:e.title,description:"Downloads for macOS"},i.createElement(o.Z,null),i.createElement("main",{className:"h-screen"},i.createElement(b,null)))}}}]);