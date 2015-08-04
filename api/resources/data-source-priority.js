import Operations from '../modules/operations';
import Resource from '../modules/resource';

@Operations(['create', 'get', 'find'])
class DataSourcePriority extends Resource {

  findByCriteria (filter, type) {
    return this.find({
      priority_filter: filter,
      priority_type: type
    });
  }

}

export default DataSourcePriority;
