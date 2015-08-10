import Operations, {OPS} from '../operations';
import Resource from '../modules/resource';

@Operations(OPS.FIND_ONE, OPS.CREATE, OPS.FIND)

export default class HeartRateZones extends Resource {

  findByUser (userId) {
    return this.find({user: userId});
  }

};
