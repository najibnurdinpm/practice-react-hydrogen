var b=Object.defineProperty,y=Object.defineProperties;var f=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var C=(e,t,r)=>t in e?b(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,n=(e,t)=>{for(var r in t||(t={}))x.call(t,r)&&C(e,r,t[r]);if(p)for(var r of p(t))h.call(t,r)&&C(e,r,t[r]);return e},s=(e,t)=>y(e,f(t));import{Link as S}from"./d6a88cd5.js";import{j as l,a as o}from"./index.12980c00.js";import"./17dc894b.js";import"./eb35c225.js";import"./8a56554b.js";import"./55bbc67b.js";import"./0583b56d.js";import"./65c187cb.js";import"./5e219092.js";import"./79813ae6.js";import"./5f7af73e.js";import"./597bd6dd.js";import"./692be0fa.js";const c="block m-0 w-full items-center justify-center uppercase font-medium text-center px-6 py-4 rounded disabled:border-gray-300 disabled:bg-gray-300 disabled:cursor-not-allowed",m={primary:"text-white bg-gray-900 hover:bg-gray-800 active:bg-gray-700",secondary:"bg-white hover:bg-gray-50 active:bg-gray-100 border border-black"},k=`${c} ${m.primary}`,I=`${c} ${m.secondary}`,w=()=>l("svg",{className:"fill-current text-white ml-3",width:"15",height:"14",viewBox:"0 0 15 14",xmlns:"http://www.w3.org/2000/svg",children:[o("path",{d:"M8.11963 0.000976562C7.56734 0.000976562 7.11963 0.448692 7.11963 1.00098C7.11963 1.55326 7.56734 2.00098 8.11963 2.00098H10.7054L4.41252 8.29387C4.022 8.68439 4.022 9.31756 4.41252 9.70808C4.80305 10.0986 5.43621 10.0986 5.82674 9.70808L12.1196 3.41519V6.00098C12.1196 6.55326 12.5673 7.00098 13.1196 7.00098C13.6719 7.00098 14.1196 6.55326 14.1196 6.00098V1.00098C14.1196 0.448692 13.6719 0.000976562 13.1196 0.000976562H8.11963Z"}),o("path",{d:"M2.11963 2.00098C1.01506 2.00098 0.119629 2.89641 0.119629 4.00098V12.001C0.119629 13.1055 1.01506 14.001 2.11963 14.001H10.1196C11.2242 14.001 12.1196 13.1055 12.1196 12.001V9.00098C12.1196 8.44869 11.6719 8.00098 11.1196 8.00098C10.5673 8.00098 10.1196 8.44869 10.1196 9.00098V12.001H2.11963V4.00098L5.11963 4.00098C5.67191 4.00098 6.11963 3.55326 6.11963 3.00098C6.11963 2.44869 5.67191 2.00098 5.11963 2.00098H2.11963Z"})]});function M({className:e,label:t,handleClick:r,url:i,variant:g="primary",passthroughProps:d}){const a=`${c} ${m[g]} ${e}`;return(i?i.indexOf("://")>0||i.indexOf("//")===0:!1)?l("a",s(n({href:i,className:a},d),{children:[t,o(w,{})]})):r?o("button",{className:a,onClick:r,type:"button",children:t}):o(S,s(n({to:i,className:a},d),{children:t}))}export{k as BUTTON_PRIMARY_CLASSES,I as BUTTON_SECONDARY_CLASSES,M as default};
//# sourceMappingURL=70e0d416.js.map