import Operations from '../modules/operations';
import Resource from '../modules/resource';

@Operations(['create', 'delete', 'get', 'list', 'update'])
class Usergear extends Resource {}

export default Usergear;
