// https://alisdair.mcdiarmid.org/simple-nodejs-tests-with-assert-and-mocha/
// https://nodejs.org/api/all.html#assert_assert
const assert = require('assert');

const tileUrl = require('../index');
const data = require('./data.js');

describe('tile-url', function() {

  describe('module.exports', function() {

    data.forEach((test) => {

      it('should return an array with one string (loop)', function() {

        assert.deepEqual(
          tileUrl(test.input),
          test.output
        );

      });

    });

    it('should return an array with one string', function() {

      assert.deepEqual(
        tileUrl(data[5].input),
        data[5].output
      )

    });

    it('should return an array of strings (method arguments)', function() {

      assert.deepEqual(
        tileUrl(data[0].input, data[3].input),
        [
          data[0].output[0],
          data[3].output[0]
        ]
      )

    });

    it('should return an array of strings (using apply)', function() {

      const input = data.map(key => key.input);
      const output = data.map(key => key.output[0]);

      assert.deepEqual(
        tileUrl.apply(null, input),
        output
      )

    });

  });

});
