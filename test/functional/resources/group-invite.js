import {API_7_1 as api} from '../../../';
import assert from 'assert';
import * as vars from '../utils/variables';

describe('Group Invite', () => {
  describe('#find()', () => {
    it('Should return a 200 response' , () => {
      return api.groupInvite
        .find({
          group_id: vars.groupId,
          user_id: vars.userId
        })
        .then((data) => {
          assert.equal(200, data.statusCode);
        });
    });
  });

  describe('#findOne()', () => {
    it('Should return a 200 response' , () => {
      return api.groupInvite
        .findOne(3)
        .then((data) => {
          assert.equal(200, data.statusCode);
        });
    });
  });
});
