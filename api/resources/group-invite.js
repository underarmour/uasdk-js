import Operations, {OPS} from '../operations';
import Resource from '../modules/resource';

@Operations(OPS.FIND_ONE, OPS.CREATE, OPS.DELETE, OPS.FIND, OPS.UPDATE)
export default class GroupInvite extends Resource {};
