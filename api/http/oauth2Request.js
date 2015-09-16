var Builder = require('./requestBuilder');

function OAuth2Strategy (key, access_token) {
  this.key = key;
  this.access_token = access_token;
}

OAuth2Strategy.prototype.requestBuilder = function () {
  return new Builder()
    .withScheme('https')
    .withHost('api.ua.com/')
    .withPort(443)
    .withHeaders({
      'Content-Type': 'application/json',
      'Api-Key': this.key,
      'Authentication': 'Bearer ' + this.access_token
    });
}

module.exports = OAuth2Strategy;
