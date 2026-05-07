import SignupForm from "./_components/SignUpForm";
import AuthBanner from "@/app/components/auth/AuthBanner";

export const metadata = {
  title: "Sign Up — Match n Build",
  description: "Daftar akun Match n Build baru",
};

export default function SignupPage() {
  return (
    <div className="flex min-h-screen bg-white font-sans">
      <SignupForm />
      <AuthBanner />
    </div>
  );
}