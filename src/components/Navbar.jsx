import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button, Container, Stack, Tab, TabList, Tabs } from '@chakra-ui/react';

const getActiveTabIndex = (pathname) =>
  ['/', '/profile', '/login'].indexOf(pathname);

function Navbar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  function logout() {
    navigate('/');
  }

  return (
    <Container maxWidth="container.xl" py={3} borderBottomWidth={1}>
      <Stack direction="row" justifyContent="space-between">
        <Tabs variant="soft-rounded" index={getActiveTabIndex(pathname)}>
          <TabList>
            <Tab as={Link} to="/">
              Home
            </Tab>
            <Tab as={Link} to="/profile">
              Profile
            </Tab>
            <Tab as={Link} to="/login">
              Login
            </Tab>
          </TabList>
        </Tabs>

        <Button colorScheme="red" onClick={logout}>
          Logout
        </Button>
      </Stack>
    </Container>
  );
}

export default Navbar;
