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

function PostCard({ title, excerpt, author, image }) {
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
      {image && <Image objectFit="cover" src={image} alt={title} />}

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
  image: PropTypes.string,
  author: PropTypes.object.isRequired,
};

export default PostCard;
