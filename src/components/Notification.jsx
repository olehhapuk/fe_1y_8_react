import { Alert } from '@mui/material';

function Notification({ message }) {
  return <Alert severity="info">{message}</Alert>;
}

export default Notification;
