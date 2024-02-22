import {
  Flex,
  Heading,
  ButtonGroup,
  IconButton,
  useColorMode,
  Stack,
} from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { RxExit } from 'react-icons/rx';
import NavigationLink from './NavigationLink';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAction } from '../redux/auth/authActions';
import { selectUser } from '../redux/auth/authSelectors';

function Navigation() {
  const { colorMode, toggleColorMode } = useColorMode();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  function logout() {
    dispatch(logoutAction());
  }

  return (
    <>
      <Flex justifyContent="space-between" alignItems="end" mb="16px">
        <Heading>Blog</Heading>
        <ButtonGroup>
          <IconButton
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            aria-label="Toggle theme"
            variant="ghost"
            onClick={toggleColorMode}
          />
          <IconButton
            icon={<RxExit />}
            aria-label="Logout"
            colorScheme="red"
            variant="ghost"
            onClick={logout}
          />
        </ButtonGroup>
      </Flex>

      <Stack gap="4px">
        <NavigationLink to="/feed">Feed</NavigationLink>
        <NavigationLink to="/trending">Trending</NavigationLink>

        <NavigationLink to={`/users/${user.id}`}>
          {user.username}
        </NavigationLink>

        <NavigationLink to="/create-post">+ Create Post</NavigationLink>
      </Stack>
    </>
  );
}

export default Navigation;
