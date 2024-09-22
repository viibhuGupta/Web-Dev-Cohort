const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://vikramkrgupta01:QZ4KkoJI7DMiPwjY@cluster0.kolnqwy.mongodb.net/NOTIFICATION_COUNT"
  )
  .then(() => {
    console.log("DB is Connected");
  });

const notificationSchema = new mongoose.Schema({
  notification: Number,
  friendrequest: Number,
  message: Number,
});

const notificationModel = mongoose.model("Notification", notificationSchema);

module.exports=notificationModel;