import Operations, {OPS} from '../operations';
import Resource from '../modules/resource';

@Operations(OPS.FIND_ONE)
export default class PageHistory extends Resource {

  findByPageId (pageId, userId, activityTypeId) {
    let id = pageId.toString() + userId.toString();
    return this.findOne(id, {activity_type_id: activityTypeId});
  }

};