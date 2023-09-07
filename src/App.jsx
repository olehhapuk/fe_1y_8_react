import { Routes, Route } from 'react-router-dom';

import SharedLayout from './layouts/SharedLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import ShowsPage from './pages/ShowsPage';
import ShowDetailsPage from './pages/ShowDetailsPage';
import ShowReviewsPage from './pages/ShowReviewsPage';

function App() {
  return (
    <Routes>
      <Route element={<SharedLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/shows" element={<ShowsPage />} />
        <Route path="/shows/:showId" element={<ShowDetailsPage />}>
          <Route path="reviews" element={<ShowReviewsPage />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
