const mongoose = require("mongoose");

const ingredientSchema = mongoose.Schema({
  vegetableName: String,
  quantity: Number,
  cookTime: Number,
});

const recipeSchema = mongoose.Schema({
  title: String,
  description: String,
  ingredient: [ingredientSchema],
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = {
  Recipe,
};
