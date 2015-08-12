import {API_7_1 as api} from '../../../';
import assert from 'assert';
import * as vars from '../utils/variables';

describe('User', () => {
  describe('#self()', () => {
    it('Should return a 200 response' , () => {
      return api.user
        .self()
        .then((data) => {
          assert.equal(200, data.statusCode);
        });
    });
  });

  describe('#findOne()', () => {
    it('Should return a 200 response' , () => {
      return api.user
        .findOne(vars.userId)
        .then((data) => {
          assert.equal(200, data.statusCode);
        });
    });
  });
});
