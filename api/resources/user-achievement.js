import Operations, {OPS} from '../operations';
import Resource from '../modules/resource';

@Operations(OPS.FIND)
export default class UserAchievement extends Resource {

  findOne (user) {
    return this.find({user});
  }

};
