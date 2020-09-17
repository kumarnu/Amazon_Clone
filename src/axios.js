import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-23ff5.cloudfunctions.net/api", // The API (Cloud function) URL, API endpoint
});

export default instance;

//http://localhost:5002/clone-23ff5/us-central1/api // LOcal API URL
//https://us-central1-clone-23ff5.cloudfunctions.net/api //Cloud Live API url