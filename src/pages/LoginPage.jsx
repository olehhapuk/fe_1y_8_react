import { Container, Heading } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

function LoginPage() {
  const navigate = useNavigate();

  function handleLogin(values) {
    console.log(values);

    navigate('/profile');
  }

  return (
    <Container maxWidth="container.xl">
      <Heading size="xl" marginBottom={7}>
        Login
      </Heading>

      <LoginForm onSubmit={handleLogin} />
    </Container>
  );
}

export default LoginPage;
