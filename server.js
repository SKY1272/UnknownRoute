const express=require('express');
const app=express();
const port=5000;
const userRouter=require('./router/user');
const orderRouter=require('./router/order');
app.use(express.json());
app.use('/user',userRouter);
app.use('/order',orderRouter);
app.get('/',(req,res)=>{
  res.send('Hello World!')
})
app.listen(port,()=>{
  console.log(`Example app listening at http://localhost:${port}`)
})