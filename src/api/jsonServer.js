import axios from "axios";

export default axios.create({
  //have to update baseURL every time running ngrok
  baseURL: "http://b302-142-117-163-157.ngrok.io",
});
