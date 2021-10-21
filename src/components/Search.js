import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { useResultContext } from "../contexts/ResultContext";
import { Links } from "./Links";

export const Search = () => {
	const [text, setText] = useState("Elon Musk");
	const { setSearchQuery } = useResultContext();
	const [debouncedValue] = useDebounce(text, 300);

	useEffect(() => {
		if (debouncedValue) setSearchQuery(debouncedValue);
	}, [debouncedValue]);

	return (
		<div className='relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3'>
			<input
				type='text'
				value={text}
				className='sm:w-96 2-80 h-8 dark:bg-gray-200 border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg'
				placeholder='Search Goggle or type URL'
				onChange={e => setText(e.target.value)}
			/>
			{text && (
				<button
					type='button'
					className='absolute top-1.5 right-4 text-2xl text-gray-500'
					onClick={() => setText("")}>
					x
				</button>
			)}
			<Links />
		</div>
	);
};
