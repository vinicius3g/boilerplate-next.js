(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1070:function(module,exports,__webpack_require__){"use strict";__webpack_require__(8),__webpack_require__(3),__webpack_require__(49),__webpack_require__(1071),__webpack_require__(40),__webpack_require__(41),__webpack_require__(1072),__webpack_require__(33),__webpack_require__(42);var _clientApi=__webpack_require__(58),_clientLogger=__webpack_require__(37),_configFilename=__webpack_require__(1081);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_configFilename.args||_configFilename.argTypes)&&_clientLogger.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify({args:_configFilename.args,argTypes:_configFilename.argTypes})),_configFilename.decorators&&_configFilename.decorators.forEach((function(decorator){return(0,_clientApi.addDecorator)(decorator,!1)})),_configFilename.loaders&&_configFilename.loaders.forEach((function(loader){return(0,_clientApi.addLoader)(loader,!1)})),(_configFilename.parameters||_configFilename.globals||_configFilename.globalTypes)&&(0,_clientApi.addParameters)(_objectSpread(_objectSpread({},_configFilename.parameters),{},{globals:_configFilename.globals,globalTypes:_configFilename.globalTypes}),!1),_configFilename.argTypesEnhancers&&_configFilename.argTypesEnhancers.forEach((function(enhancer){return(0,_clientApi.addArgTypesEnhancer)(enhancer)}))},1074:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(362).configure)([__webpack_require__(1075)],module,!1)}).call(this,__webpack_require__(119)(module))},1075:function(module,exports,__webpack_require__){var map={"./Main/stories.tsx":1080};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1075},1080:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Basic",(function(){return stories_Basic}));var react=__webpack_require__(0),react_default=__webpack_require__.n(react),styled_components_browser_esm=(__webpack_require__(4),__webpack_require__(3),__webpack_require__(10),__webpack_require__(99)),Wrapper=styled_components_browser_esm.b.main.withConfig({displayName:"styles__Wrapper",componentId:"sc-1cs6c8-0"})(["background-color:#06092b;color:#fff;width:100%;height:100%;padding:3rem;display:flex;text-align:center;align-items:center;justify-content:center;flex-direction:column;"]),Logo=styled_components_browser_esm.b.img.withConfig({displayName:"styles__Logo",componentId:"sc-1cs6c8-1"})(["width:25rem;margin-bottom:2rem;"]),Title=styled_components_browser_esm.b.h1.withConfig({displayName:"styles__Title",componentId:"sc-1cs6c8-2"})(["font-size:2.5rem;"]),Description=styled_components_browser_esm.b.h2.withConfig({displayName:"styles__Description",componentId:"sc-1cs6c8-3"})(["font-size:2rem;font-weight:400;"]),Illustration=styled_components_browser_esm.b.img.withConfig({displayName:"styles__Illustration",componentId:"sc-1cs6c8-4"})(["margin-top:3rem;width:min(30rem,100%);"]),jsx_runtime=__webpack_require__(51),Main_Main=(react_default.a.createElement,function Main(_ref){var _ref$title=_ref.title,title=void 0===_ref$title?"React Avançado":_ref$title,_ref$description=_ref.description,description=void 0===_ref$description?"TypeScript, ReactJS, NextJS, e Styled Components":_ref$description;return Object(jsx_runtime.jsxs)(Wrapper,{children:[Object(jsx_runtime.jsx)(Logo,{src:"/img/logo.svg",alt:"Imagem de um atomo e React Avançado escrito ao lado."}),Object(jsx_runtime.jsx)(Title,{children:title}),Object(jsx_runtime.jsx)(Description,{children:description}),Object(jsx_runtime.jsx)(Illustration,{src:"/img/hero-illustration.svg",alt:"um desenvolvedor de frente para uma tela com codigo."})]})});Main_Main.displayName="Main";var components_Main=Main_Main;try{Main_Main.displayName="Main",Main_Main.__docgenInfo={description:"",displayName:"Main",props:{title:{defaultValue:{value:"React Avançado"},description:"",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:{value:"TypeScript, ReactJS, NextJS, e Styled Components"},description:"",name:"description",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Main/index.tsx#Main"]={docgenInfo:Main_Main.__docgenInfo,name:"Main",path:"src/components/Main/index.tsx#Main"})}catch(__react_docgen_typescript_loader_error){}react_default.a.createElement,__webpack_exports__.default={title:"Main",component:components_Main};var stories_Basic=function Basic(args){return Object(jsx_runtime.jsx)(components_Main,Object.assign({},args))};stories_Basic.displayName="Basic"},1081:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _templateObject,react=__webpack_require__(0),react_default=__webpack_require__.n(react),taggedTemplateLiteral=__webpack_require__(478),styled_components_browser_esm=__webpack_require__(99),global=Object(styled_components_browser_esm.a)(_templateObject||(_templateObject=Object(taggedTemplateLiteral.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n  html {\n    font-size: 62.5%;\n  }\n  html, body, #__next {\n    height: 100%;\n  }\n  body {\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  }\n"]))),jsx_runtime=__webpack_require__(51),decorators=(react_default.a.createElement,[function(Story){return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)(global,{}),Object(jsx_runtime.jsx)(Story,{})]})}]);__webpack_exports__.default=decorators},482:function(module,exports,__webpack_require__){__webpack_require__(483),__webpack_require__(638),__webpack_require__(639),__webpack_require__(797),__webpack_require__(1016),__webpack_require__(1049),__webpack_require__(1061),__webpack_require__(1063),__webpack_require__(1068),__webpack_require__(1070),module.exports=__webpack_require__(1074)},550:function(module,exports){},639:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(362)}},[[482,1,2]]]);
//# sourceMappingURL=main.8d6de06ca18eb0a42c73.bundle.js.map