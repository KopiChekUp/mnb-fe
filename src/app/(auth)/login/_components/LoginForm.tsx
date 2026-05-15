'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { loginUser } from '@/lib/auth';
import { ROUTES } from '@/config/constants';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await loginUser(email, password);
      localStorage.setItem('token', res.data.access_token);
      localStorage.setItem('refresh_token', res.data.refresh_token);
      localStorage.setItem('role', res.data.role);

      if (res.data.role === 'designer') {
        router.push(ROUTES.DASHBOARD_DESIGNER);
      } else {
        router.push(ROUTES.DASHBOARD_CLIENT);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Terjadi kesalahan');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full lg:w-1/2 flex flex-col justify-center px-10 sm:px-20 lg:px-24 xl:px-32 relative z-10">
      <Link href="/" className="mb-8 inline-block">
        <Image src="/logo.png" alt="Match n Build Logo" width={48} height={48} className="object-contain rounded-md" />
      </Link>

      <h1 className="text-4xl font-serif text-gray-900 leading-tight mb-4">
        Elevate Your Space with Our Exquisite Design
      </h1>
      <p className="text-sm text-gray-500 mb-10 pr-10">
        Discover curated furniture pieces that transform your house into a dream home.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <h2 className="text-lg font-extrabold text-gray-900 mb-4">Sign in</h2>

        {error && (
          <div className="bg-red-50 text-red-600 text-sm font-medium px-4 py-3 rounded-lg border border-red-100">
            {error}
          </div>
        )}

        <div>
          <label htmlFor="email" className="block text-sm font-bold text-gray-800 mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email kamu"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 font-medium placeholder-gray-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-bold text-gray-800 mb-2">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 font-medium placeholder-gray-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#2A2A2A] text-white font-bold py-3.5 rounded-lg hover:bg-black transition-colors shadow-md disabled:opacity-50"
        >
          {loading ? 'Memproses...' : 'Sign In'}
        </button>

        <div className="mt-2">
          <Link href={ROUTES.RESET_PASSWORD} className="text-sm text-gray-600 underline hover:text-black font-medium">
            Forgot password?
          </Link>
        </div>
        <div className="mt-3">
          <Link href={ROUTES.SIGNUP} className="text-sm text-gray-600 underline hover:text-black font-medium">
            Belum punya akun? Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
}
