import { Request, Response } from "express"; 
import { taskManage, Task } from "../model/task";

const manager = new taskManage();

const todoHome = (req: Request, res: Response): void => {
  res.redirect("/to_do");
};




const toDoTask = (req: Request, res: Response): void => {

  let tasks = manager.getallTask()

  res.render('to_do', {tasks})
};




const newTask = (req: Request, res: Response): void => {
  let title: string = req.body.title;

  manager.addTask(title);
  res.redirect("/to_do");


};





const taskCompleted = async (req: Request, res: Response) => {
   const {id}=req.body


   manager.doneTask(id)
   res.status(200).json({ success: true, message: 'Task deleted successfully' });


};




const deleteTask = async (req: Request, res: Response) => {
    let id=req.body
 
  manager.deleteTask(parseInt(id))
   
  res.status(200).json({ success: true, message: 'Task deleted successfully' });


};



const editTask =  (req: Request, res: Response) => {
  const {editTitle,taskId}=req.body

  manager.editTask( parseInt(taskId),editTitle )

  res.redirect('/')
  



};

export { todoHome, toDoTask, newTask, taskCompleted, deleteTask, editTask };
