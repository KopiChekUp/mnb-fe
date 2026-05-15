'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { clearAuthTokens } from '@/lib/auth';
import type { MenuItem } from '@/types';

const menuItems: MenuItem[] = [
  { href: '/dashboard-client', icon: '/dashboard-icon-yellow.png', label: 'Beranda' },
  { href: '/pesanansaya', icon: '/pesanan-icon.png', label: 'Proyek Saya' },
  { href: '/pesan', icon: '/chat-icon.png', label: 'Pesan' },
  { href: '/explore', icon: '/rekomendasi-icon.png', label: 'Rekomendasi' },
  { href: '/profil', icon: '/profile-icon.svg', label: 'Profil' },
];

export default function ClientSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    clearAuthTokens();
    router.push('/login');
  };

  return (
    <aside className="w-64 bg-white border-r border-gray-100 flex flex-col justify-between flex-shrink-0 z-20">
      <div>
        {/* Logo */}
        <div className="p-6 flex items-center gap-3 mb-4">
          <Image
            src="/logo.png"
            alt="Match n Build Logo"
            width={48}
            height={48}
            className="object-contain rounded-md"
          />
          <div>
            <h1 className="font-extrabold leading-none text-black text-sm">Match n Build</h1>
            <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">
              MnB Client Portal
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-1 px-4">
          {menuItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                  isActive
                    ? 'bg-yellow-50 text-yellow-600 font-bold border border-yellow-100'
                    : 'text-gray-500 hover:bg-gray-50 font-medium'
                }`}
              >
                <Image src={item.icon} alt={item.label} width={20} height={20} />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Logout Button */}
      <div className="p-6 border-t border-gray-100">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-500 hover:bg-red-50 hover:text-red-600 font-medium transition"
        >
          <span className="text-lg">↩</span>
          Keluar
        </button>
      </div>
    </aside>
  );
}
