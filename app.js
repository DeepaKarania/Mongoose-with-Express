var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var mongoose=require('mongoose');
var Book=require('./Book.model');
var port=8080;
var db='mongodb://localhost/test';

mongoose.connect(db);

app.get('/',function(req,res){
  res.send('very happy');
});

app.get('/books',function(req,res){
  console.log('getting the books');
  Book.find({})
  .exec(function(err,books){
    if(err)
    {
      res.send('Error');
    }
    else{
      console.log(books);
      res.json(books);
    }
  })
});

app.listen(port,function(){
  console.log('App listening'+port);
});
