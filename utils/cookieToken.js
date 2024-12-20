const { response } = require('express')
const getjwtToken = require('../helper/helper.js')

const cookieToken = (user, res)=>{
    const Token = getjwtToken(user.id)
    const options = {
        expires: new Date(
        Date.now() + 3 * 24 * 60 * 60 * 1000
    ),
    httpOnly:true 
    
}
user.password=undefined;
res.status(200).cookie('token',Token,options).json({
    success:true,
    token,
    user
})
}
module.exports = cookieToken;