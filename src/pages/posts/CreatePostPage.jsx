import { Heading } from '@chakra-ui/react';
import CreatePostForm from '../../components/posts/CreatePostForm';

function CreatePostPage() {
  return (
    <div>
      <Heading mb="16px">Create Post</Heading>
      <CreatePostForm />
    </div>
  );
}

export default CreatePostPage;
