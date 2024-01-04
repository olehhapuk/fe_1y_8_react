import { useState, useEffect } from 'react';
import { getAllPostsService } from '../../services/postsServices';

function FeedPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllPostsService().then((data) => {});
  }, []);

  return <div>FeedPage</div>;
}

export default FeedPage;
