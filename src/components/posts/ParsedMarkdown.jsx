import { marked } from 'marked';
import dompurify from 'dompurify';
import { Box, useColorMode } from '@chakra-ui/react';

// Todo: Write propTypes
function ParsedMarkdown({ value }) {
  const { colorMode } = useColorMode();

  return (
    <Box
      dangerouslySetInnerHTML={{
        __html: dompurify.sanitize(marked.parse(value)),
      }}
      sx={{
        '& h1': {
          fontSize: '3xl',
          fontWeight: '700',
          my: '8px',
        },
        '& h2': {
          fontSize: '2xl',
          fontWeight: '700',
          my: '8px',
        },
        '& h3': {
          fontSize: 'xl',
          fontWeight: '700',
          my: '8px',
        },
        '& h4': {
          fontSize: 'lg',
          fontWeight: '700',
          my: '8px',
        },
        '& h5': {
          fontSize: 'md',
          fontWeight: '700',
          my: '8px',
        },
        '& h6': {
          fontSize: 'sm',
          fontWeight: '700',
          my: '8px',
        },
        '& ul, & ol': {
          my: '8px',
          pl: '30px',
        },
        '& blockquote': {
          borderLeftWidth: '4px',
          color: 'gray.500',
          px: '8px',
          my: '8px',
        },
        '& code': {
          padding: '3px 5px',
          backgroundColor: colorMode === 'dark' ? 'whiteAlpha.300' : 'gray.100',
          borderRadius: 'md',
          my: '8px',
        },
        '& p': {
          my: '8px',
        },
        '& hr': {
          my: '16px',
        },
      }}
    />
  );
}

export default ParsedMarkdown;
