const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");


app.use(bodyParser.json()); //  first this midleware get called then otherRoutes get called

app.use("/admin", adminRouter);
app.use("/user",userRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
