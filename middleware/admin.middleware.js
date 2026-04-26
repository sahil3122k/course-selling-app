import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
function adminMiddleware(req,res,next){
  const token=req.headers.token;
  const decoded=jwt.verify(token,process.env.JWT_SECRATE_PASS_A);
  if(decoded){
    req.adminId=decoded.id;
    next();
  }else{
    res.status(403).json({
      message:"admin is not signin"
    })
  }

}
export {adminMiddleware};