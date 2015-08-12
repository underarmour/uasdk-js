import Operations, {OPS} from '../operations';
import Resource from '../modules/resource';

@Operations(OPS.FIND_ONE, OPS.CREATE, OPS.FIND, OPS.FIND_ALL)
export default class DataSourcePriority extends Resource {};
