// This allows us to get rid of genre loading by calling a static genre list! 
import genres from "../data/genres";

export interface Genre {
	id: number;
	name: string;
	image_background: string;
}

const useGenres = () => ({ data: genres, isLoading: false, error: null });

export default useGenres;
