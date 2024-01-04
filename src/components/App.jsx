import { Routes, Route } from 'react-router-dom';

import AuthLayout from '../layouts/AuthLayout';
import RootLayout from '../layouts/RootLayout';

import LoginPage from '../pages/auth/LoginPage';
import RegisterPage from '../pages/auth/RegisterPage';
import FeedPage from '../pages/posts/FeedPage';

function App() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

      <Route element={<RootLayout />}>
        <Route path="/feed" element={<FeedPage />} />
      </Route>
    </Routes>
  );
}

export default App;
