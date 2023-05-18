import { Button, Typography, Paper, Stack } from '@mui/material';

function App() {
  return (
    <Paper
      sx={{
        padding: '12px',
      }}
    >
      <Stack direction="column" gap="18px">
        <Typography variant="h4" component="h2">
          Please leave feedback
        </Typography>
        <Stack direction="row" gap="5px">
          <Button variant="contained" color="success">
            Good
          </Button>
          <Button variant="contained" color="primary">
            Neutral
          </Button>
          <Button variant="contained" color="error">
            Bad
          </Button>
        </Stack>

        <Typography variant="h4" component="h2">
          Statistics
        </Typography>
        <Stack direction="column" gap="5px">
          <Typography variant="body1">Good: 3</Typography>
          <Typography variant="body1">Neutral: 3</Typography>
          <Typography variant="body1">Bad: 3</Typography>
        </Stack>
      </Stack>
    </Paper>
  );
}

export default App;
