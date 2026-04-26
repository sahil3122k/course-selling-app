import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
function userMiddleware(req,res,next){
  const token=req.headers.token;
  const decoded=jwt.verify(token,process.env.JWT_SECRATE_PASS_U);
  if(decoded){
    req.userId=decoded.id;
    next();
  }else{
    res.status(403).json({
      message:"user is not signin"
    })
  }

}
export {userMiddleware};