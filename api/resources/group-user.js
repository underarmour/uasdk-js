import Operations from '../modules/operations';
import Resource from '../modules/resource';

@Operations(['create', 'delete', 'get', 'list'])
class GroupUser extends Resource {}

export default GroupUser;
