import AuthBanner from '@/components/auth/AuthBanner';

/**
 * (auth) layout — Shared layout untuk semua halaman autentikasi.
 * URL tidak terpengaruh oleh route group (parentheses).
 * /login, /signup, /verify-email, /resetpass tetap accessible.
 */
export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-white font-sans">
      {children}
      <AuthBanner />
    </div>
  );
}
