import { Container, Heading } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import LoginForm from '../components/LoginForm';
import { login } from '../redux/auth/authActions';

function LoginPage() {
  const dispatch = useDispatch();

  function handleLogin(values) {
    dispatch(login(values));
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
