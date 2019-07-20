const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = new Schema({
    title: String,
    city: String,
    dateTime: String,
    venue: String
})

const Event = mongoose.model("Event", EventSchema);
module.exports = Event;