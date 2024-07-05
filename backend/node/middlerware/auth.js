const jwt = require('jsonwebtoken')
function auth(req,res,next){
    const authHeader = req.headers['authorization']
    if(authHeader == null){
        return res.status(401).json({success:false, message:'unable to authorize'})
    }
    const user = jwt.verify(authHeader,process.env.SECRET_KEY)
    req.user = user
    next()
}
module.exports = auth