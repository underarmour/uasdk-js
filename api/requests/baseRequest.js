class Request {

  constructor (builder) {
    if (!builder) { throw new Error('No builder supplied to constructor'); }
    this.host = builder.host;
    this.port = builder.port;
    this.scheme = builder.scheme;
    this.queryParameters = builder.queryParameters;
    this.bodyParameters = builder.bodyParameters;
    this.headers = builder.headers;
    this.path = builder.path;
  }

  getHost () { return this.host }
  getPort () { return this.port }
  getScheme () { return this.scheme }
  getPath () { return this.path }
  getQueryParameters () { return this.queryParameters }
  getBodyParameters () { return this.bodyParameters }
  getHeaders () { return this.headers }

  setPath () { this.path = path }

  getURI () {
    if (!this.scheme || !this.host || !this.port) {
      throw new Error('Missing components necessary to construct URI');
    }
    var uri = `${this.scheme}://${this.host}`;
    if (this.scheme === 'http' && this.port !== 80 || this.scheme === 'https' && this.port !== 443) {
      uri += `:${this.port}`;
    }
    if (this.path) {
      uri += this.path;
    }
    return uri;
  }

  getURL () {
    let uri = this.getURI();
    if (this.getQueryParameters()) {
      return uri + this.getQueryParameterString(this.getQueryParameters());
    }
    return uri;
  }

  addQueryParameters (queryParameters) {
    for (let key in queryParameters) {
      this.addQueryParameter(key, queryParameters[key]);
    }
  }

  addQueryParameter (key, value) {
    if (!this.queryParameters) {
      this.queryParameters = {};
    }
    this.queryParameters[key] = value;
  }

  addBodyParameters (bodyParameters) {
    for (let key in bodyParameters) {
      this.addBodyParameter(key, bodyParameters[key]);
    }
  }

  addBodyParameter (key, value) {
    if (!this.bodyParameters) {
      this.bodyParameters = {};
    }
    this.bodyParameters[key] = value;
  }

  addHeaders (headers) {
    if (!this.headers) {
      this.headers = headers;
      return;
    }
    for (let key in headers) {
      this.headers[key] = headers[key];
    }
  }

  getQueryParameterString () {
    let queryParameters = this.getQueryParameters();
    if (!queryParameters) {
      return;
    }
    let queryParameterString = '?';
    let first = true;
    for (let key in queryParameters) {
      if (queryParameters.hasOwnProperty(key)) {
        if (!first) {
          queryParameterString += '&';
        } else {
          first = false;
        }
        queryParameterString += `${key}=${queryParameters[key]}`;
      }
    }
    return queryParameterString;
  }
}

class Builder {

  constructor () {
    let host, port, scheme, queryParameters, bodyParameters, headers, jsonBody;
  }

  withHost (host) {
    this.host = host;
    return this;
  }

  withPort (port) {
    this.port = port;
    return this;
  }

  withScheme (scheme) {
    this.scheme = scheme;
    return this;
  }

  withQueryParameters (queryParameters) {
    this.queryParameters = queryParameters;
    return this;
  }

  withPath (path) {
    this.path = path;
    return this;
  }

  withBodyParameters (bodyParameters) {
    this.bodyParameters = bodyParameters;
    return this;
  }

  withHeaders (headers) {
    this.headers = headers;
    return this;
  }

  build () {
    return new Request(this);
  }

}

export default function builder () {
  return new Builder();
};
