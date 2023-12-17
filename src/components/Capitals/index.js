import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

/* class Capitals extends Component {
  state = {capital: countryAndCapitalsList[0].capitalDisplayText}

  onChangeCapital = event => {
    this.setState({capital: event.target.value})
  }

  selectedCapital = () => {
    const {capital} = this.state
    const selectedCapital = countryAndCapitalsList.find(
      eachCapital => eachCapital.capitalDisplayText === capital,
    )
    return selectedCapital
  }

  render() {
    const {capital} = this.state
    const selectedCapital = this.selectedCapital()
    console.log(selectedCapital)
    return (
      <div className="app-container">
        <div className="capitals-card">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="select-capital-container">
            <select
              className="drop-down"
              onChange={this.onChangeCapital}
              value={capital}
            >
              {countryAndCapitalsList.map(eachCountryCapital => (
                <option
                  value={eachCountryCapital.capitalDisplayText}
                  key={eachCountryCapital.id}
                >
                  {eachCountryCapital.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="select-capital-text">is capital of which country?</p>
          </div>
          <p className="country">{selectedCapital.country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals */

class Capitals extends Component {
  state = {
    capital: countryAndCapitalsList[0].id, // Set the initial value to "NEW_DELHI"
  }

  onChangeCapital = event => {
    this.setState({capital: event.target.value})
  }

  selectedCapital = () => {
    const {capital} = this.state
    const selectedCapital = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === capital,
    )
    return selectedCapital
  }

  render() {
    const {capital} = this.state
    const selectedCapital = this.selectedCapital()
    console.log(selectedCapital)
    return (
      <div className="app-container">
        <div className="capitals-card">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="select-capital-container">
            <select
              className="drop-down"
              onChange={this.onChangeCapital}
              value={capital}
            >
              {countryAndCapitalsList.map(eachCountryCapital => (
                <option
                  value={eachCountryCapital.id}
                  key={eachCountryCapital.id}
                >
                  {eachCountryCapital.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="select-capital-text">is capital of which country</p>
          </div>
          <p className="country">{selectedCapital.country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
