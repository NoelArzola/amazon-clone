import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-fac52.cloudfunctions.net/api",
  //"http://localhost:5001/clone-fac52/us-central1/api",
}); // The API {cloud function} URL

export default instance;
