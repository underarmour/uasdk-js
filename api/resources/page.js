import Operations from '../modules/operations';
import Resource from '../modules/resource';

@Operations(['get', 'find'])
class Page extends Resource {

  findByCriteria (pageVal, routeVal, workoutVal) {
    return this.find ({
      page: pageVal,
      route: routeVal,
      workout: workoutVal
    });
  }

  findByAlias (alias) {
    return this.findById(alias);
  }

}

export default Page;
