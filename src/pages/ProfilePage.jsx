import { Container, Heading } from '@chakra-ui/react';

function ProfilePage() {
  return (
    <Container maxWidth="container.xl" py={5}>
      <Heading size="lg">Username: user1</Heading>
      <Heading size="lg">Password: pass12345</Heading>
    </Container>
  );
}

export default ProfilePage;
