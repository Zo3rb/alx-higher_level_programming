#!/usr/bin/node

const request = require('request');
const url = process.argv[2];

request.get(url, { json: true }, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    const completedTasksByUser = body.reduce((acc, todo) => {
      if (todo.completed) {
        const userId = todo.userId;

        return {
          ...acc,
          [userId]: (acc[userId] || 0) + 1
        };
      } else {
        return acc;
      }
    }, {});

    console.log(completedTasksByUser);
  }
});
