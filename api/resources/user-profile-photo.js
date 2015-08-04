import Operations from '../modules/operations';
import Resource from '../modules/resource';

@Operations(['get', 'update'])
class UserProfilePhoto extends Resource {}

export default UserProfilePhoto;
