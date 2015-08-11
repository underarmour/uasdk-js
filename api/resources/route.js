import Operations, {OPS} from '../operations';
import Resource from '../modules/resource';

@Operations(OPS.FIND_ONE, OPS.CREATE, OPS.DELETE, OPS.FIND, OPS.UPDATE)
export default class Route extends Resource {

  findByUser (user) {
    return this.find({user});
  }

  findByRoute (id) {
    return this.findOne({id});
  }

};
