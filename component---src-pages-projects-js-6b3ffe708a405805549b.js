(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{191:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(201),o=a(195),c=a(214),l=a.n(c);function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var u=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).showInfoTile=a.showInfoTile.bind(s(a)),a.showMainTile=a.showMainTile.bind(s(a)),a.state={isMoreInfoClicked:!1},a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var i=n.prototype;return i.showInfoTile=function(){this.setState({isMoreInfoClicked:!0})},i.showMainTile=function(){this.setState({isMoreInfoClicked:!1})},i.render=function(){var e,t=this;return e=this.state.isMoreInfoClicked?r.a.createElement(function(){return r.a.createElement("div",{className:l.a.info_tile},r.a.createElement("p",{className:l.a.project_info},t.props.about),r.a.createElement("button",{className:l.a.back_button,onClick:t.showMainTile},"Back"))},null):r.a.createElement(function(){return r.a.createElement("div",{className:l.a.main_tile},r.a.createElement("a",{className:l.a.info_link,onClick:t.showInfoTile},"more info"),r.a.createElement("p",{className:l.a.heading},t.props.title),r.a.createElement("a",{href:t.props.url,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("button",{className:l.a.button},"Visit")))},null),r.a.createElement("div",{className:l.a.container},e)},n}(r.a.Component);t.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"Projects"}),r.a.createElement(u,{url:"https://capricornrecords.com.au/",title:"Capricorn Records",about:"An independent e-commerce store selling used vinyls, built using Shopify's CMS."}),r.a.createElement(u,{url:"https://techwhen.com/",title:"TechWhen",about:"A learning project that uses React, Docker, AWS, Material Design. When complete, it will list upcoming tech conferences."})))}},192:function(e,t,a){"use strict";a.d(t,"b",function(){return s});var n=a(0),r=a.n(n),i=a(65),o=a.n(i);a.d(t,"a",function(){return o.a});a(193),a(8).default.enqueue;var c=r.a.createContext({});function l(e){var t=e.staticQueryData,a=e.data,n=e.query,i=e.render,o=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,o&&i(o),!o&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var s=function(e){var t=e.data,a=e.query,n=e.render,i=e.children;return r.a.createElement(c.Consumer,null,function(e){return r.a.createElement(l,{data:t,query:a,render:n||i,staticQueryData:e})})}},193:function(e,t,a){var n;e.exports=(n=a(194))&&n.default||n},194:function(e,t,a){"use strict";a.r(t);a(23);var n=a(0),r=a.n(n),i=a(92);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null}},195:function(e,t,a){"use strict";var n=a(196),r=a(0),i=a.n(r),o=a(197),c=a.n(o),l=a(192);function s(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,s=e.title;return i.a.createElement(l.b,{query:u,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:s},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:n})}s.defaultProps={lang:"en",meta:[],keywords:[]},t.a=s;var u="1025518380"},196:function(e){e.exports={data:{site:{siteMetadata:{title:"Chloe Kuypers",description:"My portfolio, built with Gatsby",author:"@letitia-may"}}}}},198:function(e){e.exports={data:{site:{siteMetadata:{title:"Chloe Kuypers"}}}}},201:function(e,t,a){"use strict";var n=a(198),r=a(0),i=a.n(r),o=a(192),c=a(202),l=a.n(c),s=(a(199),a(200),a(203)),u=a.n(s),m=function(e){var t=e.siteTitle;return i.a.createElement("div",{className:u.a.outer_container},i.a.createElement("div",{className:u.a.inner_container},i.a.createElement(o.a,{to:"/",style:{color:"white",textDecoration:"none"}},i.a.createElement("p",{className:u.a.main_title},t),i.a.createElement("p",{className:u.a.subtitle},"Web developer"))))};m.defaultProps={siteTitle:"",subTitle:""};var d=m;t.a=function(e){var t=e.children;return i.a.createElement(o.b,{query:"755544856",render:function(e){return i.a.createElement("div",{className:l.a.container},i.a.createElement(d,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{className:l.a.page_content},t),i.a.createElement("div",{className:l.a.footer},"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org",target:"_blank",rel:"noopener noreferrer"},"Gatsby"),i.a.createElement("br",null),"Source available on"," ",i.a.createElement("a",{href:"https://github.com/Letitia-May/portfolio",target:"_blank",rel:"noopener noreferrer"},"Github")))},data:n})}}}]);
//# sourceMappingURL=component---src-pages-projects-js-6b3ffe708a405805549b.js.map