const express=require('express');
const app=express();
const port=4000;
app.use(express.json());
app.get('/',(req,res)=>{
res.send('Hello World!')
});
app.use((req,res,next)=>{
  console.log(`${req.method} request made for ${req.url}`);
  next();
})
app.get('/products',(req,res)=>{
  res.send('Here is the list of all products.')
})
app.post('/products',(req,res)=>{
  res.send('A new Product added.');
});
app.get('/catogeries',(req,res)=>{
    res.send('Here is the list of all catogeries.');
  });
  app.post('/catogeries',(req,res)=>{
    res.send('A new catogery has been added.')
  })
app.listen(port,()=>{
  console.log(`Example app listening at http://localhost:${port}`)
})