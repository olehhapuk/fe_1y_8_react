import { Container, Heading } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import { useAuth } from '../hooks/useAuth';

function LoginPage() {
  const navigate = useNavigate();
  const { setUser } = useAuth();

  function handleLogin(values) {
    setUser(values);

    navigate('/profile');
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
