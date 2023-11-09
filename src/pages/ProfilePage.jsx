import { Button, Container, Heading } from '@chakra-ui/react';
import { useAuth } from '../hooks/useAuth';
import { Link } from 'react-router-dom';

function ProfilePage() {
  const { user } = useAuth();

  if (!user) {
    return (
      <Container maxWidth="container.xl" py={5}>
        <Heading size="lg" marginBottom={5}>
          Please login first
        </Heading>
        <Button colorScheme="blue" as={Link} to="/login">
          Login
        </Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="container.xl" py={5}>
      <Heading size="lg">Username: {user.username}</Heading>
      <Heading size="lg">Password: {user.password}</Heading>
    </Container>
  );
}

export default ProfilePage;
