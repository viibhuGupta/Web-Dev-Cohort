const express = require("express");
const mongoose = require("mongoose");
const recipeRoutes = require("./routes/recipeRoute");
const app = express();

require("../backend/db/connect");

app.use(express.json());
app.use("/api/v1/", recipeRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is listing at port ${PORT}`);
});
