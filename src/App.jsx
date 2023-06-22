import axios from 'axios';
import { useState, useEffect } from 'react';

import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Loader from './components/Loader';
import Modal from './components/Modal';

function App() {
  const [images, setImages] = useState([]);
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    axios
      .get('https://pixabay.com/api/', {
        params: {
          q: 'cats',
          page: 1,
          per_page: 12,
          image_type: 'photo',
          orientation: 'horizontal',
          key: '18873751-8e18f299cbfc24db3206257a6',
        },
      })
      .then((res) => {
        setImages(res.data.hits);
      });
  }, []);

  function openModal(image) {
    setActiveImage(image);
  }

  function closeModal() {
    setActiveImage(null);
  }

  return (
    <div className="App">
      {activeImage && <Modal onClose={closeModal} />}

      <Searchbar />
      <ImageGallery images={images} onOpen={openModal} />
    </div>
  );
}

export default App;
