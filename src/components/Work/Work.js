import React, { Component } from 'react';
import Card from '../Card/Card.js';
import Works from "./Works.json";
import "./Work.css"
 class Work extends Component {
	state = {
		Works: Works
	};
	render() {
		return(
			<div className="work">
			<h3 className="title2">Work</h3>
			<a href="https://github.com/pdlc89"><img className="github" alt="github-link" src="https://kanbanize.com/blog/wp-content/uploads/2014/11/GitHub.jpg" /></a>
			<br/>
				{this.state.Works.map(Works => (
					<Card key={Works.id} Works={Works} />
				))}
            </div>

		);
	}
}
export default Work;