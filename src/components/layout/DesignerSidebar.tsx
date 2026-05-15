'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { clearAuthTokens } from '@/lib/auth';
import type { MenuItem } from '@/types';

const menuItems: MenuItem[] = [
  { href: '/dashboard-desainer', icon: '/icon-desainer.svg', label: 'Dashboard' },
  { href: '/pesanansaya', icon: '/pesanan-icon.png', label: 'Proyek Saya' },
  { href: '/pesan', icon: '/chat-icon.png', label: 'Pesan Saya' },
  { href: '/profil', icon: '/profile-icon.svg', label: 'Profil' },
  { href: '/settings', icon: '/icon-setting.svg', label: 'Pengaturan' },
];

export default function DesignerSidebar() {
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
          <span className="text-2xl font-bold text-yellow-600 italic">MB</span>
          <div>
            <h1 className="font-extrabold leading-none text-black text-sm">Match n Build</h1>
            <p className="text-[10px] text-gray-500 mt-0.5 font-medium">Designer Pro</p>
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
                    ? 'bg-yellow-50 text-yellow-700 font-bold border border-yellow-100'
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

      {/* Profile + Logout */}
      <div className="p-6 border-t border-gray-100 space-y-3">
        <div className="flex items-center gap-3">
          <Image
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop"
            alt="Designer avatar"
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-bold text-gray-800 leading-tight">Andi Arsitek</p>
            <p className="text-[10px] text-gray-500 font-medium">Premium Member</p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-gray-500 hover:bg-red-50 hover:text-red-600 font-medium transition text-sm"
        >
          <span>↩</span> Keluar
        </button>
      </div>
    </aside>
  );
}
