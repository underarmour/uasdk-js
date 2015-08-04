import Operations, {OPS} from '../operations';
import Resource from '../modules/resource';

@Operations(OPS.FIND_ONE)
class WorkoutHeartRate extends Resource {}

export default WorkoutHeartRate;
