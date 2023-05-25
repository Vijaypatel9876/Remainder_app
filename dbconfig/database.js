const mongoose = require("mongoose");

const dbConnect = (dbUrl) => {
  console.log("connected to db");
  return mongoose.connect(dbUrl, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
};
module.exports = dbConnect;
