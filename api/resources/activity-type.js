import Operations from '../modules/operations';
import Resource from '../modules/resource';

@Operations(['get', 'list'])
class ActivityType extends Resource {}

export default ActivityType;
