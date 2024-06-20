// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {
    number: 0,
  }

  onIncrement = () => {
    const num = Math.round(Math.random() * 100, 2)
    this.setState(prevState => ({
      number: prevState.number + num,
    }))
    console.log(num)
  }

  render() {
    const {number} = this.state
    const status = number % 2 ? 'Count is Odd' : 'Count is Even'

    return (
      <div className="bg-container">
        <div className="main-card">
          <h1>Count {number}</h1>
          <p className="main-text">{status}</p>
          <button onClick={this.onIncrement} type="button" className="button">
            Increment
          </button>
          <p className="last-text">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
