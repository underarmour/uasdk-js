import HttpManager from '../http-manager';
import performRequest from '../modules/request-manager';

function create (parameters) {
  let options = Object.assign({
    'params' : parameters
  }, this.uri, this.version);
  return performRequest(HttpManager.post, options);
}

export default create;
