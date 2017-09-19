# Basic CSS
*How to control html styling like a pro*<br>
*Let me know if you liked this lesson [twitter.com/adriancmoisa](https://twitter.com/adriancmoisa)*

**WORK IN PROGRESS**

[Home](https://github.com/adrian-moisa/visual-school)<br>
[Basic Html / Jpg, Png, Svg, Gif, Bitmap ->](https://github.com/adrian-moisa/visual-school/blob/master/01-basic-html/03-jpg-png-svg-gif-bitmap)

**Quick check-up. How are we going with the motivation? Still going strong? That is really good. Don't let it go. You are doing the first steps in a strange new world and each lesson will seem more intriguing than the next one. Take a leap of faith and trust my advice. We are going to reach the light on the other end of the tunnel sooner than expected. I promise you! And it's a paradise full of wonder over there. They have maglev trains and holograms :D**

<br><br><br>
## What is CSS
CSS stands for Cascading Style Sheets. It is a language designed to do one specific thing: modify the appearance of HTML elements (aka DOM nodes). As seen in the previous lesson, HTML has limited capacity to control the position of elements in the page. In the early days of the web this was done by writing styles inline. This is a terrible technique expecially if you have a website that is composed of many static files. If you want to change the colors, font size, background or whatever of a repetitive element such as the menu or the headings than you have a big problem. Each document will have to be updated by hand. This is far from optimal.

Ok lets review a bit, in reverse:
- **Sheet** Stands for separate document, indicating the separation of concerns concept.
- **Styles** This is obvious, the appearance of DOM elements. (Review html lesson to refresh the topic of Document Object Model)
- **Cascading** Well this is the confusing one. Let's take a simple example. Imagine the tags as the stones in a river. If red water starts pouring on the first div element than it will spill over on the text but also on the two paragraphs. This is called cascading. The parent div will also transmit the styles to it's childrens. This is a big feature of the language. Main advantage is that it prevents repetition. However the next block will not receive any red water because let's just simply say that they are in different trenches. Using this feature of the language one can declare that all the text in the sidebar is blue while all the text in the main menu is red. Just two instructions. In html you would have to write a lot to get the same effect.

        <div style="color: red">
            Some text
            <p>Some other text</p>
            <p>Yet another text in a paragraph</p>
            <div style="color: blue">
                This is not red, it's blue
                <p>This is not red, it's blue</p>
            </div>
        </div>
        
        /* This block will not receive red color */
        /* Btw, this is how you write comments in CSS */
        /* You may wonder why HTML and CSS have different comment styles. */
        /* Certain combinations of characters that are least likely 
           to occur normally where chosen for each language to mark comments. */
        <div>
            Some text
            <p>Some other text</p>
            <p>Yet another text in a paragraph</p>
        </div>       

Now the cool thing is that you can do this at any level for deep hierarchies of tags. This is going to burn a bit until it makes sense. So in the first block there we can see that the lower level div will start carying blue color text for all it's children. Now this is really neat. It seems that the initial red color was overriden by blue color.

## Elements, Ids and classes
Well, inline styles are not the only option. Using separate block of styles can unlock some new features such as ids and classes. Let's see how this works.

        <!-- Separate style sheet, not inline styles -->
        <style>

            /** This will override any previous rule no matter what the order or rank */
            .olive { color:olive !important; }

            /* You can specify how HTML elements should render in a browser */
            /* For example, using selectors is useful for making all links orange */
            h1 { color:red; } /* The stuff between curly braces is called a declaration */
            p { color:blue; }
            a { color:orange; }

            /* The hover selector is extremely useful in simulating interaction 
               with an element just by hovering the pointer over it*/
            a:hover { background-color: yellow; }

            /* CSS classes */
            /* Usualy class names indicate the role of the element: Examples .avatar .login-form .menu*/
            .gray { color:gray; } /* A class can be reused multiple times */
            .magenta { color:yellow; }

            /* Same selector can be used twice. second definition will override first definition */
            .magenta { color:magenta; } 

            /* Defining a property twice is possible but not usefull */
            /* In case this happens last instance will have the last word to say */
            .magenta { color:yellow; color:magenta; } 
            #my-green-paragraph { color:green; } /*An id should only be used once*/

        </style>

        <h1>A red heading</h1>
        <p>A blue paragraph.</p>
        <a href="some-link.html">An orange link</a>
        <a href="some-other-link.html">And another orange link</a>

        <!-- Blue paragraph. Selector overrides default browser style.  -->
        <p>A blue paragraph</p>

        <!-- Gray paragraph. Class overrides selector -->
        <p class="gray">A gray paragraph.</p>

        <!-- Magenta paragraph. Order of declaration matters. Last class overrides previous class. -->
        <p class="gray magenta">A magenta paragraph.</p>

        <!-- Gray paragraph. Id overrides class -->
        <p id="my-green-paragraph" class="gray">A green paragraph.</p>
        
        <!-- Maroon paragraph. Inline style override everything -->
        <p id="my-green-paragraph" class="gray" style="color:maroon">A maroon paragraph.</p>

        <!-- Well there is yet another rule but this one is really tricky. -->
        <!-- It should be avoided at all costs if possible. -->
        <!-- Only some extreme rare situations justify the use of this one. -->
        <p id="my-green-paragraph" class="olive gray" style="color:maroon">An olive paragraph.</p>

Yep it's a mess. You need some practice until you have a good feeling of all these overrides. But I can tell you right now. These overrides are really useful. In time after some practice, they will help you build elegant CSS styles. As you can see this behavior is not so easily expressed in pure html. That's enough reason alone to have a separate language for styling web pages.

Try opening the first sample in the css folder. It has the same exact contents. You can see selector priority (aka specificity) in action.

<br><br><br>
## Why was it created?
*Controling the styles of the interface*

- **Separation of concerns** - This is a big term, you will hear it a lot. It means that html files are concerned with defining structure and CSS files are concerned with defining style. This is really important because it's easier to think about them separately. I know, seeing this first time can be confusing. But after you will work for a few days with CSS files the benefits will become obvious.
- **Modularity** - Stylesheets can be easily exchanged thus allowing for the same html to have different styles. This is a critical feature that use website platforms that need to have the companies colors. Another situation when this is handy is for platforms like facebook. The wall page has a lot of similar containers but different types of content. All the containers share the same stylesheet. This makes it easy to maintain similar style of the elements while avoiding possible mistakes and omissions due to human error while working with inline styles. there is also the advantage of saving kylobytes of text. Meaning faster load times.
- **Performance** - Ther are many ways how CSS helps a page render fater but one of these is using the browser caching mechanism. A single stylesheet can be used for multiple pages of the same site. Thus deacreasing even further the payload that will be transfered by the network. Browsers have a special mechanism called **caching**. It means a copy of a certain **resource** (css file in our case) is kept in the local memory of the **client** computer in order to prevent wasteful network traffic. Why download the same thing 100 times? This allows having different html pages but the same local cached css style.

<br><br><br>
## Why a lot of people hate CSS 
*CSS is a notorously missunderstood language*

**CSS selectors are not intuitive. You cannot fire and forget**

The biggest reason why people hate CSS is because of the way CSS selectors. Programmers, for example, are used to having nice references / indicators to the items they want to work with (variables and objects). Imagine having a bunch of books in a library that are grouped together by tying strings between those that are needed for certain tasks. Ex: Books about building materials and building techniques have strings tied together and are easily retrieved when somebody wants to build, lets say, a house. Just pull the string and you get all the books. Very convinient. If you move the books the strings are still going to help you quikly retrieve them when needed without having to search for them.

**When working with CSS selectors you have to continously aim at a moving target**

Well the way CSS works is a bit different. Imagine wearing a pair of glasses with dark lenses and small transparent patches strategically positioned. Trough these patches you can see exactly the books that you need (That is very similar to how id's work). Another analogy is wearing lenses that block all colors except a certain one. With these glasses you can see only blue books for example. This is really similar to how classes work in CSS. This can be very convinient for matching all paragraphs and changing theyr color. However this approach has one big disatvantage. Whenever you move these books around(ids), or change their color (classes), they will no longer match the glasses you are using the search for them. Which leaves you unable to finish your task.

**It's either changing properties in mass or one by one**

So basically CSS suffers from this huge problem of not being able to move your html with 100% guarantee that the properties still apply. Well, think about it this way. You have a sidebar that has all text red and a content area that has all text blue. Now you decide to move the some text from the content area into the sidebar. What should happen to that text? Should it remain blue and disrupt the all red text rule in sidebar. Or should it transtion automatically from one color to the other thus loosing the initial rule in the process? Well, you see... this is not an easy problem to fix. Either you have one or the other. Having both behaviors at once requires a lot of exceptions which would end up making the language even harder to follow.

So far it was decided that it's better to have automatic style change when an element is moved from one class to the other. When you add text in an article you would want it to be the same as the sorrounding text. Same when adding a link in a menu. Having to specify for each link the color is not really efficient.

**The box model deosn't make it easy also**

On top of these problems you can also add the specialised constructuts for working with fragments of text and html. These have rules that you don't usually find in other disciplines. They are hard to relate to and thus easy to missunderstood.

However, there are ways to work around these issues using proper planning when writting the CSS classes and ids. This is where the language has it's Ahile heel. You need to follow a certain discipline in order to prevent issues, otherwise your code will be really difficult to maintain. Unfortunately, this discipline is not the first thing that a beginner learns. I'll do my best to teach you in the samples how to properly use CSS without making a mess.

**Pro tip: The whole programming affair has this issue of creating a mess when you don't follow a carefuly constructed plan. This is where real programmers are separated from amateurs. It's all about discipline and awereness. This will be a constant theme in the entire course. I want to teach you the good habits from the begining. You will thank me later.**

<br><br><br>
## What can CSS do 
*The main features that are need to know for any web developer*

All tags (DOM elements) have properties. Almost all share the same common properties. A few of these are used very often. Most of the others are used ocasionally in particular scenarios.

CSS property | Description
--- | ---
**Color**<br>`div { color:red; }` | This is text color.
**Font size**<br>`div { font-size:20px; }` | Font size in pixels.
**Font family**<br>`div { font-family:Verdana; }` | Changes the type face.
**Background**<br>`div { background:gray; }` | Element background.
**Background image**<br>`div { background:url('image.jpg'); }` | An image can be as a background.
**Margin**<br>`div { margin:10px; }` | Creates an invisible margin surounding the element.
**Border**<br>`div { border: solid 1px red; }` | Elements can have a border. The border is situated betwebb the margin and the padding
**Padding**<br>`div { padding:10px; }` | Creates an internal spacing inside the element.
**Postion**<br>`div { position:10px; }` | Positioning is a tricky subject in CSS. I will explain in the samples code.
**Float**<br>`div { float:right; }` | Floating elements is a tricky subject in CSS. I will explain in the samples code.
**Display**<br>`div { display block; }` | Changing the display type affects many element properties. I will explain in the samples code.
**Shadow**<br>`div { box-shadow:10px 10px 10px rgba(0, 0, 0, 0.4); }` | Creates a shadow sorounding the elements. Shadows don't take any extra space on screen. This was added in CSS3. Also text has a special property called `text-shadow`.
**Transition**<br>`div { transition:0.3s; }` | Transition are used to define animations. They indicate how long should the transition from initial state to final state should take. The browser interpolates the intermediary values. This was added in CSS3.
~~~~~~~~~~~~~~~~~~~~~~~ | ~~~~~~~~~~~~~~~~~~~~~~~

**REMEMBER As I said in HTML lesson. I'm not going to digg deep in all the possible ways to use CSS. I will show main ones that are must-know. I will also stop using this warning. I think it's clear how this method of teaching works.**


<br><br><br>
## Why CSS matters
*What role does it play in app/website building*
- Well, let's just say that using inline html attributes and  tables for styling and templating is like using a stone axe to make high end furniture while the rest of the world uses electric tools with laser measurements and Elon Musk is busy colonising Mars. 
- Improved maintainability. Having the CSS language makes the task of maintaining the style of website a really easy and enjoyable task.
- Improves collaboration between team members due to the fact the stylesheets can be grouped and created for specific purposes. Improves clarity by clearly stating intent. This leads to less judgement erors and mistakes.
- It is extremely expressive. Some very clever styles can be crafted by skilled developers. Well, sometimes too clever... don't overdo it.
- Should I say again? Separation of concerns. Keeping thinks separate helps improving code flexibility.

<br><br><br>
## Tasks
*These are simple tasks meant to teach you the basics. In the next lessons the tasks will be closer to real life scenarios*
- **Basic page** 
    - Create a simple index.html with a few paragraphs and a few images.
    - Apply the following effects using inline css.
    - Color, hex notation, rgba notation
    - Background color, image
    - Font size, px, em, rem
    - Position absolute, relative, static, initial 
    - Transform translate
    - Z-index 10 

<br><br><br>
## Real life situations
- Very often the first task of a webdesigner is to create the **layout of an website**. Setting up the navigation menu, the sidebar and so on. This is an entire field of study by itself. But don't loose faith. There are also some **common desing patterns**. Searhc for "How to create a simple sidebar layout in HTML".
- Copying designs from photoshop to html.
- Modifing existing css to add new behavior.
- Forcing your way around badly written CSS rules. This usually ends up in a big mess.
- Arguing with colleagues what works best. This is a higly branched subject, there are many ways to achieve similar goals and many times it's not easy to pick a winner.

<br><br><br>
## Search for
*Reading other sources always helps to piece together the puzzle*
- What is CSS
- Why is CSS important
- How to load external css file
- What are hex colors
- CSS px vs em vs rem
- How to use postion absolute
- Postion absolute vs relative vs static
- How z index works
- Why do I need z index
- What is asepct ratio

<br><br><br>
## Search for (advanced)
*These are optional searches for advanced students*
*Come back later if you don't wish to spend time right now*
- Why CSS files are minified?
- How to center an element vertically
- How to use flexbox
- How monitors work
- What is color calibration
- How antialiasing works
- How fonts are rendered
- What is the 12 column grid
- What is screen resolution
- Subpixel rendering
- Dots per inch
- Pixel interpolation
- CRT vs Plasma vs LCD vs LED vs eInk displays
- How different monitors show the same colors
- Light temperarure
- Polarized light
- Analog vs digital
- Why links are blue
- How human eyes work
- Monitor blue light, sleep issues

<br><br><br>
## More subjects
*Learn more than the basics*
*Come back later if you don't wish to spend time right now*

Advanced Subject | Description
--- | ---
**CSS box model** | **CSS box model is a fundamental concept in the HTML and CSS world.** Each DOM element has 4 layers that control it's appearance and position. First layer is the content itself such as text or image which is the core. The next surrounding layer is the internal padding, the distance from the content to the edge of the element. Next comes the border. The border is also adding additional width to the element. Last we have the margin which adds a zone of forbiden space. No other element can enter this zone, this crearing distance. Read the samples provided on this topic and also go and search online more explanations. 
**box-sizing: border-box;** | **This is a really important CSS property with lots of benefits in real practice**. When an element has a defined width of 100px for example, standard behavior is to add the padding, borders and margins as extra quantities in the final width calculation. Thus an element with 100px width together with 10px for borders and paddings ends up using 140px. In certain situations this is really bothersome. Box sizing border box modifies this behavior so that the browser includes along side the content also the width and the padding in the final dimension. Thus if you say an element has 100px it will use precisly 100px no matter what paddings and borders it has. Check out the samples or read more online.  
**Overflow** | **Again, this is a must know behavior.** When the content of an element exceeds the boundries that are allowed for it than it overflows them. This behavior can be manipulated in several ways. Again, I will show samples depicting each of these ways. For the moment remember that this overflow behavior is what triggers the scrollbars to render.
**CSS3 Animations** | **Also remember this one.** Previous versions of CSS did not offer the posibility of animating elements. This was only done using Javascript. They have certain advantages such as making javascript code less dense by not having to worry about animations. However there are also some drawbacks. Complex animations are hard to achieve only with javascript. They are best suited for animating fad in and fad out of modals, or sliding pictures in a gallery or dropdowns with smooth animation. There many examples of usage. But say if you want to animate a living creature on screen than it is quite cumborsome to use CSS animations. Javascript will be able to do it way much easier and more versatile.
**Z index** | **A lot of times Z-index issues occur, be aware of this property.**. Besides having X and Y coordinates, elements in a page can have a third dimension. That would be the z axis and it is perpedicular on the computer screen. Having control over this axis greatly imrpoves design options. I will demonstrat usecases of this property in the samples. Also don't heistate to read more online.
**CSS preprocessors** | These are extensions of the base CSS language called (supersets). They add extr syntax with the goal of making writing CSS much easiear. Setting up a preprocessor for CSS is quite a chalenging task for a beginner so we will discuss this in later chapters. Examples of CSS preprocessors are **SASS**, **LESS** and **Stylus**. They bring certain benefits such as having variables, imports (meaning they can call other stylesheet on demand), simpler syntax by using nesting notation and many others. For beginers I would say this is a topic for later study.
**Template grids** | In the early days of the web, designing sites was a matter of going by feeling. Dimensions and colors were set adhoc trying to figure out what works best for a given situation. In time some patterns emerged. Like the separation of sidebars and content. Or pictures of products in a grids. Eventually this system of grids was improved to the point were you can use a grid to place elements in predefined widths without having to worry if they fit together or not. These grids become especially handy when working with adaptive content. However, be careful not to be blinded by them. Sometimes you can break the mold and do something ingenious way much better than stiking to the grid. 
**CSS reset stylesheet** | Style reset sheets are a way to reset the default values of different browsers to a common set. These became popular because browsers tended to have different standard styles for the same elements. Modern day browsers have managed to align and maintain similarity. Currently I would argue that these reset stylesheet are more an annoyance then a helper. When working in a website that has resets you will see in the browser inspector a lot of overwritten properties. This hinders a lot progress.
**CSS sprite maps** | In order to gain more speed, icons can be clustered together in one big image. That image is downloaded once and than CSS is used to crop the exact coordinates where a certain icon is located. Theyr main disatvantage is thath they are really hard to maintain. Again, this is an aging technique which tends to dissapear. The modern approach is to use icon fonts which again have more icons in one file but they are way more easy to separate and update individually. Also they can be zoomed a lot without loosing quality. So the same icon can have different sizes wihtout having the need to cut different files.
**Typefaces** | In the old days typography was limited to a few preinstalled fonts. Nowadays websites have seen an explosion of fonts of various typefaces.
**Document encoding** | Document encoding is actually the way text is stored in a way that the computer understands. ANSI, Unicode, UTF-8, UTF-16 are only a few examples. I won't go into detail. All I will say is that modern browsers support enough characters that all the characters in the world can be rendered on screen and even more.
**Iconfonts** | I mention about Iconfonts when talkin about CSS sprites. These are fonts that instead of storing characters, they store icons.
**Color depth** | Early web had 256 colors. It might seem ridiculous but this is wat much better than the previous standards, 16 colors or monochrome. There was this feature in various editors that said: use web safe colors. Well, currently there are 16 million possible colors available. This is enough for the tipical website.
**Color schemes** | When working with styles and designs you will end up working with color schemes. These are collections of collors hand picked in order to maintain a consistent look and feel in the entire website. 
**Integrated color pickers** | Modern browsers have in the developer tools a tiny color picker. Sometimes I use it to quickly get a color code. This is really useful for rapid development.
**Aditive vs Substractive colors** | This basically means the difference between how Print media and Electronic screens produce color. In print the more color you add the more you go towards black. In computer monitors and tvs it's the other way around. The more color you add the whiter it gets.
**Webdesign showcase articles** | I recommend that you start searching online for showcases of webdesign. This will help you get a better understanding what is good design and also hunt for new ideas. Search for: showcase of online shops showcase. Than search for tourism agency design showcase. Or any other category. You will see certain patterns that define each category.
**Graceful degradation,<br>Mobile first design** | This basically means that when you build a website you need to consider what happens if the website is not able to use CSS or Javascript. These concepts try to guide developers in creting barebone functional websites that are enriched by the various layers of technology available. Even to this day, a lot of websites will fail catastrophically if one technology layer is missing.
**Browser acid test** | This is a test designed to evaluate browsers. The more specifications a browser complies to the higher score it gets in an acid test. This means that you can realiably use it to render even the most exotic styles.
**Monitor refresh rate,<br>Frames per second** | The first is a measure of how many times the monitor updates the state of the pixels Usually it's 60Hz going for 120Hz recently. Frames per second means how many times per second is the CPU / GPU able to draw an image. It's possible to have greater FPS than the monitor refresh rate but this is usually a feature on the high end expensive machines. The average computer usually strugles with 60 fps. This measure is really important in animation. The lower the fps the worse the quality. So take care not to go beserk with your templating. Be conservative when possible.
**Repaint cycle,<br>DOM tree** | Each time zou change somethign in the DOM the browser has to figure out how this looks on the screen. Even when you hover a link. This is called a repaint cycle. Having complex **DOM trees** makes the repaint cycle **more expensive**, more CPU cycles are dedicated to this operation. Yes, let's remember DOM tree, The dom basically is like a tree with branches and twigs. The elements at the end, they are called leaves. Well this is programmer jargon, but since we are learning how to build apps I think it's time to up the game.
**Flexbox** | Flexbos is an addition to the latest version of CSS. This mechanism was created in order to allow advanced way of controlling the layout of the elements in the document. CSS2 had plenty of ways to control behaviour of layouts but many times it was necesary to involve the big brother, Javascript. This is not ideal for designers who don't have programming experince.
**Bootstrap** | After a while, developers and designers that work on many projects will end up doing the same styles over and over again. In lots of cases these can be separated in a standalone file that can be shared between projects. Bootstrap is the most popular collection of styles and basic javascript components. Personally, I preffer not to use it at all. I have webdesigner origins and for me CSS is second nature. I know the best ways to obtain the behaviors I want. I dislike loading stlyes built by others and modifying on top of them. It ties me to decisions I didn't take. It addse weight in my page that I don't want. Many times I have to fight against Bootstrap itself to get to my desieres. On the other side of the issue, programmers have litle design knowledge and time available for styling html. For them, having to handle styles is just an annoying task. Thus, Bootstrap is an extremely precious resource which they cherish. I leave it up to you to pick your sides, don't take my word as final. Research yourself the subject. **An experienced and confident programmer can defend both sides of the argument**. 
**Viewport, bellow the fold** | Viewport is the region of screen available to draw on. Whatever is not able to fit in this region is called bellow the fold content. This has significant implications when considering what is the most important message you want to get out to costumers.
**Screen real estate** | This viewport issue leads to another issue called screen real estate. You cannot put all the stuff you desire on screen. You have to be picky and choose only certain stuff. This is often done with lots of consideration. 
**Vertical and horizontal websites** | Two main trends can be seen on the web: vertical scrolling and horizontal scrolling. Vertical is by far the most popular. However don't exclude the second option, as it might be really useful in certain scenarios.
**BEM methodology** | Remember my explanaton wht people hate CSS? Well, some other people tried to created methodologies around this problem. One of them is BEM. Block, element modifier. Basicallt all classes have long names that include the block (product thumbnail for example) the element (product picture) and modifier (extra large picture with red border). Instead of having separate classes, a big clas with long name is created. This will act as an id and due to it's long name it is preety realliable in avoiding collisions with other classes and definitions. However, the end result is a really long and ugly name. Put these all over the html and it will look really nasty. I hate long names. Sorry about this, but BEM is not my cup of tea.
**Vendor prefixes,<br>Auto prefixer** | Auto prefixers are development tools that add besides your wirtten propertty all the possible variations used by the different browsers for the same property. This is necessary because browser vendors have implemented a lot of unique properties that tey wanted to use in order to gin an advantage over the competition. This is the most horrible behavior a developer can see. It is totally detrimental on the long run to have all these versions. Recent years have seen this trend fading out due to comunity pressure. Still we have the legacy browsers to support until they no longer are relevant. 
**Browser support and compatibility** | Vendor prefixes is just one example but there are many other examples. Making sure that your website looks and feels the same in all browsers is an improtant task. But then you have to decide how low do you go. Currently it's commonly agreed that Internet Explorer 8 is no longer a target for optimisation due to it's many problems. Even version 9 and 10 are no longer considered. IE 11 still is target in 2017. And many times this target is quite hard to match.
**Ever green brosers** | Auto prefixer brings me to the subject of ever green browsers. These are browsers that update in the background without user conscnet. Theyr big advantage is that it alleviates the problem of supporting legacy browsers. On the other hand, corporations and banks avoid them because they are a source of possible new unknown vulnerabilities. They prefer to use old and tested. Yep... the world is not a perfect place.
**Browser zoom** | All modern browsers have a zoom function that basically scales up all the spatial dimensions. They are quite usful to render content on big and distant screens or for users with eye impairment issues.
**3D CSS** | CSS3 has brought also 3D behaviors over the DOM elements. They can be used to obtain eye catchy effects. At the same time they are a bit more difficult to master. Shameful plug here. I'm working on a project called Visual Space that will partly address this issue of difficulty. More details coming soon in the homepage.
**Subpixel rendering,<br> Antialiasing** | The computer monitor uses pixels to render images. A lot of times, the shapes we draw don't match exactly the pixel grid, especially for fonts. This is were advanced techniques are used in order to take advantage of subpixel rendering. That means instead of having fully white or black pixels you have shades of gray that vart in tone in order to simulate continuity. Searh online for images that demonstrate antialising on fonts. I had many ocasions where my knowldege of subpixel rendering helped me to improve the quality of the images. This is a really chalenging problem when using iconfonts.
**4k monitors, High pixel density screens** | Latest technology has improved a lot. Monitors with 300dpi are already common place matching print medium quality. This brings advantages for webdesigners but also further issues. Websites need to scale in order to accomodate this new type of screen. Usually the browser does a decent job but sometimes it fails. It's good to be aware how these issues can manifest.
**Font optimisations** | Back to the subpixel rendering. You should know that in order to render nice and crisp text on screen, the video drivers have advanced filtering alggorithms that smooth out the curves of the fonts in certain places in order to allow proper alignment of letters. This greatly improves font quality and readability. Search for "font subpixel rendering".
**GPU rendering** | In modern browsers you can enable CSS rendering via the GPU. This greatly improves the rendering speed of the page, especially visible for heavy pages. On the other hand this creates issues with batery life on mobile devices.
**Performance on mobile, battery time** | As I alredy mentioned, on mobile devices, battery life is a real issue. Certain effects that run smothly on deckstops might run really poorly on mobile. You might want to check for such situation and maybe have some gracefuldegradation rules in place.
**Color convertors<br>Shadow generators<br>Gradient generators** | Sometimes CSS syntax is very hard to write and verbose. For example defining a gradient is not the most straightforward task. For these situations you can find online various tools that help with these little tasks. A lot of time I used them. Just search for whatever you need and usually you will find a decent tool ready to help.
**Color calibration,<br>Colorometry** | There is a lot of science behind this subject. Let's just say that a lot of effort was put in ensuring that the shade of blue I see on my screen is the same as the one you see on your screen. Well, there are still some unresolved issues, but they dont have any significant impact on web design. This reminds me of a nice story. When developing World of Warcraft 1 in the 90s the game studio had an issue. Unlike theyr clients they had very good monitors and dimly lit rooms. So the artists were using subtle tones and nice shades. However, the team lead being aware of this issue he was taking rounds in the building, opening windows, and lights just so that the artists face the real conditions were the game was going to be played. This led to the developemnt of the iconic game design style in World of Warcraft with bright colors and cartoony characters.
**High contrats color Schemes.<br>Color blind users.<br>Older users** | When considering color choices also consider the people with vision disabilities. You might hep them by using clear fonts, bigger font sizes, and contrasty colors. Luckly there is an entire movement in the modern webdesign orited towards improving these issues. 
**Overlay color effects** | Modern graphics software suites have come up with various ways to blend colors together to obtain interesting effects and create new colors. Some of these have become standardised and they have been even included in the CSS3 specs. Take advantage of these litle known properties for nice and cool effects. Search for "Css color blending".
**Color coding,<br>Brand colors,<br>Color psychology** Well, read means stop, green means ok, yeallow means warning, blue is information, and so and so. Red colors make you feel agitate and green relaxed. Take advantage of thse hardwired psychological reacitons to excite certain feelings in customers. This will make you a better marketer of products and it will also imrpove your User experience skills.
**Left to right, Right ot left** | Well, not everybody read the same way as we do. Arabic is the main example that comes to mind. The browser can easily take care of this fact by reversing the direction of rendering. Sometimes you can use this feature for design rules that go beyound controlling text.
**Creating styles from Javascript** | We are not yet at the Javascritp chapter but I will go ahead and make a big reaveal. Yes, you can controll dinamcally / programatically all the styles that you usually control by typing rules in CSS stylesheets.
**There is no perfect solution** | In the end what matters is that your solution can be easily understood by not being too convoluted and it does the job in all targeted browsers.
 ~~~~~~~~~~~~~~~~~~~~~~~ | ~~~~~~~~~~~~~~~~~~~~~~~

 Pfew... that was a long list... Don't panic, you don't need to know it by heart. Just recall that these subjects exist. Whenever you will encounter them they, won't feel totaly foreign. I did this extra leg work so that later on, when we talk about User Interfaces it will be much easier to express my arguments. Also in the final 3d graphics chapter a lot of these notions will reocur. Same for designing the initial designs.

<br><br><br>
## **Tips and tricks** 
Mistake | Description
--- | ---
**:hover, :before, :after** | These selectors extend even more the styling options available for a designer. I highly recomend learning the. Demos of usage are provided in the samples. Short description is the fallowing. Before ads a virtual element before the actual element. Thus you render something extra without actually creaing dom. Same for after. Hover changes the rules of the element only when the pointer hovers above the selected element.
**Clearfix** | Clearfix is a useful technique to prevent a div with floated children from collapsing and loosing all it's height. This leads to serious layout issues. An example is provided in the samples.
**Inline styles** | Use a separate stulesheet `app-layout.css` to maintain the rules that describe the ratios between the regions of the website. Sometimes this might get tedious to maintain, but it offers the advantage of having a single place where the app layout can be studied and reviewed. It also tends to expose layout mistakes in plain sight.

<br><br><br>
## **Common mistakes** 
Mistake | Description
--- | ---
**Inline styles** | Huge collections of web pages are hard to maintain when they have inline styles. There are many other subtle reasons. Suchs as making it hard to read the code. Or having extra logic in javascript to account for inline styles. 
**Long chains of selectors** | 
**Using cryptic names for classes and ids** | 
**Relying stylesheets hosted on other servers** | 
**Not documenting with comments** | Sometimes you have to apply a weird property just to get a certain effect working. Other colleagues might also wnat to modify the same property without realising how important is that property. This can create templating issues that can stay hidden for long periods of time. Debugging these issues is often a very difficult task. Due to this enormous flexibility CSS is also really easy to missuse. 
**Having one giant CSS stylesheet** | 
**Excessive nesting** | 
**Using long names or extra short** | 
**Using homebrew notations** | 
**Using deceptive names** | 
**White text on black. Bgr behind text** | 
**Specifying the parent element in the class/id name** | 
**Not taking advantage of cascading styles** | This means repeating the same style over and over again when it could have compressed in one single class. 
**Font sizes in pixels instead of ems** | 
**Not checking various browsers when developing** | 
**Not crafting css classes around UI components/blocks** | 
**Not using global styles and local styles** | 
**Not using the browser insector to review the cascading effects** | 
**Using !important in excess** |  
**Overwriting classes like a gatling gun** |  
**Not plannig ahead** | 
**Not understanding box model and inline flow** | 
**Not using a proper editor** |  
**Ignoring adaptive design needs** |  
**Not using a CSS grid** |  
**Ignoring users with disabilities** |  
**Overdoing decoration just because it looks cool** |  
**Using full black and white shades** |  
**Not leaving enough whitespace. Leaving too much whitespace** |  
**Selecting shity colors with low or high contrast** |  
**Font sizes that are too small or too big** |  
**Ignoring the existence of headings, subheadings, quotes, bullet lists, underlines, etec** |  
**Always writing the same styles from scratch** |  
**Reusing styles from other projects without proper cleanup** |  
**Leaving abandoned selectors that dont match any dom elements** |  
**Using images for buttons** |  
**Setting up grand schemas between multiple files** |  
**Using color names** | Color names are not so great compared to color HEX, RGB color codes. The later ones can be generated via javascript using mathematical calculations. This is not easy to achieve with color names.  
**Using annoying background patterns** |  
**Just using whatever works without proper research** |  
**Being obssesed or dogmatic** |  
**Underestimating the amount of required time** |  
**Styling elements as if they were another element type** |  
**Not targeting the selectors to the exact zone of interest** |  
**Being too dependent on styles from plugins and libraries** |  
**Not having the habit of learning** |  
**Just thinking that CSS sucks** | Sorry about this, but you suck. CSS has it's weaknesses but so any other language. Bashing CSS just because you didn't tool the time to understand properly the basics it's not good enough reason to discualify it. I remember a smart quote from a programming language designer. Making a language easy to understand in a short time is the biggest mistake you can do. This will permanently harm the advanced users of the laguage just because the beginners don't spend enough effor learning. 
~~~~~~~~~~~~~~~~~~~~~~~ | ~~~~~~~~~~~~~~~~~~~~~~~

**Well... that's a long list of mistakes. Don't expect not to do them. You will do them a lot. As I did and as everybody else has done so. What matters is that you recognize that there is place to improve your technique and you keep working on it. CSS is a very potent technology and it comes with a great deal of responsibility.** 

<br><br><br>
# Links and Resources  
- Google fonts is an excelent resource used to load custom fonts in the webpage https://fonts.google.com/
- Bootstrap can be used to save time during development http://getbootstrap.com/
- A complete history of CSS https://www.w3.org/Style/CSS20/history.html
- A great resource of icons https://www.iconfinder.com/
- Instead of using images, you can use fonts for icons http://fontawesome.io/
- Excelent website containing a ton of good CSS tutorials https://css-tricks.com/
- Create color schemes of balanced colors https://color.adobe.com/create/color-wheel/
- Sometimes you lack design inspiration, just visit a webdesign gallery https://www.awwwards.com/
- Maybe you want some inspiratin for ugly design http://www.webpagesthatsuck.com/worst-websites-of-the-year.html
- Back to cool designs, maybe too cool for real life scenarios https://dribbble.com/
- A complete list of color names. https://www.w3schools.com/colors/colors_names.asp
- Can I use, shows the browser availability of certain features https://caniuse.com/
- Test if the browser you are working with has the latest speks implemented http://acid3.acidtests.org/

<br><br><br>
# Remember
*Do not forget these properties. Return here as many times as needed until you know these by heart*

        div { 
            color:red;
            font-size:20px;
            font-family:Verdana;
            background:gray;
            background:url('image.jpg');
            margin:10px;
            border: solid 1px red;
            padding:10px;
            position:10px; /* Concentrate yor learning efforts here */
            float:right; /* Concentrate yor learning efforts here */
            display block; /* Concentrate yor learning efforts here */
            box-shadow:10px 10px 10px rgba(0, 0, 0, 0.4);
            transition:0.3s;
         }