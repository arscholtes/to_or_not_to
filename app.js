const express = require('express');
const 

const app = express();


app.get('/api/todos', function(req, res){
  res.json({title: 'Return some JSON data', complete: false});
});

 app.post('/api/todos', function(req, res){
   res.json({title: 'Return some JSON data', complete})
 });

app.get('/api/todos/:id', function(req,res){
  res.json({title: 'JSON!!!!', complete})
});

app.put('/api/todos/:id', function(req, res){
  res.json({title: 'More JSON!?!?', complete})
});

app.patch('/api/todos/:id', function(req, res){
  res.json({title: 'cmon now', complete})
});

app.delete('/api/todos/:id', function(req, res){
  res.json({title: 'heyo', complete})
});

app.listen(3000, function(req, res){
  console.log('tough actin tinactin')
});
