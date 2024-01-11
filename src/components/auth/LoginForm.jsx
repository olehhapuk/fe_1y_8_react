import {
  Stack,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Wrap,
  Alert,
  AlertIcon,
  useToast,
} from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { loginAction } from '../../redux/auth/authActions';
import { loginService } from '../../services/authServices';
import { useState } from 'react';

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(3)
    .max(50, 'Username cannot be longer than 50')
    .required('Username is required'),
  password: yup.string().min(8).max(255).required('Password is required'),
});

function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      setIsLoading(true);
      setError(null);

      loginService(values)
        .then((data) => {
          dispatch(loginAction(data));
          navigate('/feed');
          toast({
            title: 'Login successful!',
            status: 'success',
          });
        })
        .catch((err) => setError(err.response.data.message))
        .finally(() => setIsLoading(false));
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

      {error && (
        <Alert status="error">
          <AlertIcon />
          {error}
        </Alert>
      )}

      <Wrap>
        <Button colorScheme="blue" type="submit" isLoading={isLoading}>
          Login
        </Button>
        <Button as={Link} to="/register" variant="ghost">
          Register
        </Button>
      </Wrap>
    </Stack>
  );
}

export default LoginForm;
