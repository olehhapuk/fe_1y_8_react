import { Container, Heading } from '@chakra-ui/react';

function ProfilePage() {
  return (
    <Container maxWidth="container.xl" py={5}>
      <Heading size="lg">Username: testusername1</Heading>
      <Heading size="lg">Password: testpassword1</Heading>
    </Container>
  );
}

export default ProfilePage;
