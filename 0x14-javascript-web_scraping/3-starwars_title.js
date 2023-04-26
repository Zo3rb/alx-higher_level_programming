#!/usr/bin/node

const request = require('request');
const id = process.argv[2];

request.get(
  `https://swapi-api.alx-tools.com/api/films/${id}`,
  (error, response, body) => {
    if (error) return console.error(error);
    const movieData = JSON.parse(body);
    console.log(movieData.title);
  }
);
