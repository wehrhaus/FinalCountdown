var sendmail = require('sendmail')(),
    schedule = require('node-schedule');

var rule = new schedule.RecurrenceRule();
rule.minute = 59;

var j = schedule.scheduleJob(rule, function() {
    console.log('It\'s the Final Countdown');
    sendmail({
        from: 'Justin.Wehrman@RedFuse.com',
        to: 'Matt.Brown@RedFuse.com',
        subject: 'It\'s the Final Countdown',
        content: 'https://www.youtube.com/watch?v=9jK-NcRmVcw',
      }, function(err, reply) {
        console.log(err && err.stack);
        console.dir(reply);
    });
});
