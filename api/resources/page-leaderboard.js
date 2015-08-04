import Operations from '../modules/operations';
import Resource from '../modules/resource';

@Operations(['get'])
class PageLeaderboard extends Resource {

  findByCriteria (pageId, activityTypeId) {
    return this.findById (pageId, {
      activity_type_id: activityTypeId
    });
  }

}

export default PageLeaderboard;
