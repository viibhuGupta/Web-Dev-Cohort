const express = require("express");
const cors = require("cors")
const notificationModel = require("./db/connect");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  const notificationCount = Math.floor(Math.random() * 200 + 1); //math.floor provide round value 4.7 => 4
  const messageCount = Math.floor(Math.random() * 100 + 1);
  const friendRequestCount = Math.floor(Math.random() * 50 + 1);
  const notification = new notificationModel({
    notification: notificationCount,
    friendrequest: friendRequestCount,
    message: messageCount,
  });
  await notification.save();
  res.send({ notificationCount, messageCount, friendRequestCount });
});

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`App is listing at port ${PORT}`);
});
