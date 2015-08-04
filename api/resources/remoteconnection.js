import Operations, {OPS} from '../operations';
import Resource from '../modules/resource';

@Operations(OPS.DELETE, OPS.CREATE, OPS.FIND_ALL)
class Remoteconnection extends Resource {}

export default Remoteconnection;
