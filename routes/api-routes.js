require("dotenv").config();
const axios = require("axios");
const Event = require("../models/Event");

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

  app.post("/search", (req, res) => {
    let eventTitle = req.body.events;
    const BASEURL = `https://api.stubhub.com/sellers/search/events/v3?name=${eventTitle}`;
    console.log(BASEURL, eventTitle);
    axios.get(BASEURL, {
      headers: {
        "Authorization": `Bearer ${process.env.StubhubKey}`,
        "Accept": "application/json"
      }
    }
    ).then(
      (response) => {
        const eventsDiscription = response.data.events;
        console.log('response', response.data.events);
        return res.json(eventsDiscription);
      }
    ).catch(
      (err) => {
        // console.log('error', err.data);
        return res.json({ error: err })
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

