import express from "express";
import zod from "zod";

const app = express();
const schema = zod.array(zod.number());

// this is how we write zod Schema
app.use(express.json());
app.post("/health", function (req, res) {
  //
  const kidneys = req.body.kidneys;
  // const kidneysLength = kidneys.length;
  const response = schema.safeParse(kidneys);

  if (!response.success) {
    res.status(411).json({
      msg:"Input in invalid"
    })
    
  }
  else{
    res.send({
      response,
    });
  }

  
});






// global catches
// app.use(function (req, res, next, err) {
//   res.json({
//     msg: "Sorry something is up in my server",
//   });
// });

let port = 3000;

app.listen(port, () => {
  console.log(`Listing at post number ${port}`);
});
