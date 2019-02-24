const gtu = require('../index');
const data = require('./data');

const urls = [];

try {

  // Example of how to pass multiple data objects:
  const input = [
    data[0].input,
    data[7].input
  ]

  // Use apply if array of objects. Or, just pass one object,
  // or multiple objects, seperated by a comma:
  const url = gtu.apply(null, input);

  // Array of strings returned, so we can use the spread operator and
  // destructure to construct a new, flat, array of url strings:
  urls.push(... url);

} catch(err) {

  console.log('Error:', err);

}

console.log('Urls:', urls);
