import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import Forms from './components/Forms';
import Weather from './components/Weather';

// OpenWeather API key
const API_KEY = "58182cc7ba309036c9ea516800a5be02";



class App extends React.Component {

  // setting up the date to be called
  state = {
    temperture: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined,
  }

  // the api data
  getWeather = async (e) => {

    e.preventDefault();
    const city = e.target.city.value;
    const country = e.target.country.value;
    const apiCall  = await fetch('https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric');

    const data = await apiCall.json();
    if (city && country) {
    console.log(data);

    // getting the api data and is true
    this.setState({
      temperture: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: ""
    });

    // if the data is false
  } else {
    this.setState({
      temperture: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: "Please enter the value."
      });
    }
  }


  render() {
  return (

    // the react spinning logo I want to show on the app just for kicks.  That is why I did not delete it.
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Title />

        <Forms 
        // API data being called to the forms
        getWeather={this.getWeather}/>


        <Weather
        // weather data 
        temperture={this.state.temperture} 
        city={this.state.city}
        country={this.state.country}
        description={this.state.description}
        humidity={this.state.humidity}
        error={this.state.error}

        />    
 

      </header>
    </div>
      );
    }
  }

export default App;