const dfd = require('danfojs-node');
const array = require('lodash/array');
const util = require('lodash/util');

const numberGames = 34;
const numberPlayers = 11;

const positions = ['GR', 'DD', 'DCD', 'DCE', 'DE', 'MD', 'MC', 'ME', 'AD', 'AC', 'AE'];

// More info:
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// - https://danfo.jsdata.org/api-reference/dataframe/dataframe.to_csv
const data = {
  Posição: array.flatten(util.times(numberGames, util.constant(positions))),
  Jornada: array
    .flatten(util.times(numberPlayers, util.constant(util.range(1, numberGames + 1))))
    .sort((a, b) => a - b)
};

const df = new dfd.DataFrame(data);

df.to_csv('boilerplate.csv')
  .then((csv) => {
    console.log(csv);
  })
  .catch((err) => {
    console.log(err);
  });
