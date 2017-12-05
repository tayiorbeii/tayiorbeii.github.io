webpackJsonp([0xb2ea65626bd6],{318:function(e,t){e.exports={data:{markdownRemark:{html:"<h1><code>NODE_PATH</code> for avoiding <code>../../../</code></h1>\n<p>When copying out a big component with several subcomponents to a separate <code>create-react-app</code> project, I found myself using tons of relative imports. Counting up &#x26; overs sucks.</p>\n<p>To help with this, create a <code>.env</code> file in the root of your <code>create-react-app</code> project. Inside this file, add this line:<br>\n<code>NODE_PATH=src/</code></p>\n<p>or you can do it all at once on the command line with  <code>echo 'NODE_PATH=src/' >> .env</code></p>\n<p>Sidenote: the <code>>></code>operator will append to the end of the file in case you already have a <code>.env</code> file with stuff in it, like if you're using <code>custom-react-scripts</code> to enable bonus features in your CRA.</p>\n<p>So yeah, now you can go through your components and clean up all the relative imports as applicable. Remember though, depending on how things are nested it may make more sense to use a <code>../</code> instead of <code>components/Parent/components/Child</code>. Use your best judgement. I trust you.</p>",frontmatter:{title:"NODE_PATH Imports",date:"September 13, 2017",path:"/node-path-imports",tags:["javascript","create-react-app"],excerpt:"`NODE_PATH` is actually way easier than I thought."}}},pathContext:{next:{html:'<p>I made a fork of <a href="https://github.com/tayiorbeii/tachyons-as-props"><code>tachyons-as-props</code></a> in my quest to replace tachyons + sass with glamorous.</p>\n<p>A nice way to work on a <code>node_module</code> locally without having to publish it is to use <code>yarn link</code> (or <code>npm link</code> if you\'re so inclined).</p>\n<p>The steps are pretty easy:</p>\n<ol>\n<li>\n<p>Go to the local folder of the module you are currently working on:</p>\n<ul>\n<li><code>cd module_in_progress</code></li>\n</ul>\n</li>\n<li>\n<p>Type <code>yarn link</code></p>\n<ul>\n<li>You should see a "success" message</li>\n</ul>\n</li>\n<li>\n<p>Go to your consuming project\'s folder</p>\n<ul>\n<li><code>cd my_project</code></li>\n</ul>\n</li>\n<li>Type <code>yarn link module_in_progress</code></li>\n</ol>\n<p>Now if you <code>ls node_modules</code> in your consuming project\'s folder, you should see that <code>module_in_progress</code> has been symlinked to its folder (as opposed to being installed as normal).</p>',id:"/Users/taylor/Documents/Projects/taylorlistens/src/pages/2017-09-13-yarn-link/index.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2017-09-13T18:33:28.522Z",path:"/yarn-link",title:"`yarn link` for npm Module Development",excerpt:"",tags:["javascript","npm"]}},prev:{html:"<p>If you've made it here, you probably already know about <a href=\"https://www.gatsbyjs.org/\">Gatsby, the React-based, blog-friendly static site generator</a>. This post outlines the process I took to build my blog.</p>\n<h2>Forking the Gatsby Starter</h2>\n<p>I made a fork of <a href=\"https://github.com/gatsbyjs/gatsby-starter-default\">Gatsby's official default starter</a> that removes all css, inline styles, and <code>classNames</code>. It's called <a href=\"https://github.com/tayiorbeii/gatsby-starter-tachyons\"><code>gatsby-starter-tachyons</code></a>.</p>\n<p>There are a couple reasons for this... The majority of my development work is done with the <a href=\"http://www.tachyons.io\">Tachyons</a> tool/library/thingie. For the uninitiated, it replaces having to write CSS with short, weird-at-first-but-once-you-get-it-yeah class names that do well over 95% of what you would need to do. Also, when you don't write CSS, there is no CSS building step. I'm also not crazy about the look of the default starter out of the box <em>*shrug*</em>.</p>\n<h2>Updating Basic Layout</h2>\n<p>The main layout component is located at <code>src/layouts/index.js</code>. This also is where the <code>&#x3C;Header /></code> subcomponent lives, as well as <a href=\"https://github.com/nfl/react-helmet\"><code>react-helmet</code></a> for the meta &#x26; other <code>&#x3C;head></code> stuff. There is also some customization to be done on the homepage layout is located at <code>src/pages/index.js</code>. </p>\n<p>In the interest of speed, I only added a few Tachyons classes (using <a href=\"https://roperzh.github.io/tachyons-cheatsheet/\">roperzh's <em>excellent</em> cheatsheet for reminders</a>) to have a bit nicer layout for development purposes.</p>\n<h2>Add Blog Functionality via Plugins</h2>\n<p>So now I have a basic homepage, but my primary goal is to make this a blog. <a href=\"https://www.gatsbyjs.org/tutorial/part-four/\">Part four</a> of the official Gatsby tutorial talks about how GraphQL is used to get data into the site, but there's kind of a lot going on there... </p>\n<h3>1. Install Some Plugins</h3>\n<p><code>yarn add gatsby-source-filesystem gatsby-transformer-remark</code></p>\n<h3>2. Update <code>gatsby-config.js</code></h3>\n<p>Inside the <code>gatsby-config.js</code> file, add the following  section (if you're using <code>gatsby-starter-tachyons</code>, you'll already have <code>gatsby-plugin-react-helmet</code> installed):</p>\n<pre><code class=\"language-javascript\">module.exports = {\n  siteMetadata: {\n    title: `taylorlistens.com`,\n  },\n  plugins: [\n    `gatsby-plugin-react-helmet`,\n    `gatsby-transformer-remark`,\n    {\n      resolve: `gatsby-source-filesystem`,\n      options: {\n        name: `src`,\n        path: `${__dirname}/src/`\n      }\n    }\n  ],\n}\n</code></pre>\n<p>What we've added are a source plugin (to read from our filesystem) and a transformer plugin (to transform data from a source).</p>\n<h3>3. Create a Markdown File</h3>\n<p>In order to make a blog post, a markdown doc. I follow this pattern:\n<code>YYYY-MM-DD-cool-title/index.md</code></p>\n<p>At the top of the markdown doc is some head matter that'll be used by Gatsby later. Here's what's in this very post:</p>\n<pre><code>---\npath: \"/building-a-gatsby-blog\"\ndate: \"2017-09-13T03:15:59.165Z\"\ntitle: \"Building A Gatsby Blog\"\ntags: ['gatsby', 'tachyons', 'code']\nexcerpt: 'Build a solid blog with Gatsby.js'\n---\n</code></pre>\n<p>There's a cool little app by DSchau called <a href=\"https://github.com/DSchau/create-gatsby-blog-post\"><code>create-gatsby-blog-post</code></a> that... creates a Gatsby blog post... Check it out.</p>\n<p>For now though, just throw some text in the doc and we'll display it in a few.</p>\n<h3>4. Add a GraphQL Post Query</h3>\n<p>In terms of graph vocabulary, <em>nodes</em> are \"places to be\", and <em>edges</em> are \"how to get there\". </p>\n<p>Open up <code>src/pages/index.js</code>, and get ready to add the query to the bottom of the file.</p>\n<p>We'll start the GraphQL query with <code>allMarkdownRemark</code>, provides us with edges (like directories in our <code>src/</code> folder) to nodes (our individual markdown documents).</p>\n<p>The <a href=\"https://www.gatsbyjs.org/tutorial/part-four/\">official Gatsby tutorial</a> covers GraphQL more in-depth and is definitely worth reading, but I think you'll be able to see what's happening here:</p>\n<pre><code class=\"language-javascript\">export const query = graphql`\n  query IndexQuery {\n    allMarkdownRemark {\n      totalCount\n      edges {\n        node {\n          excerpt(pruneLength: 250)\n          id\n          frontmatter {\n            title\n            date(formatString: \"MMMM DD, YYYY\")\n            path\n            tags\n            excerpt\n          }\n        }\n      }\n    }\n  }\n`\n</code></pre>\n<p>If there are errors in your query, you'll get a red screen of death (but with helpful messages!). Make sure to check your console running <code>gatsby develop</code>, which will help point you in the right direction. It also never hurts to stop the dev environment and restart it too!</p>\n<h3>5. Update <code>IndexPage</code> to Show Posts</h3>\n<p>The <code>data</code> from our query is passed from our GraphQL query into our <code>IndexPage</code>, and can be used the way we're used to. </p>\n<p>We can do some destructuring to get our <code>posts</code>:\n<code>const { edges: posts } = data.allMarkdownRemark</code></p>\n<p>And now we can <code>map</code> over them to create a preview with a link to read:</p>\n<pre><code class=\"language-javascript\">const IndexPage = ({data}) => {\n  const { edges: posts } = data.allMarkdownRemark\n\n  return (\n    &#x3C;div>\n      &#x3C;h1 className='f3 f2-ns fw7 lh-title mt0 mb3 avenir'>Hello.&#x3C;/h1>\n      &#x3C;h4 className='f4 f3-ns fw4 lh-title mt0 avenir'>I'm Taylor Bell, and I write about code and music (mostly).&#x3C;/h4>\n\n      &#x3C;div className='flex flex-column items-center'>\n        {posts\n          .map(({node: post}) => {\n            return (\n              &#x3C;div className='blog-post-preview w-100' key={post.id}>\n                &#x3C;h1 className='avenir f2 fw3'>\n                  &#x3C;Link to={post.frontmatter.path} className='no-underline light-green'>\n                    {post.frontmatter.title}\n                  &#x3C;/Link>\n                &#x3C;/h1>\n                &#x3C;p>{post.frontmatter.date}&#x3C;/p>\n                &#x3C;p>{post.frontmatter.excerpt}&#x3C;/p>\n              &#x3C;/div>\n            )\n          })\n          }\n      &#x3C;/div>\n    &#x3C;/div>\n  )\n}\n</code></pre>\n<h3>6. Creating a Blog Post Template</h3>\n<p>We have links to all of our posts on the homepage, but they 404 because the paths in the frontmatter of our posts don't exist.</p>\n<p>The first step in displaying our posts is to create a new component to be used as a template.</p>\n<h5><code>src/templates/blog-post.js</code></h5>\n<p>We'll need to get the post and other things we need out of the data that our query will return. We can create a dynamic title using <code>react-helmet</code>, and then we'll use React's <a href=\"https://facebook.github.io/react/docs/dom-elements.html#dangerouslysetinnerhtml\"><code>dangerouslySetInnerHTML</code> DOM element</a> to display the HTML generated by <code>markdownRemark</code>.</p>\n<pre><code>const Template = ({ data, location }) => {\n  const { markdownRemark: post } = data\n  const { frontmatter, html } = post\n  const { title, date, path  } = frontmatter\n\n  return (\n    &#x3C;div>\n      &#x3C;Helmet title={`${title} - taylor listens`} />\n\n      &#x3C;div className='flex flex-column content-center align-center justify-center'>\n        &#x3C;h1>{title}&#x3C;/h1>\n        &#x3C;h3>{date}&#x3C;/h3>\n        \n        &#x3C;div dangerouslySetInnerHTML={{__html: html}} />\n      &#x3C;/div>\n    &#x3C;/div>\n  )\n}\n</code></pre>\n<p>We also will need to add a GraphQL query for getting the right post. The unique name we'll use is <code>BlogPostByPath</code>, and it will have access to our current post's <code>path</code> via <code>$path</code>. The rest of our data comes from <code>markdownRemark</code>.</p>\n<p>Remember to <code>export default Template</code> or Gatsby will complain later.</p>\n<pre><code class=\"language-javascript\">export const pageQuery = graphql`\n  query BlogPostByPath($path: String!) {\n    markdownRemark(frontmatter: { path: { eq: $path } }) {\n      html\n      frontmatter {\n        title\n        date(formatString: \"MMMM DD, YYYY\")\n        path\n        tags\n        excerpt\n      }\n    }\n  }\n`\n</code></pre>\n<h3>7. Generate a Post using Gatsby's <code>createPages</code> Node API</h3>\n<p>Create a new file <code>gatsby-node.js</code> in the root of the project. Since we need to access our local filesystem we'll <code>require('path')</code>.</p>\n<p>Gatsby processes every export in <code>gatsby-node.js</code>, so we'll write one that takes advatage of the <code>createPage</code> action from <a href=\"https://www.gatsbyjs.org/docs/bound-action-creators/#createPage\">Gatsby's <code>boundActionCreators</code></a> along with a GraphQL query to get our post's data into our <code>blog-post</code> template.</p>\n<pre><code class=\"language-javascript\">exports.createPages = ({ boundActionCreators, graphql }) => {\n  const { createPage } = boundActionCreators\n  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)\n</code></pre>\n<p>The <code>createPages</code> export will return a Promise that we'll start with our <code>graphql</code> query. Our query starts with <code>allMarkdownRemark</code>, and we'll use the <code>sort</code> option to return our posts descending by date. Each node (or post) will have its generated <code>html</code>, an <code>id</code>, and <code>frontmatter</code> keys matching what we have at the top of our Markdown posts.</p>\n<pre><code class=\"language-javascript\">  return graphql(`{\n    allMarkdownRemark(\n      sort: { order: DESC, fields: [frontmatter___date] }\n    ) {\n      edges {\n        node {\n          html\n          id\n          frontmatter {\n            date\n            path\n            title\n            excerpt\n            tags\n          }\n        }\n      }\n    }\n  }`)\n</code></pre>\n<p>After our query, we'll add a <code>.then</code> to actually build the pages from our query's result by calling <code>forEach</code> on our posts. For each of the <code>edges</code>, we'll call <code>createPage</code> with the <code>node</code>'s path to be built using the <code>blogPostTemplate</code> component. We will also reject the Promise if there are errors. </p>\n<pre><code class=\"language-javascript\">    .then(result => {\n      if (result.errors) {\n        return Promise.reject(result.errors)\n      }\n\n      const posts = result.data.allMarkdownRemark.edges\n\n      posts.forEach(({ node }, index) => {\n          createPage({\n            path: node.frontmatter.path,\n            component: blogPostTemplate\n          })\n        })\n    })\n}\n</code></pre>\n<h3>8. Adding Next and Previous Post Links</h3>\n<p>In order for this part to make sense, it will make more sense if you have at least 3 posts.</p>\n<p>We are building our posts by passing each node returned from our GraphQL query into Gatsby's <code>createPage</code> action. We can add a <code>context</code> key to the object we pass into our <code>createPage</code> call in order to include additional data. Let's add pointers to <code>next</code> and <code>prev</code> so we can link between our posts.</p>\n<p>First, in order to know what number we're on we need to add <code>index</code> to our <code>forEach</code>. Then we'll add the <code>context</code> key with an object value.\nSince our posts are being sorted in descending order, our <code>prev</code> and <code>next</code> values will be opposite:</p>\n<p>Add <code>index</code> to the forEach</p>\n<pre><code class=\"language-javascript\">  createPage({\n    path: node.frontmatter.path,\n    component: blogPostTemplate,\n    context: {\n      next: index === 0 ? null : posts[index - 1].node,\n      prev: index === (posts.length - 1) ? null : posts[index+1].node\n    }\n  })\n</code></pre>\n<p>Now we will update our <code>blog-post</code> template to include links to the <code>next</code> and <code>prev</code> posts if they exist. We start by destructuring <code>next</code> and <code>prev</code> from the Template's <code>pathContext</code>. Then we will conditionally render our <code>Links</code> as appropriate.</p>\n<p>Add <code>pathContext</code> to template parameters, and pull out next &#x26; prev</p>\n<pre><code class=\"language-javascript\">// in `templates/blog-post.js`\n\n// below our posts div\n        &#x3C;span>\n          {prev &#x26;&#x26; (\n            &#x3C;Link to={prev.frontmatter.path}>\n              Previous: {prev.frontmatter.title}\n            &#x3C;/Link>\n          )}\n        &#x3C;/span>\n        &#x3C;span>\n          {next &#x26;&#x26; (\n            &#x3C;Link to={next.frontmatter.path}>\n              Next: {next.frontmatter.title}\n            &#x3C;/Link>\n          )}\n        &#x3C;/span>\n</code></pre>\n<p>Now if we go to the bottom post from our index page, we can link back and forth.</p>\n<h3>9. Adding a Tags Page</h3>\n<p>We have a list of tags in each post, and it would be nice to have an index page for looking at posts with a certain tag.</p>\n<p>First we will build a <code>tags.js</code> template in our <code>src/templates</code> directory.</p>\n<pre><code class=\"language-javascript\">const Tags = ({ pathContext }) => {\n  const { tags, tag, tagName } = pathContext\n\n  if (tag) {\n    return (\n      &#x3C;div >\n        &#x3C;span>\n          Posts about {tagName}:\n        &#x3C;/span>\n        &#x3C;ul>\n          {tag.map(post => {\n             return (\n              &#x3C;li>\n                &#x3C;Link to={post.frontmatter.path}>\n                  {post.frontmatter.title}\n                &#x3C;/Link>\n              &#x3C;/li>\n             )\n          })}\n        &#x3C;/ul>\n      &#x3C;/div>\n    )\n  }\n}\n</code></pre>\n<p>And inside of <code>gatsby-node.js</code> we will write a new <code>createTagPages</code> function that we will be calling as we process our blog posts from our GraphQL query. The function will take in the <code>createPage</code> Gatsby action, as well as the <code>posts</code> (aka \"edges\" from our GraphQL query). We'll resolve the path to our new template, and create a placeholder object called <code>postTags</code> that will end up holding tags and the posts that match them.</p>\n<p>We'll go through all the posts, and populate the </p>\n<pre><code class=\"language-javascript\">const createTagPages = (createPage, posts) => {\n  const tagTemplate = path.resolve(`src/templates/tags.js`)\n  const tagsByPost = {}\n\n  posts.forEach(({ node }) => {\n    if (node.frontmatter.tags) {\n      node.frontmatter.tags.forEach(tag => {\n        if (!tagsByPost[tag]) {\n          tagsByPost[tag] = []\n        }\n\n        tagsByPost[tag].push(node)\n      })\n    }\n  })\n\n  Object.keys(tagsByPost).forEach(tagName => {\n    const tag = tagsByPost[tagName]\n\n    createPage({\n      path: `/tags/${tagName}`,\n      component: tagTemplate,\n      context: {\n        tagsByPost,\n        tag,\n        tagName\n      }\n    })\n  })\n}\n</code></pre>",id:"/Users/taylor/Documents/Projects/taylorlistens/src/pages/2017-09-12-building-a-gatsby-blog/index.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2017-09-13T03:15:59.165Z",path:"/building-a-gatsby-blog",title:"Building A Gatsby Blog",excerpt:"Build a solid blog with Gatsby.js",tags:["gatsby","tachyons","code"]}}}}}});
//# sourceMappingURL=path---node-path-imports-74617d0d4e4b2a451df2.js.map