import type { Metadata } from 'next';
import LoginForm from './_components/LoginForm';

export const metadata: Metadata = {
  title: 'Login — Match n Build',
  description: 'Masuk ke akun Match n Build Anda.',
};

export default function LoginPage() {
  return <LoginForm />;
}
