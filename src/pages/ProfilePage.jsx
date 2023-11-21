import { Container, Heading } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/auth/authSelectors';

function ProfilePage() {
  const user = useSelector(selectUser);

  return (
    <Container maxWidth="container.xl" py={5}>
      <Heading size="lg">Username: {user.username}</Heading>
      <Heading size="lg">Password: {user.password}</Heading>
    </Container>
  );
}

export default ProfilePage;
