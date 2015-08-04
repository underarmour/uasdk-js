import Operations, {OPS} from '../operations';
import Resource from '../modules/resource';

@Operations(OPS.DELETE, OPS.CREATE, OPS.FIND)
export default class RouteBookmark extends Resource {

  findByUserId (id) {
    return this.find({user: id});
  }

};
