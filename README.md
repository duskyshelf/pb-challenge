# Static Content challenge

**Build**

I used a simple node/express setup with mocha/chai for testing.

To run, use the following console commands:  
1) npm install  
2) npm start  
and then visit one of the 3 relevant urls:  
<http://localhost:3000/about-page>  
<http://localhost:3000/jobs>  
<http://localhost:3000/valves>  

Tests can be run by using:  
1) npm test  
(NB the app must not be running during the tests otherwise you will get an error message)

**Challenges**

I initially tried to use a view engine (e.g. mustache, handlebars, etc) to pull the data into the template.html file, but most solutions I found required changing the file structure within the application which I wanted to avoid.

After a few tests, I eventually decided to build my own using the node.js file system functions to read template.html directly and replace the {{content}} tag with the text from the markdown files.

If I wanted to build this into a larger app, I would probably go back and build in a view engine as they add a lot of useful functionality and make it easier to create more complex templates.

**Final Refactor**

I initially built this app with the routes hardcoded, but I felt I could improve on this.

As I had a passing test suite, I decided to refactor the routes into a single dynamic url. This route checks if the url matches any folders within the structure and returns the relevant index.md file.

