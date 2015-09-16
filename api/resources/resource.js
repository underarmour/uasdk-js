var requestManager = require('../http/requestManager');
var performRequest = requestManager.performRequest;

function Resource (uri, version) {
  this.uri = uri;
  this.version = version;
}

Resource.prototype.create = function (params) {
  params = params || {};
  return performRequest('post', this.version, this.uri, params);
}

Resource.prototype.find = function (params) {
  params = params || {};
  return performRequest('get', this.version, this.uri, params);
}

Resource.prototype.findOne = function (id, params) {
  params = params || {};
  params.id = id;
  return performRequest('get', this.version, this.uri, params);
}

Resource.prototype.findAll = function (limit, offset) {
  var params = {};
  if (typeof limit !== 'undefined' && limit !== null) {
    params.limit = limit;
  }
  if (typeof offset !== 'undefined' && offset !== null) {
    params.offset = offset;
  }
  return performRequest('get', this.version, this.uri, params);
}

Resource.prototype.update = function (id, params) {
  params = params || {};
  params.id = id;
  return performRequest('put', this.uri, this.version, params);
}

Resource.prototype.delete = function (id) {
  return performRequest('delete', this.uri, this.version, {id: id});
}

module.exports = Resource;
