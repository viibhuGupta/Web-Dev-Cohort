const express = require("express");
const cors = require("cors");
const db = require("./db");
const app = express();

const mainRouter = require("./routes/index");

app.use(cors());
app.use(express.json());

db();

app.use("/api/v1", mainRouter);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Port is Runing at ${PORT}`);
});
