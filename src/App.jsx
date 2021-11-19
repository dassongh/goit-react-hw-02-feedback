import React, { Component } from 'react';
import Statistics from './statistics/Statistics';
import FeedbackOptions from './feedbackOptions/FeedbackOptions';
import Section from './section/Section';
import Notification from './notification/Notification';

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
    return ((this.state.good / total) * 100).toFixed();
  };

  render() {
    const btns = Object.keys(this.state);
    const { good, neutral, bad } = this.state;

    const totalFeedbacks = this.countTotalFeedbacks();
    const positivePercentage =
      this.countPositiveFeedbackPercentage(totalFeedbacks);

    return (
      <Section title="Please leave your feedback">
        <FeedbackOptions options={btns} onLeaveFeedback={this.btnHandler} />

        {totalFeedbacks ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            totalFeedbacks={totalFeedbacks}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification title="There is no feedback" />
        )}
      </Section>
    );
  }
}

export default App;
