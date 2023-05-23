import { Paper, Stack } from '@mui/material';
import { useState } from 'react';

import FeedbackOptions from './components/FeedbackOptions';
import Section from './components/Section';
import Statistics from './components/Statistics';
import Notification from './components/Notification';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function incrementGood() {
    setGood(good + 1);
  }

  function incrementNeutral() {
    setNeutral(neutral + 1);
  }

  function incrementBad() {
    setBad((prevBad) => prevBad + 1);
  }

  function countTotalFeedback() {
    const sum = good + neutral + bad;
    return sum;
  }

  function countPositiveFeedbackPercentage() {
    const sum = countTotalFeedback();
    const percentage = Math.round((good / sum) * 100);
    return isNaN(percentage) ? 0 : percentage;
  }

  return (
    <Paper
      sx={{
        padding: '12px',
      }}
    >
      <Stack direction="column" gap="18px">
        <Section title="Please leave feedback">
          <FeedbackOptions
            onGoodClick={incrementGood}
            onNeutralClick={incrementNeutral}
            onBadClick={incrementBad}
          />
        </Section>

        <Section title="Statistics">
          {countTotalFeedback() === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </Stack>
    </Paper>
  );
}

export default App;
