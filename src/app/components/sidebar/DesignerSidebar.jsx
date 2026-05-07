"use client";
import Link from "next/link";

const menuItems = [
  { href: "/", icon: "/dashboard-icon.png", label: "Beranda" },
  { href: "#", icon: "/pesanan-icon.png", label: "Proyek Saya" },
  { href: "/dashboard-desainer", icon: "/icon-desainer.svg", label: "Desainer" },
  { href: "#", icon: "/chat-icon.png", label: "Pesan Saya" },
  { href: "#", icon: "/icon-setting.svg", label: "Pengaturan" },
];

export default function DesignerSidebar({ activePath = "/dashboard-desainer" }) {
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

        {/* Menu Navigasi */}
        <nav className="flex flex-col gap-1 px-4">
          {menuItems.map((item) => {
            const isActive = item.href === activePath;
            const Tag = item.href.startsWith("/") && item.href !== "#" ? Link : "a";

            return (
              <Tag
                key={item.label}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                  isActive
                    ? "bg-yellow-50 text-yellow-700 font-bold border border-yellow-100"
                    : "text-gray-500 hover:bg-gray-50 font-medium"
                }`}
              >
                <span>
                  <img src={item.icon} alt={item.label} className="w-5 h-5" />
                </span>
                {item.label}
              </Tag>
            );
          })}
        </nav>
      </div>

      {/* Profil Bawah */}
      <div className="p-6 border-t border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop"
            alt="Andi Arsitek"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-bold text-gray-800 leading-tight">Andi Arsitek</p>
            <p className="text-[10px] text-gray-500 font-medium">Premium Member</p>
          </div>
        </div>
        <button className="text-gray-400 hover:text-gray-600">⚙️</button>
      </div>
    </aside>
  );
}
