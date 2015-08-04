import Operations, {OPS} from '../operations';
import Resource from '../modules/resource';

@Operations(OPS.FIND_ONE, OPS.CREATE, OPS.FIND_ALL, OPS.UPDATE)
class Bodymass extends Resource {}

export default Bodymass;
