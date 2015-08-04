import Operations, {OPS} from '../operations';
import Resource from '../modules/resource';

@Operations(OPS.FIND_ONE, OPS.CREATE, OPS.DELETE, OPS.FIND)
class GroupInvite extends Resource {

  findGroupByCriteria (groupId, userId) {
    return this.find({
      group_id: groupId,
      user_id: userId
    });
  }

}

export default GroupInvite;
