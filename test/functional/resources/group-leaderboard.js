import {API_V_7 as api} from '../../../';
import assert from 'assert';
import * as vars from '../utils/variables';

describe('Group Leaderboard', () => {
  describe('#findByCriteria()', () => {
    it('Should return a 200 response' , () => {
      return api.groupLeaderboard
        .findByCriteria(vars.personalGroupId, 1)
        .then((data) => {
          assert.equal(200, data.statusCode);
        });
    });
  });

});
