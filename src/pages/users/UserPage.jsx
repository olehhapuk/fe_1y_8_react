import {
  Avatar,
  Button,
  ButtonGroup,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUserService } from '../../services/usersServices';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/authSelectors';

function UserPage() {
  const { userId } = useParams();

  const authUser = useSelector(selectUser);

  const [user, setUser] = useState(null);

  const isAuthUser = authUser.id === Number(userId);

  useEffect(() => {
    getUserService(userId).then((data) => setUser(data));
  }, [userId]);

  return (
    <div>
      {user && (
        <Stack alignItems="center" gap="12px">
          <Avatar
            src={user.avatar || undefined}
            name={user.username}
            size="xl"
          />

          <Stack gap="4px" textAlign="center">
            <Heading as="h1" size="md">
              {user.fullName}
            </Heading>
            <Text as="span" color="gray.500" fontWeight={500}>
              @{user.username}
            </Text>
            {user.bio && <Text>{user.bio}</Text>}
          </Stack>

          <ButtonGroup size="sm" variant="ghost">
            <Button>Followers {user._count.followers}</Button>
            <Button>Following {user._count.following}</Button>
          </ButtonGroup>

          {!isAuthUser && <Button colorScheme="blue">Follow</Button>}
        </Stack>
      )}
    </div>
  );
}

export default UserPage;
