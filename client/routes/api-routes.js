const axios = require("axios");
const db = require("../models");
const path = require("path");

module.exports = function (app) {

    app.post("/search", (req, res) => {
        let eventName = req.body.title
    }

}