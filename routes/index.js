var express = require('express');
var router = express.Router();
var moment = require('moment');

let endWeekday=moment().endOf('isoWeek');

let json = [{
  date: moment().endOf('isoWeek').subtract({days: 6}).format("DD/MM/YYYY")
}, {
  date: moment().endOf('isoWeek').subtract({days: 5}).format("DD/MM/YYYY")
}, {
  date: moment().endOf('isoWeek').subtract({days: 4}).format("DD/MM/YYYY")
}, {
  date: moment().endOf('isoWeek').subtract({days: 3}).format("DD/MM/YYYY")
}, {
  date: moment().endOf('isoWeek').subtract({days: 2}).format("DD/MM/YYYY")
}, {
  date: moment().endOf('isoWeek').subtract({days: 1}).format("DD/MM/YYYY")
}, {
  date: moment().endOf('isoWeek').format("DD/MM/YYYY")
}]

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    weekNumber: moment().format('w'),
    Year: moment().format('YYYY'),
    project: "Ziess",
    contactPerson: "Snigdha",
    dates: json
  });
});

module.exports = router;