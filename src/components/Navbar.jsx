import { Link } from 'react-router-dom';
import { Container, Tab, TabList, Tabs } from '@chakra-ui/react';

function Navbar() {
  return (
    <Container maxWidth="container.xl" py={3} borderBottomWidth={1}>
      <Tabs variant="soft-rounded">
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
