import { useState, useEffect } from 'react';
import { getAllPostsService } from '../../services/postsServices';
import PostsList from '../../components/posts/PostsList';
import { CircularProgress, Heading, Stack, useToast } from '@chakra-ui/react';
import InfiniteScroll from 'react-infinite-scroll-component';

function FeedPage() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [activePage, setActivePage] = useState(1);
  const [hasMore, setHasMore] = useState(false);

  const toast = useToast();

  function fetchPosts(page = 1) {
    setIsLoading(true);

    getAllPostsService({ perPage: 12, page })
      .then((data) => {
        setPosts((prev) =>
          data.page > 1 ? [...prev, ...data.items] : data.items
        );
        setActivePage(data.page);
        setHasMore(data.page < data.totalPages);
      })
      .catch((err) =>
        toast({
          description: err.response?.data?.message || err.message,
          title: 'Loading posts failed',
          status: 'error',
        })
      )
      .finally(() => setIsLoading(false));
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  function likePost(updatedPost) {
    setPosts((prev) =>
      prev.map((post) => (post.id === updatedPost.id ? updatedPost : post))
    );
  }

  function deletePost(postId) {
    setPosts((prev) => prev.filter((post) => post.id !== postId));
  }

  return (
    <div>
      <Heading mb="16px">Feed</Heading>

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

export default FeedPage;
