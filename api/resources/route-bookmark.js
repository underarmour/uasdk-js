import Operations, {OPS} from '../operations';
import Resource from '../modules/resource';

@Operations(OPS.DELETE, OPS.CREATE, OPS.FIND)
class RouteBookmark extends Resource {

  findByUserId (id) {
    return this.find({user: id});
  }

}

export default RouteBookmark;
