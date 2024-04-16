const User = require("../models/usersSchema");

// Controller for user registration
const registerUser = async (req, res) => {
  try {
    // Extract user data from request body
    const {
      name,
      mobile,
      email,
      address,
      pin,
      username,
      password,
      dateOfBirth,
      wishlist,
    } = req.body;

    // Check if the username is already taken
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "Username already exists" });
    }

    // Create a new user instance
    const newUser = new User({
      name,
      mobile,
      email,
      address,
      pin,
      username,
      password, // You might want to hash the password before saving it to the database
      dateOfBirth,
      orderHistory: [],
      wishlist,
    });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Registration failed", error: error.message });
  }
};

// Controller for user login
const loginUser = async (req, res) => {
  try {
    // Extract username and password from request body
    const { username, password } = req.body;

    // Check if a user with the provided username exists
    const user = await User.findOne({ username });

    // If user doesn't exist, return error
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if the provided password matches the stored password (You should hash the password before storing and compare hashed passwords)
    if (password !== user.password) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    // If username and password are correct, return success response
    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    res.status(500).json({ message: "Login failed", error: error.message });
  }
};

// user controller for deleting a user
// usnder modification not used yet
const deleteUser = async (req, res) => {
  try {
    const username = req.body.username;
    const user = await User.findOneAndDelete({ username });

    if (!user) {
      res.status(404).json({ message: "User Not Found" });
    }
    res.status(200).json({ message: "User Deleted Successfuly" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal server error: ", error: err.message });
  }
};

// controller for udating a user
// under modification not used yet
const updateUser = async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;

    const dbUserData = await User.findOne({ username });

    if (username != dbUserData.username) {
      res.status(404).json({ message: "Invalid Username" });
    }
    if (password != dbUserData.password) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    const deleteduser = await User.findOneAndDelete({ username });
    if (deleteduser) {
      res.status(200).json({ message: "user deleted successfuly" });
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal server error", error: err.message });
  }
};

// controller for udating a user
// under modification not used yet
const getUser = async (req, res) => {
  try {
    const username = req.body.username;

    const user = User.findOne({ username });

    if (!user) {
      res.status(404).json({ message: "user not found" });
    }
    res.status(200).json({ message: "user found", userData: user });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: err.message });
  }
};

module.exports = { registerUser, loginUser, deleteUser, updateUser, getUser };
