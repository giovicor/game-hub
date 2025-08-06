import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "569af1b6b8c941e2aa1f13565abca8ce",
  },
});
