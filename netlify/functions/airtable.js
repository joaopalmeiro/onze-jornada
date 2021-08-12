const Airtable = require('airtable');

// Source:
// - https://github.com/scottbram/CinemaTron/blob/prod/functions/at_get_movie.js
// - https://github.com/gtalarico/aec-startups/blob/master/lambda/airtable.js
// - https://docs.netlify.com/functions/build-with-javascript/#synchronous-function-format
// - https://www.freecodecamp.org/news/how-to-access-secret-api-keys-using-netlify-functions-in-a-react-app/

// Locally: http://localhost:8888/.netlify/functions/airtable
exports.handler = async function (event, context) {
  // Check the output on the terminal.
  // console.log(event);
  // console.log(context);

  return {
    statusCode: 200,
    body: JSON.stringify({ body: 'Hello' })
  };
};
