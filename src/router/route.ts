import  express  from "express"
const route = express()
import {todoHome ,toDoTask,newTask,deleteTask,taskCompleted,editTask} from '../controller/controller'
import path from "path"


route.set('view engine', 'ejs')
route.set("views", path.join(__dirname, "../../src/views"))


//to do home page

route.get('/',todoHome);

route.get('/to_do',toDoTask);

route.post('/new_task',newTask)

route.delete('/delete_tasks',deleteTask)

route.put('/done_task',taskCompleted)

route.post('/edit',editTask)

export default route;