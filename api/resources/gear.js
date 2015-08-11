import Operations, {OPS} from '../operations';
import Resource from '../modules/resource';

@Operations(OPS.FIND_ONE, OPS.DELETE, OPS.FIND)
export default class Gear extends Resource {

  findByBrand (brand) {
    return this.find({brand});
  }

  findByTerms (query) {
    return this.find({query});
  }

};
