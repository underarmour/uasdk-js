import api from '../../../';
import assert from 'assert';
import * as vars from '../utils/variables';

describe('Achievement', () => {
  describe('#findOne()', () => {
    it('Should return a 200 response achievement' , () => {
      return api.achievement
        .findOne(3)
        .then((data) => {
          console.log('data', data);
          assert.equal(200, data.statusCode);
        });
    });
  });
});
