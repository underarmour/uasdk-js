import Operations, {OPS} from '../operations';
import Resource from '../modules/resource';

@Operations(OPS.FIND_ONE, OPS.FIND)
export default class Course extends Resource {};
