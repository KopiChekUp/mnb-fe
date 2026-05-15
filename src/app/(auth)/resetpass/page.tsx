import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Reset Password — Match n Build',
  description: 'Reset kata sandi akun Match n Build Anda.',
};

export default function ResetPasswordPage() {
  return (
    <div className="w-full lg:w-1/2 flex flex-col justify-center px-10 sm:px-20 lg:px-24 xl:px-32 relative z-10">
      
      <Link href="/" className="mb-8 inline-block">
        <Image
          src="/logo.png"
          alt="Match n Build Logo"
          width={48}
          height={48}
          className="object-contain rounded-md"
        />
      </Link>

      <h1 className="text-4xl font-serif text-gray-900 leading-tight mb-4">
        Reset Your Password
      </h1>
      <p className="text-sm text-gray-500 mb-10 pr-10">
        Enter the email address associated with your account and we&apos;ll send you a link to
        reset your password.
      </p>

      <form className="space-y-5">
        <div>
          <label className="block text-sm font-bold text-gray-800 mb-2">Email</label>
          <input
            type="email"
            placeholder="Email kamu"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 font-medium placeholder-gray-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#2A2A2A] text-white font-bold py-3.5 rounded-lg hover:bg-black transition-colors shadow-md"
        >
          Kirim Link Reset
        </button>

        <div className="mt-3">
          <Link href="/login" className="text-sm text-gray-600 underline hover:text-black font-medium">
            ← Kembali ke halaman Login
          </Link>
        </div>
      </form>
    </div>
  );
}
