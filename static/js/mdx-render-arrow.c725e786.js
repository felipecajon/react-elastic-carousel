(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"./src/docs/mdx/renderArrow.mdx":function(e,n,t){"use strict";t.r(n);var a=t("./node_modules/react/index.js"),o=t.n(a),r=t("./node_modules/@mdx-js/tag/dist/index.js"),m=t("./node_modules/docz/dist/index.m.js"),c=t("./src/react-elastic-carousel/index.js");function s(){var e=function(e,n){n||(n=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n  font-size: 2.5em;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  user-select: none;\n"]);return s=function(){return e},e}var l=t("./node_modules/styled-components/dist/styled-components.browser.esm.js").a.div(s()),p=t("./src/docs/components/SimpleItem.js");function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}n.default=function(e){var n=e.components,t=i(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",components:n},o.a.createElement(r.MDXTag,{name:"h1",components:n,props:{id:"renderarrow"}},"renderArrow"),o.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"you-can-provide-custom-arrow-buttons"}},"You can provide custom Arrow buttons."),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"signature"}},"Signature"),o.a.createElement(r.MDXTag,{name:"ul",components:n},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"You can pass a function that returns a react element,",o.a.createElement(r.MDXTag,{name:"br",components:n,parentName:"li"}),"This function is a ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://reactjs.org/docs/render-props.html"}},"render prop")," and its signature is:  ")),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre"},"({type, onClick}) => {/* return your element here */}\n")),o.a.createElement(r.MDXTag,{name:"ul",components:n},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"type")," = ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"PropTypes.oneOf([consts.PREV, consts.NEXT])")),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"onClick")," Is the hook to the inner ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"onClick")," of the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Carousel"),". You can attach it wherever you want within the returned component.")),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"em",components:n,parentName:"p"},"You should import the consts object to pass the desired itemPosition")),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre"},"import Carousel, { consts } from 'react-elastic-carousel';\n // ....\n\ntype === consts.PREV\n")),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"demo"}},"Demo"),o.a.createElement(m.Playground,{__position:0,__code:"<Carousel\n  renderArrow={({ type, onClick }) => {\n    const pointer = type === consts.PREV ? '\ud83d\udc48' : '\ud83d\udc49'\n    return <Button onClick={onClick}>{pointer}</Button>\n  }}\n>\n  <Item>1</Item>\n  <Item>2</Item>\n  <Item>3</Item>\n  <Item>4</Item>\n  <Item>5</Item>\n  <Item>6</Item>\n</Carousel>",__scope:{props:t,Carousel:c.b,consts:c.a,Button:l,Item:p.a}},o.a.createElement(c.b,{renderArrow:function(e){var n=e.type,t=e.onClick,a=n===c.a.PREV?"\ud83d\udc48":"\ud83d\udc49";return o.a.createElement(l,{onClick:t},a)}},o.a.createElement(p.a,null,"1"),o.a.createElement(p.a,null,"2"),o.a.createElement(p.a,null,"3"),o.a.createElement(p.a,null,"4"),o.a.createElement(p.a,null,"5"),o.a.createElement(p.a,null,"6"))))}}}]);