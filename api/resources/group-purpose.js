import Operations from '../modules/operations';
import Resource from '../modules/resource';

@Operations(['get', 'list'])
class GroupPurpose extends Resource {}

export default GroupPurpose;
