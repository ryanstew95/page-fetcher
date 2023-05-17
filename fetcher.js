const request = require('request');

const fs = require('fs');

const path = process.argv[3];
const domain = process.argv[2];

request(domain, (error, response, body) => {
  if (error) {
    console.error(error);
  }

  // console.log('statusCode:', response && response.statusCode);

  fs.writeFile(path, body, err => {
    if (err) {
      console.error(err);
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${path}`);
  });

});
