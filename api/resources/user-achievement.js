import Operations, {OPS} from '../operations';
import Resource from '../modules/resource';

@Operations(OPS.FIND)
export default class UserAchievement extends Resource {

  findByUserId (id) {
    return this.find({user: id});
  }

};
