import Operations from '../modules/operations';
import Resource from '../modules/resource';

@Operations(['find'])
class HeartRateZoneCalculation extends Resource {

  findByMaxHR (maxHeartRate) {
    return this.find({max_hr: maxHeartRate});
  }

  findByAge (ageValue) {
    return this.find({age: ageValue});
  }

}

export default HeartRateZoneCalculation;
