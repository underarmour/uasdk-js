import {API_7_1 as api} from '../../../';
import assert from 'assert';
import * as vars from '../utils/variables';

describe('Gear', () => {
  describe('#findByBrand()', () => {
    it('Should return a 200 response' , () => {
      return api.gear
        .findByBrand('samsung')
        .then((data) => {
          assert.equal(200, data.statusCode);
        });
    });
  });

  describe('#findByQuery()', () => {
    it('Should return a 200 response' , () => {
      return api.gear
        .findByTerms('flex')
        .then((data) => {
          assert.equal(200, data.statusCode);
        });
    });
  });

  describe('#findOne()', () => {
    it('Should return a 200 response' , () => {
      return api.gear
        .findOne(1)
        .then((data) => {
          assert.equal(200, data.statusCode);
        });
    });
  });

  // describe('#delete()', () => {
  //   it('Should return a 200 response' , () => {
  //     return api.gear
  //       .findOne(1)
  //       .then((data) => {
  //         assert.equal(200, data.statusCode);
  //       });
  //   });
  // });

});
