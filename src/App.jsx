import { Routes, Route } from 'react-router-dom';

import SharedLayout from './layouts/SharedLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import ShowsPage from './pages/ShowsPage';
import ShowDetailsPage from './pages/ShowDetailsPage';
import ShowReviewsPage from './pages/ShowReviewsPage';
import ShowCastPage from './pages/ShowCastPage';
import ShowEpisodesPage from './pages/ShowEpisodesPage';

function App() {
  return (
    <Routes>
      <Route element={<SharedLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/shows" element={<ShowsPage />} />
        <Route path="/shows/:showId" element={<ShowDetailsPage />}>
          <Route index element={<ShowReviewsPage />} />
          <Route path="cast" element={<ShowCastPage />} />
          <Route path="episodes" element={<ShowEpisodesPage />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
