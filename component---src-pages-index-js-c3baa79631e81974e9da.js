webpackJsonp([35783957827783],{216:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.pageQuery=void 0;var l=a(3),n=r(l),s=a(24),m=r(s),f=function(e){var t=e.data,a=t.allMarkdownRemark.edges;return n.default.createElement("div",{className:"flex flex-column justify-center items-center"},n.default.createElement("h1",{className:"f3 f2-ns fw7 lh-title mt0 mb3 avenir"},"Hi, I'm Taylor Bell."),n.default.createElement("h4",{className:"f4 f3-ns fw4 lh-title mt0 avenir"},"I'm a researcher & developer that is interested in the interesting."),n.default.createElement("p",{className:"f4 f3-ns fw4 lh-title mt0 avenir"},"Here are some things I've written:"),n.default.createElement("div",{className:"flex flex-column justify-center items-center"},a.map(function(e){var t=e.node;return n.default.createElement("div",{className:"blog-post-preview w-100",key:t.id},n.default.createElement("h1",{className:"avenir f3 f2-ns fw3 mb1 pb2"},n.default.createElement(m.default,{to:t.frontmatter.path,className:"dark-gray no-underline dim",style:{borderBottom:"3px solid rgba(0,0,0,.05)"}},t.frontmatter.title)),n.default.createElement("p",{className:"avenir"},t.frontmatter.excerpt),n.default.createElement("ul",{className:"moon-gray"},t.frontmatter.tags.sort().map(function(e,t){return n.default.createElement("li",{key:t,className:"dim"},n.default.createElement(m.default,{to:"/tags/"+e,className:"avenir dark-gray o-70"},e))})))})))};t.pageQuery="** extracted graphql fragment **";t.default=f}});
//# sourceMappingURL=component---src-pages-index-js-c3baa79631e81974e9da.js.map