import React, { useState } from "react";

//create your first component
export function Lightbulb(props) {
	console.log(props);
	const [color, setColor] = useState();
	return (
		<div
			className={
				color === props.bulbColor
					? "light" + " " + props.bulbColor + " " + "selected"
					: "light" + " " + props.bulbColor
			}
			className="light red selected"
			onClick={() => setColor(props.bulbColor)}></div>
	);
}
