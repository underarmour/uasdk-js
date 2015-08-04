import Operations, {OPS} from '../operations';
import Resource from '../modules/resource';

@Operations(OPS.FIND_ONE, OPS.FIND)
export default class Page extends Resource {

  findByCriteria (pageVal, routeVal, workoutVal) {
    return this.find ({
      page: pageVal,
      route: routeVal,
      workout: workoutVal
    });
  }

  findByAlias (alias) {
    return this.findOne(alias);
  }

};
