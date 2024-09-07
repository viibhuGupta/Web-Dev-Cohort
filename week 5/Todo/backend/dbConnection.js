
// const { boolean } = require("zod");
const mongoose = require("mongoose") ;

mongoose.connect(
  "mongodb+srv://vikramkrgupta01:QZ4KkoJI7DMiPwjY@cluster0.kolnqwy.mongodb.net/TODO_APP_FULL_STACK"
);

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed:Boolean ,
});

const todo = mongoose.model("TODO", todoSchema);

module.exports = { todo };
