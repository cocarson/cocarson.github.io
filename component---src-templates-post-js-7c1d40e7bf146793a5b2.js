(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{137:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return c}),a.d(t,"pageQuery",function(){return u});a(70);var r=a(6),i=a.n(r),s=a(0),n=a.n(s),o=a(149),l=a.n(o),d=(a(156),a(146),a(148)),c=function(e){function t(){return e.apply(this,arguments)||this}i()(t,e);var a=t.prototype;return a.componentDidMount=function(){document.querySelectorAll(".image-row-wrapper").forEach(function(e){var t=e.querySelector("img");e.style.flex=""+t.width/t.height})},a.render=function(){var e=this.props.data.markdownRemark,t=e.frontmatter,a=e.html,r=t.image,i=t.title,s=t.date;return n.a.createElement(d.a,null,n.a.createElement("div",{className:"blog-post"},r&&n.a.createElement(l.a,{className:"cover-image",alt:"",fluid:r.childImageSharp.fluid}),n.a.createElement("h1",null,i),n.a.createElement("h4",null,s),n.a.createElement("div",{className:"blog-post-content",dangerouslySetInnerHTML:{__html:a}})))},t}(n.a.Component),u="1063653748"},143:function(e,t,a){"use strict";var r=a(0),i=a.n(r);a(151);t.a=function(e){var t=e.children,a=e.style;return i.a.createElement("div",{className:"container",style:a},t)}},144:function(e,t,a){var r;e.exports=(r=a(147))&&r.default||r},145:function(e,t,a){"use strict";var r=a(0),i=a.n(r),s=a(4),n=a.n(s),o=a(28),l=a.n(o);a.d(t,"a",function(){return l.a});a(144),i.a.createContext({});n.a.object,n.a.string.isRequired,n.a.func,n.a.func},146:function(e,t,a){"use strict";var r=a(0),i=a.n(r),s=a(145),n=(a(150),a(143));t.a=function(){return i.a.createElement("nav",{style:{marginTop:40}},i.a.createElement(n.a,null,i.a.createElement(s.a,{className:"link",to:"/"},i.a.createElement("span",{role:"img","aria-label":""},"🏡")," ","Home")))}},147:function(e,t,a){"use strict";a.r(t);a(29);var r=a(0),i=a.n(r),s=a(4),n=a.n(s),o=a(49),l=a(2),d=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};d.propTypes={location:n.a.shape({pathname:n.a.string.isRequired}).isRequired},t.default=d},148:function(e,t,a){"use strict";var r=a(0),i=a.n(r),s=(a(152),a(146)),n=a(143),o=function(){return i.a.createElement("footer",null,i.a.createElement(n.a,{style:{marginTop:80,marginBottom:80}},"Copyright ",(new Date).getFullYear()))};t.a=function(e){var t=e.children,a=e.noNav;return i.a.createElement("div",null,!a&&i.a.createElement(s.a,null),i.a.createElement(n.a,{style:{marginTop:a?40:0}},t),i.a.createElement(o,null))}},149:function(e,t,a){"use strict";var r=a(7);t.__esModule=!0,t.default=void 0;var i,s=r(a(6)),n=r(a(30)),o=r(a(68)),l=r(a(69)),d=r(a(0)),c=r(a(4)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},h=[];var m=function(e,t){(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){h.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),i).observe(e),h.push([e,t])},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",s=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",d=e.opacity?e.opacity:"1";return"<picture>"+r+"<img "+o+l+a+i+t+n+s+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+d+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},y=d.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,s=e.style,n=e.onLoad,c=e.onError,u=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return d.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:i},u,{onLoad:n,onError:c,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},s)}))});y.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var b=function(e){function t(t){var a;a=e.call(this,t)||this;var r=!0,i=!1,s=t.fadeIn,o=p(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,i=!0),"undefined"==typeof window&&(r=!1),t.critical&&(r=!0,i=!1);var l=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:r,imgLoaded:!1,IOSupported:i,fadeIn:s,hasNoScript:l,seenBefore:o},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)((0,n.default)(a))),a.handleRef=a.handleRef.bind((0,n.default)((0,n.default)(a))),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&m(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0,imgLoaded:e})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,s=void 0===i?{}:i,n=e.imgStyle,o=void 0===n?{}:n,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,h=e.fluid,m=e.fixed,b=e.backgroundColor,v=e.Tag,S=e.itemProp,w="boolean"==typeof b?"lightgray":b,E=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},o,f),L=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},o),R={title:t,alt:this.state.isVisible?"":a,style:E,className:p};if(h){var I=h;return d.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},s),ref:this.handleRef,key:"fluid-"+JSON.stringify(I.srcSet)},d.default.createElement(v,{style:{width:"100%",paddingBottom:100/I.aspectRatio+"%"}}),I.base64&&d.default.createElement(y,(0,l.default)({src:I.base64},R)),I.tracedSVG&&d.default.createElement(y,(0,l.default)({src:I.tracedSVG},R)),w&&d.default.createElement(v,{title:t,style:{backgroundColor:w,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&d.default.createElement("picture",null,I.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:I.srcSetWebp,sizes:I.sizes}),d.default.createElement(y,{alt:a,title:t,sizes:I.sizes,src:I.src,srcSet:I.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t},I))}}))}if(m){var z=m,N=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:z.width,height:z.height},s);return"inherit"===s.display&&delete N.display,d.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:N,ref:this.handleRef,key:"fixed-"+JSON.stringify(z.srcSet)},z.base64&&d.default.createElement(y,(0,l.default)({src:z.base64},R)),z.tracedSVG&&d.default.createElement(y,(0,l.default)({src:z.tracedSVG},R)),w&&d.default.createElement(v,{title:t,style:{backgroundColor:w,width:z.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:z.height}}),this.state.isVisible&&d.default.createElement("picture",null,z.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:z.srcSetWebp,sizes:z.sizes}),d.default.createElement(y,{alt:a,title:t,width:z.width,height:z.height,sizes:z.sizes,src:z.src,srcSet:z.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t,width:z.width,height:z.height},z))}}))}return null},t}(d.default.Component);b.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var v=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),S=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});b.propTypes={resolutions:v,sizes:S,fixed:v,fluid:S,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string};var w=b;t.default=w}}]);
//# sourceMappingURL=component---src-templates-post-js-7c1d40e7bf146793a5b2.js.map