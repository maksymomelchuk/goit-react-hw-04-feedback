import { useState } from 'react';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Section from '../Section/Section';
import Statistics from '../Statistics/Statistics';

const Feedback = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const onLeaveFeedback = event => {
    const buttonName = event.target.name;
    setFeedback(prevState => {
      return {
        ...prevState,
        [buttonName]: prevState[buttonName] + 1,
      };
    });
  };

  const countTotalFeedback = () => {
    const { good, bad, neutral } = feedback;
    return good + bad + neutral;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = feedback;
    if (countTotalFeedback() !== 0) {
      return `${Math.round(+`${(good / countTotalFeedback()) * 100}`)}%`;
    }
  };

  return (
    <Section>
      <FeedbackOptions options={feedback} onLeaveFeedback={onLeaveFeedback} />
      <Statistics
        object={feedback}
        total={countTotalFeedback()}
        totalPositive={countPositiveFeedbackPercentage()}
      />
    </Section>
  );
};

export { Feedback };
