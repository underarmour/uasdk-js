import HttpManager from '../http-manager';
import performRequest from '../modules/request-manager';

function findAll () {
  return performRequest(HttpManager.get, this.uri, this.version);
}

export default findAll;
