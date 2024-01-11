import { Routes, Route } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';

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
        <Route
          path="/feed"
          element={
            <PrivateRoute>
              <FeedPage />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
