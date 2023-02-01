import React, { Component } from "react";

class Weather extends Component {
  render() {
    return (
      <div
        style={{
          background: "#61dafbaa",
          color: "black",
          borderRadius: "8px",
          width:"30%",
          marginBottom:"5%",
        }}
      >
        <h5>Время: {this.props.time}</h5>
        <h5>Погода: {this.props.weather}</h5>
        <h5>Температура: {this.props.temp} °C</h5>
      </div>
    );
  }
}

export default Weather;
