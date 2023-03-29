import React from "react";

const Pagination = ({ onPrevious, onNext }) => {
	return (
		<nav>
			<ul className="pagination justify-content-center mt-4">
				<button className="btn btn-danger" onClick={onPrevious}>
					Anterior
				</button>
				<button className="btn btn-dark ms-2" onClick={onNext}>
					Siguiente
				</button>
			</ul>
		</nav>
	);
};

export default Pagination;
