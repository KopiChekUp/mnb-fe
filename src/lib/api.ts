import type { ApiError } from '@/types';

const API_URL =
  process.env['NEXT_PUBLIC_API_URL'] || 'http://localhost:8888/api/v1';

type JsonBody = Record<string, unknown> | unknown[];

interface FetchOptions extends Omit<RequestInit, 'body'> {
  body?: BodyInit | JsonBody | null;
}

export async function apiCall<T = unknown>(
  endpoint: string,
  options: FetchOptions = {}
): Promise<T> {
  const url = `${API_URL}${endpoint}`;
  const { body, ...restOptions } = options;

  const serializedBody: BodyInit | null | undefined =
    body && typeof body === 'object' && !(body instanceof FormData) && !(body instanceof URLSearchParams)
      ? JSON.stringify(body)
      : (body as BodyInit | null | undefined);

  const config: RequestInit = {
    ...restOptions,
    headers: {
      'Content-Type': 'application/json',
      ...(restOptions.headers as Record<string, string>),
    },
    ...(serializedBody !== undefined ? { body: serializedBody } : {}),
  };

  const response = await fetch(url, config);
  const data = (await response.json()) as T & ApiError;

  if (!response.ok) {
    throw new Error(data.error || data.message || 'Terjadi kesalahan');
  }

  return data;
}

export async function apiCallWithAuth<T = unknown>(
  endpoint: string,
  options: FetchOptions = {}
): Promise<T> {
  const token =
    typeof window !== 'undefined' ? localStorage.getItem('token') : null;

  return apiCall<T>(endpoint, {
    ...options,
    headers: {
      ...(options.headers as Record<string, string>),
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });
}
