import {API_7_1 as api} from '../../../';
import assert from 'assert';
import * as vars from '../utils/variables';

describe('Workout', () => {
  describe('#findByUser()', () => {
    it('Should return a 200 response' , () => {
      return api.workout
        .findByUser(vars.userId)
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
