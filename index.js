// the task array with initial placeholders for removed task 


var complete = ["finish jquery"];

app.use(express.static("public"));
app.post('/removetask',function (req, res){
    var completeTask= req.body.check; 


//check for the "typeof" the different completed task, then add into the completed task, then add into the  complete task

if (typeof completeTask === "string"){
    complete.push(completeTask);

//check if the completed task already exist in the task , then remove using the array splice method 

    task.splice(task.indexOf(completeTask),1);
else if(typeof completeTask === "object"){
    for (var i =0; i< completeTask.length; i++){
        complete.push(completeTask[i]);
        task.splice(task.indexOf(completeTask[i]),1);
    }
}
}

    res.redirect("/");
});

//render the ejs and display added task,  task(index. ejs) = task(array)

app.get("/", function(req, res){
    res.render("index",{
        task:task, complete: complete
    });
});