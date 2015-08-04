import Operations, {OPS} from '../operations';
import Resource from '../modules/resource';

@Operations(OPS.FIND_ONE)
class CourseLeaderboard extends Resource {

  findByCriteria (id, activityTypeId) {
    return this.findOne(id, {activity_type_id: activityTypeId});
  }

}

export default CourseLeaderboard;
