const sails = require('sails');

// Before running any tests...
before(function(done) {
  this.timeout(5000);
  sails.lift({
    hooks: { grunt: false },
    log: { level: 'warn' },
  }, function(err) {
    if (err) { return done(err); }
    return done();
  });
});

// After all tests have finished...
after(function(done) {
  sails.lower(done);
});
