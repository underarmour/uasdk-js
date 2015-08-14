import {API_0_1 as api} from '../../../';
import assert from 'assert';
import * as vars from '../utils/variables';

describe('Course Map', () => {
  describe('#findOne()', () => {
    it('Should return a 200 response' , () => {
      return api.courseMap
        .findOne(vars.courseId)
        .then((data) => {
          assert.equal(200, data.statusCode);
        });
    });
  });
});
