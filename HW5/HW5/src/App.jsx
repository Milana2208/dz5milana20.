import React from "react";
import Weather from "./components/Weather";
import Form from "./components/Form";
import axios from "axios";

const apiKey = "ba8747d203dc7fd7311e05a92e588799";

class App extends React.Component {
  state = {
    list: [],
  };

  gettingWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;

    if (city) {
      const apiUrl = await axios(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ru&appid=${apiKey}`
      );
      const data = apiUrl.data;
      console.log(data);
      this.setState({ list: data.list, country: data.city.name });
    }
  };

  render() {
    return (
        <div 
        style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Form
            weatherMethod={this.gettingWeather} />
            <h1>{this.state.country}</h1>
            <div
            styles={{
                display:"flex",
                flexWrap: 'wrap',
                justifyContent:"space-between",
                flexDirection:"row",
            }}
            >
                <div style={{
                    display:"flex",
                    flexWrap: 'wrap',
                    justifyContent:"space-between",
                }}>
                    {this.state.list.map((item) => {
                        if (item.dt_txt.includes("12:00:00")) {
                        return (
                            <Weather
                                key={item?.dt_txt}
                                time={item?.dt_txt}
                                temp={Math.round(item.main.temp-273.15) }
                                weather={item.weather[0]?.description}
                            />
                        );
                        }
                    })}
                </div>            
            </div>
        </div>
    );
  }
}

export default App;
