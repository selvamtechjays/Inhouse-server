const jwt = require('jsonwebtoken');
const User = require('../models/Users');

const RegisterUser = async (req, res) => {
  try {
    const { email } = req.body;

    // Check if the user already exists in your database
    // const existingUser = await User.findOne({ email });

    // if (existingUser) {
    //   return res.status(400).json({ error: 'User already exists' });
    // }

    // Assuming you have the 'user' object from Firebase authentication
    const user = await User.create({
      email,
      // You can add more user details based on your User model
    });

    // Create JWT token
    const token = jwt.sign({ email: user.email }, process.env.SECRET, {
      expiresIn: '8h',
    });

    // Update the user document in the database with the generated token
    await User.findByIdAndUpdate(user._id, { token });

      // Set the JWT token in the cookie
      res.cookie('jwtToken', token, { httpOnly: true, maxAge: 3600000 });


    // Respond with user details and token
    res.json({ user, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { RegisterUser };
