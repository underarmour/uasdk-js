import Operations, {OPS} from '../operations';
import Resource from '../modules/resource';

@Operations(OPS.FIND_ONE, OPS.CREATE, OPS.UPDATE, OPS.FIND)
export default class AlldayActivity extends Resource {};
