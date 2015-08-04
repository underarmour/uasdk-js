import Operations from '../modules/operations';
import Resource from '../modules/resource';

@Operations(['get', 'find'])
class Course extends Resource {

  findByCriteria (data) {
    return this.find({
      course: data.course,
      field_set: 'default',
      route: data.route,
      thumbnail: data.thumbnail,
      thumbnail_height: data.thumbnail_height,
      thumbnail_width: data.thumbnail_width,
      workout: data.workout
    });
  }

}

export default Course;
