import React from "react";
import Cards from "./Cards";

const CardsContainer = (props) => {
	return (
		<div className="row m-2 mt-5 p-2">
			{props.characters.lenght === 0
				? null
				: props.characters.map((item) => <Cards key={item.id} item={item} />)}
		</div>
	);
};

export default CardsContainer;
