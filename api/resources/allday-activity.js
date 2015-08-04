import Operations from '../modules/operations';
import Resource from '../modules/resource';

@Operations(['get', 'create', 'list', 'update'])
class AlldayActivity extends Resource {}

export default AlldayActivity;
