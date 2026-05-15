import type { Metadata } from 'next';
import { Suspense } from 'react';
import VerifyEmailForm from './_components/VerifyEmailForm';

export const metadata: Metadata = {
  title: 'Verifikasi Email — Match n Build',
  description: 'Verifikasi alamat email Anda untuk mengaktifkan akun Match n Build.',
};

export default function VerifyEmailPage() {
  return (
    // Suspense dibutuhkan karena VerifyEmailForm menggunakan useSearchParams()
    <Suspense fallback={<div className="w-full flex items-center justify-center"><p>Memuat...</p></div>}>
      <VerifyEmailForm />
    </Suspense>
  );
}
