import HttpManager from '../http-manager';
import performRequest from '../modules/request-manager';

function findById (id, data) {
  let options = {};
  if (data) {
    options = Object.assign(data, { 'id': id }, this.uri, this.version);
  }
  else {
    options = Object.assign({ 'id': id }, this.uri, this.version);
  }
  return performRequest(HttpManager.get, options);
}

export default findById;
