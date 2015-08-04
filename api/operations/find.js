import HttpManager from '../http-manager';
import performRequest from '../modules/request-manager';

function find (params) {
  return performRequest(HttpManager.get, Object.assign({}, params, this.uri, this.version));
}

export default find;
