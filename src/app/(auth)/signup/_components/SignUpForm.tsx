'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { registerUser } from '@/lib/auth';
import { ROUTES } from '@/config/constants';
import type { UserRole } from '@/types';

export default function SignUpForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState<UserRole>('client');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Password dan konfirmasi password tidak cocok!');
      return;
    }
    if (password.length < 8) {
      setError('Password minimal 8 karakter!');
      return;
    }

    setLoading(true);
    try {
      await registerUser(name, email, password, role);
      router.push(`${ROUTES.VERIFY_EMAIL}?email=${encodeURIComponent(email)}`);
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
        Elevate Your Space with Our Exquisite Furniture
      </h1>
      <p className="text-sm text-gray-500 mb-10 pr-10">
        Discover curated furniture pieces that transform your house into a dream home.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <h2 className="text-lg font-extrabold text-gray-900 mb-4">Daftar Sebagai:</h2>

        {error && (
          <div className="bg-red-50 text-red-600 text-sm font-medium px-4 py-3 rounded-lg border border-red-100">
            {error}
          </div>
        )}

        {/* Role Selection */}
        <div className="flex gap-4 mb-6">
          {(['client', 'designer'] as UserRole[]).map((r) => (
            <label
              key={r}
              className="flex-1 cursor-pointer border border-gray-200 rounded-xl p-4 text-center transition-all hover:bg-gray-50 has-[:checked]:bg-yellow-50 has-[:checked]:border-yellow-400 has-[:checked]:ring-1 has-[:checked]:ring-yellow-400 block shadow-sm"
            >
              <input
                type="radio"
                name="role"
                value={r}
                checked={role === r}
                onChange={() => setRole(r)}
                className="hidden"
              />
              <span className="text-sm font-extrabold text-gray-800 capitalize">
                {r === 'client' ? 'Pelanggan' : 'Desainer'}
              </span>
              <p className="text-[10px] text-gray-500 mt-1 font-medium">
                {r === 'client' ? 'Saya ingin mencari desainer' : 'Saya ingin mencari proyek'}
              </p>
            </label>
          ))}
        </div>

        {[
          { id: 'name', label: 'Nama', type: 'text', value: name, setter: setName, placeholder: 'Nama lengkap' },
          { id: 'email', label: 'Email', type: 'email', value: email, setter: setEmail, placeholder: 'Email kamu' },
          { id: 'password', label: 'Password', type: 'password', value: password, setter: setPassword, placeholder: 'Minimal 8 karakter' },
          { id: 'confirmPassword', label: 'Confirm Password', type: 'password', value: confirmPassword, setter: setConfirmPassword, placeholder: 'Ulangi password' },
        ].map(({ id, label, type, value, setter, placeholder }) => (
          <div key={id}>
            <label htmlFor={id} className="block text-sm font-bold text-gray-800 mb-2">{label}</label>
            <input
              id={id}
              type={type}
              placeholder={placeholder}
              value={value}
              onChange={(e) => setter(e.target.value)}
              required
              minLength={type === 'password' ? 8 : undefined}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 font-medium placeholder-gray-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors"
            />
          </div>
        ))}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#2A2A2A] text-white font-bold py-3.5 rounded-lg hover:bg-black transition-colors shadow-md disabled:opacity-50"
        >
          {loading ? 'Memproses...' : 'Register'}
        </button>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600 font-medium">
            Already have an account?{' '}
            <Link href={ROUTES.LOGIN} className="text-black font-bold hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
