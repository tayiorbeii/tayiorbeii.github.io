webpackJsonp([35783957827783],{188:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.pageQuery=void 0;var r=a(2),n=l(r),m=a(31),f=l(m),c=function(e){var t=e.data,a=t.allMarkdownRemark.edges;return n.default.createElement("div",{className:"flex flex-column justify-center items-center"},n.default.createElement("h1",{className:"f3 f2-ns fw7 lh-title mt0 mb3 avenir"},"Hello."),n.default.createElement("h4",{className:"f4 f3-ns fw4 lh-title mt0 avenir"},"I'm Taylor Bell."),n.default.createElement("div",{className:"flex flex-column justify-center items-center"},a.map(function(e){var t=e.node;return n.default.createElement("div",{className:"blog-post-preview w-100",key:t.id},n.default.createElement("h1",{className:"avenir f2 fw3 mb0"},n.default.createElement(f.default,{to:t.frontmatter.path,className:"no-underline light-green"},t.frontmatter.title)),n.default.createElement("p",{className:"avenir mt1 moon-gray"},t.frontmatter.date),n.default.createElement("p",{className:"avenir"},t.frontmatter.excerpt),n.default.createElement("ul",{className:"moon-gray"},t.frontmatter.tags.sort().map(function(e,t){return n.default.createElement("li",{key:t},n.default.createElement(f.default,{to:"/tags/"+e,className:"avenir light-green o-70"},e))})))})))};t.pageQuery="** extracted graphql fragment **";t.default=c}});
//# sourceMappingURL=component---src-pages-index-js-450e1aa567e41fbe018e.js.map