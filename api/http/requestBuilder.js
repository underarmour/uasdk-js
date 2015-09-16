function Request (builder) {
  if (!builder) { throw new Error('No builder supplied to constructor'); }
  this.host = builder.host;
  this.port = builder.port;
  this.scheme = builder.scheme;
  this.queryParameters = builder.queryParameters;
  this.bodyParameters = builder.bodyParameters;
  this.headers = builder.headers;
  this.path = builder.path;
}

Request.prototype.getHost = function () { return this.host }
Request.prototype.getPort = function () { return this.port }
Request.prototype.getScheme = function () { return this.scheme }
Request.prototype.getPath = function () { return this.path }
Request.prototype.getQueryParameters = function () { return this.queryParameters }
Request.prototype.getBodyParameters = function () { return this.bodyParameters }
Request.prototype.getHeaders = function () { return this.headers }

Request.prototype.setPath = function (path) { this.path = path }

Request.prototype.getURI = function () {
  if (!this.scheme || !this.host || !this.port) {
    throw new Error('Missing components necessary to construct URI');
  }
  var uri = this.scheme + '://' + this.host;
  if (this.scheme === 'http' && this.port !== 80 || this.scheme === 'https' && this.port !== 443) {
    uri += ':' + this.port;
  }
  if (this.path) {
    uri += this.path;
  }
  return uri + '/';
}

Request.prototype.getURL = function () {
  return this.getURI() + this.getQueryParameterString();
}

Request.prototype.addQueryParameters = function (queryParameters) {
  Object.keys(queryParameters).forEach(function (key) {
    this.addQueryParameter(key, queryParameters[key]);
  }, this);
}

Request.prototype.addQueryParameter = function (key, value) {
  this.queryParameters = this.queryParameters || {};
  this.queryParameters[key] = value;
}

Request.prototype.addBodyParameters = function (bodyParameters) {
  Object.keys(bodyParameters).forEach(function (key) {
    this.addBodyParameter(key, bodyParameters[key]);
  }, this);
}

Request.prototype.addBodyParameter = function (key, value) {
  this.bodyParameters = this.bodyParameters || {};
  this.bodyParameters[key] = value;
}

Request.prototype.addHeaders = function (headers) {
  if (!this.headers) {
    this.headers = headers;
    return;
  }
  Object.keys(headers).forEach(function (key) {
    this.headers[key] = headers[key];
  }, this);
}

Request.prototype.getQueryParameterString = function () {
  var queryParameters = this.getQueryParameters();
  if (!queryParameters) { return ''; }
  var params = Object.keys(queryParameters).map(function (param) {
    return param + '=' + queryParameters[param];
  });
  return '?' + params.join('&');
}

function Builder () {}

Builder.prototype.withHost = function (host) {
  this.host = host;
  return this;
}

Builder.prototype.withPort = function (port) {
  this.port = port;
  return this;
}

Builder.prototype.withScheme = function (scheme) {
  this.scheme = scheme;
  return this;
}

Builder.prototype.withQueryParameters = function (queryParameters) {
  this.queryParameters = queryParameters;
  return this;
}

Builder.prototype.withPath = function (path) {
  this.path = path;
  return this;
}

Builder.prototype.withBodyParameters = function (bodyParameters) {
  this.bodyParameters = bodyParameters;
  return this;
}

Builder.prototype.withHeaders = function (headers) {
  this.headers = headers;
  return this;
}

Builder.prototype.build = function () {
  return new Request(this);
}

module.exports = Builder;
