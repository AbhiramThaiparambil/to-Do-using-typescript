"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const route = (0, express_1.default)();
const controller_1 = require("../controller/controller");
const path_1 = __importDefault(require("path"));
route.set('view engine', 'ejs');
route.set("views", path_1.default.join(__dirname, "../../src/views"));
//to do home page
route.get('/', controller_1.todoHome);
route.get('/to_do', controller_1.toDoTask);
route.post('/new_task', controller_1.newTask);
route.delete('/delete_tasks', controller_1.deleteTask);
route.put('/done_task', controller_1.taskCompleted);
route.post('/edit', controller_1.editTask);
exports.default = route;
