function Modal({ id, onClose }) {
  return (
    <div>
      <p>{id}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default Modal;
