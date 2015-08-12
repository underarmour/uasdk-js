import {API_V_7 as api} from '../../../';
import assert from 'assert';
import * as vars from '../utils/variables';

describe('Group Purpose', () => {
  describe('#findOne()', () => {
    it('Should return a 200 response' , () => {
      return api.groupPurpose
        .findOne(2)
        .then((data) => {
          assert.equal(200, data.statusCode);
        });
    });
  });

  describe('#findAll()', () => {
    it('Should return a 200 response' , () => {
      return api.groupPurpose
        .findAll()
        .then((data) => {
          assert.equal(200, data.statusCode);
        });
    });
  });
});
