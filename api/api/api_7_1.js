var Resource = require('../resources/Resource');

var api = {};

api.activityType = new Resource('activity_type', 'v7.1');
api.achievement = new Resource('achievement', 'v7.1');
api.aggregate = new Resource('aggregate', 'v7.1');
api.alldayActivity = new Resource('allday_activity', 'v7.1');
api.bodymass = new Resource('bodymass', 'v7.1');
api.course = new Resource('course', 'v7.1');
api.dataSource = new Resource('data_source', 'v7.1');
api.dataSourcePriority = new Resource('data_source_priority', 'v7.1'),
api.gear = new Resource('gear', 'v7.1'),
api.group = new Resource('group', 'v7.1'),
api.groupInvite = new Resource('group_invite', 'v7.1'),
api.groupLeaderboard = new Resource('group_leaderboard', 'v7.1'),
api.groupPurpose = new Resource('group_purpose', 'v7.1'),
api.groupUser = new Resource('group_user', 'v7.1'),
api.heartRateZones = new Resource('heart_rate_zones', 'v7.1'),
api.heartRateZoneCalculation = new Resource('heart_rate_zone_calculation', 'v7.1'),
api.mapMarkerImage = new Resource('map_marker_image', 'v7.1'),
api.membership = new Resource('membership', 'v7.1'),
api.overallLeaderboardEntry = new Resource('overall_leaderboard_entry', 'v7.1'),
api.page = new Resource('page', 'v7.1'),
api.privacy = new Resource('privacy_option', 'v7.1'),
api.remoteconnection = new Resource('remoteconnection', 'v7.1'),
api.remoteconnectiontype = new Resource('remoteconnectiontype', 'v7.1'),
api.route = new Resource('route', 'v7.1'),
api.routeBookmark = new Resource('route_bookmark', 'v7.1'),
api.sleep = new Resource('sleep', 'v7.1'),
api.user = new Resource('user', 'v7.1'),
api.userAchievement = new Resource('user_achievement', 'v7.1'),
api.usergear = new Resource('usergear', 'v7.1'),
api.userProfilePhoto = new Resource('user_profile_photo', 'v7.1'),
api.userRole = new Resource('user_role', 'v7.1'),
api.userStats = new Resource('user_stats', 'v7.1'),
api.webhook = new Resource('webhook', 'v7.1'),
api.workout = new Resource('workout', 'v7.1'),
api.workoutHeartRate = new Resource('workout_heart_rate', 'v7.1');

api.bodymass.findByPeriod = function (start, end) {
  return this.find({
    target_end_datetime: end,
    target_start_datetime: start
  });
}

api.dataSource.findByDevice = function (device) {
  return this.find({device: device});
}

api.gear.findByBrand = function (brand) {
  return this.find({brand: brand});
}

api.gear.findByTerms = function (query) {
  return this.find({query: query});
}

api.heartRateZoneCalculation.findByMaxHeartRate = function (max) {
  return this.find({max_hr: max});
}

api.heartRateZoneCalculation.findByAge = function (age) {
  return this.find({age: age});
}

api.heartRateZones.findByUser = function (user) {
  return this.find({user: user});
}

api.mapMarkerImage.findByText = function (text) {
  return this.find({
    id: 0,
    format: 'json',
    text: text
  });
}

api.mapMarkerImage.findByList = function (list) {
  return this.find({marker_type_id: list});
}

api.page.findByPage = function (page) {
  return this.find({page: page});
}

api.page.findByRoute = function (route) {
  return this.find({route: route});
}

api.page.findByWorkout = function (workout) {
  return this.find({workout: workout});
}

api.page.findByAlias = function (alias) {
  return this.findOne({alias: alias});
}

api.routeBookmark.findOne = function (user) {
  return this.find({user: user});
}

api.sleep.findByPeriod = function (start, end) {
  return this.find({
    target_end_datetime: end,
    target_start_datetime: start
  });
}

api.userAchievement.findOne = function (user) {
  return this.find({user: user});
}

api.user.self = function () {
  return this.findOne('self');
}

api.workout.findByUser = function () {
  return this.find({user: user});
}

module.exports = api;
