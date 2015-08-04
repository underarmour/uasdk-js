import Operations from '../modules/operations';
import Resource from '../modules/resource';

@Operations(['create', 'get', 'find', 'update'])
class DataSource extends Resource {

  findByDevice (dev) {
    return this.find({device: dev});
  }

}

export default DataSource;
