import axios from "axios";

export default function() {
  const res = axios.create({
    baseURL: `https://www.googleapis.com/webfonts/v1`
  });

  return res;
}
