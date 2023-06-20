import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com/";
const RAPID_API_KEY = (import.meta.env.VITE_SOME_KEY);

const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": RAPID_API_KEY.toString(),
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};
export const ApiService = {
  async fetching(url) {
    const res = await axios.get(`${BASE_URL}${url}`, options);
    return res.data;
  },
};
