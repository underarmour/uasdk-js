import Operations, {OPS} from '../operations';
import Resource from '../modules/resource';

@Operations(OPS.FIND_ONE, OPS.CREATE, OPS.FIND, OPS.UPDATE)
class DataSource extends Resource {

  findByDevice (dev) {
    return this.find({device: dev});
  }

}

export default DataSource;
