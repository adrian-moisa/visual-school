# Learning the basics of HTML
**Work in progress - More informations will be added. Images for showcasing the explained concepts and code samples coming soon**


## What is HTML
Html is a format used to write web documents (web pages). The name stands for Hyper Text Markup Language. Hyper means it's more advanced than normal text. Markup means a system of notations used to enrich the way text looks. Think of Word editor but instead of using the user interface to modify text appearance you use special text notations.

Before Html was introduced different standards of writting documents were employed for different needs. The most popular ones were the formats used by popular word editors. However the web has some special requirements which made those formats unsuitable.

Html by itself it is a very simple language. All elements are displayed in a linear fashion. And styling options are prety basic. To enable rich design and interactivity you need CSS and Javascript. These will be explained in later chapters.  

## Why was it created?
*Requirements of the early web*
- **Low file size** - Web documents need to travel over computer networks and this was a issue especially in the first years of the internet. The documents need to be transfered as fast as possible. This is a pressing issue even in todays market but at for larger documents that go beyound text.
- **Modularity** - Because images are taking way more space than text then it is necessary to be able to display the document even before the images have arrived. In the old days you would see the image actually loading line by line. Currently this process is blazingly fast, but so have the file sizes increased. So the fight for speed is still there but at a greater scale.
- **Human readable** - Due to the nature of the web, these documents needed to be prepared fast and delivered fast. So the best approach was to skip the clumsy editors and just type formatting by hand. For example a title would be indicated by using a heading 1 tag. `<h1>Some interesting title to catch the attention</h1>`
- **Hyper links** - Hyper links were build in from the start. They allow quick navigation between documents using the so called URLs or routes (Unique Resource Locator). This was an innovative feature that made the web pages a more covenient medium to bind big collections of pages. You could browse a big collection of files without spending too much effort by reading them one by one. 


## What can HTML do 
*The main features that are need to know for any web developer*
The main unit in html is the tag. These have many types and also can be custumised using attributes. For example setting the height of an image.
- **Paragraphs** `<p>Text</p>` They allow splitting of text like in traditional print media, delimiting blocks of text. Some default spacing is applied to skipt this effort for the user.
- **Images** `<img src="..."></img>` Well, this is obvious.
- **Links** `<a href="..."></a>` Indicators that can point to another document (or even another section)
- **Lists** `<ul><li>Item 1</li> ... </ul>` Bullet lists are very often used in webpages.
- **Dividers** `<div></div>` By far the most used element in web pages. They are extremely useful in grouping other element together. They can be used to move content around in page as a group. Without these dividers most web pages would all look the same. A linear progression of text and images.
- **Tables** `<table><tr><td>Content</td></tr></table>` They are most useful for for displaying tabelar data. Rows and columns. In the early stages of the web these elements were abused by using them for grouping page elements together in order to obtain certain layouts. This created the problem of having hard to modify page layouts due to the rules that tables have build in. You cannot always fit and split elements beteween a fixed numeber of cells (rows and columns). Currently by far the best approach for this problem is to use dividers and to position them independently of each other.
- **Forms** `<form></form>` Forms are used to enable the webpage to collect user data. Usually forms have multiple fields and a confirmation button. A recent trend is to build forms that save information autoamtically. But this is already requiring Javascript know-how. Will get there.
- **Standard Vector Graphics SVG** `<svg></svg>` This is an element that has become more and more popular. It allows the creation of intricate and interactive graphics using lines and geometric shapes. There is a big difference betwenn raster and vector graphics but we will touch the subject later in next chapters.

Feel free to search online for all of these element to find further details, As stated before this is the place where zou gain spatial orientation, but the web is the place where you study.

## Why HTML matters
**What role does it play in app/website building**
- Html is used to layout the foundation of the application. It's the pillars you put in the ground to sustain the whole building. It's the walls that separate different sections and offer support for the more attractive elements such as text, image and video.

**REMEMBER There are many other elements and they tend to be really specialised for speciffic scenarios. An experienced developer will know countless more tags and theyr uses but this doesn't stop you from going ahead and building web apps while learning the details along the way.**
What you really need to know is outlined here. Not knowing these elements and their basic behaviour is a show stopper. I would recommend spending some time online researching some of the details about those main elements but there is no need to go overboard and speend two weeks on studying only html. More knowledge will acummulate in time just by working on real projects. I know it feels unconfortable reading those strange tags without knowing theyr full meaning. **There is a tradeoff to be made here. It's either fast and laser focused or slow and detailed with the potential risk of loosing steam sooner than the course ends.** I will delvier on the promise of fast learning if you are willing to accept that some details will be learned along the way. My recipy is to give you only the hotest subjects that make or break a developer career.

