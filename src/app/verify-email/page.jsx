import { Suspense } from "react";
import VerifyEmailForm from "./_components/VerifyEmailForm";
import AuthBanner from "@/app/components/auth/AuthBanner";

export const metadata = {
  title: "Verifikasi Email — Match n Build",
  description: "Verifikasi email akun Match n Build Anda",
};

export default function VerifyEmailPage() {
  return (
    <div className="flex min-h-screen bg-white font-sans">
      <Suspense fallback={<div className="w-full lg:w-1/2 flex items-center justify-center">Memuat...</div>}>
        <VerifyEmailForm />
      </Suspense>
      <AuthBanner />
    </div>
  );
}
