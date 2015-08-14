import HttpManager from '../requests/httpManager';
import performRequest from '../requests/requestManager';

function update (id, params = {}) {
  return performRequest(HttpManager.put, Object.assign({params}, {id}, this.uri, this.version));
}

export default update;
