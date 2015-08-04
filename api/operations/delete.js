import HttpManager from '../http-manager';
import performRequest from '../modules/request-manager';

function del (id) {
  return performRequest(HttpManager.del, Object.assign(id, this.uri, this.version));
}

export default del;
