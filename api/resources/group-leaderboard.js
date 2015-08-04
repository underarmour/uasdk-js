import Operations, {OPS} from '../operations';
import Resource from '../modules/resource';

@Operations(OPS.FIND)
class GroupLeaderboard extends Resource {

  findByCriteria (groupId, iterationVal) {
    return this.find({
      group_id: groupId,
      iteration: iterationVal
    });
  }

}

export default GroupLeaderboard;
