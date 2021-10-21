import { useState } from "react";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Routes } from "./components/Routes";

function App() {
	const [darkTheme, setDarkTheme] = useState(false);

	return (
		<div className={darkTheme ? "dark" : ""}>
			<div className='bg-white dark:bg-gray-900 dark:text-gray-200 min-h-screen'>
				<Navbar setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
				<Routes />
				<Footer />
			</div>
		</div>
	);
}

export default App;
