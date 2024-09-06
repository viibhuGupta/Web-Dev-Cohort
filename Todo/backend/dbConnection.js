const mongoose = require("mongoose");
const { boolean } = require("zod");

mongoose.connect(
  "mongodb+srv://vikramkrgupta01:QZ4KkoJI7DMiPwjY@cluster0.kolnqwy.mongodb.net/TODO_APP_FULL_STACK"
);

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: boolean,
});

const todo = mongoose.model("TODO", todoSchema);

module.exports = { todo };
