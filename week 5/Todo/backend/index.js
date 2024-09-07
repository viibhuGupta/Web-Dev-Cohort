const express = require("express");
const { createTodo } = require("./type");
const { todo } = require("./dbConnection");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.post("/todo", async function (req, res) {
  const createPayLoad = req.body;
  const parsedPayload = createTodo.safeParse(createPayLoad);
  if (!parsedPayload) {
    res.status(411).json({
      msg: "You send the wrong Input",
    });
    return;
  }

  //put into mongo DB
  await todo.create({
    title: createPayLoad.title,
    description: createPayLoad.description,
    completed: false,
  });
  res.json({
    msg: "Todo Created ",
  });
});

app.get("/todos", async function (req, res) {
  const todos = await todo.find({});
  res.json({
    todos,
  });
});

app.post("/completed", async (req, res) => {
  const updatePayLoad = req.body;
  const parsedPayload = createTodo.safeParse(updatePayLoad);
  if (!parsedPayload) {
    res.status(411).json({
      msg: "You send the wrong inputs",
    });
    return;
  }
  await todo.update(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );
});

const port = 8080;
app.listen(port, () => {
  console.log(`App listen at port no : ${port}`);
});
