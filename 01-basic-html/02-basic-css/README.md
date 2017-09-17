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

        <!-- Separate style sheet -->
        <style>

            /** This will override any previous rule no matter what the order or rank */
            .olive {color:olive !important;}

            /* You can specify how HTML elements should render in a browser */
            /* For example, using selectors is useful for making all links orange */
            h1 {color:red;} /* The stuff between curly braces is called a declaration */
            p {color:blue;}
            a {color:orange;}

            /* The hover selector is extremely useful in simulating interaction 
               with an element just by hovering the pointer over it*/
            a:hover {background-color: yellow;}

            /* CSS classes */
            /* Usualy class names indicate the role of the element: Examples .avatar .login-form .menu*/
            .gray {color:gray;} /* A class can be reused multiple times */
            .magenta {color:yellow;}

            /* Same selector can be used twice. second definition will override first definition */
            .magenta {color:magenta;} 

            /* Defining a property twice is possible but not usefull */
            /* In case this happens last instance will have the last word to say */
            .magenta {color:yellow; color:magenta;} 
            #my-green-paragraph {color:green;} /*An id should only be used once*/

        </style>

        <h1>A red heading</h1>
        <p>A blue paragraph.</p>
        <a href="some-link.html">An orange link</a>
        <a href="some-other-link.html">And another orange link</a>

        /* Blue paragraph. Selector overrides default browser style. */
        <p>A blue paragraph</p>

        /* Gray paragraph. Class overrides selector */
        <p class="gray">A gray paragraph.</p>

        /* Magenta paragraph. Order of declaration matters. Last class overrides previous class. */
        <p class="gray magenta">A magenta paragraph.</p>

        /* Gray paragraph. Id overrides class */
        <p id="my-green-paragraph" class="gray">A green paragraph.</p>
        
        /* Maroon paragraph. Inline style override everything */
        <p id="my-green-paragraph" class="gray" style="color:maroon">A maroon paragraph.</p>

        /* Well there is yet another rule but this one is really tricky. */
        /* It should be avoided at all costs if possible */
        /* Only some extreme rare situations justify the use of this one */
        <p id="my-green-paragraph" class="olive gray" style="color:maroon">An olive paragraph.</p>

Yep it's a mess. You need some practice until you have a good feeling of all these overrides. But I can tell you right now. These overrides are really useful. In time after some practive, they will help you build elegant CSS styles. As you can see this behavior is not so easily expressed in pure html. That's enough reason alone to have a separate language for styling web pages.


<br><br><br>
## Why was it created?
*Controling the styles of the interface*

- **Separation of concerns** - This is a big term, you will hear it a lot. It means that html files are concerned with defining structure and CSS files are concerned with defining style. This is really important because it's easier to think about them separately. I know, seeing this first time can be confusing. But after you will work for a few days with CSS files the benefits will become obvious.
- **Modularity** - Stylesheets can be easily exchanged thus allowing for the same html to have different styles. This is a critical feature that use website platforms that need to have the companies colors. Another situation when this is handy is for platforms like facebook. The wall page has a lot of similar containers but different types of content. All the containers share the same stylesheet. This makes it easy to maintain similar style of the elements while avoiding possible mistakes and omissions due to human error while working with inline styles. there is also the advantage of saving kylobytes of text. Meaning faster load times.
- **Performance** - Ther are many ways how CSS helps a page render fater but one of these is using the browser caching mechanism. A single stylesheet can be used for multiple pages of the same site. Thus deacreasing even further the payload that will be transfered by the network. Browsers have a special mechanism called **caching**. It means a copy of a certain **resource** (css file in our case) is kept in the local memory of the **client** computer in order to prevent wasteful network traffic. Why download the same thing 100 times? This allows having different html pages but the same local cached css style.

<br><br><br>
## What can HTML do 
*The main features that are need to know for any web developer*

All tags (DOM elements) have properties. Almost all share the same common properties. A few of these are used very often. Most of the others are used in particular scenarios ocasionally.

