import React from "react";

const Cards = ({ item }) => {
	const cardStyles = {
		width: "300px",
	};

	return (
		<div className="col mb-4 justify-content-center d-flex">
			<div className="card" style={cardStyles}>
				<img className="card-img" src={item.image} alt="img" />
				<div className="card-body">
					<h5 className="card-title text-primary">{item.name}</h5>
					<hr />
					<p>
						<span className="fw-bold">Especies: </span> {item.species}
					</p>
					<p>
						<span className="fw-bold">Localizacion: </span> {item.location.name}
					</p>
					<p>{item.id}</p>
				</div>
			</div>
		</div>
	);
};

export default Cards;
