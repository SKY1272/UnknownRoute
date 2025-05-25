const app=require('express');
const booksRouter=app.Router();

booksRouter.get('/',function(req,res){
  res.send('Here is the list of books!');
});
booksRouter.post('/',function(req,res){
  res.send('Book has been added!');
})
module.exports=booksRouter;