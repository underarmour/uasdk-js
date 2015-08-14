import HttpManager from '../requests/httpManager';
import performRequest from '../requests/requestManager';

function del (id) {
  return performRequest(HttpManager.del, Object.assign(id, this.uri, this.version));
}

export default del;
