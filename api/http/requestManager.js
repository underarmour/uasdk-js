var requestManager = Object.create(null);
var strategy;

requestManager._prepareRequest = function (method, version, uri, options) {
  var req = strategy.requestBuilder(method, version, uri, options)
    .build();

  if (method === 'get') {
    Object.keys(options)
      .filter(function (key) {
        return ['id', 'group', 'version', 'uri'].indexOf(key) === -1;
      })
      .forEach(function (key) {
        req.addQueryParameter(key, options[key]);
      });
  }

  if (options.params && ((method === 'put') || (method === 'post'))) {
    req.addQueryParameters(options.params);
  }

  return req;
};

requestManager.performRequest = function (method, version, uri, options) {
  var request = requestManager._prepareRequest(method, version, uri, options);
  return window.fetch(request.getURL(), {
    method: method,
    headers: request.getHeaders(),
    body: JSON.stringify(request.getBodyParameters())
  });
};

requestManager.use = function (authStrategy) {
  strategy = authStrategy;
}

module.exports = requestManager;
