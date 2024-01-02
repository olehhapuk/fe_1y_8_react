import {
  Stack,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Wrap,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { loginAction } from '../../redux/auth/authActions';
import { registerService } from '../../services/authServices';

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(3)
    .max(50, 'Username cannot be longer than 50')
    .required('Username is required'),
  password: yup.string().min(8).max(255).required('Password is required'),
});

function RegisterForm() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      registerService(values).then((data) => {
        dispatch(loginAction(data));
      });
    },
  });

  return (
    <Stack as="form" onSubmit={formik.handleSubmit}>
      <FormControl
        isRequired
        isInvalid={!!formik.errors.username && formik.touched.username}
      >
        <FormLabel>Username</FormLabel>
        <Input placeholder="Username" {...formik.getFieldProps('username')} />
        <FormErrorMessage>{formik.errors.username}</FormErrorMessage>
      </FormControl>

      <FormControl
        isRequired
        isInvalid={!!formik.errors.password && formik.touched.password}
      >
        <FormLabel>Password</FormLabel>
        <Input
          placeholder="Password"
          type="password"
          {...formik.getFieldProps('password')}
        />
        <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
      </FormControl>

      <Wrap>
        <Button colorScheme="blue" type="submit">
          Register
        </Button>
        <Button as={Link} to="/login" variant="ghost">
          Login
        </Button>
      </Wrap>
    </Stack>
  );
}

export default RegisterForm;
