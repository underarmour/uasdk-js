'use strict';

// Dependencies
import AuthenticationRequest from '../authentication-request';
import WebApiRequest from '../webapi-request';
import PromiseImpl from 'promise';
import iso8601 from 'iso8601';


class UACF {
  constructor(credentials) {
    this._credentials = credentials || {};
  }

  _addBodyParameters(request, options) {
    if (options) {
      for (var key in options) {
        if (key !== 'credentials') {
          request.addBodyParameter(key, options[key]);
        }
      }
    }
  }

  _addQueryParameters(request, options) {
    if (!options) {
      return;
    }
    for (var key in options) {
      if (key !== 'credentials') {
        request.addQueryParameter(key, options[key]);
      }
    }
  }

  performRequest(request, method) {
    var promiseFunction = function(resolve, reject) {
      method(request, function(error, result) {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    };
    return new PromiseImpl(promiseFunction);
  }

  _addAccessToken(request, accessToken) {
    if (accessToken) {
      request.addHeaders({
        'Authorization' : 'Bearer ' + accessToken
      });
    }
  }

  setCredentials (credentials) {
    for (var key in credentials) {
      if (credentials.hasOwnProperty(key)) {
        this._credentials[key] = credentials[key];
      }
    }
  }

  getCredentials () {
    return this._credentials;
  }

  resetCredentials () {
    this._credentials = null;
  }

  _setCredential(credentialKey, value) {
    this._credentials = _credentials || {};
    this._credentials[credentialKey] = value;
  }

  _getCredential(credentialKey) {
    if (!this._credentials) {
      return;
    } else {
      return this._credentials[credentialKey];
    }
  }

  _resetCredential(credentialKey) {
    if (!this._credentials) {
      return;
    } else {
      this._credentials[credentialKey] = null;
    }
  }

  setClientId (clientId) {
    this._setCredential ('clientId', clientId);
  }

  setClientSecret (clientSecret) {
    this._setCredential('clientSecret', clientSecret);
  }

  setAccessToken (accessToken) {
    this._setCredential('accessToken', accessToken);
  }

  setRefreshToken (refreshToken) {
    this._setCredential('refreshToken', refreshToken);
  }

  setRedirectURI (redirectUri) {
    this._setCredential('redirectUri', redirectUri);
  }

  getRedirectURI () {
    return this._getCredential('redirectUri');
  }

  getClientId () {
    return this._getCredential('clientId');
  }

  getClientSecret () {
    return this._getCredential('clientSecret');
  };

  getAccessToken () {
    return this._getCredential('accessToken');
  }

  getRefreshToken () {
    return this._getCredential('refreshToken');
  }

  resetClientId () {
    this._resetCredential('clientId');
  }

  resetClientSecret () {
    this._resetCredential('clientSecret');
  }

  resetAccessToken () {
    this._resetCredential('accessToken');
  }

  resetRefreshToken () {
    this._resetCredential('refreshToken');
  }

  resetRedirectURI () {
    this._resetCredential('redirectUri');
  }

}

export default UACF;
