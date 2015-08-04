import Operations, {OPS} from '../operations';
import Resource from '../modules/resource';

@Operations(OPS.FIND_ONE)
class UserStats extends Resource {}

export default UserStats;
