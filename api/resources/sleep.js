import Operations, {OPS} from '../operations';
import Resource from '../modules/resource';

@Operations(OPS.FIND_ONE, OPS.CREATE, OPS.DELETE, OPS.FIND, OPS.UPDATE)
export default class Sleep extends Resource {

  findByPeriod (start, end) {
    return this.find({
      target_end_datetime: end,
      target_start_datetime: start
    });
  }

};
