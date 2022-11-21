import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0, userInput: ''}

  onChangeUserInput = event => {
    this.setState({
      userInput: event.target.value,
      count: event.target.value.length,
    })
  }

  render() {
    const {count, userInput} = this.state
    return (
      <div className="main-container">
        <div className="card-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="image"
          />
          <div className="card">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <label className="label" htmlFor="inputBox">
              Enter the phrase
            </label>
            <input
              type="text"
              onChange={this.onChangeUserInput}
              placeholder="Enter your phrase"
              value={userInput}
              className="input"
              id="inputBox"
            />
            <div className="num-container">
              <p className="count">No.of letters: {count}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
