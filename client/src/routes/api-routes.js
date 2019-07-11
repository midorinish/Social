require("dotenv").config();
const axios = require("axios");
const path = require("path");

app.post("/search", (req, res) => {
  // set eventTitle to the req.body.title with spaces replaced with plus signs(+)
  let eventTitle = req.body.title.replace(/\s/g, "+");
  axios
    .get(
      `https://api.stubhub.com/sellers/oauth/accesstoken?q=${eventTitle}name=&eventLocalDate=&venue=&city=&state=&country=&apikey=7FbUF2V6b5URGnMS8cySMMGCepFal5GC`
    )
    .then(response => {
      res.json(response.data.items);
    })
    .catch(err => {
      res.json({ error: error });
    });
});
