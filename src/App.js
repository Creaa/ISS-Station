import React, { Component } from 'react';
import './App.css';
import Planet from "./components/Planet"


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      distance: 0
    }
  }
  componentDidMount = () => {
    console.log(this.state.distance)
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
    this.setState({
      currentTime: this.setTime(element),
      stationSpeed: this.setVelocity(element),
      latitude: latitudeValue,
      longitude: longitudeValue,
      distance: this.setDistance(element),
    })
  }

  setVelocity = (element) => {
    if (this.state.latitude && this.state.longitude) {
      let earthWidth = 12756.274
      let a = (parseFloat(element.iss_position.longitude - this.state.longitude).toFixed(2) * Math.cos(element.iss_position.latitude * Math.PI / 180));
      let b = parseFloat(this.state.latitude - element.iss_position.latitude).toFixed(2);
      let velocity = Math.sqrt(a * a + b * b) * Math.PI * earthWidth / 360 * 3600;
      return parseInt(velocity)
    }
  }

  setDistance = (element) => {
    if (this.state.latitude && this.state.longitude) {
      console.log(this.state.distance)
      let latitudeSpeed = parseFloat(element.iss_position.latitude - this.state.latitude).toFixed(2);
      let longitudeSpeed = parseFloat(element.iss_position.longitude - this.state.longitude).toFixed(2);
      latitudeSpeed = Math.abs(latitudeSpeed);
      longitudeSpeed = Math.abs(longitudeSpeed);
      let distance = parseInt(((longitudeSpeed * 100) + (latitudeSpeed * 100)) * 1.1) // value for one 0.01 according to https://en.wikipedia.org/wiki/Decimal_degrees
      distance += this.state.distance;
      return distance
    }
    else {
      return 0
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
        <div className="station-info">
          <span className='distance meter'>{this.state.distance} KM</span>
          <span className='speed meter'>{this.state.stationSpeed} KM/H</span></div>
        <span className="date">{this.state.currentTime}</span>
        <Planet latitude={this.state.latitude} longitude={this.state.longitude} />
      </div>
    );
  }
}

export default App;