import Operations, {OPS} from '../operations';
import Resource from '../modules/resource';

@Operations(OPS.FIND_ONE, OPS.CREATE, OPS.DELETE, OPS.FIND_ALL, OPS.UPDATE)
class Usergear extends Resource {}

export default Usergear;
