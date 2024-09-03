import express from "express";
const app = express();

app.use(express.json())


app.get("/",function(req,res){
    res.send("Hy , You are in Home Page")
})

app.post("/todos",(req , res)=> {
const createPayLoad = req.body;
const parsedPayload =  createTodo.safeParse(createPayLoad);
})

const port = 8080;
app.listen(port,()=>{
    console.log(`App listen at port no : ${port}`)
});