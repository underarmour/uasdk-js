import api from '../../../';
import assert from 'assert';
import * as vars from '../utils/variables';

describe('Bodymass', () => {
  describe('#findOne()', () => {
    it('Should return a 200 response' , () => {
      return api.bodymass
        .findOne(2)
        .then((data) => {
          assert.equal(200, data.statusCode);
        });
    });
  });

  describe('#findAll()', () => {
    it('Should return a 200 response' , () => {
      return api.bodymass
        .find({
          target_end_datetime: vars.endDate,
          target_start_datetime: vars.startDate
        })
        .then((data) => {
          assert.equal(200, data.statusCode);
        });
    });
  });
});
