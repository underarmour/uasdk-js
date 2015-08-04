import Operations, {OPS} from '../operations';
import Resource from '../modules/resource';

@Operations(OPS.FIND_ONE, OPS.UPDATE)
class User extends Resource {

  //need to add self function
}

export default User;
