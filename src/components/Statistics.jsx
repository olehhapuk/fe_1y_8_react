import { Stack, Typography } from '@mui/material';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <Stack direction="column" gap="5px">
      <Typography variant="body1">Good: {good}</Typography>
      <Typography variant="body1">Neutral: {neutral}</Typography>
      <Typography variant="body1">Bad: {bad}</Typography>
      <Typography variant="body1">Total: {total}</Typography>
      <Typography variant="body1">
        Positive percentage: {positivePercentage}%
      </Typography>
    </Stack>
  );
}

export default Statistics;
