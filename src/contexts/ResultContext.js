import { createContext, useContext, useState } from "react";

const ResultContext = createContext();
const BASE_URI = "https://google-search3.p.rapidapi.com/api/v1";

export const ResultContextProvider = ({ children }) => {
	const [results, setResults] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [searchQuery, setSearchQuery] = useState("React and Tailwind css");

	// /videos,/search,/images
	const getResults = async type => {
		setIsLoading(true);

		const res = await fetch(`${BASE_URI}${type}`, {
			method: "GET",
			headers: {
				"x-user-agent": "desktop",
				"x-rapidapi-host": "google-search3.p.rapidapi.com",
				"x-rapidapi-key": "",
			},
		});

		const data = await res.json();

		if (type.includes("/news")) {
			setResults(data.entries);
		} else if (type.includes("/images")) {
			setResults(data.image_results);
		} else {
			setResults(data.results);
		}

		setIsLoading(false);
	};

	return (
		<ResultContext.Provider
			value={{ getResults, results, searchQuery, setSearchQuery, isLoading }}>
			{children}
		</ResultContext.Provider>
	);
};

export const useResultContext = () => useContext(ResultContext);
