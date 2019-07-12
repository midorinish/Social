const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//Define API Routes

//Send every other request to the React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//Connect to Mongo DB
mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb://user:password1@ds247827.mlab.com:47827/heroku_80s09n2r"
);
app.listen(PORT, () => {
  console.log("API server now on port" + PORT);
});
