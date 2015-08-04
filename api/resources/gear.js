import Operations from '../modules/operations';
import Resource from '../modules/resource';

@Operations(['delete', 'find', 'get'])
class Gear extends Resource {

  findByCriteria (brandVal, queryVal) {
    return this.find({
      brand: brandVal,
      query: queryVal
    });
  }
  
}

export default Gear;
