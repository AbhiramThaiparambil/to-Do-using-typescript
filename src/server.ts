import express from "express"
import bodyParser from "body-parser";
import route from './router/route'
import path from "path"
const PORT =5001;
const app=express()

app.set('view engine', 'ejs')
app.set("views", path.join(__dirname, "../../src/views"))

app.use(express.static('src/public'))
app.use(express.static('dist/public'))
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use('/',route)

app.listen(PORT,()=>{
    console.log(`TO DO IS RUNNING :- http://localhost:${PORT}`);
    
})