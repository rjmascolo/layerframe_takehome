import React, { Component } from 'react';
import './App.css';
import ZipcodeForm from './forms/ZipcodeForm'
import RestaurantsTable from './containers/RestaurantsTable'
import RestaurantsMap from './containers/RestaurantsMap'

class App extends Component {

  state = {
    restaurants: []
  }

  enterZipcode = (zipcode) => {
    const URL = `http://localhost:3000/worst-restaurants?${zipcode}`
    fetch(URL).then(res => res.json).then(restaurants => this.setState({restaurants}))
  }

  render() {

    return (
      <div className="App">
        <div>
          <ZipcodeForm enterZipcode={this.enterZipcode} />
          <RestaurantsTable restaurants={this.state.restaurants} />
          <RestaurantsMap restaurants={this.state.restaurants}/>
        </div>
      </div>
    );
  }
}

export default App;
