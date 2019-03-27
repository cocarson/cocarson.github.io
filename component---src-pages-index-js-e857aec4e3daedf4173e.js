(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{146:function(e,a,t){"use strict";t.r(a),t.d(a,"query",function(){return u});t(166);var n=t(0),r=t.n(n),l=t(155),i=t.n(l),c=t(141),o=t.n(c),s=t(154),m=t(157);a.default=function(e){var a=e.data,t=a.allMarkdownRemark.edges;return r.a.createElement(s.a,{site:a.site,noNav:!0},r.a.createElement("div",{style:{maxWidth:600,marginBottom:"3rem"}},r.a.createElement("div",{className:o.a.img},a.file&&r.a.createElement(i.a,{fluid:a.file.childImageSharp.fluid})),r.a.createElement("h1",null,"Carson Covell"),r.a.createElement("p",null,"Hello! My name is Carson, thanks for stopping by."),r.a.createElement("p",null,"I'm a creative living in the lovely Atlanta, GA. I love building digital products. While I'm a front-end developer by day, I also pursue design, writing and photography in my free time."),r.a.createElement("p",null,"Outside of my work, you may find me at the local rock climbing gym, out camping, playing soccer or skiing with my family."),r.a.createElement("p",null,"Follow me on"," ",r.a.createElement("a",{className:o.a.link,href:"https://twitter.com/carsoncovell"},"Twitter")," ","or"," ",r.a.createElement("a",{className:o.a.link,href:"https://instagram.com/carsoncovell"},"Instagram"),".")),r.a.createElement("div",{className:"blog-posts",style:{maxWidth:600,marginBottom:80}},r.a.createElement("h2",null,"Blog"),r.a.createElement("div",null,t.filter(function(e){return e.node.frontmatter.title.length>0}).map(function(e){return r.a.createElement(m.a,{key:e.node.id,post:e.node})}))))};var u="3447929393"},149:function(e,a,t){"use strict";var n=t(0),r=t.n(n);t(140);a.a=function(e){var a=e.children,t=e.style;return r.a.createElement("div",{className:"container",style:t},a)}},150:function(e,a,t){var n;e.exports=(n=t(153))&&n.default||n},151:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(4),i=t.n(l),c=t(28),o=t.n(c);t.d(a,"a",function(){return o.a});t(150),r.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},152:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(151),i=(t(139),t(149));a.a=function(){return r.a.createElement("nav",{style:{marginTop:40}},r.a.createElement(i.a,null,r.a.createElement(l.a,{className:"link",to:"/"},r.a.createElement("span",{role:"img","aria-label":""},"🏡")," ","Home")))}},153:function(e,a,t){"use strict";t.r(a);t(29);var n=t(0),r=t.n(n),l=t(4),i=t.n(l),c=t(49),o=t(2),s=function(e){var a=e.location,t=o.default.getResourcesForPathnameSync(a.pathname);return r.a.createElement(c.a,Object.assign({location:a,pageResources:t},t.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},a.default=s},154:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(152),i=t(149),c=function(){return r.a.createElement("footer",null,r.a.createElement(i.a,{style:{marginTop:80,marginBottom:80}},"Copyright ",(new Date).getFullYear()))},o=t(156),s=t.n(o);a.a=function(e){var a=e.children,t=e.noNav,o=e.site;return r.a.createElement(n.Fragment,null,r.a.createElement(s.a,null,r.a.createElement("title",null,o?o.siteMetadata.title:"Carson Covell"),r.a.createElement("meta",{name:"description",content:"Carson Covell is a web developer living in Atlanta, GA."}),r.a.createElement("meta",{name:"keywords",content:"javascript, web, developer, front-end, atlanta"}),r.a.createElement("link",{rel:"shortcut icon",href:"./favicon/favicon.ico",type:"image/x-icon"}),r.a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/static/favicon/apple-touch-icon.png"}),r.a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/static/favicon/favicon-32x32.png"}),r.a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/static/favicon/favicon-16x16.png"}),r.a.createElement("link",{rel:"manifest",href:"/static/favicon/site.webmanifest"}),r.a.createElement("link",{rel:"mask-icon",href:"/static/favicon/safari-pinned-tab.svg",color:"#4A4A4A"}),r.a.createElement("meta",{name:"msapplication-TileColor",content:"#00aba9"}),r.a.createElement("meta",{name:"theme-color",content:"#ffffff"})),!t&&r.a.createElement(l.a,null),r.a.createElement(i.a,{style:{marginTop:t?40:0}},a),r.a.createElement(c,null))}},157:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(151),i=t(155),c=t.n(i),o=t(142),s=t.n(o);a.a=function(e){var a=e.post.frontmatter,t=a.date,n=a.title,i=a.path,o=a.image;return r.a.createElement("div",null,r.a.createElement(l.a,{className:s.a.postLink,to:i},o&&r.a.createElement("div",{className:s.a.image},r.a.createElement(c.a,{fluid:o.childImageSharp.fluid})),r.a.createElement("div",{className:s.a.textArea},r.a.createElement("div",null,r.a.createElement("h3",{className:s.a.title},n),r.a.createElement("p",{className:s.a.date},t)),r.a.createElement("div",{className:s.a.arrow},"→"))))}},166:function(e,a,t){"use strict";t(167)("link",function(e){return function(a){return e(this,"a","href",a)}})},167:function(e,a,t){var n=t(13),r=t(23),l=t(16),i=/"/g,c=function(e,a,t,n){var r=String(l(e)),c="<"+a;return""!==t&&(c+=" "+t+'="'+String(n).replace(i,"&quot;")+'"'),c+">"+r+"</"+a+">"};e.exports=function(e,a){var t={};t[e]=a(c),n(n.P+n.F*r(function(){var a=""[e]('"');return a!==a.toLowerCase()||a.split('"').length>3}),"String",t)}}}]);
//# sourceMappingURL=component---src-pages-index-js-e857aec4e3daedf4173e.js.map