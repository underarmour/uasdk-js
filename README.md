JavaScript SDK - Under Armour Connected Fitness
=========

An SDK to wrap UA's Connected Fitness APIs.

## Installation

  `npm install uasdk-js`

## Usage

```javascript
var sdk = require('uacf-sdk');
sdk.use(new sdk.strategies.OAuth2Strategy({
  apiKey: '...',
  accessToken: '...'
});

sdk.api_7_1.user.findOne(userId)
  .then(function () {
    ...
  });
```

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality.
Lint and test your code.
