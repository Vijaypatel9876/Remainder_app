require("dotenv").config();
// console.log(process.env.DBURL);
const express = require("express");
const dbConnect = require("./dbconfig/database");
const bodyParser = require("body-parser");
const app = express();
const PORT = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Hello World!,,,,,",
  });
});

// all routes to be defined here
// this line we redirect all request that ended with /api on .route folders index page
app.use("/api", require("./routes/"));

// if we want to call router from main file then use this
// app.use("/birthday", birthdayRoute);
// app.use("/sip", sipRoute);

app.listen(PORT, async () => {
  // connect to database
  await dbConnect(process.env.DBURL);
  console.log(`app is running on PORT http://localhost:${PORT}`);
});
