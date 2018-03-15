import React, { Component } from 'react';
import './App.css';
import ZipcodeForm from './forms/ZipcodeForm'
import RestaurantsTable from './containers/RestaurantsTable'
import RestaurantsMap from './containers/RestaurantsMap'
import Geocode from "react-geocode";

class App extends Component {

  state = {
    restaurants: []
  }
  // componentDidMount(){
  //   const URL = `http://localhost:3000/worst-restaurants?zipcode=11221`
  //   Geocode.setApiKey("AIzaSyA3pFYbmd69hBbdcFRlJ8f7EG3RacW_0Rg");
  //   fetch(URL).then(res => res.json()).then(restaurants => {
  //     this.setState({restaurants})
  //   })
  // }
  enterZipcode = (zipcode) => {
    const URL = `http://localhost:3000/worst-restaurants?zipcode=${zipcode}`
    fetch(URL).then(res => res.json()).then(restaurants => {
      this.setState({restaurants})
    })
  }
  geoCodeAddress = (address) => {
    return Geocode.fromAddress(address)
    .then(res => res.results[0].geometry.location )
  }

  render() {
    console.log(this.state.restaurants)
    return (
      <div className="App">
        <h1>Worst Restaurants In Your Neighborhood</h1>
        <div>
          <div className="main-grid">
            <div>
              <ZipcodeForm enterZipcode={this.enterZipcode} />
              <RestaurantsTable restaurants={this.state.restaurants} />
            </div>
            <RestaurantsMap restaurants={this.state.restaurants}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
