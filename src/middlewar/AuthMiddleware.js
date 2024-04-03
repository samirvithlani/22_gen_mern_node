const jwt = require('jsonwebtoken');
const secretKey ="samir"

const verifyToken = (req,res,next)=>{

    //req.header.authorization

    const token = req.headers.authorization;
    if(token){

        try{
            const userObj = jwt.verify(token,secretKey)
            if(userObj){
                req.user = userObj;
                next();
            }
            else{
                res.status(401).json({
                    message:"Invalid token"
                })
            }
        }
        catch(err){
            console.log(err)
            res.status(401).json({
                message:"Invalid token"
            })
        }


    }else{
        res.status(401).json({
            message:"Token not found"
        })
    }



}

module.exports = {
    verifyToken
}