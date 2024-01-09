import { useState, useEffect } from 'react';
import { getAllPostsService } from '../../services/postsServices';
import PostsList from '../../components/posts/PostsList';

function FeedPage() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    getAllPostsService()
      .then((data) => setPosts(data.items))
      .catch((err) => setError(err.response.data.message))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      <PostsList posts={posts} />
    </div>
  );
}

export default FeedPage;
