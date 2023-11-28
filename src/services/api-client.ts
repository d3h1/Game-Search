import axios from "axios";

// This will be done through vercel --- Building
const API_URL = import.meta.env.VITE_RAWG_URL;
const API_KEY = import.meta.env.VITE_RAWG_API_KEY;


export default axios.create({
	baseURL: API_URL,
	params: {
		key: API_KEY,
	},
	withCredentials: false,
});
