import {API_7_1 as api} from '../../../';
import assert from 'assert';
import * as vars from '../utils/variables';

describe('Remoteconnectiontype', () => {
  describe('#findOne()', () => {
    it('Should return a 200 response' , () => {
      return api.remoteconnectiontype
        .findOne(2)
        .then((data) => {
          assert.equal(200, data.statusCode);
        });
    });
  });

  describe('#findAll()', () => {
    it('Should return a 200 response' , () => {
      return api.remoteconnectiontype
        .findAll()
        .then((data) => {
          assert.equal(200, data.statusCode);
        });
    });
  });
});
