import { Container, Heading } from '@chakra-ui/react';
import PostsList from '../components/PostsList';
import { useAuth } from '../hooks/useAuth';

function HomePage() {
  const { user } = useAuth();

  return (
    <Container maxWidth="container.xl" py={5}>
      {!user && <Heading marginBottom={9}>Please login to view posts</Heading>}
      {user && <PostsList />}
    </Container>
  );
}

export default HomePage;
