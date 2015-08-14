import HttpManager from '../requests/httpManager';
import performRequest from '../requests/requestManager';

function create (params = {}) {
  return performRequest(HttpManager.post, Object.assign({params}, this.uri, this.version));
}

export default create;
