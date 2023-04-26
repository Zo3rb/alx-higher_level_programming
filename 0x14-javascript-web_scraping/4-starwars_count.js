#!/usr/bin/node

const request = require('request');
const url = process.argv[2];
let wedgeCount = 0;

request.get(url, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    const films = JSON.parse(body).results;

    for (const film of films) {
      if (
        film.characters.includes(
          'https://swapi-api.alx-tools.com/api/people/18/'
        )
      ) { wedgeCount++; }
    }

    console.log(wedgeCount);
  }
});
