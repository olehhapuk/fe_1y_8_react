import { useState } from 'react';
import { AuthContext } from '../context/AuthContext';

export function AuthProvider({ children }) {
  const [user, setUser] = useState({
    username: 'user1',
    password: 'password1',
  });

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
