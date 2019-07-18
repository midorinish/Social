import axios from "axios";

export default {
  getEvents: () => {
    return axios.get("/api/events");
  },
  searchEvents: (title) => {
    console.log(title);
    return axios.post("/search", { title: title });
  },
  addEventToDb: (eventData) => {
    return axios.post("/api/events", eventData)
  },
  deleteEvent: (id) => {
    return axios.delete(`/api/events/${id}`);
  }
}

// const BASEURL =
//   " https://api.stubhub.com/sellers/oauth/accesstoken?name=&eventLocalDate=&venue=&city=&state=&country=";
// const APIKEY = "&apikey=7FbUF2V6b5URGnMS8cySMMGCepFal5GC";

// export default {
//   search: function (query) {
//     return axios.get(BASEURL + query + APIKEY);
//   }
// };

