import React, { Component } from "react";
import Statistics from "./statistics/Statistics";
import s from './App.module.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  btnHandler = e => {
    this.setState(prevState => ({
      [e.target.innerText]: prevState[e.target.innerText] + 1,
    }));
  };

  countTotalFeedbacks = () => {
    const values = Object.values(this.state);
    return values.reduce((acc, feedback) => acc + feedback, 0);
  };
  
  countPositiveFeedbackPercentage = total => {
    return (this.state.good / total * 100).toFixed();
  };

  render() {
    const btns = Object.keys(this.state);
    const { good, neutral, bad } = this.state;

    const totalFeedbacks = this.countTotalFeedbacks();
    const positivePercentage = this.countPositiveFeedbackPercentage(totalFeedbacks);

    return (
      <div className="feedback">
        <h2>Please leave feedback</h2>

        {btns.map(btn => (
          <button type="button" key={btn} onClick={this.btnHandler}>{btn}</button>
        ))}

        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          totalFeedbacks={totalFeedbacks}
          positivePercentage={positivePercentage}
        />
      </div>
    );
  }
}

export default App;