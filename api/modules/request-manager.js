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

  if (options.params) {
    if (method === HttpManager.get)
      request.addQueryParameters(options.params);
    else
      request.addBodyParameters(options.params);
  }

  if (options.body) {
    request.addBodyParameters(options.body);
  }
  console.log(request);
  return request;
}

function performRequest (method, options){
  let request = _prepareRequest(options, method);
  return uacf.performRequest(request, method);
}

export default performRequest;
