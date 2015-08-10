import api from '../../../';
import assert from 'assert';
import * as vars from '../utils/variables';

describe('Webhook', () => {
  describe('#findOne()', () => {
    it('Should return a 200 response' , () => {
      return api.webhook
        .findOne(4)
        .then((data) => {
          assert.equal(200, data.statusCode);
        });
    });
  });

  describe('#findAll()', () => {
    it('Should return a 200 response' , () => {
      return api.webhook
        .findAll()
        .then((data) => {
          assert.equal(200, data.statusCode);
        });
    });
  });
});
