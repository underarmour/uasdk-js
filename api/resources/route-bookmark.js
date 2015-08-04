import Operations from '../modules/operations';
import Resource from '../modules/resource';

@Operations(['create', 'delete', 'find'])
class RouteBookmark extends Resource {

  findByUserId (id) {
    return this.find({user: id});
  }

}

export default RouteBookmark;
