const app=require('express');
const userRouter=app.Router();

userRouter.get('/',function(req,res){
  res.send('User List');
});
userRouter.post('/',function(req,res){
  res.send('User created');
})
module.exports=userRouter;