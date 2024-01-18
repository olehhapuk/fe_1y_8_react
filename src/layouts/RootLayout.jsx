import { Box, Container, Flex } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';

function RootLayout() {
  return (
    <Container maxWidth="container.xl">
      <Flex>
        <Box
          width="300px"
          height="100vh"
          flexShrink={0}
          position="sticky"
          top="0"
          borderRightWidth="1px"
          py="16px"
          pl="8px"
          pr="16px"
        >
          <Navigation />
        </Box>

        <Box flexGrow={1} p="16px">
          <Outlet />
        </Box>

        <Box
          width="300px"
          height="100vh"
          flexShrink={0}
          position="sticky"
          top="0"
          borderLeftWidth="1px"
          py="16px"
          pr="8px"
          pl="16px"
        >
          Right Sidebar
        </Box>
      </Flex>
    </Container>
  );
}

export default RootLayout;
