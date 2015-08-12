import Request from './base-request';

const DEFAULT_HOST = 'api.ua.com/';
const DEFAULT_PORT = 443;
const DEFAULT_SCHEME = 'https';

export default function builder () {
  return Request.builder()
    .withHost(DEFAULT_HOST)
    .withPort(DEFAULT_PORT)
    .withScheme(DEFAULT_SCHEME);
}
