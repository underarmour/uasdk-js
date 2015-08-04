import Operations from '../modules/operations';
import Resource from '../modules/resource';

@Operations(['create', 'delete', 'get', 'find', 'update'])
class Sleep extends Resource {

  findForDateRange (startTime, endTime) {
    return this.find({
      target_end_datetime: endTime,
      target_start_datetime: startTime
    });
  }

}

export default Sleep;
