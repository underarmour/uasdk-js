import HttpManager from '../http-manager';
import performRequest from '../modules/request-manager';

function del (id) {
  let options = Object.assign({
    'id' : id
  }, this.uri, this.version);
  return performRequest(HttpManager.del, options);
}

export default del;
