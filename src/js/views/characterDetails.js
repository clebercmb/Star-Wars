import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

const characterDetails = props => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			Hello
			<div className="card mb-3" style={{ maxWidth: 540 }}>
				<div className="row g-0">
					<div className="col-md-4">
						<img src="..." alt="..." />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">Gender</p>
							<p className="card-text">eyecolor</p>
							<p className="card-text">height</p>

							<p className="card-text">
								<small className="text-muted">Last updated 3 mins ago</small>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default characterDetails;
