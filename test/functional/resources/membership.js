import api from '../../../';
import assert from 'assert';
import * as vars from '../utils/variables';

describe('Membership', () => {
  describe('#findOne()', () => {
    it('Should return a 200 response' , () => {
      return api.membership
        .findOne(vars.userId)
        .then((data) => {
          assert.equal(200, data.statusCode);
        });
    });
  });

});
