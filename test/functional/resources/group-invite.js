import {API_V_7 as api} from '../../../';
import assert from 'assert';
import * as vars from '../utils/variables';

describe('Group Invite', () => {
  describe('#findByCriteria()', () => {
    it('Should return a 200 response' , () => {
      return api.groupInvite
        .findByCriteria(vars.groupId, vars.userId)
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
