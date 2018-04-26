import React, { Component } from 'react';
import Card from '../Card/Card.js';
import Works from "./Works.json";
//import "./Work.css"
 class Work extends Component {
	state = {
		Works: Works
	};
	render() {
		return(
			<div className="work">
				{this.state.Works.map(Works => (
					<Card key={Works.id} Works={Works} />
				))}
            </div>

		);
	}
}
export default Work;