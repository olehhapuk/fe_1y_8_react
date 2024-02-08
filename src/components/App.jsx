import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';

import PrivateRoute from './PrivateRoute';
import { verifyService } from '../services/authServices';
import { loginAction, logoutAction } from '../redux/auth/authActions';
import { selectUser } from '../redux/auth/authSelectors';

import AuthLayout from '../layouts/AuthLayout';
import RootLayout from '../layouts/RootLayout';

import LoginPage from '../pages/auth/LoginPage';
import RegisterPage from '../pages/auth/RegisterPage';
import FeedPage from '../pages/posts/FeedPage';
import CreatePostPage from '../pages/posts/CreatePostPage';
import PostPage from '../pages/posts/PostPage';
import EditPostPage from '../pages/posts/EditPostPage';

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (!user || !isFirstRender.current) {
      return;
    }

    verifyService()
      .then((data) => {
        dispatch(loginAction(data));
      })
      .catch(() => {
        dispatch(logoutAction());
      });

    isFirstRender.current = false;
  }, [dispatch, user]);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/feed" />} />

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
        <Route
          path="/create-post"
          element={
            <PrivateRoute>
              <CreatePostPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/posts/:postId"
          element={
            <PrivateRoute>
              <PostPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/posts/:postId/edit"
          element={
            <PrivateRoute>
              <EditPostPage />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
