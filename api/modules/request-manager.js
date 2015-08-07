import WebApiRequest from '../webapi-request';
import uacf from '../../../uacf';
import HttpManager from '../http-manager';

function _prepareRequest (options, method) {
  let request = WebApiRequest.builder()
    .withPath(options.version + '/' + options.uri +'/')
    .withHeaders({
      'Content-Type' : 'application/json',
      'Api-Key' : uacf.getClientId(),
      'Authorization' : 'Bearer ' + uacf.getAccessToken()
    })
    .build();
  if (options.id) {
    request.setPath(request.getPath() + options.id);
  }
  if (options.group) {
    request.addHeaders(options.group);
  }

  for (var property in options) {
    if (options.hasOwnProperty(property)) {
      if ((property !== 'id') || (property !== 'group') || (property !== 'version') || (property !== 'uri')) {
        if (method === HttpManager.get){
          request.addQueryParameter(property, options[property]);
        }
        else {
          request.addBodyParamete(property, options[property]);
        }
      }
    }
  }
  return request;
}

function performRequest (method, options){
  let request = _prepareRequest(options, method);
  return uacf.performRequest(request, method);
}

export default performRequest;
