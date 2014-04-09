var sendmail = require('sendmail')(),
    schedule = require('node-schedule');

var rule = new schedule.RecurrenceRule();
rule.minute = 59;

var j = schedule.scheduleJob(rule, function() {
    sendmail({
        from: '',
        to: '',
        subject: '',
        content: '',
      }, function(err, reply) {
        console.log(err && err.stack);
        console.dir(reply);
    });
});
