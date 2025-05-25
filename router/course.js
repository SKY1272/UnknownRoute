const app=require('express');
const CourseRouter=app.Router();

const courses = [

{ id: 1, name: "Frontend", description: "HTML, CSS, JS, React" },

{ id: 2, name: "Backend", description: "Node.js, Express, MongoDB" }

];


CourseRouter.get('/',(req,res)=>{
  const name=courses.map(s=>s.name).join(',');
  res.send(`Courses:${name}`);
});
CourseRouter.get('/:id',(req,res)=>{
  const courseId=parseInt(req.params.id);
  const user=courses.find((user)=>user.id==courseId);
  if(!user){
   return res.send('User not found');
  }
  res.json(`Courses:${user.name} Description:${user.description}`);
})
module.exports=CourseRouter;