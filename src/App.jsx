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
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (query === '') {
      return;
    }

    setIsLoading(true);

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
        setImages((prevImages) => [...prevImages, ...res.data.hits]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [query, page]);

  useEffect(() => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  }, [images]);

  function openModal(image) {
    setActiveImage(image);
  }

  function closeModal() {
    setActiveImage(null);
  }

  function handleSearch(newQuery) {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  }

  function loadMore() {
    setPage((prevPage) => prevPage + 1);
  }

  return (
    <div className="App">
      {activeImage && <Modal onClose={closeModal} image={activeImage} />}

      <Searchbar onSearch={handleSearch} />
      <ImageGallery images={images} onOpen={openModal} />

      <div style={{ margin: '0 auto' }}>
        {isLoading && <Loader />}

        <Button onClick={loadMore}>Load more</Button>
      </div>
    </div>
  );
}

export default App;
