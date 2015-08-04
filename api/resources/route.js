import Operations from '../modules/operations';
import Resource from '../modules/resource';

@Operations(['create', 'delete', 'get', 'find', 'update'])
class Route extends Resource {

  findRoutes (minDistance, maxDistance, location) {
    return this.find({
      close_to_location: location,
      maximum_distance: maxDistance,
      minimum_distance: minDistance
    })
  }

  findByUserId (id) {
    return this.find({user: id});
  }

}

export default Route;
