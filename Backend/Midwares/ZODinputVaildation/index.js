import express from "express";
import zod from "zod";

const app = express();

// this is how we write zod Schema
const schema = zod.array(zod.number());
// in form of object
// email string => email
// password string => at least 8 digits
// country literal => "IN","US"

const schema2 = zod.object({
  email: zod.string(),
  password: zod.string(),
  country: zod.literal("IN").or(zod.literal("US")),
});

app.use(express.json());
app.post("/health", function (req, res) {
  const kidneys = req.body.kidneys;
  const response = schema.safeParse(kidneys);

  if (!response.success) {
    res.status(411).json({
      msg: "Input in invalid",
    });
  } else {
    res.send({
      response,
    });
  }
});

let port = 3000;

app.listen(port, () => {
  console.log(`Listing at post number ${port}`);
});
