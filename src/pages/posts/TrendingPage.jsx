import { getTrendingService } from '../../services/postsServices';
import PostsList from '../../components/posts/PostsList';
import { CircularProgress, Heading, Stack } from '@chakra-ui/react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { usePosts } from '../../hooks/usePosts';

function TrendingPage() {
  const { posts, activePage, hasMore, fetchPosts, likePost, deletePost } =
    usePosts(getTrendingService);

  return (
    <div>
      <Heading mb="16px">Trending</Heading>

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
    </div>
  );
}

export default TrendingPage;
