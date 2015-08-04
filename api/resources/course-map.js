import Operations, {OPS} from '../operations';
import Resource from '../modules/resource';

@Operations(OPS.FIND_ONE)
class CourseMap extends Resource {}

export default CourseMap;
