import { Heading, useToast } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import EditPostForm from '../../components/posts/EditPostForm';
import { getPostDetailsService } from '../../services/postsServices';

function EditPostPage() {
  const { postId } = useParams();
  const toast = useToast();

  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getPostDetailsService(postId)
      .then((data) => setPost(data))
      .catch((error) =>
        toast({
          title: 'Error',
          description: error.response?.data?.message || error.message,
        })
      )
      .finally(() => setIsLoading(false));
  }, [postId, toast]);

  return (
    <div>
      <Heading mb="16px">Edit Post</Heading>
      <EditPostForm post={post} isLoading={isLoading} />
    </div>
  );
}

export default EditPostPage;
