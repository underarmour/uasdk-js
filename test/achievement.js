var api = require('../');
var assert = require("assert");
import * as vars from './variables';

describe('Achievement', () => {
  describe('#findOne()', function() {
    it('Should return a 200 response achievement' , () => { // no done
        return api.achievement.findOne(3).then( (data) => {
          assert.equal(200, data.statusCode);
        });
    });
  });
});
