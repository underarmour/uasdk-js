import Operations from '../modules/operations';
import Resource from '../modules/resource';

@Operations(['get'])
class CourseHistory extends Resource {

  findByCriteria (courseId, userId, activityTypeId) {
    let id = courseId.toString() + userId.toString();
    return this.findById(id, {activity_type_id: activityTypeId});
  }

}

export default CourseHistory;
