import { useState } from 'react';

import Modal from './components/Modal';

function App() {
  const [images] = useState(['image-1', 'image-2', 'image-3']);
  const [activeImage, setActiveImage] = useState(null);

  function openModal(id) {
    setActiveImage(id);
  }

  function closeModal() {
    setActiveImage(null);
  }

  return (
    <div>
      {images.map((img) => (
        <button key={img} onClick={() => openModal(img)}>
          {img}
        </button>
      ))}

      {activeImage && <Modal id={activeImage} onClose={closeModal} />}
    </div>
  );
}

export default App;
