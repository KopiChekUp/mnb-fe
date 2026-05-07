import LoginForm from "./_components/LoginForm";
import AuthBanner from "@/app/components/auth/AuthBanner";

export const metadata = {
  title: "Login — Match n Build",
  description: "Masuk ke akun Match n Build Anda",
};

export default function LoginPage() {
  return (
    <div className="flex min-h-screen bg-white font-sans">
      <LoginForm />
      <AuthBanner />
    </div>
  );
}