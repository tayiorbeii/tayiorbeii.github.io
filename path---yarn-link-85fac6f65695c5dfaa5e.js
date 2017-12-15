webpackJsonp([0x94e3b1df9ee3],{346:function(e,o){e.exports={data:{markdownRemark:{html:'<p>I made a fork of <a href="https://github.com/tayiorbeii/tachyons-as-props"><code>tachyons-as-props</code></a> in my quest to replace tachyons + sass with glamorous.</p>\n<p>A nice way to work on a <code>node_module</code> locally without having to publish it is to use <code>yarn link</code> (or <code>npm link</code> if you\'re so inclined).</p>\n<p>The steps are pretty easy:</p>\n<ol>\n<li>\n<p>Go to the local folder of the module you are currently working on:</p>\n<ul>\n<li><code>cd module_in_progress</code></li>\n</ul>\n</li>\n<li>\n<p>Type <code>yarn link</code></p>\n<ul>\n<li>You should see a "success" message</li>\n</ul>\n</li>\n<li>\n<p>Go to your consuming project\'s folder</p>\n<ul>\n<li><code>cd my_project</code></li>\n</ul>\n</li>\n<li>Type <code>yarn link module_in_progress</code></li>\n</ol>\n<p>Now if you <code>ls node_modules</code> in your consuming project\'s folder, you should see that <code>module_in_progress</code> has been symlinked to its folder (as opposed to being installed as normal).</p>',frontmatter:{title:"`yarn link` for npm Module Development",date:"September 13, 2017",path:"/yarn-link",tags:["javascript","npm"],excerpt:""}}},pathContext:{next:{html:"<h3>Creating a UserDashboard Store</h3>\n<p>First I created <code>userDashboardStore.js</code> inside of the <code>state</code> directory. For the time being, I've only added one <code>@observable</code> inside of the class:</p>\n<pre><code class=\"language-javascript\">export default class UserDashboardStore {\n  @observable testString = 'mobx here'\n}\n</code></pre>\n<p>Then following the pattern of the other stores, I added <code>userDashboardStore</code> entries to <code>state/appStore.js</code>.</p>\n<h3>Injecting into the <code>UserDashboard</code> Screen</h3>\n<p>In the <code>UserDashboard</code> screen, I imported <code>observer</code> and <code>inject</code> from <code>mobx-react</code>. </p>\n<p>However, I ran into an error that <code>Store userDashboardStore is not available</code> and needs to be provided by a <code>Provider</code>...</p>\n<p>I'll come back to this.</p>\n<h3>Adding <code>userDashboardStore</code> to a <code>Provider</code></h3>\n<p>First I tried adding a <code>&#x3C;Route></code> for <code>UserContentDashboardRoutes</code> following the pattern as seen in <code>client/app/routes/index.js</code> but the error remained.</p>\n<p>Then I tried just having <code>ComponentDevRoutes</code> since it's a level up, but that didn't work either.</p>\n<p>Then I remembered that <code>ComponentDev</code> has its own <code>&#x3C;Provider></code>, so I added the <code>UserDashboardStore</code> stuff there instead:</p>\n<pre><code class=\"language-javascript\">import UserContentDashboard from '../../UserContentDashboard/screens/UserContentDashboard'\n...\nconst userDashboardStore = new UserDashboardStore()\n...\n&#x3C;Provider currentUserStore={currentUserStore} userDashboardStore={userDashboardStore}>\n</code></pre>\n<p>The error is fixed!</p>\n<h3>Back to Injecting the Store</h3>\n<p>After importing <code>inject</code> and <code>observer</code> from <code>mobx-react</code> I realize that I need to convert the screen into a <code>class</code> instead of a stateless functional component. So I do that, and then I'm able to access my <code>testString</code> from <code>UserDashboardStore</code>!</p>\n<p>...but my <code>currentUserStore</code> is empty.</p>\n<h3>Filling up <code>currentUserStore</code></h3>\n<p>In <code>ComponentDev</code>'s routes, there is a <code>render</code> prop that was just returning <code>&#x3C;UserContentDashboard /></code>. I changed the arrow function from using parens to using brackets, in order to be able to call <code>currentUserStore.loadUser()</code> first:</p>\n<pre><code class=\"language-javascript\">&#x3C;Route\n exact\n path='/user_dashboard'\n render={routeProps => {\n             currentUserStore.loadUser()\n             return &#x3C;UserContentDashboard {...props} {...routeProps} />\n            }}\n/>\n</code></pre>\n<p>Now I'm able to access info about the current user!</p>\n<h3>Updating <code>UserContentDashboard</code></h3>\n<ul>\n<li>Instead of a hardcoded <code>userId</code>, I use lodash's <code>get</code> to access <code>currentUserStore.currentUser.id</code>, which is then used for <code>&#x3C;Request></code>ing from the <code>user_content_dashboard</code> endpoint.</li>\n</ul>\n<h3>Adding Observables to the <code>UserDashboardStore</code></h3>\n<p>Looking at Ian's example of how he's integrated MobX into the Instructors screen, I created <code>@observable</code>s for each of the lists on the Dashboard:</p>\n<pre><code class=\"language-javascript\">  @observable inProgressContent = []\n  @observable latestLessons = []\n  @observable recommendedCourses = []\n  @observable recommendedLessons = []\n  @observable inProductionContent = []\n</code></pre>\n<p>I also added a <code>constructor</code> as seen in the <code>LessonScreenStore</code>, and updated the <code>ComponentDev</code> routes to pass <code>appStore</code> to <code>UserDashboardStore</code></p>\n<pre><code class=\"language-javascript\">const userDashboardStore = new UserDashboardStore(appStore)\n</code></pre>",id:"/Users/taylor/Documents/Projects/taylorlistens/src/pages/2017-09-20-mobx-learning/index.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2017-09-20T16:54:15.752Z",path:"/mobx-learning",title:"Mobx Learning",excerpt:"In which I wire a screen up to MobX",tags:["react","mobx"]}},prev:{html:"<h1><code>NODE_PATH</code> for avoiding <code>../../../</code></h1>\n<p>When copying out a big component with several subcomponents to a separate <code>create-react-app</code> project, I found myself using tons of relative imports. Counting up &#x26; overs sucks.</p>\n<p>To help with this, create a <code>.env</code> file in the root of your <code>create-react-app</code> project. Inside this file, add this line:<br>\n<code>NODE_PATH=src/</code></p>\n<p>or you can do it all at once on the command line with  <code>echo 'NODE_PATH=src/' >> .env</code></p>\n<p>Sidenote: the <code>>></code>operator will append to the end of the file in case you already have a <code>.env</code> file with stuff in it, like if you're using <code>custom-react-scripts</code> to enable bonus features in your CRA.</p>\n<p>So yeah, now you can go through your components and clean up all the relative imports as applicable. Remember though, depending on how things are nested it may make more sense to use a <code>../</code> instead of <code>components/Parent/components/Child</code>. Use your best judgement. I trust you.</p>",id:"/Users/taylor/Documents/Projects/taylorlistens/src/pages/2017-09-13-node-path-imports/index.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2017-09-13T16:04:25.113Z",path:"/node-path-imports",title:"NODE_PATH Imports",excerpt:"`NODE_PATH` is actually way easier than I thought.",tags:["javascript","create-react-app"]}}}}}});
//# sourceMappingURL=path---yarn-link-85fac6f65695c5dfaa5e.js.map