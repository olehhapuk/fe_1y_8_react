import { Container, Heading } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectUser } from '../redux/auth/authSelectors';

function ProfilePage() {
  const user = useSelector(selectUser);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <Container maxWidth="container.xl" py={5}>
      <Heading size="lg">Username: {user.username}</Heading>
      <Heading size="lg">Password: {user.password}</Heading>
    </Container>
  );
}

export default ProfilePage;
