const mongoose = require("mongoose");
const DB_URL =
  "mongodb+srv://vikramkrgupta01:QZ4KkoJI7DMiPwjY@cluster0.kolnqwy.mongodb.net/RECIPE_PROJECT";
mongoose.connect(DB_URL);

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const RecipeSchema = new mongoose.Schema({
  title: String,
  description: String,
  ingredients: [
    {
      type: String, // Ingredient stored as a simple string
    },
  ],

  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // References the User who created the recipe
  },
});

const User = mongoose.model("USer", UserSchema);
const Recipe = mongoose.model("Recipe", RecipeSchema);

module.exports = {
  User,
  Recipe,
};
