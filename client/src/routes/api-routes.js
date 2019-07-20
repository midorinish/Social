require("dotenv").config();
const axios = require("axios");

const db = require
const path = require("path");

module.exports = function (app) {
  app.get("/api/events", (req, res) => {
    db.Event.find().then(
      (eventsData) => {
        res.json(eventsData)
      }
    ).catch(
      (err) => {
        res.json({ error: err });
      }
    )
  });

  app.get("/search", (req, res) => {

    let eventTitle = req.body.title;
    axios.get(
      `https://api.stubhub.com/sellers/oauth/accesstoken?name=&eventLocalDate=&venue=&city=&state=&country?q=${eventTitle}&apikey=cxPnzvBZJHUGNksWDezaMpY59GwdnFVy`
    ).then(
      (response) => {
        res.json(response.data.items)
      }
    ).catch(
      (err) => {
        res.json({ error: err })
      }
    )
  });

  app.post("/api/events", (req, res) => {
    db.Event.create(req.body).then(
      (response) => {
        res.json({ successful: response });
      }
    ).catch(
      (err) => {
        res.json({ error: err });
      }
    )
  });

  app.delete("/api/events/:id", (req, res) => {
    db.Event.findByIdAndDelete(req.params.id).then(
      (response) => {
        res.json({ successful: response });
      }
    ).catch(
      (err) => {
        res.json({ error: err });
      }
    )
  });
}

