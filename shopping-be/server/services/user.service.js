import User from "./../models/user";
const bcrypt = require("bcryptjs");

const save = (newUser) => {
  const user = new User(newUser);
  const promise = user.save();
  return promise;
};

const login = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("Something went wrong!! unable to log you in now");
  }

  const isMatch = await bcrypt.compare(password, user.password);

  console.log("isMatch:" + isMatch);

  if (!isMatch) {
    throw new Error("Something went wrong!! unable to log you in now");
  }

  return user;
};

export default {
  save: save,
  login: login,
};
