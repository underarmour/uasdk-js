import Operations, {OPS} from '../operations';
import Resource from '../modules/resource';

@Operations(OPS.FIND_ONE, OPS.CREATE, OPS.DELETE, OPS.FIND)

export default class GroupInvite extends Resource {

  findByCriteria (groupId, userId) {
    return this.find({
      group_id: groupId,
      user_id: userId
    });
  }

};
