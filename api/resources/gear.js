import Operations, {OPS} from '../operations';
import Resource from '../modules/resource';

@Operations(OPS.FIND_ONE, OPS.DELETE, OPS.FIND)
export default class Gear extends Resource {

  findByBrand (brandName) {
    return this.find({
      brand: brandName
    });
  }

  findByTerms (queryVal) {
    return this.find({
      query: queryVal
    });
  }

};
