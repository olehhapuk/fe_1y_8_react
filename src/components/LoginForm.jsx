import { useState } from 'react';
import { useForm } from '../hooks/useForm';

function LoginForm() {
  const { fields } = useForm({
    email: '',
    username: '',
    password: '',
  });

  function handleChange(e) {
    setFormFields((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        autoComplete="off"
        required
        onChange={handleChange}
        value={formFields.email}
        name="email"
      />
      <input
        type="text"
        placeholder="Username"
        autoComplete="off"
        required
        onChange={handleChange}
        value={formFields.username}
        name="username"
      />
      <input
        type="password"
        placeholder="Password"
        autoComplete="off"
        required
        onChange={handleChange}
        value={formFields.password}
        name="password"
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
