import { useForm } from '../hooks/useForm';

function LoginForm() {
  const { fields, handleChange, handleSubmit } = useForm(
    {
      username: '',
      password: '',
    },
    (fields) => {
      console.log(fields);
    }
  );

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        autoComplete="off"
        required
        onChange={handleChange}
        value={fields.username}
        name="username"
      />
      <input
        type="password"
        placeholder="Password"
        autoComplete="off"
        required
        onChange={handleChange}
        value={fields.password}
        name="password"
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
