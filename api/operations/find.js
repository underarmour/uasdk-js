import HttpManager from '../http-manager';
import performRequest from '../modules/request-manager';

function find (parameters) {
  let options = Object.assign({
    'params' : parameters
  }, this.uri, this.version);
  return performRequest(HttpManager.get, options);
}

export default find;
