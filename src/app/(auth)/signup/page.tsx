import type { Metadata } from 'next';
import SignUpForm from './_components/SignUpForm';

export const metadata: Metadata = {
  title: 'Daftar — Match n Build',
  description: 'Buat akun Match n Build dan temukan desainer impian Anda.',
};

export default function SignUpPage() {
  return <SignUpForm />;
}
