import Operations from '../modules/operations';
import Resource from '../modules/resource';

@Operations(['get'])
class CourseLeaderboard extends Resource {

  findByCriteria (id, activityTypeId) {
    return this.findById(id, {activity_type_id: activityTypeId});
  }

}

export default CourseLeaderboard;
