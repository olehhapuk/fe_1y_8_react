import {
  Button,
  Card,
  CardBody,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Textarea,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import ParsedMarkdown from './ParsedMarkdown';

function PostBodyField({ required, label, disabled, meta, ...inputProps }) {
  const [isInPreview, setIsInPreview] = useState(false);

  function togglePreview() {
    setIsInPreview((prev) => !prev);
  }

  return (
    <FormControl
      isRequired={required}
      isDisabled={disabled}
      isInvalid={!!meta.error && meta.touched}
    >
      <Flex justifyContent="space-between" alignItems="center">
        <FormLabel>{label}</FormLabel>
        <Button onClick={togglePreview} size="xs" variant="ghost">
          {isInPreview ? 'Hide Preview' : 'Show Preview'}
        </Button>
      </Flex>

      {isInPreview ? (
        <Card variant="outline">
          <CardBody padding="8px 16px">
            <ParsedMarkdown value={inputProps.value} />
          </CardBody>
        </Card>
      ) : (
        <Textarea rows={12} {...inputProps} />
      )}

      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
}

PostBodyField.propTypes = {
  required: PropTypes.bool,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  meta: PropTypes.object.isRequired,
};

export default PostBodyField;
