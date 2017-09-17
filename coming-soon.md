# Current lesson - Coming soon
*By Christmas 2017 I hope to have all these chapters 80% done*<br>
*This repo will be updated consistently so keep an eye on this file*

Normal text indicates existing material<br>
**Bold text indicates subjects planned for addition to the course** (a lot of bold right now :)

## 01 - Basic Html
- [01 - My first HTML](https://github.com/adrian-moisa/visual-school/tree/master/01-basic-html/01-my-first-html)
	- [First html tags example](https://github.com/adrian-moisa/visual-school/tree/master/01-basic-html/01-my-first-html/01-first-html-tags)
	- [Basic page layout](https://github.com/adrian-moisa/visual-school/tree/master/01-basic-html/01-my-first-html/02-basic-page-layout)
- **[02 - Basic CSS](https://github.com/adrian-moisa/visual-school/blob/master/01-basic-html/02-basic-css)**
	- **Naming styles conventions, needs, short names, meaningfull, css naming**
- **[03 - Jpg, Png, Svg, Gif, Bitmap](https://github.com/adrian-moisa/visual-school/blob/master/01-basic-html/03-jpg-png-svg-gif-bitmap)**

##02 - **Tools and Software**
- **Browsers. headless browsers**
	- **Caching issues**
	- **Inspector panel, explain all tabs**
- **Switch from Notepad to Notepad++, Sublime, Vscode, WebStorm, Visual Studio, Atom**
	- **Quick navigation using jump to file**
	- **Mass renames, F2 rename**
	- **Duplicating existing code using find and replace (Foos, Reports example, using path selection for module)**
	- **Advanced renamer**
	- **Autoformat using the Vscode**
	- **Vscode extensions**
		- **Autoclose tags plugin**
	- **Using shortcuts, working fast, fast techniques of editing in page**
	- **Using ctrl space for path autocomplete**
	- **Intelisense, Auto select from import. Prevents typos**
	- **Highlight word at caret**
	- **How much time I gain from these**
	- **Too many open tabs, reset navigation ocasionaly**
- **What is git? Install smartgit**
	- **Smartgit is not a code editor, it only keeps files in sync**
	- **Resolving conflicts**
- **What is the command line?**
	- **Basic instructions?**
	- **What does $ mean?**
- **Install node**
	- **Explain node_modules**
	- **Install global modules**
	- **Start a new project**
	- **Instal local modules**
- **Overview of some tools: Gulp, Grunt, Webpack**
- **Install mongo, basic overview**
- **POSTman, basic overview**
- **XAMPP, basic overview**
- **Markdown**
- **Batch rename files**
- **Capturing screenshots**
- **Using stackoverflow**
- **Using github**

## 03 - **Basic Javascript**
- **Why first example is always hello world?**
- **alert('My first alert') Search: How to display in alert in javascript**
- **Doon't panic ignore weird names such as $scope or XMLHttpRequest**
- **Varialbes, declare and intiialise variables**
	- **Variable hoisting**
- **Constants**
- **console.log()**
- **Comments**
	- **When commenting code explain why is it commented**
- **Write a function**
	- **Log the inputs and outputs**
	- **Write an init function**
- **Scopes**
	- **Local scope, Global, (<any>window), function sceope, block scope**
- **Use inspector to modify page on the fly, refresh**
- **Explain in comments what you did**
- **Debugging**
	- **Callstack**
	- **Break points**
	- **debugger;**
- **Loop an array and alert**
- **Write an object using literal notation**
- **Array utils**
	- **forEach**
	- **map**
	- **reduce**
	- **filter**
- **Event listeners**
- **Resize window**
- **Timeouts**
- **Set Interval**
- **Basic Animation**

## 04 - **Object Oriented Javascript**
- **Objects**
- **new object**
- **.this context**
	- **public, private, static, abstract**
- **Property chaining**
- **Classes**
- **Prototype**
- **Inheritance**
	- **Classical vs Prototypical**
- **Composition**
- **Pass by value, Pass by reference**
- **Inspecting objects**
- **Problems with OOP**

## 05 - **Functional programming**
- **Pure functions**
- **Side effects**
- **Goals of this style**

## 06 - **Production environment**
- **Big projects**
- **IDE tools**
- **Environments**
- **Command line**
- **Package json**
- **Import libs**
- **Import a file**
- **Write a utils file and import it**
- **Basic folder structure**
- **Advanced folder structure switch**

## 07 - **Ecmascript 6**
- **Es modules**
- **Es classes**
- **Spread operator**
- **Lamba function**
- **Web workers**

## 08 - **Asynchronous Javascript**
- **What is async?**
- **XML, JSON**
	- **Why doesnt json have comments**
- **Simple XHR request**
- **jQuery XHR**
- **Callback**
	- **callback hell**
- **Spagetti code**
- **Events**
- **Promise**
- **Observable Rxjs**
- **Websockets**
- **Basics Webapi**
	- **REST principles**

## 09 - **Frameworks**
- **JS fatigue, The search for latest tech**
- **jQuery**
- **Basic templates with moustache**
- **Typescript**
	- **Types, Enums**
- **Angular basic**
	- **MVC**
	- **Building components**
	- **Building services**
		- **Maps services, data services (observables), logic services**
	- **Life cycle: OnInit, AfterViewInit, ngOnDestroy. Not unsubscribing**
	- **Inputs, Outputs**
	- **Forms, Subscribe, onCHange, Inifinite loops**
	- **Building a nav menu**
	- **Rendering object data**
	- **Change detection**
	- **Controllers should be binders**
	- **Routing**
		- **Guards, Resolvers**
		- **The resolver is a good place to do mappings. Better than the reducer, or the effects. Even emulated resolvers are good, they can later be connected to proper web api path**
		- **Modular architecture**
	- **Be aware of what are you doing**
	- **Dependency injection**
	- **Angular was a moving target for a while**
	- **Why it matters to have similar technique**
	- **Circular references**
- **React**
	- **In angular you have to work with the DSL, in React you can use the entire JS language**
- **Basic homebrew state store**
- **Ngrx**
	- **What is state?**
	- **Effects**
	- **Moving data: Inputs in components, or subscribing to store, or straight away to service or in web api, pros cons `this._route.data.subscribe((data: {`**
- **Redux**
	- **Thunks, Sagas, Epics, Observable**

## 10 - **Architecture patterns**
- **Singleton**
- **Command**
- **Mediator**
- **Observable**
- **Strategy**
- **Thinking in modules**
- **Building an Web Api**

## 11 - **Web graphics (2D, 3D)**
- **Svg**
- **D3**
	- **Bar chart**
	- **Line chart**
	- **Pie chart**
- **3D Graphics**
- **Three.js**
	- **Camera**
	- **Scene**
	- **Mesh**
	- **Geometry**
	- **Material**
- **Moddeling in blender**
- **Textures in Photoshop**
- **UV mapping**
- **WebGL**
- **GLSL**
- **Browser issues**
- **CanIUse**

## 12 - **User experience**
- **What are UI UX**
- **Skeumorphic design, Flat design**
- **White space**
- **Typography**
- **User research**
- **AB testing**
- **Design considerations**
- **Don't make me think**
- **It should feel familiar**
- **Getting feedback**

## 13 - **Server apps**
- **Node**
- **Express**
- **Mongo**
	- **Robomongo, Postman**
- **Mongoose** 

## 14 - **Development process**
- **Webpack**
- **Git**
- **Build**
- **Deploy**
- **Testing Benchmarks**

## 15 - **Working as a developer**
- **What to expect in 2017**
- **Interview**
- **Specs**
- **Jira Tasks**
- **Kanban**
- **Colaborating**
- **Comunication tools**
- **Contibuting**
- **Review process**
- **Networking**
- **Learning**
- **Using dual screen**

## 16 - **Building a real app**
- **All of it together**
- **Performance issues**
- **Tight coupling**
- **Refactoring**
- **Planning ahead**
	- **Sort internal props between data and state sections**
	- **Before testing, review to establish what are the fuctionalities that need to work**
- **Simplicity**
	- **Prevent over engineering, and  over optimising stuff. Go simple**
	- **Let others understand your thinking**
- **Debugging**
	- **Method of elimination one by one**
- **Documenting**
	- **Keep update notes, README and CHANGELOG**
- **Testing**
	- **Unit tests**
	- **E2E tests**
- **Real performance loses, not fake one**
- **Shared folders**
- **Utils**
- **Folder structure**
	- **All interfaces together in module, sort by type**
- **Versioning**
- **Seo**
- **Marketing**
- **Revenue, conversion rate**
- **Analytics**
- **Social media**
- **Realease tools**
- **Licenses**

## 17 - **Security**

## 18 - **Performance**

## 19 - **Game development**
- **ECS explained**
- **How to build each component**
- **Main loop Perf problems**
- **Inputs**
- **Physics**
- **Animation**
- **State machines**
- **Game mechanics**

## 20 - **Visual Space**
- **CMS architecture**
- **Plugins**
- **How it all fits together**
- **What to do next**

## Possible EXTRA chapters
*Depending on popular request*

- **PHP basic**
- **.Net basic**
- **Android basic**
- **MySQL basic**
- **React advanced**
- **Photoshop Basic**
- **Blender Basic**
- **Angular Advanced**
- **Basic AI Repo of**
- **Examples of how I screwed it up. Our case with having graphics**
- **SEO Basic**
- **Marketing online basic**
	- **Social networks Trends**
	- **Traffic Analytics**
	- **Understanding traffic**