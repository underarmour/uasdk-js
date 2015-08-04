import Operations, {OPS} from '../operations';
import Resource from '../modules/resource';

@Operations(OPS.FIND)
class HeartRateZoneCalculation extends Resource {

  findByMaxHR (maxHeartRate) {
    return this.find({max_hr: maxHeartRate});
  }

  findByAge (ageValue) {
    return this.find({age: ageValue});
  }

}

export default HeartRateZoneCalculation;
