var Resource = require('../resources/Resource');

var api = {};

api.courseHistory = new Resource('course_history', 'api/0.1');
api.courseLeaderboard = new Resource('course_leaderboard', 'api/0.1');
api.courseMap = new Resource('course_map', 'api/0.1');

api.pageHistory = new Resource('page_history', 'api/0.1');
api.pageLeaderboard = new Resource('page_leaderboard', 'api/0.1');
api.pageMap = new Resource('page_map', 'api/0.1');

api.courseHistory.findByCourseId = function (courseId, userId, activityTypeId) {
  var id = courseId.toString().concat(userID);
  return this.findOne(id, {activity_type_id: activityTypeId});
}

api.courseLeaderboard.findByActivityType = function (id, activityTypeId) {
  return this.findOne(id, {activity_type_id: activityTypeId});
}

api.pageHistory.findByPageId = function (pageId, userId, activityTypeId) {
  var id = pageId.toString().concat(userId);
  return this.findOne(id, {activity_type_id: activityTypeId});
}

api.pageLeaderboard.findByPageId = function (pageId, activityTypeId) {
  return this.findOne(pageId, {activity_type_id: activityTypeId});
}

module.exports = api;
