import api from '../../../';
import assert from 'assert';
import * as vars from '../utils/variables';

describe('Course Leaderboard', () => {
  describe('#findByCriteria()', () => {
    it('Should return a 200 response' , () => {
      return api.courseLeaderboard
        .findByCriteria(vars.courseId, 3)
        .then((data) => {
          assert.equal(200, data.statusCode);
        });
    });
  });
});
