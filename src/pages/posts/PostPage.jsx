import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Stack,
  Heading,
  Text,
  useToast,
  Flex,
  CircularProgress,
} from '@chakra-ui/react';
import { getPostDetailsService } from '../../services/postsServices';
import ParsedMarkdown from '../../components/posts/ParsedMarkdown';

function PostPage() {
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
      {isLoading && (
        <Flex justifyContent="center" py="18px">
          <CircularProgress isIndeterminate />
        </Flex>
      )}
      {post && (
        <Stack>
          <Heading>{post.title}</Heading>
          <Text>by {post.author.fullName}</Text>
          <ParsedMarkdown value={post.body} />
        </Stack>
      )}
    </div>
  );
}

export default PostPage;
