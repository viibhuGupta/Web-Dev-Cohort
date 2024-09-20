const { z } = require("zod");

const recipeSchema = z.object({
  title: z.string().nonempty(),
  description: z.string().nonempty(),
  ingredient: z.array(
    z.object({
      vegetableName: z.string().nonempty(),
      quantity: z.string().nonempty(),
      cookTime: z.string().nonempty(),
    })
  ),
});

const validateRecipe = (req, res, next) => {
  try {
    recipeSchema.parse(req.body); // validate the body against schema
    next();
  } catch (error) {
    res.status(400).json({
      error: error.errors,
    });
  }
};

module.exports = validateRecipe;
