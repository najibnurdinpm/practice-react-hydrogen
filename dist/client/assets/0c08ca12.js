import{r as t,a as l}from"./index.12980c00.js";const n=t.exports.createContext(null);function x({children:u}){const[r,e]=t.exports.useState(!1),o=t.exports.useCallback(()=>{e(!0)},[e]),s=t.exports.useCallback(()=>{e(!1)},[e]),a=t.exports.useCallback(()=>{e(!r)},[e,r]),c=t.exports.useMemo(()=>({isCartOpen:r,openCart:o,closeCart:s,toggleCart:a}),[r,o,s,a]);return l(n.Provider,{value:c,children:u})}function C(){return t.exports.useContext(n)}export{n as CartContext,x as default,C as useCartUI};
//# sourceMappingURL=0c08ca12.js.map
