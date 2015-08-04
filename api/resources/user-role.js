import Operations, {OPS} from '../operations';
import Resource from '../modules/resource';

@Operations(OPS.FIND_ONE, OPS.DELETE)
class UserRole extends Resource {}

export default UserRole;
