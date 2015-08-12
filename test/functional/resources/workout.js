import {API_7_1 as api} from '../../../';
import assert from 'assert';
import * as vars from '../utils/variables';

describe('Workout', () => {
  describe('#findForUser()', () => {
    it('Should return a 200 response' , () => {
      var info = {
        activity_type: 11,
        started_after: vars.startDate,
        started_before: vars.endDate,
        user: vars.userId
      };
      return api.workout
        .findForUser(info)
        .then((data) => {
          assert.equal(200, data.statusCode);
        });
    });
  });

  describe('#findOne()', () => {
    it('Should return a 200 response' , () => {
      return api.workout
        .findOne(vars.workoutId)
        .then((data) => {
          assert.equal(200, data.statusCode);
        });
    });
  });
});
