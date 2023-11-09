import { Link, useLocation } from 'react-router-dom';
import { Container, Tab, TabList, Tabs } from '@chakra-ui/react';

const urls = ['/', '/profile', '/login'];

function Navbar() {
  const { pathname } = useLocation();

  return (
    <Container maxWidth="container.xl" py={3} borderBottomWidth={1}>
      <Tabs variant="soft-rounded" defaultIndex={urls.indexOf(pathname)}>
        <TabList>
          <Tab>
            <Link to="/">Home</Link>
          </Tab>
          <Tab>
            <Link to="/profile">Profile</Link>
          </Tab>
          <Tab>
            <Link to="/login">Login</Link>
          </Tab>
        </TabList>
      </Tabs>
    </Container>
  );
}

export default Navbar;
