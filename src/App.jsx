import axios from 'axios';
import { useState, useEffect } from 'react';

import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Modal from './components/Modal';
import Button from './components/Button';

// Math.ceil(totalCount / perPage) -> totalPages

function App() {
  const [images, setImages] = useState([]);
  const [activeImage, setActiveImage] = useState(null);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalImages, setTotalImages] = useState(0);

  useEffect(() => {
    if (query === '') {
      return;
    }

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
        setTotalImages(res.data.totalHits);
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
    setImages([]);
    setPage(1);
  }

  function loadMore() {
    setPage((prevPage) => prevPage + 1);
  }

  return (
    <div>
      <div className="App">
        {activeImage && <Modal onClose={closeModal} />}

        <Searchbar onSubmit={handleSearch} />
        <ImageGallery images={images} onOpen={openModal} />
      </div>

      {images.length < totalImages && (
        <Button onClick={loadMore}>Load More</Button>
      )}
    </div>
  );
}

export default App;
