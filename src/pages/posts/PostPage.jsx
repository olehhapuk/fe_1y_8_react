import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Stack, Heading, Text } from '@chakra-ui/react';
import { getPostDetailsService } from '../../services/postsServices';
import ParsedMarkdown from '../../components/posts/ParsedMarkdown';

function PostPage() {
  const { postId } = useParams();

  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getPostDetailsService(postId).then((data) => setPost(data));
  }, [postId]);

  return (
    <div>
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
