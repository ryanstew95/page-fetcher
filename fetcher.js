const request = require('request');
request('http://www.google.com', (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});
const fs = require('fs');

const path = 'Some content!';
const domain = 'filler text';

fs.writeFile('/Users/joe/test.txt', domain, err => {
  if (err) {
    console.error(err);
  }
  console.log(`Downloaded and saved ${domain} bytes to ${path}`);
});