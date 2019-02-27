(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{140:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return u});a(76),a(52);var n=a(0),r=a.n(n),i=a(166),o=a.n(i),s=(a(159),a(158)),l=a(161);t.default=function(e){var t=e.data;console.log(t);var a=t.allMarkdownRemark.edges;return r.a.createElement(s.a,{noNav:!0},r.a.createElement("div",{style:{maxWidth:600,marginBottom:80}},r.a.createElement("div",{className:"img"},t.file&&r.a.createElement(o.a,{sizes:t.file.childImageSharp.sizes})),r.a.createElement("h1",null,"Carson Covell"," ",r.a.createElement("span",{role:"img","aria-label":"wave"},"👋🏼")),r.a.createElement("p",null,"Hello! My name is Carson, thanks for stopping by."),r.a.createElement("p",null,"I'm a creative living in the lovely Atlanta, GA. I love building digital products. While I'm a front-end developer by day, I also pursue design, writing and photography in my free time."),r.a.createElement("p",null,"Outside of my work, you may find me at the local rock climbing gym, out camping, playing soccer or skiing with my family."),r.a.createElement("p",null,"You can follow me on"," ",r.a.createElement("a",{className:"link",href:"https://twitter.com/carsoncovell"},"Twitter")," ","or"," ",r.a.createElement("a",{className:"link",href:"https://instagram.com/carsoncovell"},"Instagram"),".")),r.a.createElement("div",{className:"blog-posts",style:{maxWidth:600,marginBottom:80}},r.a.createElement("h1",null,"Posts"),r.a.createElement("div",null,a.filter(function(e){return e.node.frontmatter.title.length>0}).map(function(e){return r.a.createElement(l.a,{key:e.node.id,post:e.node})}))))};var u="3228346863"},144:function(e,t,a){"use strict";var n=a(36);t.__esModule=!0,t.withPrefix=p,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=n(a(148)),i=n(a(149)),o=n(a(7)),s=n(a(49)),l=n(a(50)),u=n(a(4)),c=n(a(0)),d=a(15),f=a(145);function p(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var h={activeClassName:u.default.string,activeStyle:u.default.object},m=function(e){function t(t){var a;a=e.call(this)||this,(0,l.default)((0,s.default)((0,s.default)(a)),"defaultGetProps",function(e){return e.isCurrent?{className:[a.props.className,a.props.activeClassName].filter(Boolean).join(" "),style:(0,i.default)({},a.props.style,a.props.activeStyle)}:null});var n=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(n=!0),a.state={IOSupported:n},a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},a.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},a.handleRef=function(e){var t,a,n,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,a=function(){___loader.enqueue((0,f.parsePath)(r.props.to).pathname)},(n=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t),n.disconnect(),a())})})).observe(t))},a.render=function(){var e=this,t=this.props,a=t.to,n=t.getProps,o=void 0===n?this.defaultGetProps:n,s=t.onClick,l=t.onMouseEnter,u=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),h=t.replace,m=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),g=p(a);return c.default.createElement(d.Link,(0,i.default)({to:g,state:u,getProps:o,innerRef:this.handleRef,onMouseEnter:function(e){l&&l(e),___loader.hovering((0,f.parsePath)(a).pathname)},onClick:function(t){return s&&s(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),v(a,{state:u,replace:h})),!0}},m))},t}(c.default.Component);m.propTypes=(0,i.default)({},h,{innerRef:u.default.func,onClick:u.default.func,to:u.default.string.isRequired,replace:u.default.bool});var g=m;t.default=g;var v=function(e,t){window.___navigate(p(e),t)};t.navigate=v;var y=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(p(e))};t.push=y;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(p(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "push" instead.'),y(e)}},145:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return m}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return h});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(144),l=a.n(s);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return s.withPrefix}),a.d(t,"navigate",function(){return s.navigate}),a.d(t,"push",function(){return s.push}),a.d(t,"replace",function(){return s.replace}),a.d(t,"navigateTo",function(){return s.navigateTo});var u=a(25);a.d(t,"waitForRouteChange",function(){return u.c});var c=a(146),d=a.n(c);a.d(t,"PageRenderer",function(){return d.a});var f=a(35);a.d(t,"parsePath",function(){return f.a});var p=r.a.createContext({}),h=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},146:function(e,t,a){var n;e.exports=(n=a(150))&&n.default||n},147:function(e,t,a){"use strict";var n=a(0),r=a.n(n);a(154);t.a=function(e){var t=e.children,a=e.style;return r.a.createElement("div",{className:"container",style:a},t)}},148:function(e,t){e.exports=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}},149:function(e,t){function a(){return e.exports=a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},a.apply(this,arguments)}e.exports=a},150:function(e,t,a){"use strict";a.r(t);a(37);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(51),l=a(2),u=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},151:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(145),o=(a(152),a(147));t.a=function(){return r.a.createElement("nav",{style:{marginTop:40}},r.a.createElement(o.a,null,r.a.createElement(i.Link,{className:"link",to:"/"},r.a.createElement("span",{role:"img","aria-label":""},"🏡")," ","Home")))}},152:function(e,t,a){},154:function(e,t,a){},156:function(e,t,a){},158:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=(a(156),a(151)),o=a(147),s=function(){return r.a.createElement("footer",null,r.a.createElement(o.a,{style:{marginTop:80,marginBottom:80}},"Copyright ",(new Date).getFullYear()))};t.a=function(e){var t=e.children,a=e.noNav;return r.a.createElement("div",null,!a&&r.a.createElement(i.a,null),r.a.createElement(o.a,{style:{marginTop:a?40:0}},t),r.a.createElement(s,null))}},159:function(e,t,a){},161:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(145);a(162);t.a=function(e){var t=e.post;return r.a.createElement("div",null,r.a.createElement(i.Link,{className:"postLink",to:t.frontmatter.path},r.a.createElement("div",null,r.a.createElement("h3",null,t.frontmatter.title),r.a.createElement("p",null,t.frontmatter.date)),r.a.createElement("div",{className:"arrow"},"→")))}},162:function(e,t,a){},166:function(e,t,a){"use strict";var n=a(36);t.__esModule=!0,t.default=void 0;var r,i=n(a(7)),o=n(a(49)),s=n(a(148)),l=n(a(149)),u=n(a(0)),c=n(a(4)),d=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},p=function(e){var t=d(e),a=t.fluid?t.fluid.src:t.fixed.src;return!!f[a]||(f[a]=!0,!1)},h=[];var m=function(e,t){(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){h.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),r).observe(e),h.push([e,t])},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",r=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",i=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",u=e.opacity?e.opacity:"1";return"<picture>"+n+r+"<img "+s+l+t+o+i+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+u+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},v=u.default.forwardRef(function(e,t){var a=e.style,n=e.onLoad,r=e.onError,i=(0,s.default)(e,["style","onLoad","onError"]);return u.default.createElement("img",(0,l.default)({},i,{onLoad:n,onError:r,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});v.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var y=function(e){function t(t){var a;a=e.call(this,t)||this;var n=!0,r=!0,i=!1,s=t.fadeIn,l=p(t);!l&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=!1,r=!1,i=!0),"undefined"==typeof window&&(n=!1,r=!1),t.critical&&(n=!0,r=!1,i=!1);var c=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:n,imgLoaded:r,IOSupported:i,fadeIn:s,hasNoScript:c,seenBefore:l},a.imageRef=u.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,o.default)((0,o.default)(a))),a.handleRef=a.handleRef.bind((0,o.default)((0,o.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&m(e,function(){t.setState({isVisible:!0})})},a.handleImageLoaded=function(){this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e,t=d(this.props),a=t.title,n=t.alt,r=t.className,i=t.style,o=void 0===i?{}:i,s=t.imgStyle,c=void 0===s?{}:s,f=t.placeholderStyle,p=void 0===f?{}:f,h=t.fluid,m=t.fixed,y=t.backgroundColor,b=t.Tag;e="boolean"==typeof y?"lightgray":y;var w=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},c,p),E=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},c);if(h){var S=h;return u.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},o),ref:this.handleRef,key:"fluid-"+JSON.stringify(S.srcSet)},u.default.createElement(b,{style:{width:"100%",paddingBottom:100/S.aspectRatio+"%"}}),S.base64&&u.default.createElement(v,{alt:n,title:a,src:S.base64,style:w}),S.tracedSVG&&u.default.createElement(v,{alt:n,title:a,src:S.tracedSVG,style:w}),e&&u.default.createElement(b,{title:a,style:{backgroundColor:e,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&u.default.createElement("picture",null,S.srcSetWebp&&u.default.createElement("source",{type:"image/webp",srcSet:S.srcSetWebp,sizes:S.sizes}),u.default.createElement("source",{srcSet:S.srcSet,sizes:S.sizes}),u.default.createElement(v,{alt:n,title:a,src:S.src,style:E,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&u.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:n,title:a},S))}}))}if(m){var R=m,I=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:R.width,height:R.height},o);return"inherit"===o.display&&delete I.display,u.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:I,ref:this.handleRef,key:"fixed-"+JSON.stringify(R.srcSet)},R.base64&&u.default.createElement(v,{alt:n,title:a,src:R.base64,style:w}),R.tracedSVG&&u.default.createElement(v,{alt:n,title:a,src:R.tracedSVG,style:w}),e&&u.default.createElement(b,{title:a,style:{backgroundColor:e,width:R.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:R.height}}),this.state.isVisible&&u.default.createElement("picture",null,R.srcSetWebp&&u.default.createElement("source",{type:"image/webp",srcSet:R.srcSetWebp,sizes:R.sizes}),u.default.createElement("source",{srcSet:R.srcSet,sizes:R.sizes}),u.default.createElement(v,{alt:n,title:a,width:R.width,height:R.height,src:R.src,style:E,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&u.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:n,title:a,width:R.width,height:R.height},R))}}))}return null},t}(u.default.Component);y.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var b=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),w=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});y.propTypes={resolutions:b,sizes:w,fixed:b,fluid:w,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,Tag:c.default.string};var E=y;t.default=E}}]);
//# sourceMappingURL=component---src-pages-index-js-5b0e78d0862c269583fa.js.map