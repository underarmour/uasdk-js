import Operations, {OPS} from '../operations';
import Resource from '../modules/resource';

@Operations(OPS.FIND_ONE, OPS.FIND)
export default class Page extends Resource {

  findByPage (page) {
    return this.find({page});
  }

  findByRoute (route) {
    return this.find({route});
  }

  findByWorkout (workout) {
    return this.find({workout});
  }

  findByAlias (alias) {
    return this.findOne({alias});
  }

};
