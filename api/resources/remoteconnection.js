import Operations from '../modules/operations';
import Resource from '../modules/resource';

@Operations(['create', 'delete', 'list'])
class Remoteconnection extends Resource {}

export default Remoteconnection;
