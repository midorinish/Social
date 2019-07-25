import axios from "axios";

export default {
  getEvents: () => axios.get("/api/events"),
  searchEvents: (events) => axios.post("/searchpage", { events }),
  addEventToDb: eventData => axios.post("/api/events", eventData),
<<<<<<< HEAD
  deleteEvent: id => axios.delete(`/api/events/${id}`)

=======
  deleteEvent: id => axios.delete(`/api/events/${id}`),
>>>>>>> test
}
