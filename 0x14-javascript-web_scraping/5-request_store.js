#!/usr/bin/node

const fs = require('fs');
const request = require('request');

const url = process.argv[2];
const filePath = process.argv[3];

request.get(url, { encoding: 'utf-8' }, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    fs.writeFile(filePath, body, { encoding: 'utf-8' }, (error) => {
      if (error) return console.error(error);
    });
  }
});
