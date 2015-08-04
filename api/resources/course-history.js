import Operations, {OPS} from '../operations';
import Resource from '../modules/resource';

@Operations(OPS.FIND_ONE)
class CourseHistory extends Resource {

  findByCriteria (courseId, userId, activityTypeId) {
    let id = courseId.toString() + userId.toString();
    return this.findOne(id, {activity_type_id: activityTypeId});
  }

}

export default CourseHistory;
