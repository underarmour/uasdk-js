import api from '../../../';
import assert from 'assert';
import * as vars from '../utils/variables';

describe('Route', () => {
  describe('#findRoutes()', () => {
    it('Should return a 200 response' , () => {
      return api.route
        .findRoutes(1, 5000, vars.closeToLoc)
        .then((data) => {
          assert.equal(200, data.statusCode);
        });
    });
  });

  describe('#findOne()', () => {
    it('Should return a 200 response' , () => {
      return api.route
        .findOne(vars.routeId)
        .then((data) => {
          assert.equal(200, data.statusCode);
        });
    });
  });

  describe('#findByUserId()', () => {
    it('Should return a 200 response' , () => {
      return api.route
        .findByUserId(vars.userId)
        .then((data) => {
          assert.equal(200, data.statusCode);
        });
    });
  });
});
