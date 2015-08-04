import Operations from '../modules/operations';
import Resource from '../modules/resource';

@Operations(['get', 'create', 'list', 'update'])
class Bodymass extends Resource {}

export default Bodymass;
