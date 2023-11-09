import { Link, useNavigate } from 'react-router-dom';
import { Button, Container, Stack, Tab, TabList, Tabs } from '@chakra-ui/react';
import { useAuth } from '../hooks/useAuth';

function Navbar() {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  function logout() {
    setUser(null);
    navigate('/');
  }

  return (
    <Container maxWidth="container.xl" py={3} borderBottomWidth={1}>
      <Stack direction="row" justifyContent="space-between">
        <Tabs variant="soft-rounded">
          <TabList>
            <Tab>
              <Link to="/">Home</Link>
            </Tab>
            {user && (
              <Tab>
                <Link to="/profile">Profile</Link>
              </Tab>
            )}
            {!user && (
              <Tab>
                <Link to="/login">Login</Link>
              </Tab>
            )}
          </TabList>
        </Tabs>

        {user && (
          <Button colorScheme="red" onClick={logout}>
            Logout
          </Button>
        )}
      </Stack>
    </Container>
  );
}

export default Navbar;
