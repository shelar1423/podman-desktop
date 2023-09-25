"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3163],{544:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(27378),l=a(161);const r=function(){function e(){if(!document?.documentElement)return;const e=document.documentElement;"dark"===e.dataset?.theme?(e.classList.add("dark"),setTimeout((()=>{e.classList.add("dark")}),100)):(e.classList.remove("dark"),setTimeout((()=>{e.classList.remove("dark")}),100))}return(0,n.useEffect)((()=>{l.Z.canUseDOM&&e()}),[l.Z.canUseDOM]),(0,n.useEffect)((()=>{if(!l.Z.canUseDOM)return;const t=new MutationObserver((t=>{t.forEach((t=>{"attributes"!==t.type||"data-rh"!==t.attributeName&&"data-theme"!==t.attributeName||e()}))}));return t.observe(document.documentElement,{attributes:!0,childList:!1,subtree:!1}),()=>{t.disconnect()}}),[l.Z.canUseDOM]),n.createElement("div",null)}},53330:(e,t,a)=>{a.r(t),a.d(t,{MacOSDownloads:()=>d,default:()=>u});var n=a(50353),l=a(20432),r=a(27378),s=a(544),c=a(81884),m=a(92739),o=a(9928),i=a(19374);function d(){const[e,t]=(0,r.useState)({version:"",universal:"",x64:"",arm64:"",airgapsetup:""});return(0,r.useEffect)((()=>{(async function(e){const t=await fetch("https://api.github.com/repos/containers/podman-desktop/releases/latest"),a=await t.json(),n=a.assets,l=n.filter((e=>e.name.endsWith("-arm64.dmg")));if(1!==l.length)throw new Error("Unable to grab arm64 dmg");const r=l[0],s=n.filter((e=>e.name.endsWith("-x64.dmg")));if(1!==s.length)throw new Error("Unable to grab x64 dmg");const c=s[0],m=n.filter((e=>e.name.endsWith("universal.dmg")&&e.name.includes("airgap")));let o;1!==m.length?console.log("Error: Unable to find Apple Disk Image for restricted environments"):o=m[0];const i=n.filter((e=>e.name.endsWith(".dmg")&&!e.name.includes("airgap")&&e.name!==r.name&&e.name!==c.name));if(1!==i.length)throw new Error("Unable to grab unified dmg");const d=i[0];e({version:a.name,universal:d.browser_download_url,x64:c.browser_download_url,arm64:r.browser_download_url,airgapsetup:o?.browser_download_url})})(t).catch((e=>{console.error(e)}))}),[]),r.createElement("div",{className:"basis-1/3 py-2 rounded-lg dark:text-gray-400 text-gray-900  bg-zinc-300/25 dark:bg-zinc-700/25 bg-blend-multiply text-center items-center"},r.createElement(m.G,{size:"4x",icon:o.Av$,className:"my-4"}),r.createElement("h2",{className:"w-full text-center text-4xl title-font font-medium pb-3 border-purple-500 border-b-2"},"macOS"),r.createElement("div",{className:"flex p-1 flex-col md:flex-col items-center align-top"},r.createElement("div",{className:"flex flex-col align-middle items-center"},r.createElement("h3",{className:"mt-0"},"Podman Desktop for macOS"),r.createElement("div",{className:"pt-8"},r.createElement(c.Z,{className:"mt-auto no-underline hover:no-underline inline-flex text-white hover:text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-500 rounded text-md font-semibold",to:e.universal},r.createElement(m.G,{size:"1x",icon:i.q7m,className:"mr-2"}),"Download Now"),r.createElement("caption",{className:"block w-full mt-1 text/50 dark:text-white/50"},"Universal *.dmg, version ",e.version)),r.createElement("div",{className:"mt-4"},r.createElement("div",null,"Other macOS downloads:"),r.createElement(c.Z,{className:"underline inline-flex dark:text-white text-purple-500 hover:text-purple-200 py-2 px-6 font-semibold text-md",to:e.x64},r.createElement(m.G,{size:"1x",icon:i.q7m,className:"mr-2"}),"Intel"),r.createElement(c.Z,{className:"underline inline-flex dark:text-white text-purple-500 hover:text-purple-200 py-2 px-6 text-md font-semibold",to:e.arm64},r.createElement(m.G,{size:"1x",icon:i.q7m,className:"mr-2"}),"Arm"),r.createElement(c.Z,{className:"underline inline-flex dark:text-white text-purple-500 hover:text-purple-200 py-2 px-6 text-md font-semibold",to:e.airgapsetup},r.createElement(m.G,{size:"1x",icon:i.q7m,className:"mr-2"}),"Disk Image for restricted environments")),r.createElement("div",{className:"flex flex-col align-middle items-center"},r.createElement("div",{className:"items-center text-center pt-6"},r.createElement("p",{className:"text-lg"},"Using ",r.createElement("strong",null,"Brew"),"? Install in one command:"),r.createElement("div",{className:"flex flex-row pt-3"},r.createElement("p",{className:"text-xl p-1"},r.createElement(m.G,{size:"sm",icon:i.v8y,className:"mx-1 mt-2"})),r.createElement("div",{className:"dark:bg-charcoal-800/50 bg-zinc-300/50 p-1 truncate"},r.createElement("p",{className:"text-xl dark:text-purple-200 text-purple-600"},r.createElement(m.G,{size:"xs",icon:i.Jw3,className:"mx-2 mt-3"}),"brew install podman-desktop",r.createElement("button",{title:"Copy To Clipboard",className:"mr-2 p-1"}," ",r.createElement(m.G,{size:"xs",icon:i.O4,className:"ml-3  cursor-pointer text-xl  text-white-500",onClick:()=>{(async()=>{await navigator.clipboard.writeText("brew install podman-desktop")})().catch((e=>{console.error("unable to copy instructions",e)}))}}))))))))))}function u(){const{siteConfig:e}=(0,n.Z)();return r.createElement(l.Z,{title:e.title,description:"Downloads for macOS"},r.createElement(s.Z,null),r.createElement("section",{className:"container mx-auto flex justify-center flex-col"},r.createElement("div",{className:"w-full flex flex-col"},r.createElement("h1",{className:"title-font sm:text-3xl text-2xl lg:text-5xl mb-10 font-medium text-gray-900 dark:text-white"},"macOS Downloads"),r.createElement("main",{className:"h-screen"},r.createElement(d,null)))))}}}]);