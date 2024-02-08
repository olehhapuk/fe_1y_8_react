import { Stack } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import PostCard from './PostCard';

// TODO: Add onLike to prop types
function PostsList({ posts, onLike, onDelete }) {
  return (
    <Stack>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          title={post.title}
          excerpt={post.excerpt}
          author={post.author}
          image={post.image}
          id={post.id}
          onLike={onLike}
          isLiked={post.isLiked}
          likesCount={post._count.likedBy}
          onDelete={onDelete}
        />
      ))}
    </Stack>
  );
}

PostsList.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default PostsList;
