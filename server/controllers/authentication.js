const User = require('../models/user');

exports.signup = function(req, res, next) {
  // console.log(req.body);
  const email = req.body.email;
  const password = req.body.password;

  // 1) See if a user with the given email exists
  User.findOne({ email: email }, function(err, existingUser) {
    if (err) { return next(err); }

    // 2) If a user with email does exist, return an error
    // We will return a 422 error (unprocessable entity)
    if (existingUser) {
      return res.status(422).send({ error: 'Email is in user.' });
    }

    // 3) If a user with email does NOT exist, create and save user record
    const user = new User({
      email: email,
      password: password
    });

    user.save(function(err) {
      if (err) { return next(err); }

      // 4) Respond to request indicating the user was created
      res.json({ success: true });
    });
  });
}
