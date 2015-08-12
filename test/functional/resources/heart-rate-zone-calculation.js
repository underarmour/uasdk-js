import {API_V_7 as api} from '../../../';
import assert from 'assert';
import * as vars from '../utils/variables';

describe('Heart Rate Zone Calculation', () => {
  describe('#findByMaxHR()', () => {
    it('Should return a 200 response' , () => {
      return api.heartRateZoneCalculation
        .findByMaxHR(140)
        .then((data) => {
          assert.equal(200, data.statusCode);
        });
    });
  });

  describe('#findByAge()', () => {
    it('Should return a 200 response' , () => {
      return api.heartRateZoneCalculation
        .findByAge(25)
        .then((data) => {
          assert.equal(200, data.statusCode)
        });
    });
  });
});
