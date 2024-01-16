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

function Navigation() {
  const { colorMode, toggleColorMode } = useColorMode();

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
          />
        </ButtonGroup>
      </Flex>

      <Stack gap="4px">
        <NavigationLink to="/feed">Feed</NavigationLink>
        <NavigationLink to="/trending">Trending</NavigationLink>
      </Stack>
    </>
  );
}

export default Navigation;
