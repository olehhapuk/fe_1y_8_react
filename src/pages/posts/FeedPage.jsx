import { useState, useEffect } from 'react';
import { Button } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../../redux/auth/authActions';
import { getAllPostsService } from '../../services/postsServices';
import PostsList from '../../components/posts/PostsList';

function FeedPage() {
  const dispatch = useDispatch();

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

  function logout() {
    dispatch(logoutAction());
  }

  return (
    <div>
      <Button colorScheme="red" onClick={logout}>
        Logout
      </Button>
      <PostsList posts={posts} />
    </div>
  );
}

export default FeedPage;
