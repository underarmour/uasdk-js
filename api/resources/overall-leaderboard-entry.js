import Operations, {OPS} from '../operations';
import Resource from '../modules/resource';

@Operations(OPS.FIND_ONE, OPS.FIND_ALL)
class OverallLeaderboardEntry extends Resource {

  findByCriteria (data) {
    return this.find({
      activity_type: data.activity_type,
      age: data.age,
      gender: data.gender,
      month: data.month,
      user: data.user,
      year: data.year
    });
  }

}

export default OverallLeaderboardEntry;
