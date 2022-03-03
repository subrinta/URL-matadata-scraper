# URL-matadata-scraper
This project returns Matadata about the searched website.
I have added Test files also.

**To check through postman**  
1. Download the code.
2. In terminal run "node ./src/index.js"
3. Open postman send a post request to "localhost:3000/scraple" with Json data in body.
4. The Json data should be like : 
{
  "url": "http://www.bloomberg.com/news/articles/2016-05-24/as-zenefits-stumbles-gusto-goes-head-on-by-selling-insurance"
}
give the url link as the value to the url.
It returns the Metadata of the website, you can see it in the responce.

**To check through test case**
1. Download the code.
2. In terminal run "npm run test"
3. It gives success result for proper execution.
