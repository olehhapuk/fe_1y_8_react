import { Stack } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import PostCard from './PostCard';

function PostsList({ posts }) {
  return (
    <Stack>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          title={post.title}
          excerpt={post.excerpt}
          author={post.author}
        />
      ))}
    </Stack>
  );
}

PostsList.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default PostsList;
