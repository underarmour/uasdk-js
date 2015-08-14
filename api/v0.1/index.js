import CourseHistory from '../resources/course-history';
import CourseLeaderboard from '../resources/course-leaderboard';
import CourseMap from '../resources/course-map';
import PageHistory from '../resources/page-history';
import PageLeaderboard from '../resources/page-leaderboard';
import PageMap from '../resources/page-map';

const API_VERSION = 'api/0.1';

export default {
  courseHistory: new CourseHistory(API_VERSION, 'course_history'),
  courseLeaderboard: new CourseLeaderboard(API_VERSION, 'course_leaderboard'),
  courseMap: new CourseMap(API_VERSION, 'course-map'),
  pageHistory: new PageHistory(API_VERSION, 'page_history'),
  pageLeaderboard: new PageLeaderboard(API_VERSION, 'page_leaderboard'),
  pageMap: new PageMap(API_VERSION, 'page_map')
}
