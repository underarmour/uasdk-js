import Operations, {OPS} from '../operations';
import Resource from '../modules/resource';

@Operations(OPS.FIND_ONE, OPS.CREATE, OPS.DELETE, OPS.FIND, OPS.UPDATE)
export default class Route extends Resource {

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

};
