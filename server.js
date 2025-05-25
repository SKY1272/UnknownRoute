const express=require('express');
const app=express();
const port=4000;

const StudentRouter=require('./router/students');
const CourseRouter=require('./router/course');
app.use(express.json());

app.use('/students',StudentRouter);
app.use('/course',CourseRouter);
app.use((req,res)=>{
  res.status(404).send('404 not found');
})
app.get('/',(req,res)=>{
  res.send('welcome to studnents and courses api');
})
app.listen(port,()=>{
  console.log(`Example app listening at http://localhost:${port}`)
})