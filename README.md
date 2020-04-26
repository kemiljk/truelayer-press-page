# README

**You can view the page live at: [TrueLayer Press Page on GitHub](https://kemiljk.github.io/truelayer-press-page/)** 

## Wayfinding/Research/References

* I chose to reference a non-exhaustive list of press pages and news organisations to help influence structuring of the page
* It felt logical to pull from these types of pages instead of reinventing the wheel as I wanted to ensure the site was user accessible and intuitive to navigate

## Decision process

* I wanted to remain close to TrueLayer's brand. I firstly chose to review the live site in its entirety and record the page templates that I could notice
* Initially I thought about mirroring the About us/Contact us pages as I felt Press should live alongside these, but decided against this and chose to create a bespoke layout that honoured some of the existing styling but with some custom elements
* I chose to blockframe this to get something in place to work from structurally, this can be seen in the 'Design Assets' folder in the zip file
* Once I had a basic structure ready, I needed to go about obtaining the classes and structure of the site to build from
  * Using inspect element, I deconstructed the page source and pulled the bare HTML page and relevant CSS and JS files (although most JS is not in major use)
  * I did not choose to use any specific additional frameworks or libraries, although JQuery is imported, it's not used beyond any existing implementation
* I then went about destructuring the HTML to create a basic structure that felt akin to the blockframe as well as TrueLayer's brand guidelines
* Once this was done, I could build the relevant blocks up inline, following the TrueLayer styleguide as best as I could from inspecting source and reviewing the CSS files
* Finally, once I had a clear structure and all blocks and classes in place, I could go about creating the custom classes I needed and designing some bespoke illustrations

### Article hero

* The article hero is the first bespoke object I created, it's the page hero article and is reserved for the most important announcements
* This announcement may not always be the most recent if there's something that TrueLayer want to call out for a longer period
* The hero features some custom CSS classes that can be found in test-truelayer.css under `Article Hero Card`

### Article grid

* I chose to build a bespoke CSS Grid for the More Articles section
* This Grid uses a 1/3 2/3 split for grid objects that flips for each row (on desktop), on mobile breakpoints, this switches to a full width grid
* If I was to build this with a framework or more JS, then I'd utilise a component here to render the cards from JSON or an API fetch, this way the HTML will be slim (important for if there were lots of articles to pull)
* I created some further custom classes for this so I could build my own grid and bring in some hover effects, these can be found in test-truelayer.css under `Article cards`
* I've referenced an `Archive` view, this would ideally either navigate to a new page (as implied in the current code) or possibly swap out the article view in place if it utilised components and a routing table

### Twitter card / thoughts for the future

* The Twitter card featured some further customisation
* This section was intended as a place to show what people are saying about TrueLayer around the web, in this current implementation it's just the @TrueLayer feed, but I would want to develop this further to include other social feeds where applicable and be less account-focused and more social-listening-focused

### End block

* The final block is aimed to be a call to action for people wanting to write specific articles about TrueLayer with their help/direct involvement
* This call to action takes the user to the contact us page

## Images

* I created two bespoke illustrations in the style of TrueLayer's brand
* These illustrations are featured in the Hero header and the Twitter section's bg
* These are both exported to SVG and included in the code as well as the zip package in the `Design Assets` folder

## Accessibility

* I chose to alter one element of the existing system in aid of accessibility. I wanted to record this here so it's not seen as a mistake.
* The current Sun btn looks great, but the white text at that small size on that yellow background fails common accessibility tests for size and contrast
* As such, I've created a new text class to temporarily override this behaviour and replace white text with Black (`#2d2d2d` as per guidelines)
* I strongly believe this should be considered a global change for better accessibility in general but appreciate this can be tricky when aesthetics are at play