import Operations from '../modules/operations';
import Resource from '../modules/resource';

@Operations(['create', 'delete', 'get', 'find'])
class GroupInvite extends Resource {

  findGroupByCriteria (groupId, userId) {
    return this.find({
      group_id: groupId,
      user_id: userId
    });
  }

}

export default GroupInvite;
