import type { AuthResponse } from '@/types';
import { apiCall } from './api';

export async function loginUser(
  email: string,
  password: string
): Promise<AuthResponse> {
  return apiCall<AuthResponse>('/auth/login', {
    method: 'POST',
    body: { email, password },
  });
}

export async function registerUser(
  name: string,
  email: string,
  password: string,
  role: string
): Promise<void> {
  return apiCall('/auth/register', {
    method: 'POST',
    body: { name, email, password, role },
  });
}


export function clearAuthTokens(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem('token');
  localStorage.removeItem('refresh_token');
  localStorage.removeItem('role');
}

export async function sendVerificationEmail(email: string): Promise<void> {
  return apiCall('/auth/send-verification-email', {
    method: 'POST',
    body: { email },
  });
}

export async function verifyEmail(
  email: string,
  code: string
): Promise<void> {
  return apiCall('/auth/verify-email', {
    method: 'POST',
    body: { email, code },
  });
}
