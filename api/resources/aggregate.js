import Operations from '../modules/operations';
import Resource from '../modules/resource';

@Operations(['find'])
class Aggregate extends Resource {

  find (data) {
    return this.find({
      data_types: data.data_types,
      end_datetime: data.end_datetime,
      period: 'P1D',
      start_datetime: data.start_datetime,
      user_id: data.user_id
    });
  }

}

export default Aggregate;
