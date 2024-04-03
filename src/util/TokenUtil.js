const jwt = require('jsonwebtoken');
const secretKey ="samir"

const generateToken = (payload)=>{


    const token = jwt.sign(payload,secretKey,{
        expiresIn:60
    })
    console.log("token...",token)
    return token;


}

module.exports = {
    generateToken
}