import Operations, {OPS} from '../operations';
import Resource from '../modules/resource';

@Operations(OPS.FIND_ONE, OPS.FIND_ALL)
class ActivityType extends Resource {}

export default ActivityType;
