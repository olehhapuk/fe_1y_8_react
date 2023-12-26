import { Flex, Container, Grid, Stack, Heading, Text } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

function AuthLayout() {
  return (
    <Flex height="100vh">
      <Container maxWidth="container.md">
        <Grid
          gridTemplateColumns="repeat(2, 1fr)"
          gap="16px"
          height="100%"
          alignItems="center"
        >
          <Stack>
            <Heading>Blog</Heading>
            <Text>Test project using React and Redux.</Text>
          </Stack>

          <Stack
            height="100%"
            justifyContent="center"
            borderLeftWidth="1px"
            p="16px"
          >
            <Outlet />
          </Stack>
        </Grid>
      </Container>
    </Flex>
  );
}

export default AuthLayout;
