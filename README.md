# Static Content challenge

**Build**

I used a simple node/express setup with mocha/chai for testing.

To run, use the following console commands:
1) npm install
2) npm start
and then visit one of the 3 relevant urls:
http://localhost:3000/about-page
http://localhost:3000/jobs
http://localhost:3000/valves

Tests can be run by using:
1) npm test
(NB the app must not be running during the tests otherwise you will get an error message)

**Challenges**

I initially tried to use a view engine (e.g. mustache, handlebars, etc) to pull the data into the template.html file, but most solutions I found required changing the file structure within the application.

After a few tests, I eventually decided to build my own using "node fs" to read template.html directly and replace the {{content}} tag with the text from the markdown files.

I would rather have gotten one of the view engines to work as they add a lot more functionality and can be used more dynamically, but this was the simplest solution I could find at this point.

