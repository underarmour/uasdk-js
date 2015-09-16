var Builder = require('./requestBuilder');

function VXProxyStrategy (options) {
  this.scheme = options.scheme || 'https';
  this.host = options.host || 'api.uacf.io';
  this.port = options.port || 443;
}

VXProxyStrategy.prototype.requestBuilder = function (method, version, uri, options) {
  var builder =  new Builder()
    .withScheme(this.scheme)
    .withHost(this.host)
    .withPort(this.port)
    .withPath('/vxproxy/' + version + '/' + uri + '/' + (options.id || ''))
    .withHeaders({
      'Content-Type': 'application/json'
    });

  return builder;

}

module.exports = VXProxyStrategy;
