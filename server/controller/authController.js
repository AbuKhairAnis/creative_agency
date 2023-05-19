const User = require("../model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET_KEY, { expiresIn: "1h" });
};

exports.signupPostController = async (req, res) => {
  let { name, username, email, password, confirmPassword } = req.body;

  try {
    const existingUser = await User.findOne({ email, username });

    if (!name || !username || !email || !password || !confirmPassword) {
      throw Error("All Field Must Be Required");
    }
    if (password !== confirmPassword) {
      throw Error(" Please Check Password");
    }
    if (existingUser) {
      throw Error("Email Alreadey Exisit");
    }

    let hasdPassword = await bcrypt.hash(password, 11);
    let user = new User({
      name,
      username,
      email,
      password: hasdPassword,
    });
    const createdUser = await user.save();
    const token = createToken(createdUser._id);
    res.json({
      status: "ok",
      user: true,
      token: token,
      username: createdUser.username,
    });
  } catch (e) {
    res.json({ status: "error", error: e.message, user: false });
  }
};

exports.loginPostController = async (req, res) => {
  let { username, password, confirmPassword } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!username || !password || !confirmPassword) {
      throw Error("All Field Must Be Required");
    }
    if (password !== confirmPassword) {
      throw Error(" Please Check Password");
    }

    let comparePasword = bcrypt.compare(user.password, password);
    if (!comparePasword) {
      throw Error("Password Does't Metch");
    }
    const token = createToken(user._id);
    res.json({
      status: "ok",
      user: true,
      token: token,
      username: user.username,
    });
  } catch (e) {
    res.json({ status: "error", error: e.message, user: false });
  }
};
