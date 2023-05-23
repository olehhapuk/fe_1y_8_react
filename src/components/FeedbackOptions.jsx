import { Button, Stack } from '@mui/material';

function FeedbackOptions({ onGoodClick, onNeutralClick, onBadClick }) {
  return (
    <Stack direction="row" gap="5px">
      <Button variant="contained" color="success" onClick={onGoodClick}>
        Good
      </Button>
      <Button variant="contained" color="primary" onClick={onNeutralClick}>
        Neutral
      </Button>
      <Button variant="contained" color="error" onClick={onBadClick}>
        Bad
      </Button>
    </Stack>
  );
}

export default FeedbackOptions;
