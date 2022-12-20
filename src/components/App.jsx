import React, {Component} from 'react'
import { Container } from "./App.styled";
import { Section } from "./Section/Section";
import { FeedbackBtn } from "./FeedbackBtn/FeedbackBtn";
import { Notification } from './Notification/Notification';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
state = {
  good: 0,
  neutral: 0,
  bad: 0
}
  onLeaveFeedback = (evt) => {
    const {textContent}= evt.target;
    const currentNameBtn =  textContent.toLowerCase();
    this.setState((prevState) => {
      return {
        [currentNameBtn]: prevState[currentNameBtn] + 1
      }
    })
  }

  countTotalFeedback () {
    const { good, neutral, bad } = this.state;
    let result = good + neutral + bad; 
    return result;
  }
  positivePercentageCount () {
    const { good } = this.state;
    const result = this.countTotalFeedback();
    const percentage = (good * 100) / result;
    return Math.round(percentage) ;
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const percentage = this.positivePercentageCount();

    return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackBtn
          options={["Good", "Neutral", "Bad"]}
          onLeaveFeedback={this.onLeaveFeedback} />
        </Section>
        {total === 0
          ?
          <Notification message="There is no feedback" />
          :
          <Section title="Statictics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad }
            total={total}
            positivePercentage={percentage}
          />
          </Section>
        }
    </Container>
  )}
};
