import api from '../../../';
import assert from 'assert';
import * as vars from '../utils/variables';

describe('Allday activity', () => {
  describe('#findOne()', () => {
    it('Should return a 200 response' , () => {
      return api.alldayActivity
        .findOne(1)
        .then((data) => {
          assert.equal(200, data.statusCode);
        });
    });
  });

  describe('#find()', () => {
    it('Should return a 200 response' , () => {
      return api.alldayActivity
        .find({
          data_source: vars.userId,
          target_end_datetime: vars.endDate,
          target_start_datetime: vars.startDate,
          user: vars.userId
        })
        .then((data) => {
          assert.equal(200, data.statusCode);
        });
    });
  });
});
