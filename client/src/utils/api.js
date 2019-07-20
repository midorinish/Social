import axios from "axios";

export default {
  getEvents: () => {
    return axios.get("/api/events");
  }, 
searchEvents: (events) => {
    return axios.post("/search", { events });  
  },
<<<<<<< HEAD
  addEventToDb: eventData => {
    return axios.post("/api/events", eventData);
=======
  searchEvents: (events) => {
    return axios.post("/search", { events });
>>>>>>> The app now searches events based off of the name of the event
  },
  deleteEvent: id => {
    return axios.delete(`/api/events/${id}`);
  }
};

// const BASEURL =
//   " https://api.stubhub.com/sellers/oauth/accesstoken?name=&eventLocalDate=&venue=&city=&state=&country=";
// const APIKEY = "&apikey=7FbUF2V6b5URGnMS8cySMMGCepFal5GC";

// export default {
//   search: function (query) {
//     return axios.get(BASEURL + query + APIKEY);
//   }
// };
