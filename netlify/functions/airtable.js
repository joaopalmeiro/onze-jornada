const Airtable = require('airtable');

// Source:
// - https://github.com/scottbram/CinemaTron/blob/prod/functions/at_get_movie.js
// - https://github.com/gtalarico/aec-startups/blob/master/lambda/airtable.js
// - https://docs.netlify.com/functions/build-with-javascript/#synchronous-function-format
// - https://www.freecodecamp.org/news/how-to-access-secret-api-keys-using-netlify-functions-in-a-react-app/
// - https://www.npmjs.com/package/airtable
// - https://github.com/aavf/react-airtable-crud/blob/master/functions/airtableList/airtableList.js

// Locally: http://localhost:8888/.netlify/functions/airtable
// https://airtable.com/api
exports.handler = function (event, context, callback) {
  // Check the output on the terminal:
  // console.log(event);
  // console.log(context);

  const { AIRTABLE_API_KEY, AIRTABLE_BASE_ID } = process.env;

  const base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(AIRTABLE_BASE_ID);
  const table = base('Table 1');

  const data = [];

  table
    .select({
      view: 'Grid view'
    })
    .eachPage(
      function page(records, fetchNextPage) {
        records.forEach(function (record) {
          // data.push(record);
          // data.push(record.fields);
          data.push(record._rawJson);
        });

        // `fetchNextPage()`: to fetch the next page of records.
        // If there are more records, `page()` will get called again.
        // If there are no more records, `done()` will get called.
        fetchNextPage();
      },
      function done(err) {
        if (err) {
          console.error(err);

          return callback(null, {
            // statusCode: 400, // User error code (Bad Request)
            statusCode: 500, // Server error code (Internal Server Error)
            body: JSON.stringify(err)
          });
        }

        // console.log(data);

        callback(null, {
          statusCode: 200, // Success code (OK)
          body: JSON.stringify(data)
        });
      }
    );
};
