webpackJsonp([84586273293571],{342:function(e,o){e.exports={pathContext:{posts:[{html:"<h3>Creating a UserDashboard Store</h3>\n<p>First I created <code>userDashboardStore.js</code> inside of the <code>state</code> directory. For the time being, I've only added one <code>@observable</code> inside of the class:</p>\n<pre><code class=\"language-javascript\">export default class UserDashboardStore {\n  @observable testString = 'mobx here'\n}\n</code></pre>\n<p>Then following the pattern of the other stores, I added <code>userDashboardStore</code> entries to <code>state/appStore.js</code>.</p>\n<h3>Injecting into the <code>UserDashboard</code> Screen</h3>\n<p>In the <code>UserDashboard</code> screen, I imported <code>observer</code> and <code>inject</code> from <code>mobx-react</code>. </p>\n<p>However, I ran into an error that <code>Store userDashboardStore is not available</code> and needs to be provided by a <code>Provider</code>...</p>\n<p>I'll come back to this.</p>\n<h3>Adding <code>userDashboardStore</code> to a <code>Provider</code></h3>\n<p>First I tried adding a <code>&#x3C;Route></code> for <code>UserContentDashboardRoutes</code> following the pattern as seen in <code>client/app/routes/index.js</code> but the error remained.</p>\n<p>Then I tried just having <code>ComponentDevRoutes</code> since it's a level up, but that didn't work either.</p>\n<p>Then I remembered that <code>ComponentDev</code> has its own <code>&#x3C;Provider></code>, so I added the <code>UserDashboardStore</code> stuff there instead:</p>\n<pre><code class=\"language-javascript\">import UserContentDashboard from '../../UserContentDashboard/screens/UserContentDashboard'\n...\nconst userDashboardStore = new UserDashboardStore()\n...\n&#x3C;Provider currentUserStore={currentUserStore} userDashboardStore={userDashboardStore}>\n</code></pre>\n<p>The error is fixed!</p>\n<h3>Back to Injecting the Store</h3>\n<p>After importing <code>inject</code> and <code>observer</code> from <code>mobx-react</code> I realize that I need to convert the screen into a <code>class</code> instead of a stateless functional component. So I do that, and then I'm able to access my <code>testString</code> from <code>UserDashboardStore</code>!</p>\n<p>...but my <code>currentUserStore</code> is empty.</p>\n<h3>Filling up <code>currentUserStore</code></h3>\n<p>In <code>ComponentDev</code>'s routes, there is a <code>render</code> prop that was just returning <code>&#x3C;UserContentDashboard /></code>. I changed the arrow function from using parens to using brackets, in order to be able to call <code>currentUserStore.loadUser()</code> first:</p>\n<pre><code class=\"language-javascript\">&#x3C;Route\n exact\n path='/user_dashboard'\n render={routeProps => {\n             currentUserStore.loadUser()\n             return &#x3C;UserContentDashboard {...props} {...routeProps} />\n            }}\n/>\n</code></pre>\n<p>Now I'm able to access info about the current user!</p>\n<h3>Updating <code>UserContentDashboard</code></h3>\n<ul>\n<li>Instead of a hardcoded <code>userId</code>, I use lodash's <code>get</code> to access <code>currentUserStore.currentUser.id</code>, which is then used for <code>&#x3C;Request></code>ing from the <code>user_content_dashboard</code> endpoint.</li>\n</ul>\n<h3>Adding Observables to the <code>UserDashboardStore</code></h3>\n<p>Looking at Ian's example of how he's integrated MobX into the Instructors screen, I created <code>@observable</code>s for each of the lists on the Dashboard:</p>\n<pre><code class=\"language-javascript\">  @observable inProgressContent = []\n  @observable latestLessons = []\n  @observable recommendedCourses = []\n  @observable recommendedLessons = []\n  @observable inProductionContent = []\n</code></pre>\n<p>I also added a <code>constructor</code> as seen in the <code>LessonScreenStore</code>, and updated the <code>ComponentDev</code> routes to pass <code>appStore</code> to <code>UserDashboardStore</code></p>\n<pre><code class=\"language-javascript\">const userDashboardStore = new UserDashboardStore(appStore)\n</code></pre>",id:"/Users/taylor/Documents/Projects/taylorlistens/src/pages/2017-09-20-mobx-learning/index.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2017-09-20T16:54:15.752Z",path:"/mobx-learning",title:"Mobx Learning",excerpt:"In which I wire a screen up to MobX",tags:["react","mobx"]}}],tagName:"react"}}}});
//# sourceMappingURL=path---tags-react-da7106f354f56f85838c.js.map