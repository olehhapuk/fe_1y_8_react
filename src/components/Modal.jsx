function Modal({ onClose }) {
  function overlayClick(e) {
    console.log(e.target);
    console.log(e.currentTarget);

    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  return (
    <div className="Overlay" onClick={overlayClick}>
      <div className="Modal">
        <img
          src="https://pixabay.com/get/g5ddb4094586a62c446657d99b873232a83093008091dc00dc6835720e7b845a9b7471390b948684c56495fc8b46a81cc_640.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Modal;
