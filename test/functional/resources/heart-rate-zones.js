import {API_7_1 as api} from '../../../';
import assert from 'assert';
import * as vars from '../utils/variables';

describe('Heart Rate Zones', () => {
  describe('#findOne()', () => {
    it('Should return a 200 response' , () => {
      return api.heartRateZones
        .findOne(10)
        .then((data) => {
          assert.equal(200, data.statusCode);
        });
    });
  });

  describe('#findAll()', () => {
    it('Should return a 200 response' , () => {
      return api.heartRateZones
        .findByUser(vars.userId)
        .then((data) => {
          assert.equal(200, data.statusCode);
        });
    });
  });
});
