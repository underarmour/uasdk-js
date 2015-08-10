import api from '../../../';
import assert from 'assert';
import * as vars from '../utils/variables';

describe('Data Source', () => {
  describe('#findOne()', () => {
    it('Should return a 200 response' , () => {
      return api.dataSource
        .findOne(vars.userId)
        .then((data) => {
          assert.equal(200, data.statusCode);
        });
    });
  });

  // describe('#update()', () => {
  //   it('Should return a 200 response' , () => {
  //     var body = {
  //       "name": "updated data source name"
  //     };
  //     return api.dataSource
  //       .update(vars.userId, body)
  //       .then((data) => {
  //         assert.equal(200, data.statusCode);
  //       });
  //   });
  // });

  // describe('#create()', () => {
  //   it('Should return a 201 response' , () => {
  //     var body = {
  //       "_embedded": {
  //           "device": [
  //               {
  //                   "model": "sm-g910t",
  //                   "manufacturer": "samsung"
  //               }
  //           ]
  //       },
  //       "name": "my new samsung"
  //     };
  //     return api.dataSource
  //       .create(body)
  //       .then((data) => {
  //         assert.equal(201, data.statusCode);
  //       });
  //   });
  // });

  describe('#findByDevice()', () => {
    it('Should return a 200 response' , () => {
      return api.dataSource
        .findByDevice('samsung')
        .then((data) => {
          assert.equal(200, data.statusCode);
        });
    });
  });
});
