import InfiniteScroll from 'react-infinite-scroll-component';
import { CircularProgress, Stack } from '@chakra-ui/react';
import { usePosts } from '../../hooks/usePosts';
import { getUserPostsService } from '../../services/usersServices';
import PostsList from '../posts/PostsList';

const params = {
  userId: 4,
};

function UserPosts() {
  const { posts, activePage, hasMore, fetchPosts, likePost, deletePost } =
    usePosts(getUserPostsService, params);

  return (
    <InfiniteScroll
      dataLength={posts.length}
      endMessage={<span>🐧</span>}
      loader={
        <Stack py="32px" alignItems="center">
          <CircularProgress isIndeterminate />
        </Stack>
      }
      next={() => fetchPosts(activePage + 1)}
      hasMore={hasMore}
    >
      <PostsList posts={posts} onLike={likePost} onDelete={deletePost} />
    </InfiniteScroll>
  );
}

export default UserPosts;
