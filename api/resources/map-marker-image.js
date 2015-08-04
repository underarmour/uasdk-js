import Operations, {OPS} from '../operations';
import Resource from '../modules/resource';

@Operations(OPS.FIND_ONE, OPS.FIND)
class MapMarkerImage extends Resource {

  findByText (textVal) {
    return this.find({
      format: 'json',
      text: textVal
    });
  }

  findByIds (list) {
    return this.find({marker_type_id: list});
  }

}

export default MapMarkerImage;
