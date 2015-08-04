import Operations from '../modules/operations';
import Resource from '../modules/resource';

@Operations(['create', 'get', 'find'])
class Workout extends Resource {

  findForUser (data) {
    return this.find({
      activity_type: data.activity_type,
      started_after: data.started_after,
      started_before: data.started_before,
      user: data.user
    });
  }
  
}

export default Workout;
