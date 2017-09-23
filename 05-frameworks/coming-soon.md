# Temporary notes until I write this chapter
*Ignore them*

# Environment
- Browsers. headless browsers
	- Caching issues
	- Inspector panel, explain all tabs
- Switch from Notepad to Notepad++, Sublime, Vscode, WebStorm, Visual Studio, Atom
	- Quick navigation using jump to file
	- Mass renames, F2 rename
	- Duplicating existing code using find and replace (Foos, Reports example, using path selection for module)
	- Advanced renamer
	- Autoformat using the Vscode
	- Vscode extensions
		- Autoclose tags plugin
	- Using shortcuts, working fast, fast techniques of editing in page
	- Using ctrl space for path autocomplete
	- Intelisense, Auto select from import. Prevents typos
	- Highlight word at caret
	- How much time I gain from these
	- Too many open tabs, reset navigation ocasionaly
- What is git? Install smartgit
	- Smartgit is not a code editor, it only keeps files in sync
	- Resolving conflicts
- What is the command line?
	- Basic instructions?
	- What does $ mean?
- Install node
	- Explain node_modules
	- Install global modules
	- Start a new project
	- Instal local modules
- Overview of some tools: Gulp, Grunt, Webpack
- Install mongo, basic overview
- POSTman, basic overview
- XAMPP, basic overview
- Markdown
- Batch rename files
- Capturing screenshots
- Using stackoverflow
- Using github
- Big projects
- IDE tools
	- Environments
	- Command line
	- Package json
	- Import libs
	- Import a file
	- Write a utils file and import it
	- Minification
	- Build process
- Basic folder structure
- Advanced folder structure switch

Pretty print in chrome.
Require module manager, 
Javascript module pattern
Don't use vim, period, unless you want to be an asshole. It totaly destroys the normal layout of the IDE
Not using the same code formatting conventions leads to git conflicts.
I sort tabs in the order of dependency
Give the example of hard ass x-colleague
7 Link to diffchecker
7 Link to regex edutor
7 Link to dillinger
7 Conemu
7 Powershell
7 Basic cmd commands

# Frameworks
- Svg
- D3
	- Bar chart
	- Line chart
	- Pie chart
- JS fatigue, The search for latest tech
- jQuery
- Basic templates with moustache
- Typescript
	- Types, Enums
- Angular basic
	- MVC
	- Building components
	- Building services
		- Maps services, data services (observables), logic services
	- Life cycle: OnInit, AfterViewInit, ngOnDestroy. Not unsubscribing
	- Inputs, Outputs
	- Forms, Subscribe, onCHange, Inifinite loops
	- Building a nav menu
	- Rendering object data
	- Change detection
	- Controllers should be binders
	- Routing
		- Guards, Resolvers
		- The resolver is a good place to do mappings. Better than the reducer, or the effects. Even emulated resolvers are good, they can later be connected to proper web api path
		- Modular architecture
	- Be aware of what are you doing
	- Dependency injection
	- Angular was a moving target for a while
	- Why it matters to have similar technique
	- Circular references
- React
	- In angular you have to work with the DSL, in React you can use the entire JS language
- Vue
	- General overview
- Basic homebrew state store
- Ngrx
	- What is state?
	- Effects
	- Moving data: Inputs in components, or subscribing to store, or straight away to service or in web api, pros cons `this._route.data.subscribe((data: {`
- Redux
	- Thunks, Sagas, Epics, Observable

Maps services, data services (observables), logic services, 
Reducers trigger maps, resolvers call the objects. 
This promotes code reuse. Use injector to bring services to reducer.
Maps and logic are allowed to use only pure funcitons, 
They are not allowed to have any state at all. 
Resolvers are init for pages, modules. 
Getting the initial state from the first run of the resolver is really cool. 
It's very clean, one weakness of clean code is that it can be so easily disturbed by novice devs. 
It also has to be fail safe.
If I cannot work with the app in the mind than it is sign of being too complicated.
How to find popular plugins
Lots of plugins have excess of features. For a long time I thought Im not good enough because of this.
Events – these are the user events such as click, change, input, submit, etc.XMLHttpRequests – Such thing occurs when we fetch data from a remote service.
Timers – when we use timer methods such as setTimeout (), setInterval (), etc.
https://blog.thoughtram.io
When to go native and when to use a plugin.
Learning curve, 10000 litle steps, better than 1000 clifs.
declare var
Check the link sometimes libs have similar names. 
Why view encapsulation matters for styles. Form builder grilopu control. Custom control. 
Adding classes to cmps. Why adding from inside is better than writting in the template by hand as attributes.
Cannot find module
Sometimes I even need a diffchecker
Link to diffchecker
Link to regex edutor
Link to dillinger
Conemu
Powershell
Basic cmd commands
There is a lot of hidden knowledge behind code. Assume knowledge. Expected to be there. The less guess work the easier maintenace.  WHAT WHY.  
Do not put paddings margins in reusable cmps. Stick then from top
Write styles as if css encapsulation is disabled
CDN networks
NGRX complete replay
Software lifecycle, versioning, expectatins, tired of the framework hype train. I expect JS to lieve at least 10 more years. building software to sustain in the future.
Native and emulated polyfills
Libscore
8 check the link sometimes libs have similar names. 
8 React has state management. Riot does not
8 Slant.co comaprisons
8 DAta binding
8 Routing and state modules
8 modular royting vs central routing
8 Frameworks reonvent the wheel time and time again. 
8 getter seters allow you to pass beyound intial faze of data bundigns. 
8 jsx and vdom better then dom aps. Polymer is abstracion lib. String attributes is annoyingm template. Data binding system. Poly has it's own template bindings. Jsx vs template bindings. 
8 Large vale qpps benefit from web comps. Miltiple stacks. Low scale just use livs 
8 InnerHtml. Code smell. Vendor lokin. Interoperability
8 React baseball cap. Bad idea. 
8 form dynamic binding
8 passing the callback in inputs instead of outputs binds the werong contwxt. Events are good for tying together smmal time ui actions like opening a sidebar. 
8 be careful not to invoke callbaks in the param

## jQuery

## Angular
1 way, 2 way data binding
https://medium.freecodecamp.org/is-mvc-dead-for-the-frontend-35b4d1fe39ec

## React
JSX - Those who gave it some time realized that the concerns were better separated this way. Being able to holistically look at a component was great. Being able to actually compose and abstract nicely was great. Once your eyes could see past syntax, you realized that it maybe was a feature and not a bug.
Vue recommends using templates to build your HTML in the vast majority of cases. There are situations however, where you really need the full programmatic power of JavaScript. That’s where you can use the render function, a closer-to-the-compiler alternative to templates.

##Vue