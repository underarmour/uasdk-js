import Operations, {OPS} from '../operations';
import Resource from '../modules/resource';

@Operations(OPS.FIND_ONE, OPS.FIND_ALL)

export default class GroupPurpose extends Resource {};
