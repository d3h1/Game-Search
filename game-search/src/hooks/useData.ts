import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

interface FetchResponse<T> {
	count: number;
	results: T[]; // Taking the genre with id and name and making it into an array
}

const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
	const [data, setData] = useState<T[]>([]); // Shapes this array to the Game Array
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	// Used for sending a fetch request to the backend
	useEffect(() => {
		const controller = new AbortController();

		setIsLoading(true);
		apiClient
			.get<FetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig }) // Shapes the get around the response
			.then((res) => {
				setData(res.data.results);
				setIsLoading(false); // You wanna do this at the end but with strict mode, this is where it should be done
			})
			.catch((err) => {
				if (err instanceof CanceledError) return;
				setError(err.message);
				setIsLoading(false);
			});

		return () => controller.abort();
	}, deps ?  [...deps] : []);

	return { data, error, isLoading };
};

export default useData;
