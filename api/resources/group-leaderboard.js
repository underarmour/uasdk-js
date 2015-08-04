import Operations from '../modules/operations';
import Resource from '../modules/resource';

@Operations(['find'])
class GroupLeaderboard extends Resource {

  findByCriteria (groupId, iterationVal) {
    return this.find({
      group_id: groupId,
      iteration: iterationVal
    });
  }

}

export default GroupLeaderboard;
