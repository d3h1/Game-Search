import axios from "axios";

const API_URL = import.meta.env.VITE_RAWG_URL;
const API_KEY = import.meta.env.VITE_RAWG_API_KEY;


export default axios.create({
	baseURL: API_URL,
	params: {
		key: API_KEY,
	},
});
