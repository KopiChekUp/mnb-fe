"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { sendVerificationEmail, verifyEmail } from "@/app/lib/auth";

export default function VerifyEmailForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "";

  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);
  const [cooldown, setCooldown] = useState(0);

  // Countdown timer for resend button
  useEffect(() => {
    if (cooldown <= 0) return;
    const timer = setTimeout(() => setCooldown(cooldown - 1), 1000);
    return () => clearTimeout(timer);
  }, [cooldown]);

  const handleVerify = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (code.length !== 6) {
      setError("Kode verifikasi harus 6 digit!");
      return;
    }

    setLoading(true);
    try {
      await verifyEmail(email, code);
      setSuccess("Email berhasil diverifikasi! Mengalihkan ke halaman login...");
      setTimeout(() => router.push("/login"), 2000);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    setError("");
    setSuccess("");
    setResending(true);
    try {
      await sendVerificationEmail(email);
      setSuccess("Kode verifikasi baru telah dikirim ke email kamu!");
      setCooldown(60);
    } catch (err) {
      setError(err.message);
    } finally {
      setResending(false);
    }
  };

  if (!email) {
    return (
      <div className="w-full flex flex-col items-center justify-center px-10 sm:px-20">
        <p className="text-gray-500 mb-4">Email tidak ditemukan.</p>
        <Link href="/signup" className="text-black font-bold hover:underline">Kembali ke Sign Up</Link>
      </div>
    );
  }

  return (
    <div className="w-full lg:w-1/2 flex flex-col justify-center px-10 sm:px-20 lg:px-24 xl:px-32 relative z-10">
      <div className="mb-8">
        <img src="/logo.png" alt="Logo" className="w-12 h-12 object-contain rounded-md" />
      </div>

      <h1 className="text-4xl font-serif text-gray-900 leading-tight mb-4">
        Verifikasi Email
      </h1>
      <p className="text-sm text-gray-500 mb-2">
        Kami telah mengirim kode verifikasi 6 digit ke:
      </p>
      <p className="text-base font-bold text-gray-900 mb-8">{email}</p>

      <form onSubmit={handleVerify} className="space-y-5">
        {error && (
          <div className="bg-red-50 text-red-600 text-sm font-medium px-4 py-3 rounded-lg border border-red-100">
            {error}
          </div>
        )}

        {success && (
          <div className="bg-green-50 text-green-600 text-sm font-medium px-4 py-3 rounded-lg border border-green-100">
            {success}
          </div>
        )}

        {/* Input Kode */}
        <div>
          <label className="block text-sm font-bold text-gray-800 mb-2">Kode Verifikasi</label>
          <input
            type="text"
            placeholder="Masukkan 6 digit kode"
            value={code}
            onChange={(e) => setCode(e.target.value.replace(/\D/g, "").slice(0, 6))}
            maxLength={6}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 font-bold text-center text-2xl tracking-[0.5em] placeholder:text-sm placeholder:tracking-normal placeholder:font-medium placeholder-gray-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors"
          />
        </div>

        <button
          type="submit"
          disabled={loading || code.length !== 6}
          className="w-full bg-[#2A2A2A] text-white font-bold py-3.5 rounded-lg hover:bg-black transition-colors shadow-md disabled:opacity-50"
        >
          {loading ? "Memverifikasi..." : "Verifikasi Email"}
        </button>

        {/* Resend Code */}
        <div className="text-center space-y-2">
          <p className="text-sm text-gray-500">Tidak menerima kode?</p>
          <button
            type="button"
            onClick={handleResend}
            disabled={resending || cooldown > 0}
            className="text-sm text-black font-bold hover:underline disabled:text-gray-400 disabled:no-underline"
          >
            {resending ? "Mengirim..." : cooldown > 0 ? `Kirim ulang (${cooldown}s)` : "Kirim ulang kode"}
          </button>
        </div>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600 font-medium">
            Salah email?{" "}
            <Link href="/signup" className="text-black font-bold hover:underline">Daftar ulang</Link>
          </p>
        </div>
      </form>
    </div>
  );
}
