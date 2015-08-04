import Operations from '../modules/operations';
import Resource from '../modules/resource';

@Operations(['create', 'delete', 'get', 'list', 'replace', 'update'])
class Group extends Resource {}

export default Group;
