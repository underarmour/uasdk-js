import Operations, {OPS} from '../operations';
import Resource from '../modules/resource';

@Operations(OPS.FIND_ONE, OPS.DELETE, OPS.FIND)
export default class Gear extends Resource {

  findByCriteria (brandVal, queryVal) {
    return this.find({
      brand: brandVal,
      query: queryVal
    });
  }

};
