import { Link } from 'react-router-dom';
import { Container, Tab, TabList, Tabs, Stack, Button } from '@chakra-ui/react';
import { useAuth } from '../hooks/useAuth';

function Navbar() {
  const { user, setUser } = useAuth();

  function logout() {
    setUser(null);
  }

  return (
    <Container maxWidth="container.xl" py={3} borderBottomWidth={1}>
      <Stack direction="row" justifyContent="space-between">
        <Tabs variant="soft-rounded">
          <TabList>
            <Tab>
              <Link to="/">Home</Link>
            </Tab>
            {/* Відображати це посилання тільки якщо користувач авторизований */}
            {user && (
              <Tab>
                <Link to="/profile">Profile</Link>
              </Tab>
            )}
            {/* Відображати це посилання тільки якщо користувач неавторизований */}
            {!user && (
              <Tab>
                <Link to="/login">Login</Link>
              </Tab>
            )}
          </TabList>
        </Tabs>

        {user && (
          <div>
            <span>{user.username} </span>
            <Button colorScheme="red" onClick={logout}>
              Logout
            </Button>
          </div>
        )}
      </Stack>
    </Container>
  );
}

export default Navbar;
