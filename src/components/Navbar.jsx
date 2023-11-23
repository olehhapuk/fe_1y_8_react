import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button, Container, Stack, Tab, TabList, Tabs } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { logout as logoutAction } from '../redux/auth/authActions';
import { selectUser } from '../redux/auth/authSelectors';

const getActiveTabIndex = (pathname) =>
  ['/', '/profile', '/login'].indexOf(pathname);

function Navbar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  function logout() {
    navigate('/');
    dispatch(logoutAction());
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
