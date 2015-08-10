import Operations, {OPS} from '../operations';
import Resource from '../modules/resource';

@Operations(OPS.FIND_ONE, OPS.FIND)
export default class MapMarkerImage extends Resource {

  findByText (textVal) {
    return this.find({
      id: '0',
      format: 'json',
      text: textVal
    });
  }

  findByIds (list) {
    return this.find({marker_type_id: list});
  }

};
