var f=Object.defineProperty;var n=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable;var i=(r,t,e)=>t in r?f(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,m=(r,t)=>{for(var e in t||(t={}))p.call(t,e)&&i(r,e,t[e]);if(n)for(var e of n(t))s.call(t,e)&&i(r,e,t[e]);return r};var c=(r,t)=>{var e={};for(var o in r)p.call(r,o)&&t.indexOf(o)<0&&(e[o]=r[o]);if(r!=null&&n)for(var o of n(r))t.indexOf(o)<0&&s.call(r,o)&&(e[o]=r[o]);return e};import{R as l}from"./index.12980c00.js";import{Money as w}from"./a76829e6.js";import"./0ca30f04.js";import"./4f9f6ebd.js";import"./17dc894b.js";import"./692be0fa.js";import"./eb35c225.js";function x(r){const a=r,{data:t,measurement:e,as:o}=a,u=c(a,["data","measurement","as"]);if(!t)return console.warn('No "data" prop was passed to <UnitPrice/>'),null;if(!e)return console.warn('No "measurement" prop was passed to <UnitPrice/>'),null;const d=o!=null?o:"div";return l.createElement(d,m({},u),l.createElement(w,{data:t}),"/",e.referenceUnit)}export{x as UnitPrice};
//# sourceMappingURL=1b2d3213.js.map