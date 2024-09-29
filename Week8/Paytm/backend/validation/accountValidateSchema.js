const z = require("zod");

const accountSchemaValidate = z.object({
  userId: z.string(),
  balance: z.number(),
});

module.exports = accountSchemaValidate;
