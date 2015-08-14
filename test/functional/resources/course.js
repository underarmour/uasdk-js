import {API_7_1 as api} from '../../../';
import assert from 'assert';
import * as vars from '../utils/variables';

describe('Course', () => {
  describe('#findOne()', () => {
    it('Should return a 200 response' , () => {
      return api.course
        .findOne(vars.courseId)
        .then((data) => {
          assert.equal(200, data.statusCode);
        });
    });
  });

  describe('#find()', () => {
    it('Should return a 200 response' , () => {
      return api.course
        .find({
          course: vars.courseId
        })
        .then((data) => {
          assert.equal(200, data.statusCode);
        });
    });
  });
});
