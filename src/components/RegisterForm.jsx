import { useForm } from '../hooks/useForm';

function RegisterForm() {
  const { fields, handleChange, handleSubmit } = useForm(
    {
      email: '',
      username: '',
      password: '',
      repeatPassword: '',
      displayName: '',
    },
    (fields) => {
      // console.log(fields.password === fields.repeatPassword);
      console.log(fields);
    }
  );

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        autoComplete="off"
        placeholder="Email"
        name="email"
        value={fields.email}
        onChange={handleChange}
      />
      <input
        type="text"
        autoComplete="off"
        placeholder="Username"
        name="username"
        value={fields.username}
        onChange={handleChange}
      />
      <input
        type="password"
        autoComplete="off"
        placeholder="Password"
        name="password"
        value={fields.password}
        onChange={handleChange}
      />
      <input
        type="password"
        autoComplete="off"
        placeholder="Repeat Password"
        name="repeatPassword"
        value={fields.repeatPassword}
        onChange={handleChange}
      />
      <input
        type="text"
        autoComplete="off"
        placeholder="Display Name"
        name="displayName"
        value={fields.displayName}
        onChange={handleChange}
      />

      <button type="submit">Register</button>
    </form>
  );
}

export default RegisterForm;
