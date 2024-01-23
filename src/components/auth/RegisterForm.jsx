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
  ButtonGroup,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { loginAction } from '../../redux/auth/authActions';
import { registerService } from '../../services/authServices';
import { useState } from 'react';

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(3)
    .max(50, 'Username cannot be longer than 50')
    .required('Username is required'),
  password: yup.string().min(8).max(255).required('Password is required'),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
});

function RegisterForm() {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      firstName: '',
      lastName: '',
    },
    validationSchema,
    onSubmit: (values) => {
      setIsLoading(true);
      setError(null);

      registerService(values)
        .then((data) => {
          dispatch(loginAction(data));
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

      <ButtonGroup>
        <FormControl
          isRequired
          isInvalid={!!formik.errors.firstName && formik.touched.firstName}
        >
          <FormLabel>First Name</FormLabel>
          <Input
            placeholder="First Name"
            {...formik.getFieldProps('firstName')}
          />
          <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
        </FormControl>

        <FormControl
          isRequired
          isInvalid={!!formik.errors.lastName && formik.touched.lastName}
        >
          <FormLabel>Last Name</FormLabel>
          <Input
            placeholder="Last Name"
            {...formik.getFieldProps('lastName')}
          />
          <FormErrorMessage>{formik.errors.lastName}</FormErrorMessage>
        </FormControl>
      </ButtonGroup>

      {error && (
        <Alert status="error">
          <AlertIcon />
          {error}
        </Alert>
      )}

      <Wrap>
        <Button colorScheme="blue" type="submit" isLoading={isLoading}>
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
