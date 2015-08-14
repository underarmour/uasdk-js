import {API_7_1 as api} from '../../../';
import assert from 'assert';
import * as vars from '../utils/variables';

describe('Sleep', () => {
  describe('#findByPeriod()', () => {
    it('Should return a 200 response' , () => {
      return api.sleep
        .findByPeriod(vars.startDate, vars.endDate)
        .then((data) => {
          assert.equal(200, data.statusCode);
        });
    });
  });

  // Missing by Id

});
