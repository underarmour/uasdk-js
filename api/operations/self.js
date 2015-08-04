import HttpManager from '../http-manager';
import performRequest from '../modules/request-manager';

function self () {
  let options = Object.assign({
    'id' : 'self',
  }, this.uri, this.version);
  return performRequest(HttpManager.get, options);
}

export default self;
