webpackJsonp([35783957827783],{306:function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(){return"undefined"==typeof E&&"undefined"!=typeof window&&window.IntersectionObserver&&(E=new window.IntersectionObserver(function(e){e.forEach(function(e){L.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(E.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),E}t.__esModule=!0;var r=a(39),l=i(r),s=a(57),n=i(s),d=a(56),c=i(d),u=a(127),f=i(u),p=a(126),y=i(p),h=a(4),m=i(h),g=a(7),b=i(g),v=function(e){var t=(0,y.default)({},e);return t.responsiveResolution&&(t.resolutions=t.responsiveResolution,delete t.responsiveResolution),t.responsiveSizes&&(t.sizes=t.responsiveSizes,delete t.responsiveSizes),t},w={},S=function(e){var t=v(e),a=t.sizes?t.sizes.src:t.resolutions.src;return!!w[a]||(w[a]=!0,!1)},E=void 0,L=[],O=function(e,t){o().observe(e),L.push([e,t])},j=null,I=function(){if(null!==j)return j;var e="undefined"!=typeof window?window.document.createElement("canvas"):{};return j=!(!e.getContext||!e.getContext("2d"))&&0===e.toDataURL("image/webp").indexOf("data:image/webp")},z=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.sizes?'sizes="'+e.sizes+'" ':"",o=e.title?'title="'+e.title+'" ':"",r=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",n=e.opacity?e.opacity:"1",d=e.transitionDelay?e.transitionDelay:"0.5s";return"<img "+l+s+t+a+r+o+i+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+d+";opacity:"+n+';width:100%;height:100%;object-fit:cover;object-position:center"/>'},T=function(e){var t=e.style,a=e.onLoad,i=(0,f.default)(e,["style","onLoad"]);return m.default.createElement("img",(0,y.default)({},i,{onLoad:a,style:(0,y.default)({position:"absolute",top:0,left:0,transition:"opacity 0.5s",width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},t)}))};T.propTypes={style:b.default.object,onLoad:b.default.func};var C=function(e){function t(a){(0,l.default)(this,t);var i=(0,n.default)(this,e.call(this,a)),o=!0,r=!0,s=!1,d=S(a);return!d&&"undefined"!=typeof window&&window.IntersectionObserver&&(o=!1,r=!1,s=!0),"undefined"==typeof window&&(o=!1,r=!1),i.state={isVisible:o,imgLoaded:r,IOSupported:s},i.handleRef=i.handleRef.bind(i),i}return(0,c.default)(t,e),t.prototype.handleRef=function(e){var t=this;this.state.IOSupported&&e&&O(e,function(){t.setState({isVisible:!0,imgLoaded:!1})})},t.prototype.render=function(){var e=this,t=v(this.props),a=t.title,i=t.alt,o=t.className,r=t.outerWrapperClassName,l=t.style,s=void 0===l?{}:l,n=t.imgStyle,d=void 0===n?{}:n,c=t.placeholderStyle,u=void 0===c?{}:c,f=t.sizes,p=t.resolutions,h=t.backgroundColor,g=t.Tag,b=void 0;b="boolean"==typeof h?"lightgray":h;var w=(0,y.default)({opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"},d,u),S=(0,y.default)({opacity:this.state.imgLoaded||this.props.fadeIn===!1?1:0},d);if(f){var E=f;return E.srcWebp&&E.srcSetWebp&&I()&&(E.src=E.srcWebp,E.srcSet=E.srcSetWebp),m.default.createElement(g,{className:(r?r:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===s.position?"initial":"relative"}},m.default.createElement(g,{className:(o?o:"")+" gatsby-image-wrapper",style:(0,y.default)({position:"relative",overflow:"hidden"},s),ref:this.handleRef},m.default.createElement(g,{style:{width:"100%",paddingBottom:100/E.aspectRatio+"%"}}),E.base64&&m.default.createElement(T,{alt:i,title:a,src:E.base64,style:w}),E.tracedSVG&&m.default.createElement(T,{alt:i,title:a,src:E.tracedSVG,style:w}),b&&m.default.createElement(g,{title:a,style:{backgroundColor:b,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&m.default.createElement(T,{alt:i,title:a,srcSet:E.srcSet,src:E.src,sizes:E.sizes,style:S,onLoad:function(){e.state.IOSupported&&e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),m.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,y.default)({alt:i,title:a},E))}})))}if(p){var L=p,O=(0,y.default)({position:"relative",overflow:"hidden",display:"inline-block",width:L.width,height:L.height},s);return"inherit"===s.display&&delete O.display,L.srcWebp&&L.srcSetWebp&&I()&&(L.src=L.srcWebp,L.srcSet=L.srcSetWebp),m.default.createElement(g,{className:(r?r:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===s.position?"initial":"relative"}},m.default.createElement(g,{className:(o?o:"")+" gatsby-image-wrapper",style:O,ref:this.handleRef},L.base64&&m.default.createElement(T,{alt:i,title:a,src:L.base64,style:w}),L.tracedSVG&&m.default.createElement(T,{alt:i,title:a,src:L.tracedSVG,style:w}),b&&m.default.createElement(g,{title:a,style:{backgroundColor:b,width:L.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:L.height}}),this.state.isVisible&&m.default.createElement(T,{alt:i,title:a,width:L.width,height:L.height,srcSet:L.srcSet,src:L.src,style:S,onLoad:function(){e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),m.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,y.default)({alt:i,title:a,width:L.width,height:L.height},L))}})))}return null},t}(m.default.Component);C.defaultProps={fadeIn:!0,alt:"",Tag:"div"},C.propTypes={responsiveResolution:b.default.object,responsiveSizes:b.default.object,resolutions:b.default.object,sizes:b.default.object,fadeIn:b.default.bool,title:b.default.string,alt:b.default.string,className:b.default.oneOfType([b.default.string,b.default.object]),outerWrapperClassName:b.default.oneOfType([b.default.string,b.default.object]),style:b.default.object,imgStyle:b.default.object,placeholderStyle:b.default.object,position:b.default.string,backgroundColor:b.default.oneOfType([b.default.string,b.default.bool]),onLoad:b.default.func,Tag:b.default.string},t.default=C},102:function(e,t){"use strict";function a(e,t,u){if("string"!=typeof t){if(c){var f=d(t);f&&f!==c&&a(e,f,u)}var p=l(t);s&&(p=p.concat(s(t)));for(var y=0;y<p.length;++y){var h=p[y];if(!(i[h]||o[h]||u&&u[h])){var m=n(t,h);try{r(e,h,m)}catch(e){}}}return e}return e}var i={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},r=Object.defineProperty,l=Object.getOwnPropertyNames,s=Object.getOwnPropertySymbols,n=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,c=d&&d(Object);e.exports=a},204:function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var o=a(4),r=i(o),l=(a(53),a(306)),s=i(l),n=function(e){var t=e.data;return r.default.createElement("div",{style:{maxWidth:600}},r.default.createElement("div",{style:{marginBottom:60}},r.default.createElement(s.default,{sizes:t.file.childImageSharp.sizes})),r.default.createElement("h1",null,"Carson Covell 👋🏼"),r.default.createElement("p",null,"Hello! My name is Carson, thanks for stopping by."),r.default.createElement("p",null,"I'm a creative living in the lovely Atlanta, GA. I love building digital products. While I'm a front-end developer by day, I also pursue design, writing and photography in my free time."),r.default.createElement("p",null,"Outside of my work, you my find me at the local rock climbing gym, out camping, playing soccer or skiing with my family."),r.default.createElement("p",null,"You can follow me on ",r.default.createElement("a",{href:"https://twitter.com/covcarson"},"Twitter")," ","or ",r.default.createElement("a",{href:"https://instagram.com/carsoncovell"},"Instagram"),"."))};t.default=n;t.query="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-index-js-9b5c540c4c350e13a7c3.js.map