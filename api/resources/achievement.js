import Operations, {OPS} from '../operations';
import Resource from '../modules/resource';

@Operations(OPS.FIND_ONE)
class Achievement extends Resource {}

export default Achievement;
