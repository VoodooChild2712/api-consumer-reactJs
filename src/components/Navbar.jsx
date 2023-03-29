import React from "react";
const Navbar = (props) => {
    const imgStyle = {
        height: '7dvw',
    };
	return (
		<header>
			<nav className="navbar navbar-dark bg-dark">
				<div className="container justify-content-between">
					<h3 className="navbar-brand text-uppercase">{props.titulo}</h3>
                    <img src="https://www.nicepng.com/png/full/6-61830_rick-and-morty-rick-face-png.png" alt="rick" style={imgStyle}></img>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
