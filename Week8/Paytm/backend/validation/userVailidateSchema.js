const z = require("zod");

const UserSignupSchema = z.object({
  firstName: z.string().nonempty(),
  lastName: z.string().nonempty(),
  userName: z.string().min(3).max(10),
  email: z.string().email(),
  phoneNumber: z.string().length(10).regex(/^\d+$/, "Phone number must be numeric"),
  password: z.string().min(8).max(15),
});

const UserSigninSchema = z.object({
  userName: z.string().min(3).max(10),
  password: z.string().min(8).max(15),
});

const UpdateUserSchema = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  password: z.string().min(8).max(15),
});

const validateUserSignupSchema = (req, res, next) => {
  try {
    UserSignupSchema.parse(req.body);
    next();
  } catch (error) {
    return res.status(400).json({ error: error.errors });
  }
};

const validateUserSigninSchema = (req, res, next) => {
  try {
    UserSigninSchema.parse(req.body);
    next();
  } catch (error) {
    return res.status(400).json({ error: error.errors });
  }
};

const validateUpdateUserSchema = (req, res, next) => {
  try {
    UpdateUserSchema.parse(req.body);
    next();
  } catch (error) {
    return res.status(400).json({ error: error.errors });
  }
};

module.exports = {
  validateUserSignupSchema,
  validateUserSigninSchema,
  validateUpdateUserSchema,
};
