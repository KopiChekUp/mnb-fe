import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Halaman Tidak Ditemukan — Match n Build',
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white font-sans flex flex-col items-center justify-center text-center px-8">
      <div className="mb-8">
        <Image src="/logo.png" alt="Match n Build" width={56} height={56} className="object-contain rounded-xl mx-auto mb-6" />
        <h1 className="text-8xl font-black text-gray-100 leading-none">404</h1>
        <h2 className="text-2xl font-extrabold text-gray-900 -mt-4">Halaman Tidak Ditemukan</h2>
        <p className="text-gray-500 mt-3 max-w-sm mx-auto text-sm">
          Maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan.
        </p>
      </div>
      <Link
        href="/"
        className="px-8 py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold rounded-xl transition shadow-md"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}
