const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const logger = require("morgan");


// Middleware
app.use(express.urlencoded({ extedned: true }))
app.use(express.json());
app.use(logger("common"));



// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


// Send every request to the React app

require("./routes/api-routes")(app);

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/Social", { useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true }
);

require
// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function () {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});


