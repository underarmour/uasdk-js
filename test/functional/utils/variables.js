import iso8601 from 'iso8601';

var eDate = new Date();
eDate = iso8601.fromDate(eDate);
export var endDate = eDate;

var sDate = new Date();
sDate.setMonth(sDate.getMonth() - 1);
sDate = iso8601.fromDate(sDate);
export var startDate = sDate;

export var userId = 70488025;
export var groupId = 138872;
export var groupUserId = 3295821;
export var courseId = 1521816;
export var personalGroupId = 475811;
export var closeToLoc = '30.2688,-97.7489';
export var routeId = 779278169;
export var usergearId = 47053;
export var workoutId = 1062123831;
