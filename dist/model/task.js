"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskManage = exports.Task = void 0;
//abstraction 
class List {
    constructor(id, title, status) {
        this.id = id,
            this.title = title,
            this.status = status;
    }
}
// we canot dirctly use the abstract class
class Task extends List {
}
exports.Task = Task;
// class for manage all the task and perform opration like edit delete updation 
class taskManage {
    constructor() {
        this.tasks = [];
        this.nextId = 1;
    }
    addTask(title) {
        let task = new Task(this.nextId++, title, 'pending');
        this.tasks.push(task);
        return task;
    }
    getallTask() {
        return this.tasks;
    }
    getTaskbyid(id) {
        return this.tasks.find((e) => e.id === id);
    }
    deleteTask(id) {
        const index = this.tasks.findIndex(function (task) {
            return task.id === id;
        });
        this.tasks.splice(index, 1);
    }
    doneTask(id) {
        let item = this.getTaskbyid(id);
        if (item) {
            if (item.status == 'pending') {
                item.status = "done";
            }
            else {
                item.status = 'pending';
            }
        }
    }
    editTask(id, editTitle) {
        let item = this.getTaskbyid(id);
        if (item) {
            item.title = editTitle;
        }
    }
}
exports.taskManage = taskManage;
