import Operations from '../modules/operations';
import Resource from '../modules/resource';

@Operations(['get', 'find'])
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
