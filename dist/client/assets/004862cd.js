var F=Object.defineProperty,L=Object.defineProperties;var U=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable;var $=(t,e,n)=>e in t?F(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,I=(t,e)=>{for(var n in e||(e={}))S.call(e,n)&&$(t,n,e[n]);if(m)for(var n of m(e))Z.call(e,n)&&$(t,n,e[n]);return t},l=(t,e)=>L(t,U(e));import{R as p,r as d}from"./index.12980c00.js";import{u as v}from"./4f9f6ebd.js";import"./eb35c225.js";import{f as D}from"./fdb2e11a.js";import{u as k}from"./65902cd8.js";const q=t=>`
mutation CartLineAdd($cartId: ID!, $lines: [CartLineInput!]!, $numCartLines: Int = 250, $country: CountryCode = ZZ) @inContext(country: $country) {
  cartLinesAdd(cartId: $cartId, lines: $lines) {
    cart {
      ...CartFragment
    }
  }
}

${t}
`,x=t=>`
mutation CartCreate($input: CartInput!, $numCartLines: Int = 250, $country: CountryCode = ZZ) @inContext(country: $country) {
  cartCreate(input: $input) {
    cart {
      ...CartFragment
    }
  }
}

${t}
`,O=t=>`
mutation CartLineRemove($cartId: ID!, $lines: [ID!]!, $numCartLines: Int = 250, $country: CountryCode = ZZ) @inContext(country: $country) {
  cartLinesRemove(cartId: $cartId, lineIds: $lines) {
    cart {
      ...CartFragment
    }
  }
}

${t}
`,R=t=>`
mutation CartLineUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!, $numCartLines: Int = 250, $country: CountryCode = ZZ) @inContext(country: $country) {
  cartLinesUpdate(cartId: $cartId, lines: $lines) {
    cart {
      ...CartFragment
    }
  }
}

${t}
`,B=t=>`
mutation CartNoteUpdate($cartId: ID!, $note: String, $numCartLines: Int = 250, $country: CountryCode = ZZ) @inContext(country: $country) {
  cartNoteUpdate(cartId: $cartId, note: $note) {
    cart {
      ...CartFragment
    }
  }
}

${t}
`,P=t=>`
mutation CartBuyerIdentityUpdate(
  $cartId: ID!
  $buyerIdentity: CartBuyerIdentityInput!
  $numCartLines: Int = 250
  $country: CountryCode = ZZ
) @inContext(country: $country) {
  cartBuyerIdentityUpdate(cartId: $cartId, buyerIdentity: $buyerIdentity) {
    cart {
      ...CartFragment
    }
  }
}

${t}
`,X=t=>`
mutation CartAttributesUpdate($attributes: [AttributeInput!]!, $cartId: ID!, $numCartLines: Int = 250, $country: CountryCode = ZZ) @inContext(country: $country) {
  cartAttributesUpdate(attributes: $attributes, cartId: $cartId) {
    cart {
      ...CartFragment
    }
  }
}

${t}
`,w=t=>`
mutation CartDiscountCodesUpdate($cartId: ID!, $discountCodes: [String!], $numCartLines: Int = 250, $country: CountryCode = ZZ) @inContext(country: $country) {
  cartDiscountCodesUpdate(cartId: $cartId, discountCodes: $discountCodes) {
    cart {
      ...CartFragment
    }
  }
}

${t}
`,K=t=>`
query CartQuery($id: ID!, $numCartLines: Int = 250, $country: CountryCode = ZZ) @inContext(country: $country) {
  cart(id: $id) {
    ...CartFragment
  }
}

${t}
`,Q=`
fragment CartFragment on Cart {
  id
  checkoutUrl
  buyerIdentity {
    countryCode
    customer {
      id
      email
      firstName
      lastName
      displayName
    }
    email
    phone
  }
  lines(first: $numCartLines) {
    edges {
      node {
        id
        quantity
        attributes {
          key
          value
        }
        merchandise {
          ... on ProductVariant {
            id
            availableForSale
            compareAtPriceV2 {
              ...MoneyFragment
            }
            priceV2 {
              ...MoneyFragment
            }
            requiresShipping
            title
            image {
              ...ImageFragment
            }
            product {
              handle
              title
            }
            selectedOptions {
              name
              value
            }
          }
        }
      }
    }
  }
  estimatedCost {
    subtotalAmount {
      ...MoneyFragment
    }
    totalAmount {
      ...MoneyFragment
    }
    totalDutyAmount {
      ...MoneyFragment
    }
    totalTaxAmount {
      ...MoneyFragment
    }
  }
  note
  attributes {
    key
    value
  }
  discountCodes {
    code
  }
}

fragment MoneyFragment on MoneyV2 {
  currencyCode
  amount
}
fragment ImageFragment on Image {
  id
  url
  altText
  width
  height
}
`;function g(){const{storeDomain:t,storefrontApiVersion:e,storefrontToken:n}=v();return p.useCallback(({query:i,variables:a})=>fetch(`https://${t}/api/${e}/graphql.json`,{method:"POST",headers:{"Content-Type":"application/json","X-SDK-Variant":"hydrogen","X-SDK-Version":e,"X-Shopify-Storefront-Access-Token":n},body:JSON.stringify({query:i.toString(),variables:a})}).then(r=>r.json()).catch(r=>({data:void 0,error:r.toString()})),[t,e,n])}function A(){const{cartFragment:t}=k(),[e,n]=d.exports.useState(),[i,a]=d.exports.useState(),[r,f]=d.exports.useState(),C=g(),h=p.useCallback(async b=>{var c,s;const{data:o,error:y}=await C({query:x(t),variables:{input:b}});if(y&&(f(y),n(void 0),a(void 0)),!((c=o==null?void 0:o.cartCreate)===null||c===void 0)&&c.cart){const u=o.cartCreate.cart;n(l(I({},u),{lines:D(u.lines),note:(s=u.note)!==null&&s!==void 0?s:void 0})),a(u.checkoutUrl)}},[t,C]);return{cart:e,checkoutUrl:i,error:r,createInstantCheckout:h}}var z=Object.freeze(Object.defineProperty({__proto__:null,useCartFetch:g,useInstantCheckout:A},Symbol.toStringTag,{value:"Module"}));export{K as C,x as a,q as b,O as c,R as d,B as e,P as f,X as g,w as h,Q as i,A as j,z as k,g as u};
//# sourceMappingURL=004862cd.js.map
