import React, { Component } from 'react';
import './App.css';
import Planet from "./components/Planet"


class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
		}
	}
	componentDidMount = () => {
		setInterval(() => {
			this.fetchData()
		}, 1000);
	}

	fetchData = () => {
		fetch("http://api.open-notify.org/iss-now.json?callback")
			.then(response => response.json())
			.then(data => this.setStationInfo(data)
			);
	}
	setStationInfo = (element) => {
		let latitudeValue = parseFloat(element.iss_position.latitude).toFixed(2);
		let longitudeValue = parseFloat(element.iss_position.longitude).toFixed(2);
		this.setVelocity(element);
		this.setState({
			currentTime: this.setTime(element),
			stationSpeed: this.setVelocity(element),
			latitude: latitudeValue,
			longitude: longitudeValue
		})
	}

	setVelocity = (element) => {
		if (this.state.latitude && this.state.longitude) {
			let earthWidth = 12756.274
			let a = (parseFloat(element.iss_position.longitude - this.state.longitude).toFixed(4) * Math.cos(element.iss_position.latitude * Math.PI / 180));
			let b = parseFloat(this.state.latitude - element.iss_position.latitude).toFixed(4);
			let velocity = Math.sqrt(a * a + b * b) * Math.PI * earthWidth / 360 * 3600;
			return parseInt(velocity)
		}
	}

	setTime = (element) => {
		let date = new Date(element.timestamp * 1000);
		date = date.toLocaleString();
		return date
	}
	render() {
		return (
			<div className="App">
				<span className='speed-meter'>{this.state.stationSpeed} KM/H</span>
				<span className="date">{this.state.currentTime}</span>
				<Planet latitude={this.state.latitude} longitude={this.state.longitude} />
			</div>
		);
	}
}

export default App;
let oneDegreeLogitude = 111.32;
let oneDegreeLatitude = 110.57;
let latitudeSpeed = parseFloat(element.iss_position.latitude - this.state.latitude).toFixed(2) * 1;
let longitudeSpeed = parseFloat(element.iss_position.longitude - this.state.longitude).toFixed(2) * 1;
latitudeSpeed = Math.abs(latitudeSpeed);
longitudeSpeed = Math.abs(longitudeSpeed);
console.log((longitudeSpeed / oneDegreeLogitude * 3600) + (oneDegreeLatitude / latitudeSpeed * 3600));