"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editTask = exports.deleteTask = exports.taskCompleted = exports.newTask = exports.toDoTask = exports.todoHome = void 0;
const task_1 = require("../model/task");
const manager = new task_1.taskManage();
const todoHome = (req, res) => {
    res.redirect("/to_do");
};
exports.todoHome = todoHome;
const toDoTask = (req, res) => {
    let tasks = manager.getallTask();
    res.render('to_do', { tasks });
};
exports.toDoTask = toDoTask;
const newTask = (req, res) => {
    let title = req.body.title;
    manager.addTask(title);
    res.redirect("/to_do");
};
exports.newTask = newTask;
const taskCompleted = async (req, res) => {
    const { id } = req.body;
    manager.doneTask(id);
    res.status(200).json({ success: true, message: 'Task deleted successfully' });
};
exports.taskCompleted = taskCompleted;
const deleteTask = async (req, res) => {
    let id = req.body;
    manager.deleteTask(parseInt(id));
    res.status(200).json({ success: true, message: 'Task deleted successfully' });
};
exports.deleteTask = deleteTask;
const editTask = (req, res) => {
    const { editTitle, taskId } = req.body;
    manager.editTask(parseInt(taskId), editTitle);
    res.redirect('/');
};
exports.editTask = editTask;
