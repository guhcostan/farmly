const User = require("../models/User");
const Farm = require("../models/Farm");
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');

const userResolver = {
    Query: {
        users() {
            return User.find();
        },
        self(root, args, {currentUser}) {
           return User.findOne({email: currentUser.email, password: currentUser.password})
        }
    },
    User: {
        farms(_parent, args, {currentUser}) {
        return Farm.find({userId: _parent.id})
    }
},
    Mutation: {
        signup: async (root, args) => {
            const user = await User.findOne({email: args.user.email})
            if (user) throw new Error('Email já está em uso');
            const {user: {email, name, password}} = args;
            const newUser = await User.create({
                email,
                name,
                password: bcrypt.hashSync(password, 3)
            });
            return {token: jwt.sign({id: newUser._id, email: newUser.email, password: newUser.password}, process.env.TOKEN_SECRET_KEY)}
        },
        login: async (root, args, {currentUser}) => {
            if (currentUser) throw new Error('Você já está logado');
            const {user: {email, password}} = args;
            const user = await User.findOne({email: email})
            if (!user) throw new Error('Unable to Login');
            const isMatch = bcrypt.compareSync(password, user.password);
            if (!isMatch) throw new Error('Unable to Login');
            return {token: jwt.sign({id: user._id, email: user.email, password: user.password}, process.env.TOKEN_SECRET_KEY)}
        }
    }
};

module.exports = userResolver;
