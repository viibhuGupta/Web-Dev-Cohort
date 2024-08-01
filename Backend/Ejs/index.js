import express from "express";
import path from "path";

const app = express();
let port = 8080;

app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  //   res.send("welcome to Home Page");
  res.render("home.ejs");
});

app.listen(port, () => {
  console.log(`App is listning at port no ${port}`);
});
