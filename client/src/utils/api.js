import axios from "axios";

export getEvents = () => axios.get("/api/events");

export searchEvents = events  => axios.post("/search", { events });  
                                                                                                                                                             
export addEventToDb = eventData => axios.post("/api/events", eventData);

export searchEvents = (events) => axios.post("/search", { events });

export deleteEvent = id => axios.delete(`/api/events/${id}`);
  


// const BASEURL =
//   " https://api.stubhub.com/sellers/oauth/accesstoken?name=&eventLocalDate=&venue=&city=&state=&country=";
// const APIKEY = "&apikey=7FbUF2V6b5URGnMS8cySMMGCepFal5GC";

// export default {
//   search: function (query) {
//     return axios.get(BASEURL + query + APIKEY);
//   }
// };
