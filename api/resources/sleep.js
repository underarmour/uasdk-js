import Operations, {OPS} from '../operations';
import Resource from '../modules/resource';

@Operations(OPS.FIND_ONE, OPS.CREATE, OPS.DELETE, OPS.FIND, OPS.UPDATE)
class Sleep extends Resource {

  findForDateRange (startTime, endTime) {
    return this.find({
      target_end_datetime: endTime,
      target_start_datetime: startTime
    });
  }

}

export default Sleep;
