import Operations, {OPS} from '../operations';
import Resource from '../modules/resource';

@Operations(OPS.FIND_ONE, OPS.UPDATE)
class UserProfilePhoto extends Resource {}

export default UserProfilePhoto;
