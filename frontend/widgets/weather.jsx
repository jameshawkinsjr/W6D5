import React from 'react';

class Weather extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      city: "Loading",
      temp: '-'
    };
  }

  
  render() {
    return (
      <div className="widget-box">
        <h3> Shiba Weather Widget </h3 >
        <div className="weather flex">
          <div><p>{this.state.city}</p></div>
          <div><p>{this.state.temp} F</p></div>
        </div>
      </div>       
    )
  }
  
  componentWillMount() {
    navigator.geolocation.getCurrentPosition( position => {
      this.weatherRequest(position.coords.latitude, position.coords.longitude);
    })
  }

  buildURL(lat,lng){
    const key = "APPID=60c2b1cffd988f585be5353d9b02639d"
    let url = "https://api.openweathermap.org/data/2.5/weather?"
    let units = "units=imperial"
    let loc = `lat=${lat}&lon=${lng}&`
    return `${url}${loc}&${units}&${key}`

  }

  weatherRequest(lat, lng) {
    let xmlhttp = new XMLHttpRequest();
    let that = this;
    this.url = this.buildURL(lat,lng)


    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
           if (xmlhttp.status == 200) {
             let response = JSON.parse(xmlhttp.response);
              {that.setState( {city: response.name, temp: Math.floor(response.main.temp)}  )}
          }
           else if (xmlhttp.status == 400) {
              alert('There was an error 400');
           }
           else {
               alert('something else other than 200 was returned');
           }
        }
    };

    xmlhttp.open("GET", this.url, true);
    xmlhttp.send("json");
  
  }
}

export default Weather;