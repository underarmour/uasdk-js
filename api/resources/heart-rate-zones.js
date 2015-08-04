import Operations, {OPS} from '../operations';
import Resource from '../modules/resource';

@Operations(OPS.FIND_ONE, OPS.CREATE)
class HeartRateZones extends Resource {}

export default HeartRateZones;
