import Operations, {OPS} from '../operations';
import Resource from '../modules/resource';

@Operations(OPS.FIND)
export default class Aggregate extends Resource {

  findByPeriod (dataTypes, start, end, period, userId) {
    return this.find({
      data_types: dataTypes,
      start_datetime: start,
      end_datetime: end,
      user_id: userId,
      period
    });
  }

};
