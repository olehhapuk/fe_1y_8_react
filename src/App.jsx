import axios from 'axios';
import { useState, useEffect } from 'react';

import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Loader from './components/Loader';
import Modal from './components/Modal';
import Button from './components/Button';

function App() {
  const [images, setImages] = useState([]);
  const [activeImage, setActiveImage] = useState(null);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get('https://pixabay.com/api/', {
        params: {
          q: query,
          page,
          per_page: 12,
          image_type: 'photo',
          orientation: 'horizontal',
          key: '18873751-8e18f299cbfc24db3206257a6',
        },
      })
      .then((res) => {
        // Зробити так щоб нові зображення з нової сторінки довантажувались а не замінювали старі зображень
        setImages(res.data.hits);
      });
  }, [query, page]);

  function openModal(image) {
    setActiveImage(image);
  }

  function closeModal() {
    setActiveImage(null);
  }

  function handleSearch(newQuery) {
    setQuery(newQuery);
    setPage(1);
  }

  function loadMore() {
    setPage((prevPage) => prevPage + 1);
  }

  return (
    <div className="App">
      {/* Відобразити Loader коли завантажуються дані з API */}
      {activeImage && <Modal onClose={closeModal} image={activeImage} />}

      <Searchbar onSearch={handleSearch} />
      <ImageGallery images={images} onOpen={openModal} />
      <Button onClick={loadMore}>Load more</Button>
    </div>
  );
}

export default App;
