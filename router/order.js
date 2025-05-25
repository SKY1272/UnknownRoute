const app=require('express');
const orderRouter=app.Router();

orderRouter.get('/',function(req,res){
  res.send('Order list');
});
orderRouter.post('/',function(req,res){
  res.send('Order created');
})
module.exports=orderRouter;