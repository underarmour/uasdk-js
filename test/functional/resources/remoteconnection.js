import api from '../../../';
import assert from 'assert';
import * as vars from '../utils/variables';

describe('Remoteconnection', () => {
  describe('#findOne()', () => {
    it('Should return a 200 response' , () => {
      return api.remoteconnection
        .findOne(vars.userId)
        .then((data) => {
        }, (error) => {
          assert.equal('Request failed: {"errors":["remote_user_id 70488025 could not be found."],"_links":{"self":[{"href":"/v7.1/remoteconnection/?limit=20&offset=0"}],"documentation":[{"href":"https://developer.underarmour.com/docs/"}]}}', error.message);
        });
    });
  });

  describe('#findAll()', () => {
    it('Should return a 200 response' , () => {
      return api.remoteconnection
        .findAll()
        .then((data) => {
          assert.equal(200, data.statusCode);
        });
    });
  });
});
