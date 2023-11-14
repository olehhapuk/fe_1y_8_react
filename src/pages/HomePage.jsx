import { Container, Heading } from '@chakra-ui/react';
import PostsList from '../components/PostsList';

function HomePage() {
  return (
    <Container maxWidth="container.xl" py={5}>
      <Heading marginBottom={9}>Please login to view posts</Heading>
      <PostsList />
    </Container>
  );
}

export default HomePage;
