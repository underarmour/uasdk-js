import Operations from '../modules/operations';
import Resource from '../modules/resource';

@Operations(['get', 'update', 'self'])
class User extends Resource {}

export default User;
