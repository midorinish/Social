require("dotenv").config();
const axios = require("axios");
const db = require("../models");
const path = require("path");

module.exports = function (app) {
    app.get("/api/events", (req, res) => {
        db.Event.find().then(
            (booksData) => {
                res.json(booksData);
            }
        ).catch(
            (err) => {
                res.json({ error: err });
            }
        );
    });

    app.post("/search", (req, res) => {
        let EventTitle = req.body.title
        axios.get(
            `https://api.stubhub.com/sellers/oauth/accesstoken?name=&eventLocalDate=&venue=&city=&state=&country=${EventTitle}&apikey=${process.env.EVENTSKEY}`
        ).then(
            (response) => {
                res.json(response.data.items)
            }
        ).catch(
            (err) => {
                res.json({ error: error })
            }
        );
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
        );
    });

    app.delete("/api/events/:id", (req, res) => {
        db.Event.findByIdAndDelete(req.params.id).then(
            (response) => {
                res.json({ successful: response });
            }
        ).catch(
            (err) => {
                req.json({ error: err })
            }
        );
    });

}   
