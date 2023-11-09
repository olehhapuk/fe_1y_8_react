import * as Yup from 'yup';
import { useFormik } from 'formik';
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
} from '@chakra-ui/react';

const validationSchema = Yup.object().shape({
  username: Yup.string().min(3).max(48).required(),
  password: Yup.string().min(8).max(255).required(),
});

function LoginForm({ onSubmit }) {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema,
    onSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Stack>
        <FormControl
          isRequired
          isInvalid={formik.touched.username && formik.errors.username}
        >
          <FormLabel>Username</FormLabel>
          <Input
            type="text"
            autoComplete="off"
            placeholder="Your username"
            {...formik.getFieldProps('username')}
          />
          {formik.touched.username && formik.errors.username && (
            <FormErrorMessage>{formik.errors.username}</FormErrorMessage>
          )}
        </FormControl>
        <FormControl
          isRequired
          isInvalid={formik.touched.password && formik.errors.password}
        >
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            autoComplete="off"
            placeholder="Your password"
            {...formik.getFieldProps('password')}
          />
          {formik.touched.password && formik.errors.password && (
            <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
          )}
        </FormControl>
      </Stack>

      <Button type="submit" colorScheme="blue" marginTop={5}>
        Login
      </Button>
    </form>
  );
}

export default LoginForm;
