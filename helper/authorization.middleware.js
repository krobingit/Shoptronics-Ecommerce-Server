import jwt from 'jsonwebtoken';

const verifyToken=(req,res,next)=>{

 const token = req.headers.token;
 if (token)
 {
  jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
   if (err)
    res.status(403).send({ message: "Token invalid" })
    req.user = user;
    console.log(req.user)
   next();
  })
 }
 else
  {
return res.status(401).json("Invalid Credentials")
 }


}

const AuthorizeUser = (req, res, next) => {

 verifyToken(req, res, () => {

 if (req.user.userid === req.params.userid || req.user.isAdmin)
  next();
 else
  res.status(403).send({message:"You are not authorized"})


})


}

const AuthorizeAdmin = (req, res, next) => {

verifyToken(req,res,()=>{
 if (req.user.isAdmin)
  next();
 else
  res.status(403).send({message:"You are not authorized"})


})


}
export {verifyToken, AuthorizeUser,AuthorizeAdmin}