import zod from "zod";

function validateInput(object) {
  const schema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8),
  });

  const response = schema.safeParse(object);
  console.log(response);
}

validateInput({
  email: "vibhu@gmail.com",
  password: "1",
});
