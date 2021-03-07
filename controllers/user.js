const User = require('../models/user');
const bcrypt = require('bcrypt');

exports.login = async (req, res) => {
  try {
    const body = req.body;

    const user = await User.findOne({ email: body.email });

    if (user) {
      const validPassword = user.password === body.password;
      if (validPassword) {
        res.status(200).json(user);
      } else {
        res.status(400).json({ error: 'Invalid Password' });
      }
    } else {
      res.status(401).json({ error: 'User does not exist' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Something Went Wrong' });
  }
};

exports.signUp = async (req, res) => {
  try {
    const body = req.body;

    if (!(body.email && body.password)) {
      return res.status(400).send({ error: 'Email Or Password Is Invalid' });
    }

    const user = new User(body);
    // const salt = await bcrypt.genSalt(10);
    // user.password = await bcrypt.hash(user.password, salt);
    await user.save();
    return res.status(201).json({ message: 'created' });
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};
