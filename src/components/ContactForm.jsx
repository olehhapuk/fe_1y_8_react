import { useState } from 'react';

function ContactForm({ onCreate }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    onCreate(name, number);
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Name:</legend>

        <input
          type="text"
          name="name"
          title="Contact name"
          autoComplete="off"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </fieldset>
      <fieldset>
        <legend>Phone number:</legend>

        <input
          type="tel"
          name="number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          autoComplete="off"
          required
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </fieldset>

      <br />

      <button type="submit">Create contact</button>
    </form>
  );
}

export default ContactForm;
