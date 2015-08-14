import HttpManager from '../requests/httpManager';
import performRequest from '../requests/requestManager';

function findAll (limit, offset) {
  return performRequest(HttpManager.get, Object.assign(this.uri, this.version));
}

export default findAll;
