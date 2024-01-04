import { Heading, Stack } from '@chakra-ui/react';
import LoginForm from '../../components/auth/LoginForm';

function LoginPage() {
  return (
    <Stack>
      <Heading as="h3" size="lg">
        Login
      </Heading>

      <LoginForm />
    </Stack>
  );
}

export default LoginPage;
