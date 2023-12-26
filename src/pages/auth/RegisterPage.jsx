import { Stack, Heading } from '@chakra-ui/react';
import RegisterForm from '../../components/auth/RegisterForm';

function RegisterPage() {
  return (
    <Stack>
      <Heading as="h3" size="lg">
        Register
      </Heading>

      <RegisterForm />
    </Stack>
  );
}

export default RegisterPage;
