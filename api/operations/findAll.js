import HttpManager from '../http-manager';
import performRequest from '../modules/request-manager';

function findAll (limit, offset) {
  return performRequest(HttpManager.get, Object.assign(this.uri, this.version));
}

export default findAll;
