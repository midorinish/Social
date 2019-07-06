import axios from "axios";
const BASEURL =
  " https://api.stubhub.com/sellers/oauth/accesstoken?name=&eventLocalDate=&venue=&city=&state=&country=";
const APIKEY = "&apikey=7FbUF2V6b5URGnMS8cySMMGCepFal5GC";

export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};
