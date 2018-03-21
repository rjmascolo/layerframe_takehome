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

  enterZipcode = (zipcode) => {
    const URL = `http://localhost:3000/worst-restaurants?zipcode=${zipcode}`
    fetch(URL).then(res => res.json()).then(restaurants => {
      this.setState({restaurants})
    })
  }

  render() {

    return (
      <div className="App">
        <h1>Worst Restaurants In Your Neighborhood</h1>
        <p className="header-detail">Based on the restaurants with the highest Health Inspection score (high scores are bad)</p>
        <div>
          <div className="main-grid">
            <div>
              <ZipcodeForm enterZipcode={this.enterZipcode} />
              <RestaurantsTable restaurants={this.state.restaurants} />
            </div>
            <RestaurantsMap restaurants={this.state.restaurants} forceUpdateHandler={this.forceUpdateHandler}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
