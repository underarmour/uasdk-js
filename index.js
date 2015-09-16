var api_0_1 = require('./api/api/api_0_1');
var api_7_1 = require('./api/api/api_7_1');
var requestManager = require('./api/http/requestManager');
var strategies = require('./api/http/strategies');

module.exports = {
  api_0_1: api_0_1,
  api_7_1: api_7_1,
  use: function (strategy) {
    requestManager.use(strategy);
  },
  strategies: strategies
}
