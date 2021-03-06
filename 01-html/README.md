# HTML
*Learn the basics of HTML*<br>
*This is it, first lesson. Let me know if you liked it [twitter.com/visual_space](https://twitter.com/visual_space)*

[Index](https://github.com/visual-space/visual-school/blob/master/chapters.md) - 
[Code samples](https://visual-space.github.io/visual-school#html)<br>
[02 - CSS ->](https://github.com/visual-space/visual-school/blob/master/02-css)

**_Friendly Reminder_ - These lessons are designed to showcase both the basic notions and the more advanced knowledge. Don't panic when reading this lesson. If you are a complete beginner focus on studying only the first part up to the tasks section. Anything after this section is recreational lecture just for fun. There is no need to master those techniques explained there. This will happen in time, after many months, even years. My purpose is not to scare you, but to familiarise you with the advanced topics. You will be perfectly capable of continuing this course with just the basic notions.**

**This will apply also for the upcoming chapters. I won't repeat this reminer in each chapter. So my final advice is: read it for fun but focus only on the basics. Feel free to revisit the advanced topics as many times you need afterwards. So when you get to the CSS lesson don't let it overwhelm you. You only need a few basic notions from there and I pinpoint exactly which ones.**

<br><br><br>
## What is HTML
Html is a format used to write web documents (web pages). The name stands for Hyper Text Markup Language. Hyper means it's more advanced than normal text. Markup means a system of notations used to enrich the way text looks. Think of Word editor but instead of using the user interface to modify text appearance you use special text notations.

Before Html was introduced different standards of writting documents were employed for different needs. The most popular ones were the formats used by popular word editors. However the web has some special requirements which made those formats unsuitable.

Html by itself it is a very simple language. All elements are displayed in a linear fashion. And styling options are prety basic. To enable rich design and interactivity you need CSS and Javascript. These will be explained in later chapters.  

<br><br><br>
## Why was it created?
*Requirements of the early web*

- **Low file size** - Web documents need to travel over computer networks and this was an issue especially in the first years of the internet. The documents need to be transfered as fast as possible. This is a pressing issue even in todays market but for larger documents such as pictures and videos.
- **Modularity** - Because images are taking way more space than text then it is necessary to be able to display the document even before the images have arrived. In the old days you would see the image actually loading line by line. Currently this process is blazingly fast, but so have the file sizes increased. So the fight for speed is still there but at a greater scale.
- **Human readable** - Due to the nature of the web, these documents needed to be prepared fast and delivered fast. So the best approach was to skip the clumsy editors and just type formatting by hand. For example a title would be indicated by using a heading 1 tag. `<h1>Some interesting title to catch the attention</h1>`
- **Hyper links** - Hyper links were build in from the start. They allow quick navigation between documents using the so called URLs or routes (Unique Resource Locator). This was an innovative feature that made the web pages a more covenient medium to bind big collections of pages. You could browse a big collection of files without spending too much effort by reading them one by one. 

<br><br><br>
## What can HTML do 
*The main features that are need to know for any web developer*

The main unit in HTML is the tag. These have many types and also can be custumised using attributes. For example setting the height of an image.

Html tag | Description
--- | ---
**Paragraphs**<br>`<p>Text</p>` |  They allow splitting of text like in traditional print media, delimiting blocks of text. Some default spacing is applied to skip this effort for the user.
**Images**<br>`<img src="..."></img>` |  Well, this is obvious. 
**Links**<br>`<a href="..."></a>` |  Indicators that can point to another document (or even another section)
**Lists**<br>`<ul><li>Item 1</li> ... </ul>` |  Bullet lists are very often used in webpages.
**Dividers**<br>`<div></div>` |  By far the most used element in web pages. They are extremely useful in grouping other elements together. They can be used to move content around in page as a group. Without these dividers most web pages would all look the same. A linear progression of text and images. Think of these dividers as containers wehere you can put stuff inside and than move it around. For example: On a products page, each of the products has a title, an image, a price and a link. What keeps these elements together in a nice box? A divider. Thus it is really easy to specify to the brwoser that only 4 products should appear per row by setting the divider width to 25%. `<div class="product" style="width:25%">`. Of course, styles should not be inline but this we will discuss in CSS section.
**Tables**<br>`<table><tr><td>Content</td></tr></table>` |  They are most useful for displaying tabelar data. Rows and columns. In the early stages of the web these elements were abused by using them for grouping page elements together in order to obtain certain layouts. This created the problem of having hard to modify page layouts due to the rules that tables have build in. You cannot always fit and split elements between a fixed numeber of cells (rows and columns). Currently by far the best approach for this problem is to use dividers and to position them independently of each other.
**Buttons**<br>`<button>` |  Any user interface needs buttons. Otherwise how can the user interact with the page? thse buttons can come in many shapes and sizes using css but the standard one uses windows default style.
**Forms**<br>`<form></form>` |  Forms are used to enable the webpage to collect user data. Usually forms have multiple fields and a confirmation button. A recent trend is to build forms that save information autoamtically. But this is already requiring Javascript know-how. We will get there.
**SVG**<br>Standard Vector Graphics<br>`<svg></svg>`|  This is an element that has become more and more popular. It allows the creation of intricate and interactive graphics using lines and geometric shapes. There is a big difference betwenn raster and vector graphics but we will touch the subject later in next chapters.
~~~~~~~~~~~~~~~~~~~~~~~ | ~~~~~~~~~~~~~~~~~~~~~~~

**REMEMBER There are many other elements and they tend to be really specialised for speciffic scenarios. An experienced developer will know countless more tags and their uses but this doesn't stop you from going ahead and building web apps while learning the details along the way.**
What you really need to know is outlined here. Not knowing these elements and their basic behaviour is a show stopper. I would recommend spending some time online researching some of the details about those main elements. However, there is no need to go overboard and spend two weeks on studying only HTML. More knowledge will acummulate in time just by working on real projects. I know it feels unconfortable reading those strange tags without knowing their full meaning. 

**There is a tradeoff to be made here. It's either fast and laser focused or slow and detailed with the potential risk of loosing steam sooner than the course ends.** I will deliver on the promise of fast learning if you are willing to accept that some details will be learned along the way. My recipy is to give you only the hotest subjects that make or break a developer career.

Feel free to search online for all of these element to find further details. As stated before this is the place where you gain spatial orientation, but the web is the place where you study.

<br><br><br>
## Why HTML matters
*What role does it play in app/website building*
- Html is used to layout the foundation of the application. It's the pillars you put in the ground to sustain the whole building. It's the walls that separate different sections and offer support for the more attractive elements such as text, image and video.

<br><br><br>
## Tasks
*These are simple tasks meant to teach you the basics. In the next lessons the tasks will be closer to real life scenarios*
- **Basic page** 
    - Create a HTML file named `index.html` which displays the text "This is My first HTML document" in a paragraph. 
    - Open this page in a browser. So far you don't need a server, the browser alone can open simple html files.
    - Change the title of the page that is visible in the browser topbar. Use `<title>` tag in the `<head>` section. If you don't have a head section add it now. 

            <html>
                <head>
                    <!-- This is a comment tag. Comment tags are useful for leaving notes behind 
                    explaining the purpose of the code. I strongly advise leaving comments behind. 
                    Your human memory is prone to forget the exact details so you will do yourself 
                    a service by explaining WHY you did something in the code -->
                    <!-- This section contains the so called metadata of a page. 
                    This data that is intended for the browser, not for the user. 
                    This is were tipically you will find links to external styleseets or to scripts. 
                    Some specialised tags can often be seen here but right now you don't need to know them. 
                    Let's keep it simple and fun. -->
                </head>
                <body>
                    <!-- This is where we display the content of the page. 
                    Everything that is placed here will be displayed in the page. 
                    Of course, except comments or commented code -->
                    <!-- <div>This div is not going to show up</div> -->
                </body>
            </html>

- **How to write text**
    - Now add a few paragraphs `<p>`. Don't know what to write? Use faux text http://lipsum.com/. It will keep you focused on the task instead of the content. 
    - Now add even more paragraphs by copy/paste. Soon you will see the browser scrollbar.
    - Try separating half of the pargraphs using `<hr>` tag. I know this is a new one, I never said it's one of the most used tags but that's how you get to learn HTML. Bit by bit.
    - Also try adding some distance between two paragraphs by using `<br/>` tag. Notice taht both `<hr>` and  `<br/>` Don't have pairs. This is an exception. Most tags have pairs.
    - Add a few headings `<h2>` between paragraphs to simulate a real article with text sections.
- **Images**
    - Add a few images saved on your own computer. Anything will do, use https://9gag.com/ for nice memes. 
    - Also add an image using an online address. Grab an image url from any existing website. Some of them might have protection against mirroring. 
    - Set the with of the image to 100%. Notice that the aspect ratio stays the same.
- **Simple list**
    - Add a list of notes using bullets. Just write your wishes for this year. 
    - Also try making an ordered list with numbers using `<ol>` tag.
    - Instead of text try using images to see what happens.
    - Also create a list of links unsing `<a>` to the top 5 websites you use.
- **Simple user inputs**
    - Create two text input fields "Name" "Pasword" and a "Save" button. Well, the pass will be visible but it doesn't matter right now. 
    - Put them inside a `<div>` and change the divider background color to something nice. Don't worry about actual form behavior, just create a basic layout.
    - Before the inputs also add a title. Usually a `<h1>` will do it. 
    - Try adding a checkbox, and a dropdown options. Search online: "How to add checkbox in html",  "How to add dropdown in html".
- **Contact list table**
    - Let's try creating a contact lists table containing 3 columns by 10 rows. 
    - Label the columns in the table using table headings tag `<th>`
- **Basic sidebar layout**
    - Create a new file and add two dividers. Set 20% and 80% widths using inline style attribute. Add some text in each of these divs.
    - Now lets learn a new trick. Add `styles="float: left"` attribute to both divs. Voila, your first layout. Floating elements are a staple of web design. In time you will learn to master them. Right now let's just note that this is possible. In CSS section we learn more about how. 

Now you have a basic understanding of HTML. From here on we will build from this knowledge litle by litle by repetition. There is no need right now to learn more HTML. It wont help you right now. For example I havent mention about `<video>` and `<audio>` tags because most projects don't use them. Now the next step is to learn how HTML and CSS can work together. Before going further, if you have been working on the tasks and not just reading the samples now it's time to compare notes.
[Basic html samples](https://github.com/visual-space/visual-school/blob/master/01-basic-html-and-css/01-my-first-html/01-first-html-tags/index.html)

**A reminder, this content is best viewed if downloaded in local computer. This way you can open the index.html in the browser. On the other hand it's better to read the tutorials on github because it parses the md files. I want to keep this tutorial as close to the real developer setup so this is the way to go forward.**

*If you insist on knowing them all go ahead and binge. I'm not going to ruin your fun but I'll let you know that this course is going to take more than 4 weeks :D
https://www.w3schools.com/tags/default.asp*

<br><br><br>
## Real life situations
- Very often the first task of a webdesigner is to create the **layout of an website**. Setting up the navigation menu, the sidebar and so on. This is an entire field of study by itself. But don't loose faith. There are also some **common desing patterns**. Searhc for "How to create a simple sidebar layout in HTML"
- A lot of applications have listings of tabular data. Quite often this is done to show for example the users in a system and some details about them. Or a list of ordered products. An so on.
- Very often you will see the catalog pattern. That is a page having products with images, descriptions price and a link to the product page. This simple layout is achieved using a basic HTML template and some code that repeats the same template over and over again. We will discuss abotu the code later on.
- There are a few patterns that have emerged over time: Catalog, Blog, Wiki, Calendar, Gallery, etc.
- Pro tip: The nesting you see in any HTML document doesn't serve any particular syntactic role. It is just visual aid for people to easily understand the relations between nested elements. Try reading a block of HTML that is not properly formated. It is pure pain.
- In the first years of the web each HTML document was edited by hand. So if a big website needed to add a new section, al the documents had to be updated manually. This led to the invention of server side scripting languages such as PHP. These were able to generate HTML documents on request by asembling HTML fragment into full pages thus avoiding code duplication. Also adding information from databases was a huge step forward.
- Avoid long blocks of text. This is going to be repulsive for any visitor. Notice the way I used headings, subheadings, bullet lists, links, images (not yed :D ) and tables to keep the content looking interesting.

<br><br><br>
## Search for
*Reading other sources always helps to piece together the puzzle*
- What is HTML
- How is HTML loaded
- Why is HTML important
- How to link images
- How to link other pages
- What is index.html
- How to make an image stretch
- When was HTML invented
- What is word wrapping

<br><br><br>
## Search for (advanced)
*These are optional searches for advanced students*
*Come back later if you don't wish to spend time right now*
- What does parsing HTML mean https://stackoverflow.com/questions/39242280/what-parsing-the-page-means
- What is an iframe
- Is iframe still used
- F shape reading pattern
- Click heatmap
- Image aspect ratio
- Url naming conventions
- What is DNS
- How do you register a domain
- Why domains cost money

**PRO TIP**
When looking online for tutorials and articles, check the date of the article. If it is written in the last 1 or 2 years it is very likely to have up to date information. This is really important for frontend development. Technology evolves at a rapid pace and it's best to stay up to date with the latest.

**PRO TIP 2**
Very often I have to figure out if something is used by many other people and thus if it is popular. There are several ways to achieve this: 
    - Looking for number of results in a search engine.
    - Using google trends tool to aproximate if the popularity is increasing or decreasing.
    - Looking on stackoverflow for the number of questions about this subject.
    - Looking on github for the number of stars that a library has.
    - Looking on npm for the number of monthly downloads. Popular libraries tend to have huge numbers.
    - Using a google chrome plugin named Alexa traffic rank I can evaluate if the hompeage of the project is really popular.
    - Sometimes even a facebook page or a reddit group can give me a hint if it has many likes or upvotes. But this is rarely happening.

Well, of course searching for popular stuff might have it's drawbacks, you are not going to learn about the emerging technologies until they have been adopted in mass. But for a beginer it's best to stick with the flock. The more popular a subject is the easier is to find support and tutorials online.

<br><br><br>
## More subjects
*Learn more than the basics*
*Come back later if you don't wish to spend time right now*

Advanced Subject | Description
--- | ---
**Document Object Model** | This is a technical term but it is used very often in programming. It's good to be aware from the begining about this term. Document means the page itself. Object means a collection of data and functions that make the document come to life. Meaning the actual code that the browser runs in order to display HTML (Yeah I know, this is getting complicated). Model means the **shape / structure / organisation** of the object, in plain words what data it has stored / attahced / assigned to it and how can the functions of this object affect this data. Data usually means the properties of the dom elements such as width, height, color, background, etc. If you have trouble understanding these notions don't worry. They are actually related to Object Oriented Programming. Bare with me for a few days and you will understand exactly what **DOM** means. Just remender that sometimes HTML elements are also code **DOM nodes** especially when entering the Javascript world. Nodes it's a fancy term for information / data that is bundled / tied / knoted / grouped  together under the same label. 
**HTML versions** | Over the years, many additions were added to the HTML language. Latest version is version 5 and it has elements for playing sound and video, rendering 2d and 3d graphics and many other improvements. Search for **HTML5**, **Semantic tags**. Before Html5 a popular technology for rendering advanced graphics was Flash. Search for **Flash vs HTML5**, **Why was flash abandoned**
**Heavy page with huge numbers of nodes and update cycles** | For advanced applications the HTML layer tends to be the **main source of performance loss**. This is because modern apps tend to create very complex HTML documents and also to change them on the fly reacting to user input. Due to the fact that HTML has a visual representation on screen and can react to a lot of document events, a complex computer algorythm is needed to process the state of the document and to render it. This makes it one of the heaviest parts of the page rendering process. In future chapters we will learn how to keep this problem under control.
**Adaptive design** | is a trend that has reaced maturity in the modern web. This is one of the main requirements from a project. This means that the same layout is able to render nice on multiple screen sizes from huge tvs to small smartphones.
**HTML validators** | Validators have been for a long time a popular tool for checking the integrity and quality of the HTML documents. Nowadays they are built in the editors that are commonly used to write web apps. So expect to see warnings when your code is not valid.
**Psd 2 HTML** | this is the name of the process of taking a design document and creating the HTML specified in the design. Design are usually generated with a graphichs software solution such as Photoshop, Illustrator or Gimp. Over the years this process became more an more specialised. 
**SEO**<br>Search Engine Optimisation | This is a difficult subject to master. There are entire companies are built only for this purpose. My simple approach is to follow the google mantra: **Write content for humans**. In simple words this means writting content that a human can easily comprehend, is well defined and structured. Uses bullet lists, bold, itals, emphasys and various other text markup. All the images and links should provide alternative descriptions and titles. The content has links towards websites that are closely related to the content subject. The content has keywords that are varied but yet stay in the same domain reinforcing the probability that certain content will be shown for certain search queries. For example this whole page discussing the topic of HTML should be a preety good mix for google search engine to deliver it on top of the result pages for queries related to learning html. But this is already enough said. I won't touch SEO too much because web apps in general they tend to care less about SEO. Of course, there are web apps that are absolutely going to need SEO to help the content reach the target public.
**DOM is not the only way to structure content** | There are many other formats out there used to structure content. Android and iOs have their own languages built for this task in native aps. Windows applications also have their own way of handling view structure. Here we are focusing on web apps structure, and this is maintained using HTML. 
**URL**<br>Unique Resource Locator | If you opened a webpage by now you have learned about the website address or URL. This structure is quite sophisticated. Some of the urls might look really strange because no whitespace is allowed so they use `%20` to denote whitespace. Usually they have this composition: <br><br>**Protocol** `https://` <br>Protocol is defining how the browser and server are supposed to exchange information. In this case it means that the connection will be secure.<br><br>**Domain** `github`<br>The domain is the name of the website. <br><br>**Top level domain** `.com`<br>The top level domain is an umbrela category usually containing all the websites in a country. But there are many other TLDs. <br><br>**Website route** `/visual-space/visual-school`. <br>The route is the part of the url that explains how to reach a certain document from this specific server. Similar to how My Computer has partitions and folders. <br><br> I have skipped URL params for a later discussion. Right now this should give you a feeling of what are URLs.<br><br>**Naming convetions** <br> You might have noticed the strange naming conventions used in the project structure. This has several reasons. Hyphens where used instead of whitespace to conform to the no whites space rule of routes but still keep the url readable. <br><br> Urls need to be readable because people tend to share them on social media and email when they can read them easily. Then everyhing is written in small caps. Capital letters are allowed. However, to maintain **consistency** (meaning to be predictable without triggering confusion) I avoided them. <br><br> Then there is the numbering scheme. I used numbers so that the chapters shoud up in the right order in windows explorer if you download the repository. And I used 0 in front of single digit numbers to prevent sorting issue that can arrise from github sorting algorithm and also to keep a nice consistent spacing. Of course the big assumption is that I don't go beyound 99. But this would not be a big issue. I could have used underscore charecters `like_this` but I find this convention really obnoxious in URLs. These naming conventions are very common in web apps folder structure. <br><br> **DNS and IP** <br> You might also wonder how the browser knows how to open a website when you type urls. But here we have to digg into *Domain Name Service* and *Internet Protocol* addresses. These subjects are not necessary for a beginner student to build simple apps. <br><br> Compare these two links <br><br> Has white space <br>`https://github.com/visual-space/visual-school/blob/master/01%20-%20Basic%20Html/01%20-%20My%20first%20html/README%2001%20-%20My%20first%20html.md`<br><br> No white space <br>`https://github.com/visual-space/visual-school/tree/master/01-basic-html-and-css/01-my-first-html`
**No clear boundries between HTML CSS JS** | In the beginning it will be really confusing to see HTML mixed with CSS and even Javascript. It is really confusing to learn about this subject if you can't really identify which is which. The truth is that HTML alone has little use in modern websites. No modern page would have attractive design without CSS and Javascript. If you want to see how a raw HTML looks like visit some of the original webpages from the 90's such as: [A history of HTML](https://www.w3.org/People/Raggett/book4/ch02.html). Press `Ctrl+U` to access the source of the page and you will see plain old html. Nothing special.
 ~~~~~~~~~~~~~~~~~~~~~~~ | ~~~~~~~~~~~~~~~~~~~~~~~

<br><br><br>
## **Common mistakes** 
Mistake | Description
--- | ---
**Using tables for layouts** | They tend to force the designer to split elements that do not fit perfectly between columns and rows. Not to mention that tables should render tabular data, not layouts. 
**Adding styles inline** | This techniques was abolished with the invention of CSS. Inline styles are hard to change in one shot. Changing them is time consuming and prone to mistakes and typos.
**Storing HTML markup together with text content in the database** | This is not the most friendly format to changes and updates. It's really hard to work with data when it also contains HTML tags. This means higher maintainance costs, lower productivity.
**Mixing HTML code with fragments of code** | Well... current day framework React does it but without problem. This is because there is a method and a plan behind this behaviour. In the past this was a mistake because people added code without thinking too much how it might impact other parts of the page. Or without properly documenting their solutions. This made it extremely hard to maintain or update webpages. 
**Renaming a file and editing on the open tab in the editor** | When you work on a file and the editor keeps an internal copy of the document. If it happens that you want to rename that file, which tends to happen a lot during programming, remember to close and reopen the file. Otherwise the modification will be saved under the old name and you will than delete the old one thinking that you have the modifications in the new one. Bumer, you just lost all your new content since the renaming. This can be easily fix if you use a versioning software such as **SVN** or **Git**. We will talk about git repositories in the following chapter.
~~~~~~~~~~~~~~~~~~~~~~~ | ~~~~~~~~~~~~~~~~~~~~~~~

<br><br><br>
# Links and Resources
- https://stackoverflow.com/questions/1795438/load-and-execution-sequence-of-a-web-page
- An excelent book on the subject of designing the layout of webpages "Don't make me think" https://www.amazon.com/Dont-Make-Me-Think-Usability/dp/0321344758
- This is where I first started learning this trade back in highschool, 12 years ago I suppose... Thank you w3schools! https://www.w3schools.com/
- W3C Validator, checks if your html is properly validated https://validator.w3.org/

<br><br><br>
# Remember
*Do not forget these tags. This is the bread and butter of the web. Learn them and master them in time!*

      <html>
      <header>
      <style>
      <script>
      <body>
      <div>
      <p>
      <a>
      <ul>
      <li>
      <img>
      <form>
      <button>
      <table>
      <svg>


