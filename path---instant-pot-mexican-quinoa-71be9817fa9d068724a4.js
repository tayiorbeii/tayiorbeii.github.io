webpackJsonp([0xb7bd77096d4b],{331:function(e,a){e.exports={data:{markdownRemark:{html:'<ul>\n<li>1 Cup of quinoa, rinsed</li>\n<li>1/2 Cup of El Pato Salsa (about half the can)</li>\n<li>1/2 Cup of water</li>\n<li>Handful of frozen corn</li>\n<li>Handful of <em>cooked</em> black beans (from can or homemade)</li>\n<li>Salt, maybe some cumin</li>\n</ul>\n<h4>Instructions</h4>\n<p>Put Instant Pot in sautee mode. Dump the quinoa into the pot, no liquid, and stir it up until it smells toasty. Add the sauce, water, and corn and beans if you want.</p>\n<p>Seal the Instant Pot, and do high pressure for 1 minute.</p>\n<p>When it beeps, hit cancel to turn off "Keep Warm" mode, and wait for pressure to drop so you can open the lid, add salt &#x26; cumin as desired, and eat it!</p>',frontmatter:{title:"Instant Pot Mexican Quinoa",date:"December 15, 2017",path:"/instant-pot-mexican-quinoa",tags:["instant pot","recipe"],excerpt:null}}},pathContext:{next:null,prev:{html:'<h1>Build and deploy a quick Rails app to Heroku</h1>\n<p>Building and deploying a Rails app to Heroku is actually pretty fast.</p>\n<p>Start by running:</p>\n<pre><code class="language-ruby">rails new basic_app\n</code></pre>\n<p>After starting the server with <code>rails server -b 0.0.0.0 -p 3000</code>, you should see the default Rails "Welcome" screen.</p>\n<p>Now generate a controller:</p>\n<pre><code class="language-ruby">rails generate controller home\n</code></pre>\n<p>And inside of <code>config/routes.rb</code>:</p>\n<pre><code class="language-ruby">Rails.application.routes.draw do\n  root \'home#index\'\nend\n</code></pre>\n<p>Create a new file <code>app/views/home/index.html.erb</code>, and add a headline:</p>\n<pre><code class="language-ruby">&#x3C;h1>Here\'s a headline.&#x3C;/h1>\n</code></pre>\n<p>We can set some styles in <code>app/assets/stylesheets/home.scss</code></p>\n<pre><code class="language-css">h1 {\n  color: rebeccapurple;\n}\n</code></pre>\n<p>Restart the Rails server, and you should see the headline.</p>\n<p>Push it to github!</p>\n<h1>Deploying to Heroku</h1>\n<p>Create a new Heroku app:</p>\n<pre><code class="language-ruby">heroku create tayiorbeii-basic-app\n</code></pre>\n<p>Then do:</p>\n<pre><code class="language-ruby">git push heroku master\n</code></pre>\n<p><em>I actually got an error here.</em></p>\n<p>Heroku complained about the <code>sqlite3</code> gem not being supported by Heroku, so I\'m going to remove it from the <code>Gemfile</code> and try to push again.</p>\n<p>So I removed it, pushed again, but it complained that I have to run <code>bundle install</code> to clean up the lockfile.</p>\n<p>Probably should have just used <code>rails new basic_app --database=postgresql</code> when creating the app.</p>\n<p>Update the Gemfile to use <code>pg</code>:</p>\n<pre><code class="language-ruby"># Use postgresql as the database for Active Record\ngem \'pg\'\n</code></pre>\n<p>Run <code>bundle install</code> then push to git &#x26; Heroku, and still complaining.</p>\n<p>Ends up there\'s more references to <code>sqlite3</code> in the <code>config/database.yml</code> file.</p>\n<p>Push it up, and all is well with the universe!</p>',id:"/Users/taylor/Documents/Projects/taylorlistens/src/pages/2017-12-06-basic-rails-app/index.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2017-12-06T23:12:06+00:00",path:"basic-rails-app",title:"Build and deploy a quick Rails app to Heroku",excerpt:null,tags:["ruby","rails","heroku","code"]}}}}}});
//# sourceMappingURL=path---instant-pot-mexican-quinoa-71be9817fa9d068724a4.js.map