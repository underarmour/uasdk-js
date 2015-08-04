import Operations from '../modules/operations';
import Resource from '../modules/resource';

@Operations(['create', 'get'])
class HeartRateZones extends Resource {}

export default HeartRateZones;
