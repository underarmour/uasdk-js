import Operations from '../modules/operations';
import Resource from '../modules/resource';

@Operations(['get', 'delete'])
class UserRole extends Resource {}

export default UserRole;
