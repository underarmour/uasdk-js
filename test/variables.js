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
