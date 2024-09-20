const router = require("express").Router();
const { Recipe } = require("../schema/recipeSchema");
const validateRecipe = require("../validation/recipeVailidate");

router.post("/create", validateRecipe, async (req, res) => {
  try {
    const data = req.body;
    const newRecipe = new Recipe(data);
    await newRecipe.save();
    res.status(200).json({
      message: "Recipe Created Successfully ",
    });
  } catch (error) {
    console.log("Recipe Route Error ", error);
  }
});

module.exports = router;
