import { useState } from 'react';

function Switch({ children }) {
  const [open, setOpen] = useState(false);

  function toggle() {
    setOpen((prevOpen) => !prevOpen);
  }

  return (
    <div>
      <button onClick={toggle}>{open ? 'Close' : 'Open'}</button>
      {open && <div>{children}</div>}
    </div>
  );
}

export default Switch;