CSS property | Description
--- | ---
**Color**<br>`div {color:red;}` | This is text color.
**Font size**<br>`div {font-size:20px;}` | Font size in pixels.
**Font family**<br>`div {font-family:Verdana;}` | Changes the type face.
**Background**<br>`div {background:gray;}` | Element background.
**Background image**<br>`div {background:url('image.jpg');}` | An image can be as a background.
**Margin**<br>`div {margin:10px;}` | Creates an invisible margin surounding the element.
**Border**<br>`div {border: solid 1px red;}` | Elements can have a border. The border is situated betwebb the margin and the padding
**Padding**<br>`div {padding:10px;}` | Creates an internal spacing inside the element.
**Postion**<br>`div {position:10px;}` | Positioning is a tricky subject in CSS. I will explain in the samples code.
**Float**<br>`div {float:right;}` | Floating elements is a tricky subject in CSS. I will explain in the samples code.
**Display**<br>`div {display block;}` | Changing the display type affects many element properties. I will explain in the samples code.
**Shadow**<br>`div {box-shadow:10px 10px 10px rgba(0, 0, 0, 0.4);}` | Creates a shadow sorounding the elements. Shadows don't take any extra space on screen. This was added in CSS3. Also text has a special property called `text-shadow`.
**Transition**<br>`div {transition:0.3s;}` | Transition are used to define animations. They indicate how long should the transition from initial state to final state should take. The browser interpolates the intermediary values. This was added in CSS3.
~~~~~~~~~~~~~~~~~~~~~~~ | ~~~~~~~~~~~~~~~~~~~~~~~

**REMEMBER As I said in HTML lesson. I'm not going to digg deep in all the possible ways to use CSS. I will show main ones that are must-know. I will also stop using this warning. I think it's clear how this method of teaching works.**


<br><br><br>
## Why CSS matters
*What role does it play in app/website building*
- Having the CSS language makes the task of maintaining the style of website a really easy task.

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
- Very often the first task of a webdesigner is to create the **layout of an website**. Setting up the navigation menu, the sidebar and so on. This is an entire field of study by itself. But don't loose faith. There are also some **common desing patterns**. Searhc for "How to create a simple sidebar layout in HTML"
- Copying designs from photoshop
- Modyfing existing css
- Overwritting when badly written code
- Arguing with colleagues what works best.

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
- how z index works
- Why do I need z index

<br><br><br>
## Search for (advanced)
*These are optional searches for advanced students*
*Come back later if you don't wish to spend time right now*
- Why CSS files are minified?
- How to center an element vertically
- How to use flexbox

<br><br><br>
## More subjects
*Learn more than the basics*
*Come back later if you don't wish to spend time right now*

Advanced Subject | Description
--- | ---
**Overflow** | 
**CSS3 Animations** | Previous versions of CSS did not offer the posibility of animating elements. This was only done using Javascript. They have certain advantages such as making javascript code less dense by not having to worry about animations. However there are also some drawbacks. Complex animations are hard to achieve only with javascript. They are best suited for animating fad in and fad out of modals, or sliding pictures in a gallery or dropdowns with smooth animation. There many examples of usage. But say if you want to animate a living creature on screen than it is quite cumborsome to use CSS animations. Javascript will be able to do it way much easier and more versatile.
**CSS preprocessors** | These are extensions of the base CSS language called (supersets). They add extr syntax with the goal of making writing CSS much easiear. Setting up a preprocessor for CSS is quite a chalenging task for a beginner so we will discuss this in later chapters. Examples of CSS preprocessors are **SASS**, **LESS** and **Stylus**. They bring certain benefits such as having variables, imports (meaning they can call other stylesheet on demand), simpler syntax by using nesting notation and many others. For beginers I would say this is a topic for later study.
**Z index issues** |
**CSS reset stylesheet** |
**CSS sprite maps** |
**Typefaces** |
**Document encoding** | ANSI, Unicode, UTF-8, UTF-16
**Iconfonts** |
**CSS box model** |
**Flexbox** |
**box-sizing: border-box;** |
**Bootstrap** |
**Template grids** |
**Viewport, bellow the fold** |
**Screen real estate** |
**Vertical and horizontal websites** |
**BEM methodology** |
**Auto prefixer** |
**Browser zoom** |
**3D CSS** |
**GPU rendering** |
**Performance on mobile, battery time** |
**Left to right, Right ot left** |
**Creating styles from Javascript** |
**Browser support and compatibility** |
**There is no perfect solution** |
 ~~~~~~~~~~~~~~~~~~~~~~~ | ~~~~~~~~~~~~~~~~~~~~~~~

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
**Using long names or extra short** | 
**Using homebrew notations** | 
**Using deceptive names** | 
**Specifying the parent element in the class/id name** | 
**Not taking advantage of cascading styles** | This means repeating the same style over and over again when it could have compressed in one single class. 
**Font sizes in pixels instead of ems** | 
**Not checking various browsers when developing** | 
**Not cfrafting css classes arounf UI components/blocks** | 
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
**Not leaving enough whitespace. Leaving too much whitespace** |  
**Selecting shity colors with low or high contrast** |  
**Font sizes that are too small or too big** |  
**Ignoring the existence of headings, subheadings, quotes, bullet lists, underlines, etec** |  
**Always writing the same styles from scratch** |  
**Reusing styles from other projects without proper cleanup** |  
**Leaving abandoned selectors that dont match any dom elements** |  
**Using images for buttons** |  
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


