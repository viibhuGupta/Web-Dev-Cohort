const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());


const mongoUrl =
  "mongodb+srv://vikramkrgupta01:QZ4KkoJI7DMiPwjY@cluster0.kolnqwy.mongodb.net/TODO_APP_FULL_STACK";

mongoose
  .connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Db is Connected");
  })
  

// schema and model
// Todo schema and model
const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const Todo = mongoose.model("Todo", todoSchema);

// api route
app.get("/todo/:id", async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (todo) {
      res.json(todo);
    } else {
      res.status(404).json({
        msg: "Todo not Found",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: "An Error occurred",
    });
  }
});

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`App is Listing at Port ${PORT}`);
});
