import api from '../../../';
import assert from 'assert';
import * as vars from '../utils/variables';

describe('User Profile Photo', () => {
  describe('#findAll()', () => {
    it('Should return a 200 response' , () => {
      return api.usergear
        .findAll()
        .then((data) => {
          assert.equal(200, data.statusCode);
        });
    });
  });

  describe('#findOne()', () => {
    it('Should return a 200 response' , () => {
      return api.usergear
        .findOne(vars.usergearId)
        .then((data) => {
          assert.equal(200, data.statusCode);
        });
    });
  });

});
