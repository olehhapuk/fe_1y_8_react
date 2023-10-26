import { useState } from 'react';

export function useForm(initialFields) {
  const [fields, setFields] = useState(initialFields);

  return {
    fields,
  };
}
