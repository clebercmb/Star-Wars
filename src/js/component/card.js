import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const Card = props => {
	const { store, actions } = useContext(Context);

	return (
		<div className="card" style={{ width: "450px" }}>
			Hello World
			<img
				src="https://lumiere-a.akamaihd.net/v1/images/artillery-stormtrooper-main_b55b4bb9.jpeg?region=329%2C1%2C951%2C536"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body">
				<h5 className="card-title">{props.character && props.character.name}</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make up the bulk of the card
					{`'`}s content.
				</p>
				<span href="#" className="btn btn-primary">
					learn more
				</span>
			</div>
		</div>
	);
};

Card.propTypes = {
	character: PropTypes.object,
	index: PropTypes.number,
	planets: PropTypes.object,
	index: PropTypes.number
};
