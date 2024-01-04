import { Container } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

function RootLayout() {
  return (
    <Container maxWidth="container.xl">
      <Outlet />
    </Container>
  );
}

export default RootLayout;
