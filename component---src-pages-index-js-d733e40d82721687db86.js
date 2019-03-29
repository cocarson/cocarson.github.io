(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{147:function(e,t,a){"use strict";a.r(t);a(164);var n=a(0),r=a.n(n),l=a(152),i=a.n(l),c=a(144),o=a.n(c),m=a(154),s=a(151),u=a(145),f=a.n(u),p=function(e){var t=e.post.frontmatter,a=t.date,n=t.title,l=t.path,c=t.image;return r.a.createElement("div",null,r.a.createElement(s.a,{className:f.a.postLink,to:l},c&&r.a.createElement("div",{className:f.a.image},r.a.createElement(i.a,{fluid:c.childImageSharp.fluid})),r.a.createElement("div",{className:f.a.textArea},r.a.createElement("div",null,r.a.createElement("h3",{className:f.a.title},n),r.a.createElement("p",{className:f.a.date},a)),r.a.createElement("div",{className:f.a.arrow},"→ "))))};a.d(t,"query",function(){return d});t.default=function(e){var t=e.data,a=t.allMarkdownRemark.edges;return r.a.createElement(m.a,{metadata:t.site.siteMetadata,noNav:!0},r.a.createElement("div",{style:{maxWidth:600,marginBottom:"3rem"}},r.a.createElement("div",{className:o.a.img},t.file&&r.a.createElement(i.a,{fluid:t.file.childImageSharp.fluid})),r.a.createElement("h1",null,"Carson Covell"),r.a.createElement("p",null,"Hello! My name is Carson, thanks for stopping by."),r.a.createElement("p",null,"I'm a creative living in the lovely Atlanta, GA. I love building digital products. While I'm a front-end developer by day, I also pursue design, writing and photography in my free time."),r.a.createElement("p",null,"Outside of my work, you may find me at the local rock climbing gym, out camping, playing soccer or skiing with my family."),r.a.createElement("p",null,"Follow me on"," ",r.a.createElement("a",{className:o.a.link,href:"https://twitter.com/carsoncovell"},"Twitter")," ","or"," ",r.a.createElement("a",{className:o.a.link,href:"https://instagram.com/carsoncovell"},"Instagram"),".")),r.a.createElement("div",{className:"blog-posts",style:{maxWidth:600,marginBottom:80}},r.a.createElement("h2",null,"Blog"),r.a.createElement("div",null,a.filter(function(e){return e.node.frontmatter.title.length>0}).map(function(e){return r.a.createElement(p,{key:e.node.id,post:e.node})}))))};var d="3022594564"},148:function(e,t,a){"use strict";var n=a(0),r=a.n(n);a(140);t.a=function(e){var t=e.children,a=e.style;return r.a.createElement("div",{className:"container",style:a},t)}},149:function(e,t,a){var n;e.exports=(n=a(153))&&n.default||n},150:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(151),i=(a(139),a(148));t.a=function(){return r.a.createElement("nav",{style:{marginTop:40}},r.a.createElement(i.a,null,r.a.createElement(l.a,{className:"link",to:"/"},r.a.createElement("span",{role:"img","aria-label":""},"🏡")," ","Home")))}},151:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(4),i=a.n(l),c=a(28),o=a.n(c);a.d(t,"a",function(){return o.a});a(149),r.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},153:function(e,t,a){"use strict";a.r(t);a(29);var n=a(0),r=a.n(n),l=a(4),i=a.n(l),c=a(50),o=a(2),m=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};m.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=m},154:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(150),i=a(148),c=function(){return r.a.createElement("footer",null,r.a.createElement(i.a,{style:{marginTop:80,marginBottom:80}},"Copyright ",(new Date).getFullYear()))},o=a(155),m=a.n(o);t.a=function(e){var t=e.children,a=e.noNav,o=e.metadata,s=e.social;return r.a.createElement(n.Fragment,null,r.a.createElement(m.a,null,r.a.createElement("title",null,o.title||"Carson Covell"),r.a.createElement("meta",{name:"twitter:card",content:"summary"}),r.a.createElement("meta",{name:"twitter:site",content:"@carsoncovell"}),r.a.createElement("meta",{property:"og:url",content:o.url}),s&&r.a.createElement("meta",{name:"og:title",content:o.title}),r.a.createElement("meta",{name:"description",content:o.description}),r.a.createElement("meta",{name:"keywords",content:"javascript, web, developer, front-end, atlanta"}),r.a.createElement("link",{rel:"shortcut icon",href:"./favicon/favicon.ico",type:"image/x-icon"}),r.a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/static/favicon/apple-touch-icon.png"}),r.a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/static/favicon/favicon-32x32.png"}),r.a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/static/favicon/favicon-16x16.png"}),r.a.createElement("link",{rel:"mask-icon",href:"/static/favicon/safari-pinned-tab.svg",color:"#4A4A4A"}),r.a.createElement("meta",{name:"msapplication-TileColor",content:"#00aba9"}),r.a.createElement("meta",{name:"theme-color",content:"#ffffff"})),!a&&r.a.createElement(l.a,null),r.a.createElement(i.a,{style:{marginTop:a?40:0}},t),r.a.createElement(c,null))}},164:function(e,t,a){"use strict";a(165)("link",function(e){return function(t){return e(this,"a","href",t)}})},165:function(e,t,a){var n=a(13),r=a(23),l=a(16),i=/"/g,c=function(e,t,a,n){var r=String(l(e)),c="<"+t;return""!==a&&(c+=" "+a+'="'+String(n).replace(i,"&quot;")+'"'),c+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(c),n(n.P+n.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}}}]);
//# sourceMappingURL=component---src-pages-index-js-d733e40d82721687db86.js.map