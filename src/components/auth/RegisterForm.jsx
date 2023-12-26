import {
  Stack,
  Button,
  Alert,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Wrap,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function RegisterForm() {
  return (
    <Stack as="form">
      <FormControl isRequired>
        <FormLabel>Username</FormLabel>
        <Input placeholder="Username" />
        <FormErrorMessage>test error</FormErrorMessage>
      </FormControl>

      <FormControl isRequired>
        <FormLabel>Password</FormLabel>
        <Input placeholder="Password" type="password" />
        <FormErrorMessage>test error</FormErrorMessage>
      </FormControl>

      <Wrap>
        <Button>Register</Button>
        <Button as={Link} to="/login">
          Login
        </Button>
      </Wrap>
    </Stack>
  );
}

export default RegisterForm;
