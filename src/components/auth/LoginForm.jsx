import {
  Stack,
  Button,
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
import InputField from '../InputField';

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
      <InputField
        label="Username"
        placeholder="Username"
        required
        meta={formik.getFieldMeta('username')}
        {...formik.getFieldProps('username')}
      />
      <InputField
        label="Password"
        placeholder="Password"
        required
        meta={formik.getFieldMeta('password')}
        {...formik.getFieldProps('password')}
        type="password"
      />

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
