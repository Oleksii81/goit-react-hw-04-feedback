import { Container } from './Container/Container';
import { Section } from './Section/Section';
import { ButtonContainer } from './Feedback/Feedback';
import { Notification } from './Notification/Notification';
import { Statistics } from './Statistics/Statistics';
import React, { useState } from 'react';

export const App = () => {
  const [state, setState] = useState({ good: 0, neutral: 0, bad: 0 });
  const { good, neutral, bad } = state;

  const onLeaveFeedback = option => {
    setState(prevState => {
      return {
        ...prevState,
        [option]: prevState[option] + 1,
      };
    });
  };

  const countTotalFeedback = () => {
    return Object.values(state).reduce((total, number) => {
      return total + number;
    }, 0);
  };

  const countPositiveFeedbackPercentage = total => {
    const { good } = state;

    return total !== 0 ? Math.round((good / total) * 100) : 0;
  };
  
  const total = countTotalFeedback();
  
    return (
      <Container>
        <Section title={'Please leave your feedback'}>
          <ButtonContainer 
            options={Object.keys(state)}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>
        <Section title={'Statistics'}>
          {Object.values(state).some(value => value !== 0) ? (
            <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage(total)}
            />
          ) : (
            <Notification message="There is no feedback, sorry" />
          )}

        </Section>
      </Container>
    );
  }
