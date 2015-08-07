import api from '../';
import assert from 'assert';
import * as vars from './variables';

describe('Activity Type', () => {

  describe('#findOne()', function() {
    it('Should return a 200 response' , () => { // no done
        return api.activityType.findOne(2).then( (data) => {
          assert.equal(200, data.statusCode);
        });
    });
  });

  describe('#findAll()', function() {
    it('Should return a 200 response' , () => { // no done
        return api.activityType.findAll().then( (data) => {
          assert.equal(200, data.statusCode);
        });
    });
  });

});
