const jwt = require('jwt-simple');
const User = require('../models/user');
const config = require('../config');

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

exports.signup = function(req, res, next) {
  // console.log(req.body);
  const email = req.body.email;
  const password = req.body.password;

  // Simple validation to check if user has provided email and password
  if (!email || !password) {
    return res.status(422).send({
      error: 'You must provide an email address and a password.'
    });
  }

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

      // 4) Respond to request indicating the user was created, notes below
      res.json({ token: tokenForUser(user) });
    });
  });
}

// NOTE: step 4 involves
// 1) Send back identifying piece of information (a token in our case)
// On Sign Up: UserID + Secret String = JSON web token (JWT)
// On Sign In: JSON web token + Secret String = UserID
