"use strict";(self.webpackChunklocker_docs=self.webpackChunklocker_docs||[]).push([[566],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),i=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},c=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=i(r),m=n,b=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return r?a.createElement(b,u(u({ref:t},c),{},{components:r})):a.createElement(b,u({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,u=new Array(o);u[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,u[1]=l;for(var i=2;i<o;i++)u[i]=r[i];return a.createElement.apply(null,u)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>u});var a=r(7294),n=r(6010);const o="tabItem_Ymn6";function u(e){let{children:t,hidden:r,className:u}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,u),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>w});var a=r(7462),n=r(7294),o=r(6010),u=r(2466),l=r(6550),s=r(1980),i=r(7392),c=r(12);function d(e){return function(e){var t;return(null==(t=n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function p(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:r}=e;const a=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=p(e),[u,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,i]=b({queryString:r,groupId:a}),[d,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),v=(()=>{const e=s??d;return m({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{v&&l(v)}),[v]);return{selectedValue:u,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),i(e),f(e)}),[i,f,o]),tabValues:o}}var v=r(2389);const y="tabList__CuJ",h="tabItem_LNqP";function g(e){let{className:t,block:r,selectedValue:l,selectValue:s,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,u.o5)(),p=e=>{const t=e.currentTarget,r=c.indexOf(t),a=i[r].value;a!==l&&(d(t),s(a))},m=e=>{var t;let r=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;r=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;r=c[t]??c[c.length-1];break}}null==(t=r)||t.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},i.map((e=>{let{value:t,label:r,attributes:u}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},u,{className:(0,o.Z)("tabs__item",h,null==u?void 0:u.className,{"tabs__item--active":l===t})}),r??t)})))}function k(e){let{lazy:t,children:r,selectedValue:a}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function _(e){const t=f(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",y)},n.createElement(g,(0,a.Z)({},e,t)),n.createElement(k,(0,a.Z)({},e,t)))}function w(e){const t=(0,v.Z)();return n.createElement(_,(0,a.Z)({key:String(t)},e))}},7977:(e,t,r)=>{r.d(t,{Z:()=>n});var a=r(7294);function n(){return a.createElement("span",{style:{backgroundColor:"#0265d2",borderRadius:"2px",color:"#fff",padding:"0.2rem"}},"PUT")}},7894:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>b,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var a=r(7462),n=(r(7294),r(3905)),o=r(4866),u=r(5162),l=r(7977);const s={title:"Use subdomains",sidebar_position:8},i="<PUTMethod/> Update a subdomain",c={unversionedId:"private_email_subdomains/use-subdomain",id:"private_email_subdomains/use-subdomain",title:"Use subdomains",description:"/v3/relay/subdomains/use_subdomain",source:"@site/docs/private_email_subdomains/use-subdomain.mdx",sourceDirName:"private_email_subdomains",slug:"/private_email_subdomains/use-subdomain",permalink:"/docs/private_email_subdomains/use-subdomain",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Use subdomains",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Check use subdomain or not",permalink:"/docs/private_email_subdomains/check-use-subdomain"}},d={},p=[{value:"Request Headers",id:"request-headers",level:2},{value:"Body data",id:"body-data",level:2},{value:"Return",id:"return",level:2},{value:"Example",id:"example",level:2},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}],m={toc:p};function b(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"-update-a-subdomain"},(0,n.kt)(l.Z,{mdxType:"PUTMethod"})," Update a subdomain"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)(l.Z,{mdxType:"PUTMethod"})," /v3/relay/subdomains/use_subdomain")),(0,n.kt)("p",null,"Turn on or turn off the using domain feature when user creates new Private Email object."),(0,n.kt)("h2",{id:"request-headers"},"Request Headers"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Accept: application/json\nAuthorization: Bearer {{api_key}}\n")),(0,n.kt)("h2",{id:"body-data"},"Body data"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"use_relay_subdomain")," (bool) Use subdomain or not"),(0,n.kt)("h2",{id:"return"},"Return"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"use_relay_subdomain")," (bool) Use subdomain or not"),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("h3",{id:"request"},"Request"),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(u.Z,{value:"curl",label:"Curl",default:!0,mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location --request PUT '{{host}}/v3/relay/subdomains/use_subdomain' \\\n--header 'Authorization: Bearer {{api_key}}' \\\n--data-raw '{\n    \"use_relay_subdomain\": true\n}'\n")))),(0,n.kt)("h3",{id:"response"},"Response"),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(u.Z,{value:"200",label:"200 - OK",default:!0,mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "use_relay_subdomain": true\n}\n')))))}b.isMDXComponent=!0}}]);