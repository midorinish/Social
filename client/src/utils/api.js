import axios from "axios";

export default {
  getEvents: () => {
    return axios.get("/api/events");
  },
  searchEvents: (title) => {
    return axios.post("/search", { title: title });
  },
  addEventToDb: (eventData) => {
    return axios.post("/api/events", eventData)
  },
  deleteEvent: (id) => {
    return axios.delete(`/api/events/${id}`);
  }
}


