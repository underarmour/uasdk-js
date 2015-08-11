import Operations, {OPS} from '../operations';
import Resource from '../modules/resource';

@Operations(OPS.FIND_ONE, OPS.CREATE, OPS.FIND, OPS.UPDATE)
export default class DataSource extends Resource {

  findByDevice (device) {
    return this.find({device});
  }

};
