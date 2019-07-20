import axios from "axios";

export default {
  getEvents: () => axios.get("/api/events"),
  searchEvents: (events) => axios.post("/search", { events }),
  addEventToDb: eventData => axios.post("/api/events", eventData),
  searchEvents: (events) => axios.post("/search", { events }),
  deleteEvent: id => axios.delete(`/api/events/${id}`)



}



// export 

// export );

// export ;




// const BASEURL =
//   " https://api.stubhub.com/sellers/oauth/accesstoken?name=&eventLocalDate=&venue=&city=&state=&country=";
// const APIKEY = "&apikey=7FbUF2V6b5URGnMS8cySMMGCepFal5GC";

// export default {
//   search: function (query) {
//     return axios.get(BASEURL + query + APIKEY);
//   }
// };
