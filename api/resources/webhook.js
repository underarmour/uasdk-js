import Operations from '../modules/operations';
import Resource from '../modules/resource';

@Operations(['create', 'get', 'list', 'update'])
class Webhook extends Resource {}

export default Webhook;
