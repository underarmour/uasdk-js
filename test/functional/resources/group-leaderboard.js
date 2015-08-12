import {API_7_1 as api} from '../../../';
import assert from 'assert';
import * as vars from '../utils/variables';

describe('Group Leaderboard', () => {
  describe('#find()', () => {
    it('Should return a 200 response' , () => {
      return api.groupLeaderboard
        .find({
          group_id: vars.personalGroupId,
          iteration: 1
        })
        .then((data) => {
          assert.equal(200, data.statusCode);
        });
    });
  });

});
