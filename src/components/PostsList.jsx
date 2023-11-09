import { Grid, GridItem } from '@chakra-ui/react';
import PostCard from './PostCard';

function PostsList() {
  return (
    <Grid
      templateColumns={{
        xl: 'repeat(4, 1fr)',
        lg: 'repeat(3, 1fr)',
        md: 'repeat(2, 1fr)',
        sm: 'repeat(1, 1fr)',
      }}
      gap={5}
    >
      {new Array(12).fill(undefined).map((_, i) => (
        <GridItem key={i}>
          <PostCard />
        </GridItem>
      ))}
    </Grid>
  );
}

export default PostsList;
