/*! For license information please see components-Ui-UiVideo-UiVideo-stories.f2693b76.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkstar_wars_react=self.webpackChunkstar_wars_react||[]).push([[322],{"./src/components/Ui/UiVideo/UiVideo.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>UiVideo_stories});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames);const UiVideo_module_video="UiVideo_video__a9Fzv";var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const UiVideo=_ref=>{let{src,classes,playbackRate=1}=_ref;const videoRef=(0,react.useRef)(null);return(0,react.useEffect)((()=>{videoRef.current.playbackRate=playbackRate}),[playbackRate]),(0,jsx_runtime.jsx)("video",{loop:!0,autoPlay:!0,muted:!0,className:classnames_default()(UiVideo_module_video,classes),ref:videoRef,children:(0,jsx_runtime.jsx)("source",{src})})},UiVideo_UiVideo=UiVideo;UiVideo.__docgenInfo={description:"",methods:[],displayName:"UiVideo",props:{playbackRate:{defaultValue:{value:"1.0",computed:!1},description:"",type:{name:"number"},required:!1},src:{description:"",type:{name:"string"},required:!1},classes:{description:"",type:{name:"string"},required:!1}}};const han_solo_namespaceObject=__webpack_require__.p+"db435084c403f6b37d4d.mp4",UiVideo_stories={title:"Ui-Kit/UiVideo",component:UiVideo_UiVideo},Default={args:{...{src:han_solo_namespaceObject,classes:"",playbackRate:1}}},__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...props\n  }\n}",...Default.parameters?.docs?.source}}}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);