import api from '../../../';
import assert from 'assert';
import * as vars from '../utils/variables';

describe('Map Marker Image', () => {
  describe('#findByText()', () => {
    it('Should return a 200 response' , () => {
      return api.mapMarkerImage
        .findByText('distance')
        .then((data) => {
          assert.equal(200, data.statusCode);
        });
    });
  });

  describe('Map Marker Image', () => {
    describe('#findByIds()', () => {
      it('Should return a 200 response' , () => {
        return api.mapMarkerImage
          .findByIds([2,3,4])
          .then((data) => {
            assert.equal(200, data.statusCode);
          });
      });
    });
  });

  describe('#findOne()', () => {
    it('Should return a 200 response' , () => {
      return api.mapMarkerImage
        .findOne(3)
        .then((data) => {
          assert.equal(200, data.statusCode);
        });
    });
  });
});
