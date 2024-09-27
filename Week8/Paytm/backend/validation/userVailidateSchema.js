const z = require("zod");

const validateUserSignupSchema = z.object({
  firstName: z.string().nonempty(),
  lastName: z.string().nonempty(),
  userName: z.string().min(3).max(10),
  email: z.string().email(),
  phoneNumber: z.string().length(10),
  password: z.string().min(8).max(15),
});

const validateUserSigninSchema = z.object({
  userName: z.string().min(3).max(10),
  password: z.string().min(8).max(15),
});

const validateUpdateUserSchema = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  password: z.string().optional(),
});


module.exports = {
  validateUserSignupSchema,
  validateUserSigninSchema,
  validateUpdateUserSchema,
};
