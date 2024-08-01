import express from "express";
const app = express();

app.get("/health", (req, res) => {
  const username = req.headers.username;
  const password = req.headers.password;
  const kidenyId = req.query.kidenyid;

  if (!(username === "vibhu" && password === "pass")) {
    res.status(400).json({ msg: "somthing up with your input" });

    return;
  }

  if (kidenyId != 1 && kidenyId != 2) {
    res.status(400).json({ msg: "somthing up with your input kideny" });
  }

  res.json({
    msg: "Your kideny is fine",
  });
});

let port = 3000;

app.listen(port, () => {
    console.log(`Listing at post number ${port}`);
  });