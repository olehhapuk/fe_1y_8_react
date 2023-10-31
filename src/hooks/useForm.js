import { useState } from 'react';

export function useForm(initialFields, onSubmit) {
  const [fields, setFields] = useState(initialFields);

  function handleChange(e) {
    setFields((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(fields);
  }

  return {
    fields,
    handleChange,
    handleSubmit,
  };
}
