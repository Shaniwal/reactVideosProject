import axios from "axios";

const Key = "AIzaSyD-StYT2QBttrxDwmKOW7mzaQbIX8v3_4k";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: Key,
  },
});
