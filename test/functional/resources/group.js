import {API_V_7 as api} from '../../../';
import assert from 'assert';
import * as vars from '../utils/variables';

describe('Group', () => {
  describe('#findOne()', () => {
    it('Should return a 200 response' , () => {
      return api.group
        .findOne(vars.groupId)
        .then((data) => {
          assert.equal(200, data.statusCode);
        });
    });
  });

  describe('#find()', () => {
    it('Should return a 200 response' , () => {
      return api.group
        .find({
          keyword: 'run',
          search_radius: '1000',
          user_id: vars.userId
        })
        .then((data) => {
          assert.equal(200, data.statusCode);
        });
    });
  });
});
