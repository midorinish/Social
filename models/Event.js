const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = new Schema({
    title: String,
    date: Number
})

const Event = mongoose.model("Event", EventSchema);
module.exports = Event;