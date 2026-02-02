import { useState } from 'react';
import { UserRole } from '../types/roles';

export function useAuth() {
  const [token, setToken] = useState<string>(localStorage.getItem('jwt') || '');
  const [role, setRole] = useState<UserRole | ''>(localStorage.getItem('role') as UserRole || '');

  const login = (jwt: string, userRole: UserRole) => {
    setToken(jwt);
    setRole(userRole);
    localStorage.setItem('jwt', jwt);
    localStorage.setItem('role', userRole);
  };

  const logout = () => {
    setToken('');
    setRole('');
    localStorage.removeItem('jwt');
    localStorage.removeItem('role');
  };

  return { token, role, login, logout };
}
