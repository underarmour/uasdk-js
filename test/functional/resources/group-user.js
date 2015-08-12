import {API_V_7 as api} from '../../../';
import assert from 'assert';
import * as vars from '../utils/variables';

describe('Group User', () => {
  describe('#findOne()', () => {
    it('Should return a 200 response' , () => {
      return api.groupUser
        .findOne(vars.groupUserId)
        .then((data) => {
          assert.equal(200, data.statusCode);
        });
    });
  });

  describe('#find()', () => {
    it('Should return a 200 response' , () => {
      return api.groupUser
        .find({
          group_id: vars.groupId,
          user_id: vars.userId
        })
        .then((data) => {
          assert.equal(200, data.statusCode);
        });
    });
  });
});
