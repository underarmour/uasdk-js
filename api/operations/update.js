import HttpManager from '../http-manager';
import performRequest from '../modules/request-manager';

function update (id, parameters) {
  let options = Object.assign({
    'id' : id,
    'params' : parameters
  }, this.uri, this.version);
  return performRequest(HttpManager.put, options);
}

export default update;
