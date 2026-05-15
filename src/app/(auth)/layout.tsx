import AuthBanner from '@/components/auth/AuthBanner';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-white font-sans">
      {children}
      <AuthBanner />
    </div>
  );
}
