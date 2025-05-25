const app=require('express');
const StudentRouter=app.Router();

const student = [

{ id: 1, name: "Alice" },

{ id: 2, name: "Bob" },

{ id: 3, name: "Charlie" }

];
StudentRouter.get('/',function(req,res){
  const name=student.map(s=>s.name).join(',');
  res.send(`Students:${name}`);
})
StudentRouter.get('/:id',function(req,res){
  const studentId=parseInt(req.params.id);
  const user=student.find((user)=>user.id==studentId);
  if(!user){
   return res.send('User not found');
  }
  res.json(`Students:${user.name}`);
})

module.exports=StudentRouter;