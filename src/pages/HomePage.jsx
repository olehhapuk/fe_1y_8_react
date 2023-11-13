import { Container, Heading } from '@chakra-ui/react';
import PostsList from '../components/PostsList';
import { useAuth } from '../hooks/useAuth';

function HomePage() {
  const { user } = useAuth();

  return (
    <Container maxWidth="container.xl" py={5}>
      {user ? (
        <PostsList />
      ) : (
        <Heading marginBottom={9}>Please login to view posts</Heading>
      )}
    </Container>
  );
}

export default HomePage;
