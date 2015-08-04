import Operations, {OPS} from '../operations';
import Resource from '../modules/resource';

@Operations(OPS.DELETE, OPS.CREATE, OPS.FIND_ALL)
export default class Remoteconnection extends Resource {};
