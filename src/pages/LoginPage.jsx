import { Container, Heading } from '@chakra-ui/react';
import LoginForm from '../components/LoginForm';

function LoginPage() {
  function handleLogin(values) {
    console.log(values);
  }

  return (
    <Container maxWidth="container.xl" py={5}>
      <Heading size="xl" marginBottom={7}>
        Login
      </Heading>

      <LoginForm onSubmit={handleLogin} />
    </Container>
  );
}

export default LoginPage;
