const express=require('express');
const app=express();
const port=5000;
app.use(express.json());
app.get('/',(req,res)=>{
res.send('Hello World!')
});
app.get('/welcome/:username',(req,res)=>{
  let username=req.params.username;
  let role=req.query.role || 'Admin';
  res.send(`Welcome ${username} your role is ${role}`);
})
app.get('/welcome/',(req,res)=>{
  const username=req.query.username || 'Guest';
  const role=req.query.role || 'User';
  res.send(`Welcome ${username} your role is ${role}`);
})
app.listen(port,()=>{
  console.log(`Example app listening at http://localhost:${port}`)
})