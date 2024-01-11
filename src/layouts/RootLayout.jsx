import { Box, Container, Flex } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

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
        >
          Left Sidebar
        </Box>

        <Box flexGrow={1}>
          <Outlet />
        </Box>

        <Box
          width="300px"
          height="100vh"
          flexShrink={0}
          position="sticky"
          top="0"
          borderLeftWidth="1px"
        >
          Right Sidebar
        </Box>
      </Flex>
    </Container>
  );
}

export default RootLayout;
