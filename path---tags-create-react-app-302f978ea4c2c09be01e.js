webpackJsonp([0x675c2f99cf92],{374:function(e,o){e.exports={pathContext:{posts:[{html:"<h1><code>NODE_PATH</code> for avoiding <code>../../../</code></h1>\n<p>When copying out a big component with several subcomponents to a separate <code>create-react-app</code> project, I found myself using tons of relative imports. Counting up &#x26; overs sucks.</p>\n<p>To help with this, create a <code>.env</code> file in the root of your <code>create-react-app</code> project. Inside this file, add this line:<br>\n<code>NODE_PATH=src/</code></p>\n<p>or you can do it all at once on the command line with  <code>echo 'NODE_PATH=src/' >> .env</code></p>\n<p>Sidenote: the <code>>></code>operator will append to the end of the file in case you already have a <code>.env</code> file with stuff in it, like if you're using <code>custom-react-scripts</code> to enable bonus features in your CRA.</p>\n<p>So yeah, now you can go through your components and clean up all the relative imports as applicable. Remember though, depending on how things are nested it may make more sense to use a <code>../</code> instead of <code>components/Parent/components/Child</code>. Use your best judgement. I trust you.</p>",id:"/Users/taylor/Documents/Projects/taylorlistens/src/pages/2017-09-13-node-path-imports/index.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2017-09-13T16:04:25.113Z",path:"/node-path-imports",title:"NODE_PATH Imports",excerpt:"`NODE_PATH` is actually way easier than I thought.",tags:["javascript","create-react-app"]}}],tagName:"create-react-app"}}}});
//# sourceMappingURL=path---tags-create-react-app-302f978ea4c2c09be01e.js.map