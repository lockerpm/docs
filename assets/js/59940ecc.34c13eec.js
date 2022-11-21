"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[979],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),m=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=m(r),b=a,d=c["".concat(l,".").concat(b)]||c[b]||p[b]||i;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var m=2;m<i;m++)o[m]=r[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},5628:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var n=r(7462),a=(r(7294),r(3905));const i={title:"PrivateEmailSubdomain",sidebar_position:1},o="The PrivateEmailSubdomain object",s={unversionedId:"private_email_subdomains/private-email-subdomains",id:"private_email_subdomains/private-email-subdomains",title:"PrivateEmailSubdomain",description:"Private Email Subdomains represent the subdomains of the Private Email object.",source:"@site/docs/private_email_subdomains/private-email-subdomains.mdx",sourceDirName:"private_email_subdomains",slug:"/private_email_subdomains/private-email-subdomains",permalink:"/docs/private_email_subdomains/private-email-subdomains",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"PrivateEmailSubdomain",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Private Email Subdomains",permalink:"/docs/category/private-email-subdomains"},next:{title:"List subdomains",permalink:"/docs/private_email_subdomains/list-subdomains"}},l={},m=[{value:"Attributes",id:"attributes",level:2},{value:"Example object",id:"example-object",level:2}],u={toc:m};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"the-privateemailsubdomain-object"},"The PrivateEmailSubdomain object"),(0,a.kt)("p",null,"Private Email Subdomains represent the subdomains of the Private Email object.\nThis feature is only available to Premium users."),(0,a.kt)("h2",{id:"attributes"},"Attributes"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"id")," (int) The id of the subdomain"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"subdomain")," (string) Subdomain of the Private Email"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"example-object"},"Example object"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 1,\n    "subdomain": "mysubdomain"\n}\n')))}p.isMDXComponent=!0}}]);