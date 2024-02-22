import { useSelector } from 'react-redux';
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { selectUser } from '../../redux/auth/authSelectors';

function MarketingPage() {
  const user = useSelector(selectUser);

  return (
    <Stack gap={0} height="100dvh">
      <Box borderBottomWidth={1}>
        <Container maxWidth="container.xl">
          <Flex
            justifyContent="space-between"
            alignItems="center"
            height="64px"
          >
            <Heading as={Link} to="/" size="lg">
              Blog
            </Heading>

            {user ? (
              <Button as={Link} to="/feed" colorScheme="blue">
                Start blogging
              </Button>
            ) : (
              <ButtonGroup>
                <Button
                  as={Link}
                  to="/login"
                  variant="ghost"
                  colorScheme="blue"
                >
                  Login
                </Button>
                <Button as={Link} to="/register" colorScheme="blue">
                  Register
                </Button>
              </ButtonGroup>
            )}
          </Flex>
        </Container>
      </Box>

      <Container flexGrow={1} textAlign="center">
        <Stack justifyContent="center" alignItems="center" height="100%">
          <Heading size="3xl" mb="16px">
            Blog
          </Heading>
          <Text fontSize="xl" mb="12px">
            Velit reprehenderit exercitation duis eiusmod Lorem culpa commodo et
            duis duis labore reprehenderit quis do. Laborum proident ea eu elit
            veniam incididunt sunt pariatur.
          </Text>
          {user ? (
            <Button as={Link} to="/feed" colorScheme="blue" size="lg">
              Start blogging
            </Button>
          ) : (
            <ButtonGroup>
              <Button as={Link} to="/login" variant="ghost" colorScheme="blue">
                Login
              </Button>
              <Button as={Link} to="/register" colorScheme="blue">
                Register
              </Button>
            </ButtonGroup>
          )}
        </Stack>
      </Container>
    </Stack>
  );
}

export default MarketingPage;
