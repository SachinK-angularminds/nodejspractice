
function authentic(req,res,next){
//get the token from client through header
const token=req.header("Authorization")
//check it if not throw the error
if(!token) return res.status(401).send("Access Denied!!!")
//if present verify it through jwt.verify method
try{
 const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
}catch(err){
    res.status(400).send("Invalid token")
}

}

module.exports=authentic