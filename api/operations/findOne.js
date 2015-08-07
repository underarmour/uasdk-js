import HttpManager from '../http-manager';
import performRequest from '../modules/request-manager';
import find from './find';

function findOne (id, params = {}) {
  if (id === null || typeof id === 'undefined') { throw new Error('id required'); }
  return find.call(this, (Object.assign(params, {id}, this.uri, this.version)));
}

export default findOne;
