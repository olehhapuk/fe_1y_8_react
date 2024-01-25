import {
  Card,
  CardHeader,
  Flex,
  Avatar,
  Box,
  Heading,
  Text,
  IconButton,
  CardBody,
  Image,
  CardFooter,
  Button,
} from '@chakra-ui/react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { BiLike, BiShare } from 'react-icons/bi';
import PropTypes from 'prop-types';

function PostCard({ title, excerpt, author }) {
  return (
    <Card>
      <CardHeader pb={0}>
        <Flex spacing="4">
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Avatar name={author.fullName} src={author.avatar || undefined} />

            <Box>
              <Heading size="sm">{author.fullName || '-'}</Heading>
              <Text>@{author.username}</Text>
            </Box>
          </Flex>
          <IconButton
            variant="ghost"
            colorScheme="gray"
            aria-label="See menu"
            icon={<BsThreeDotsVertical />}
          />
        </Flex>
      </CardHeader>
      <CardBody>
        <Heading mb="8px" size="lg">
          {title}
        </Heading>
        <Text>{excerpt}</Text>
      </CardBody>
      <Image
        objectFit="cover"
        src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        alt="Chakra UI"
      />

      <CardFooter
        justify="space-between"
        flexWrap="wrap"
        sx={{
          '& > button': {
            minW: '136px',
          },
        }}
      >
        <Button flex="1" variant="ghost" leftIcon={<BiLike />}>
          Like
        </Button>
        <Button flex="1" variant="ghost" leftIcon={<BiShare />}>
          Share
        </Button>
      </CardFooter>
    </Card>
  );
}

PostCard.propTypes = {
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  author: PropTypes.object.isRequired,
};

export default PostCard;
