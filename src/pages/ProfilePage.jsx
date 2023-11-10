import { Container, Heading } from '@chakra-ui/react';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function ProfilePage() {
  const user = useContext(AuthContext);

  return (
    <Container maxWidth="container.xl" py={5}>
      <Heading size="lg">Username: {user.username}</Heading>
      <Heading size="lg">Password: {user.password}</Heading>
    </Container>
  );
}

export default ProfilePage;
