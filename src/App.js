import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import Cards from "./components/Cards";
import CardsContainer from "./components/CardsContainer";
import Navbar from "./components/Navbar";
import Pagination from "./components/Pagination";

function App() {
	const titulo = "Rick and Morty";
	const [characters, setCharacters] = useState([]);
	const [pagination, setPagination] = useState({});
	const url = "https://rickandmortyapi.com/api/character";

	const fetchCharacters = async (url) => {
		const res = await fetch(url);
		const data = await res.json();
		setCharacters(data.results);
		setPagination(data.info);
	};

	useEffect(() => {
		fetchCharacters("https://rickandmortyapi.com/api/character");
	}, []);

	const onPrevious = () => {
		fetchCharacters(pagination.prev);
	};

	const onNext = () => {
		fetchCharacters(pagination.next);
	};

	return (
		<>
			<Navbar titulo={titulo} />
			<Pagination onPrevious={onPrevious} onNext={onNext} />
			<CardsContainer characters={characters} />
		</>
	);
}

export default App;
