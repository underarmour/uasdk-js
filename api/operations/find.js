import HttpManager from '../requests/httpManager';
import performRequest from '../requests/requestManager';

function find (params = {}) {
  return performRequest(HttpManager.get, Object.assign(params, this.uri, this.version));
}

export default find;
