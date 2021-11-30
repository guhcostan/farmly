const User = require("../models/User");
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');

const userResolver = {
  Query: {
    users() {
      return User.find();
    },
  },
  Mutation: {
    signup: async (root, args) => {
      const user = await User.findOne({email: args.user.email})
      if (user) throw new Error('Email já está em uso');
      const { user: { email, name, password } } = args;
      const newUser = await User.create({
        email,
        name,
        password: bcrypt.hashSync(password, 3)
      });
      return  {token :jwt.sign({id: newUser._id, email: newUser.email}, process.env.TOKEN_SECRET_KEY)}
    },
    login: async (root, args, {currentUser})  => {
      if (currentUser) throw new Error('Você já está logado');
      const { user: { email, password } } = args;
      const user = await User.findOne({email: email})
      if (!user) throw new Error('Unable to Login');
      const isMatch = bcrypt.compareSync(password, user.password);
      if (!isMatch) throw new Error('Unable to Login');
      return  {token :jwt.sign({id: user._id, email: user.email}, process.env.TOKEN_SECRET_KEY)}
    }
  }
};

module.exports = userResolver;
