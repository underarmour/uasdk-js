import api from '../';
import assert from 'assert';
import * as vars from './variables';

describe('Aggregate', () => {

  describe('#findSpecific()', function() {
    it('Should return a 200 response' , () => { // no done
        return api.aggregate.find({
          data_types: 'steps_summary',
          end_datetime: vars.endDate,
          start_datetime: vars.startDate,
          user_id: vars.userId
        }).then( (data) => {
          assert.equal(200, data.statusCode);
        });
    });
  });

});
