# Random Quote Machine

Challenge for the "Front End Development Libraries" module of FreeCodeCamp

https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-random-quote-machine

---

You can use any mix of HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux, and jQuery to complete this project. You should use a frontend framework (like React for example) because this section is about learning frontend frameworks. Additional technologies not listed above are not recommended and using them is at your own risk. We are looking at supporting other frontend frameworks like Angular and Vue, but they are not currently supported. We will accept and try to fix all issue reports that use the suggested technology stack for this project. Happy coding!

## User stories

- #**01**: I can see a wrapper element with a corresponding `id="quote-box"`.
- #**02**: Within `#quote-box`, I can see an element with a corresponding `id="text"`.
- #**03**: Within `#quote-box`, I can see an element with a corresponding `id="author"`.
- #**04**: Within `#quote-box`, I can see a clickable element with a corresponding `id="new-quote"`.
- #**05**: Within `#quote-box`, I can see a clickable a element with a corresponding `id="tweet-quote"`.
- #**06**: On first load, my quote machine displays a random quote in the element with `id="text"`.
- #**07**: On first load, my quote machine displays the random quote's author in the element with `id="author"`.
- #**08**: When the `#new-quote` button is clicked, my quote machine should fetch a new quote and display it in the `#text` element.
- #**09**: My quote machine should fetch the new quote's author when the `#new-quote` button is clicked and display it in the `#author` element.
- #**10**: I can tweet the current quote by clicking on the `#tweet-quote` a element. This a element should include the `"twitter.com/intent/tweet"` path in its `href` attribute to tweet the current quote.
- #**11**: The `#quote-box` wrapper element should be horizontally centered. Please run tests with browser's zoom level at 100% and page maximized.

**Note**: Twitter does not allow links to be loaded in an iframe. Try using the `target="_blank"` or `target="_top"` attribute on the #tweet-quote element if your tweet won't load. `target="_top"` will replace the current tab so make sure your work is saved.
