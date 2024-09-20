const mongoose = require("mongoose");

const ingredientSchema = mongoose.Schema({
  vegetableName: String,
  quantity: String,
  cookTime: String,
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
