const mongoose = require("mongoose");
mongoose.connect(
  process.env.MONGOURL ||
    "mongodb+srv://admin:Maha0827@region-in-aws.tf4dx.mongodb.net/project1?retryWrites=true&w=majority&appName=Region-IN-AWS"
);
const connection = mongoose.connection;
connection.on("connected", () => {
  console.log("DB Connected");
});
connection.on("error", () => console.log("DB Error"));
module.exports = mongoose;
