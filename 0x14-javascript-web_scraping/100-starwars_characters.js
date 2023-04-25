#!/usr/bin/node

const request = require('request');
const movieId = process.argv[2];
const url = `https://swapi.dev/api/films/${movieId}/`;

request.get(url, { json: true }, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    const characterUrls = body.characters;
    characterUrls.forEach((characterUrl) => {
      request.get(characterUrl, { json: true }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
          console.log(body.name);
        }
      });
    });
  }
});
