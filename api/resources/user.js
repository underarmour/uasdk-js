import Operations, {OPS} from '../operations';
import Resource from '../modules/resource';

@Operations(OPS.FIND_ONE, OPS.UPDATE)
export default class User extends Resource {

  self () {return this.findOne('self');}
  
};
