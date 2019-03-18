import React, { Component } from 'react'
import planet from '../assets/img/earth-map.svg';
import station from '../assets/img/station.png';
import './Planet.css';

export default class Planet extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
				<div className="planet-box">
					<img src={planet} alt="planet earth" style={{ marginLeft: `calc(-105% + ${(this.props.longitude * -0.55)}%)` }} className="planet" />
					<img src={station} style={{ top: `calc(50% + ${(this.props.latitude / -1.8)}%)` }} className="station" alt="iss-station" />
					<div className="planet-shadow"></div>
				</div>
			</div>
		)
	}
}
