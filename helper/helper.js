const JWt = require('jsonwebtoken')

const getjwtToken = (userId)=>{
return JWt.sign({userId:userId}, process.env.JWT_SECRET, {expiresIn:'1 day'})
}

module.exports = getjwtToken;