# Temporary notes until I write this chapter
*Ignore them*

Why I don't like polymer
Webcomponents could be stored in the db as strings. Allows users to write cool articles.
However, web components and style guides currently seem to be at odds with each other. On the one hand, style guides provide a set of rules and styles that are globally applied to the page and ensure consistency across the website. On the other hand, web components with the shadow DOM prevent any global styles from penetrating their encapsulation, thus preventing the style guide from affecting them.
If we fully encapsulate all of the styles that the web component needs, then the CSS for styling paragraphs, anchor tags, input fields and so on would be duplicated across all web components that use them. This would not only increase maintenance costs, but also lead to much larger download sizes for users.
One thing that is really unclear to me is that there is no defined best practice for how to include styles and templates (HTML) with your custom element which means as a consumer of Custom elements you are at the mercy of what the component developer thinks is best.
10 Polymer jq for web comps
10 Shiping stuff is there for ages. Progress seems glacial. 
10 The broken promise of web components. Web components vs frameworks. Separate vdom. Polymer vs react. 
