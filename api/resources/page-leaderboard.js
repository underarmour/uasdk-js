import Operations, {OPS} from '../operations';
import Resource from '../modules/resource';

@Operations(OPS.FIND_ONE)
class PageLeaderboard extends Resource {
  findByCriteria (pageId, activityTypeId) {
    return this.findOne(pageId, {activity_type_id: activityTypeId});
  }
}

export default PageLeaderboard;
