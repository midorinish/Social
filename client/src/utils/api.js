import axios from "axios";

export default {
  getEvents: () => axios.get("/api/events"),
  searchEvents: (events) => axios.post("/search", { events }),
  addEventToDb: eventData => axios.post("/api/events", eventData),
  searchEvents: (events) => axios.post("/search", { events }),
  deleteEvent: id => axios.delete(`/api/events/${id}`),
}
