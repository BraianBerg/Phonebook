const date = require('../getDate.js');
const Task = require('../models/task');

exports.getMainPage = (req, res) => {
    Task.fetchTasks(items =>{
        let today = date.getTodayDateLong();
        res.render('index.ejs', {date: today, myToDo: items});
    });
    
   
};

exports.postNewTask = (req, res) => {

    let tasks = new Task(req.body.newTask, req.body.newTask2);

    tasks.saveTask();

    /*let userTask = req.body.newTask;
    toDoList.push(userTask);
    console.log(toDoList);*/
    res.redirect('/');
};

exports.deleteTask =  (req, res) => {
    //let itemToDelete = req.body.checkbox;
    Task.deleteItem(req.body.checkbox);
    res.redirect('/');

};