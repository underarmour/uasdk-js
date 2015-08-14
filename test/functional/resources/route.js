import {API_7_1 as api} from '../../../';
import assert from 'assert';
import * as vars from '../utils/variables';

describe('Route', () => {
  describe('#find()', () => {
    it('Should return a 200 response' , () => {
      return api.route
        .find({
          minimum_distance: 1,
          maximum_distance: 5000,
          close_to_location: vars.closeToLoc
        })
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

  describe('#findByUser()', () => {
    it('Should return a 200 response' , () => {
      return api.route
        .findByUser(vars.userId)
        .then((data) => {
          assert.equal(200, data.statusCode);
        });
    });
  });
});
