import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import MoviesPage from '../pages/MoviesPage';
import MainLayout from '../layouts/MainLayout';
import MovieDetailsPage from '../pages/MovieDetailsPage';
import MovieCastPage from '../pages/MovieCastPage';
import MovieReviewsPage from '../pages/MovieReviewsPage';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCastPage />} />
          <Route path="reviews" element={<MovieReviewsPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
