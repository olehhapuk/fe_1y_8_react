import { Routes, Route } from 'react-router-dom';

import SharedLayout from './layouts/SharedLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Routes>
      {/* layout route */}
      <Route element={<SharedLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
