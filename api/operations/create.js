import HttpManager from '../http-manager';
import performRequest from '../modules/request-manager';

function create (params = {}) {
  return performRequest(HttpManager.post, Object.assign({params}, this.uri, this.version));
}

export default create;
