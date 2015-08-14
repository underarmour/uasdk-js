import Operations, {OPS} from '../operations';
import Resource from '../modules/resource';

@Operations(OPS.FIND_ONE, OPS.CREATE, OPS.UPDATE, OPS.FIND)
export default class Bodymass extends Resource {

  findByPeriod (start, end) {
    return this.find({
      target_end_datetime: end,
      target_start_datetime: start
    });
  }
};
