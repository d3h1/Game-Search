import axios from "axios";

// const API_URL = import.meta.env.VITE_RAWG_URL;
// const API_KEY = import.meta.env.VITE_RAWG_API_KEY;


export default axios.create({
	baseURL: "https://api.rawg.io/api/",
	params: {
		key: "d67e0f8e51ad4ca1b9810a54dbbaa778",
	},
	withCredentials: false,
});
