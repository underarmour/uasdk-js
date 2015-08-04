import Operations, {OPS} from '../operations';
import Resource from '../modules/resource';

@Operations(OPS.FIND_ONE, OPS.CREATE, OPS.FIND_ALL, OPS.DELETE)
class GroupUser extends Resource {}

export default GroupUser;
