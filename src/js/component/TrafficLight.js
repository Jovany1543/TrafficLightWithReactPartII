import React from "react";

import { Lightbulb } from "./Lightbulb.js";

//create your first component
export function TrafficLight() {
	return (
		<div className="d-flex flex-column align-items-center justify-content-center">
			<div className="cable"></div>
			<div className="light-container d-flex flex-column align-items-center justify-content-center">
				<Lightbulb bulbColor="red" />
				<Lightbulb bulbColor="yellow" />
				<Lightbulb bulbColor="green" />
			</div>
		</div>
	);
}
