import { Container, Heading } from '@chakra-ui/react';
import { useContext } from 'react';
import PostsList from '../components/PostsList';
import { AuthContext } from '../context/AuthContext';

function HomePage() {
  const value = useContext(AuthContext);

  return (
    <Container maxWidth="container.xl" py={5}>
      <p>Context value: {JSON.stringify(value)}</p>
      <Heading marginBottom={9}>Please login to view posts</Heading>
      <PostsList />
    </Container>
  );
}

export default HomePage;
