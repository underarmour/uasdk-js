import Operations, {OPS} from '../operations';
import Resource from '../modules/resource';

@Operations(OPS.FIND_ONE)
export default class PageLeaderboard extends Resource {

  findByPageId (pageId, activityTypeId) {
    return this.findOne(pageId, {activity_type_id: activityTypeId});
  }
  
};
