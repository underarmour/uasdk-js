import Operations, {OPS} from '../operations';
import Resource from '../modules/resource';

@Operations(OPS.FIND_ONE, OPS.FIND_ALL)
class GroupPurpose extends Resource {}

export default GroupPurpose;
