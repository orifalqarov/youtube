import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com/";
const RAPID_API_KEY = JSON.stringify(import.meta.env.VITE_SOME_KEY);

const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": "889b4d190emshaca980af1bce294p1099bbjsn6245a24d2a77",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};
export const ApiService = {
  async fetching(url) {
    const res = await axios.get(`${BASE_URL}${url}`, options);
    return res.data;
  },
};
