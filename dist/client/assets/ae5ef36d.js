var y=Object.defineProperty,F=Object.defineProperties;var P=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var m=(t,i,e)=>i in t?y(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e,b=(t,i)=>{for(var e in i||(i={}))v.call(i,e)&&m(t,e,i[e]);if(d)for(var e of d(i))h.call(i,e)&&m(t,e,i[e]);return t},f=(t,i)=>F(t,P(i));var x=(t,i)=>{var e={};for(var r in t)v.call(t,r)&&i.indexOf(r)<0&&(e[r]=t[r]);if(t!=null&&d)for(var r of d(t))i.indexOf(r)<0&&h.call(t,r)&&(e[r]=t[r]);return e};import{r as g,j as S,F as T,a as I}from"./index.12980c00.js";import"./17dc894b.js";import"./eb35c225.js";import{u as _}from"./65902cd8.js";import"./8a56554b.js";import"./55bbc67b.js";import"./0583b56d.js";import{u as k}from"./32b7fe78.js";import"./692be0fa.js";function K(t){var i,e;const[r,s]=g.exports.useState(!1),p=t,{variantId:o,quantity:w=1,attributes:A,children:C,accessibleAddingToCartLabel:l}=p,n=x(p,["variantId","quantity","attributes","children","accessibleAddingToCartLabel"]),{status:u,linesAdd:j}=_(),a=k(),c=(e=o!=null?o:(i=a==null?void 0:a.selectedVariant)===null||i===void 0?void 0:i.id)!==null&&e!==void 0?e:"",V=o===null||c===""||(a==null?void 0:a.selectedVariant)===null||r||n.disabled;return g.exports.useEffect(()=>{r&&u==="idle"&&s(!1)},[u,r]),S(T,{children:[I("button",f(b({},n),{disabled:V,onClick:()=>{s(!0),j([{quantity:w,merchandiseId:c,attributes:A}])},children:C})),l?I("p",{style:{position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0"},role:"alert","aria-live":"assertive",children:r?l:null}):null]})}export{K as AddToCartButton};
//# sourceMappingURL=ae5ef36d.js.map