import Operations from '../modules/operations';
import Resource from '../modules/resource';

@Operations(['get'])
class PageHistory extends Resource {

  findByCriteria (pageId, userId, activityTypeId) {
    let id = pageId.toString() + userId.toString();
    return this.findById (id, {
      activity_type_id: activityTypeId
    });
  }

}

export default PageHistory;
