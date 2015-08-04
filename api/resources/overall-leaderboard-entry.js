import Operations from '../modules/operations';
import Resource from '../modules/resource';

@Operations(['get', 'list'])
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

  //same for findById

}

export default OverallLeaderboardEntry;
