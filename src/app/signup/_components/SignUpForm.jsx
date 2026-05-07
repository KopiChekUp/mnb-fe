"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { registerUser } from "@/app/lib/auth";

export default function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("client");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Password dan konfirmasi password tidak cocok!");
      return;
    }

    if (password.length < 8) {
      setError("Password minimal 8 karakter!");
      return;
    }

    setLoading(true);
    try {
      await registerUser(name, email, password, role);
      router.push(`/verify-email?email=${encodeURIComponent(email)}`);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full lg:w-1/2 flex flex-col justify-center px-10 sm:px-20 lg:px-24 xl:px-32 relative z-10">
      <div className="mb-8">
        <img src="/logo.png" alt="Logo" className="w-12 h-12 object-contain rounded-md" />
      </div>

      <h1 className="text-4xl font-serif text-gray-900 leading-tight mb-4">
        Elevate Your Space with Our Exquisite Furniture
      </h1>
      <p className="text-sm text-gray-500 mb-10 pr-10">
        Discover curated furniture pieces that transform your house into a dream home
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <h2 className="text-lg font-extrabold text-gray-900 mb-4">Daftar Sebagai:</h2>

        {error && (
          <div className="bg-red-50 text-red-600 text-sm font-medium px-4 py-3 rounded-lg border border-red-100">
            {error}
          </div>
        )}

        {/* Pilihan Role */}
        <div className="flex gap-4 mb-6">
          <label className="flex-1 cursor-pointer border border-gray-200 rounded-xl p-4 text-center transition-all hover:bg-gray-50 has-[:checked]:bg-yellow-50 has-[:checked]:border-yellow-400 has-[:checked]:ring-1 has-[:checked]:ring-yellow-400 block group shadow-sm">
            <input type="radio" name="role" value="client" checked={role === "client"} onChange={(e) => setRole(e.target.value)} className="hidden" />
            <span className="text-sm font-extrabold text-gray-800">Pelanggan</span>
            <p className="text-[10px] text-gray-500 mt-1 font-medium">Saya ingin mencari desainer</p>
          </label>

          <label className="flex-1 cursor-pointer border border-gray-200 rounded-xl p-4 text-center transition-all hover:bg-gray-50 has-[:checked]:bg-yellow-50 has-[:checked]:border-yellow-400 has-[:checked]:ring-1 has-[:checked]:ring-yellow-400 block group shadow-sm">
            <input type="radio" name="role" value="designer" checked={role === "designer"} onChange={(e) => setRole(e.target.value)} className="hidden" />
            <span className="text-sm font-extrabold text-gray-800">Desainer</span>
            <p className="text-[10px] text-gray-500 mt-1 font-medium">Saya ingin mencari proyek</p>
          </label>
        </div>

        {/* Input Nama */}
        <div>
          <label className="block text-sm font-bold text-gray-800 mb-2">Nama</label>
          <input type="text" placeholder="Nama lengkap" value={name} onChange={(e) => setName(e.target.value)} required className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 font-medium placeholder-gray-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors" />
        </div>

        {/* Input Email */}
        <div>
          <label className="block text-sm font-bold text-gray-800 mb-2">Email</label>
          <input type="email" placeholder="Email kamu" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 font-medium placeholder-gray-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors" />
        </div>

        {/* Input Password */}
        <div>
          <label className="block text-sm font-bold text-gray-800 mb-2">Password</label>
          <input type="password" placeholder="Minimal 8 karakter" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={8} className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 font-medium placeholder-gray-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors" />
        </div>

        {/* Input Confirm Password */}
        <div>
          <label className="block text-sm font-bold text-gray-800 mb-2">Confirm Password</label>
          <input type="password" placeholder="Ulangi password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required minLength={8} className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 font-medium placeholder-gray-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors" />
        </div>

        <button type="submit" disabled={loading} className="w-full bg-[#2A2A2A] text-white font-bold py-3.5 rounded-lg hover:bg-black transition-colors shadow-md disabled:opacity-50">
          {loading ? "Memproses..." : "Register"}
        </button>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600 font-medium">
            Already have an account?{" "}
            <Link href="/login" className="text-black font-bold hover:underline">Sign in</Link>
          </p>
        </div>
      </form>
    </div>
  );
}