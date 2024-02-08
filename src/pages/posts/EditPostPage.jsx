import { Heading } from '@chakra-ui/react';
import EditPostForm from '../../components/posts/EditPostForm';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getPostDetailsService } from '../../services/postsServices';

function EditPostPage() {
  const { postId } = useParams();

  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getPostDetailsService(postId).then((data) => setPost(data));
  }, [postId]);

  return (
    <div>
      <Heading mb="16px">Edit Post</Heading>
      <EditPostForm post={post} />
    </div>
  );
}

export default EditPostPage;
