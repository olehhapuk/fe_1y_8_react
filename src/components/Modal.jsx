import { useState } from 'react';

function Modal({ title, children }) {
  const [open, setOpen] = useState(false);

  function toggle() {
    setOpen((prevOpen) => !prevOpen);
  }

  return (
    <div>
      <h2>{title}</h2>
      <button onClick={toggle}>Toggle</button>
      {open && children}
    </div>
  );
}

export default Modal;
