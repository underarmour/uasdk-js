import Operations, {OPS} from '../operations';
import Resource from '../modules/resource';

@Operations(OPS.FIND)
export default class Aggregate extends Resource {

  find (data) {
    return this.find({
      data_types: data.data_types,
      end_datetime: data.end_datetime,
      period: 'P1D',
      start_datetime: data.start_datetime,
      user_id: data.user_id
    });
  }

};
