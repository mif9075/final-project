const User = require('../model/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const People = require('../../players/model/People');

const Baseball = require('../../players/model/Baseball');

async function hashPassword(password) {
    let genSalt = await bcrypt.genSalt(10);
    let hashedPassword = await bcrypt.hash(password, genSalt);
    return hashedPassword;
}

async function createUser(user) {
    let newUser = await new User({
        username: user.username,
        email: user.email,
        password: user.password
    });
    return newUser;
}

async function errorHandler(error) {
    let errorMessage = null;
    if (error.errmsg.includes('email_1')){
        errorMessage - 'Email already exist';
    } else if (error.errmsg.includes('username_1')) {
        errorMessage='Username already exist';
    } 
    return errorMessage;
}

async function findOneUser(email) {
    try {
        let foundUser = await User.findOne({email});
        if (!foundUser) {
            return 404;
        }
        return foundUser;
    } catch (error) {
        return error;
    }
}

async function createJwtToken(user) {

    let payload = {
        id: user._id,
        email: user.email,
        username: user.username
    }
    let jwtToken = await jwt.sign(payload, process.env.SECRET_KEY, {expiresIn: 3600});
    return jwtToken;
}

async function comparePassword(incomingPassword, userPassword) {
    try {
        let comparedPassword = await bcrypt.compare(incomingPassword, userPassword);
        if(comparedPassword) {
            return comparedPassword
        } else {
            throw 409;
        }
    } catch (error) {
        return error;
    }
}

async function finder(search) {
    try {
        // console.log(search)
        let foundNameFirst = await People.find({nameFirst: search});
        // console.log(foundNameFirst)
        let foundNameLast = await People.find({nameLast: search});
        // console.log(foundNameLast)
        let foundBirthCity = await People.find({birthCity: search});
        // console.log(foundBirthCity)
        let foundNameGiven = await Baseball.find({Name: search})
        console.log(foundNameGiven)


        if (foundNameFirst.length !== 0) {
            return foundNameFirst
        } else if (foundNameLast.length !== 0) {
            return foundNameLast
        } else if (foundBirthCity.length !== 0){
            return foundBirthCity
        } else if (foundNameGiven.length !== 0){
            return foundNameGiven
        }
            else {
            return 404;
        }
    } catch (error) {
        return error;
    }
}


module.exports = {
    hashPassword,
    createUser,
    errorHandler,
    findOneUser,
    createJwtToken,
    comparePassword,
    finder
}