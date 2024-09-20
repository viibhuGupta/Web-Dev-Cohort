const mongoose = require("mongoose");
const DB_URL =
  "mongodb+srv://vikramkrgupta01:QZ4KkoJI7DMiPwjY@cluster0.kolnqwy.mongodb.net/RECIPE_PROJECT";

mongoose.connect(DB_URL).then(() => console.log("DB connected Successfully "));
