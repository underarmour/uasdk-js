import Operations, {OPS} from '../operations';
import Resource from '../modules/resource';

@Operations(OPS.FIND_ONE)
export default class PageHistory extends Resource {

  findByCriteria (pageId, userId, activityTypeId) {
    let id = pageId.toString() + userId.toString();
    return this.findById(id, {
      activity_type_id: activityTypeId
    });
  }

};
