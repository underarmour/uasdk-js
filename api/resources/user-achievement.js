import Operations from '../modules/operations';
import Resource from '../modules/resource';

@Operations(['find'])
class UserAchievement extends Resource {

  findByUserId (id) {
    return this.find({user: id});
  }

}

export default UserAchievement;
