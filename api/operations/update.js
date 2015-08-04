import HttpManager from '../http-manager';
import performRequest from '../modules/request-manager';

function update (id, params = {}) {
  return performRequest(HttpManager.put, Object.assign(params, id, this.uri, this.version));
}

export default update;
