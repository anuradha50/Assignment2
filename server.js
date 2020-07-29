const express = require('express');
const bodyParser = require('body-Parser');

const app = express();

let fakeTodos = [{
    text : 'Go to the grocery store',
    isCompleted: true,
}'{
    text : 'Learn full - stack development',
    isCompleted:false,

}];

app.use(bodyParser.json());


app.get('/todos', (req, res) => {
    res.send(todos);

});

app.post{'/todos',{req, res} => {
    const (newtodoText) = req.body;
    todos: newtodoText,
    isCompleted: false,

});
res.send(todos);
});
app.post('/todos/delete',(req,res) => {
  const(text) = req.body;
  todos = todos.filter(todo => todo.text != text);
  res.send(todos);  
});

app.post('/todos/complete',(req, res) => {
    const{ text} = req.body;
    todos.forEach(todo => {
        if(todo.text === text){
            todo.isCompleted = true;
        }
    });
    res.send(todos);

});
app.listen(0000. () => console.log('server listening on port 8000'));
