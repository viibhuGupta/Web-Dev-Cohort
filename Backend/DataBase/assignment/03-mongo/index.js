const express = require("express");
const bodyParser = require("body-parser");
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");
const app = express();

// middleware for parsing request bodies
app.use(bodyParser.json());
app.use("/admin", adminRouter);  // if anythings come to this router goes to adminRouter
app.use("/user", userRouter);  // if anythings come to this router goes to userRouter

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
