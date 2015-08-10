import Operations, {OPS} from '../operations';
import Resource from '../modules/resource';

@Operations(OPS.FIND_ONE, OPS.CREATE, OPS.FIND)
export default class DataSourcePriority extends Resource {

  findByCriteria (filter = {}, type = {}) {
    return this.find({
      priority_filter: filter,
      priority_type: type
    });
  }

};
