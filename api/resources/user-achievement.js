import Operations, {OPS} from '../operations';
import Resource from '../modules/resource';

@Operations(OPS.FIND)
class UserAchievement extends Resource {

  findByUserId (id) {
    return this.find({user: id});
  }

}

export default UserAchievement;
