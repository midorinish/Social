import axios from "axios";

export default {
  getEvents: () => axios.get("/api/events"),
  searchEvents: (events) => axios.post("/search", { events }),
  addEventToDb: eventData => axios.post("/api/events", eventData),
  deleteEvent: id => axios.delete(`/api/events/${id}`),
}
