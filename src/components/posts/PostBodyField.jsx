import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Textarea,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';

function PostBodyField({ required, label, disabled, meta, ...inputProps }) {
  return (
    <FormControl
      isRequired={required}
      isDisabled={disabled}
      isInvalid={!!meta.error && meta.touched}
    >
      <FormLabel>{label}</FormLabel>
      <Textarea {...inputProps} />
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