## Task
- Create a html file named index.html which displays the text 'Hello world' in a paragraph.
- Open this page in a browser.
- Now add a few paragraphs.
- Add a few images.
- Add a list of notes using bullets.
- Add a image using an online address.
- Add a second image unsing a file on the disk.
- Set the with of the image to 100%.
- Create two fields Name Prename and a Save button. (no actual behavior, just layout)

## Real life situations
- Very often the first task of a webdesigner is to create the **layout of an website**. Setting up the navigation menu, the sidebar and so on. This is an entire field of study by itself. But don't loose faith. There are also some **common desing patterns**. Searhc for "How to create a simple sidebar layout in html"
- A lot of applications have listings of tabular data. Quite often this is done to show for example the users in a system and some details about them. Or a list of ordered products. An so on.
- Very often you will see the catalog pattern. That is a page having products with images, descriptions price and a link to the product page. This simple layout is achieved using a basic html template and some code that repeats the same template over and over again. We will discuss abotu the code later on.
- There are a few patterns that have emerged over time: Catalog, Blog, Wiki, Calendar, Gallery, etc.
- Pro tip: The nesting you see in any html document doesn't serve any particular syntactic role. It is just visual aid for people to easily understand the relations between nested elements. Try reading a block of html that is not properly formated. It is pure pain.
- In the first years of the web each html document was edited by hand. So if a big website needed to add a new section, al the documents had to be updated manually. This led to the invention of server side scripting languages such as PHP. These were able to generate html documents on request by asembling html fragment into full pages thus avoiding code duplication. Also adding information from databases was a huge step forward.

## Search for
- What is HTML
- How is html loaded
- Why is html important
- How to link images
- How to link other pages
- What is index.html
- How to make an image stretch
- When was HTML invented
- What does parsing html mean? https://stackoverflow.com/questions/39242280/what-parsing-the-page-means
- What is an iframe
- Is iframe still used
- F shape reading pattern
- Click heatmap

**PRO TIP**
When looking online for tutorials and articles, check the date of the article. If it is written in the last 1 or 2 years it is very likely to have up to date information. This is really important for frontend development. Technology evolves at a rapid pace and it's best to stay up to date with the latest.

**PRO TIP 2**
Very often I have to figure out if something is used by many other people and thus if it is popular. Two ways to achieve this are: 
    - Looking for number of results in a search engine after the specific technology.
    - Using google.trends tool to aproximate if the popularity is increasing or decreasing.

## More
- Over the years, many additions were added to the HTML language. Latest version is version 5 and it has elements for playing sound and video, rendering 2d and 3d graphics and many other improvements. Search for **HTML5**, **Semantic tags**. Before Html5 a popular technology for rendering advanced graphics was Flash. Search for **Flash vs HTML5**, **Why was flash abandoned**
- For advanced applications the HTML layer tends to be the **main source of performance loss**. This is because modern apps tend to create very complex html documents and also to change them on the fly reacting to user input. Due to the fact that html has a visual representation on screen and can react to a lot of document events, a complex computer algorythm is needed to process the state of the document and to render it. This makes it one of the heaviest parts of the page rendering process. I future chaoters we will learn how to keep this problem under control.
- **Adaptive design** is a trend that has reaced maturity in the modern web. This is one of the main requirements from a project. This means that the same layout is able to render nice on multiple screen sizes from huge tvs to small smartphones.
- **HTML validators** have been for a long time a popular tool for checking the integrity and quality of the HTML documents. Nowadays they are built in the editors that are commonly used to write web apps. So expect to see warnings when your code is not valid.
- **Psd 2 html** this is the name of the process of taking a design document and creating the HTML specified in the design. Design are usually generated with a graphich software solution such as Phtoshop Illustrator or Gimp. Over the years this process became more an more specialised. 

**Common mistakes** 
- Using tables for layouts
- Adding styles inline, this techniques was abolished with the invention of CSS. Inline styles are hard to change in one shot. Changing them is time consuming and prone to mistakes and typos.
- Keeping html as characters in the database. Not the most friendly format to changes and updates. It's really hard to work with data when it also contains html tags.
- Mixing html code with fragments of code. Well... current day framework React does it but without problem. This is because there is a method and a plan behind this behaviour. In the past this was a mistake because people added code without thinking too much how it might impact other parts of the page. Or without properly documenting theyr solutions. This made it extremely hard to maintain or update webpages. 

# Links and Resources
- https://stackoverflow.com/questions/1795438/load-and-execution-sequence-of-a-web-page
- An excelent book on the subject of designing the layout of webpages "Don't make me think" https://www.amazon.com/Dont-Make-Me-Think-Usability/dp/0321344758

# REMEMBER
*You are not allowed to forget about these tags, this is the rbead and butter of the web*

      <html>
      <header>
      <body>
      <div>
      <p>
      <a>
      <ul>
      <li>
      <img>
      <style>
      <script>
      <form>
      <svg>


