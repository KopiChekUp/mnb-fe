import Link from 'next/link';

export default function Profil() {
  return (
    // Wadah Utama 
    <div className="min-h-screen bg-[#F8F9FA] font-sans text-gray-800 flex flex-col">
      
      {/* --- NAVBAR GLOBAL (Atas) --- */}
      <header className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-3">
          {/* Logo Match & Build */}
          <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center font-bold text-gray-900">
            MB
          </div>
          <h1 className="font-extrabold text-lg text-gray-900 tracking-tight">Match & Build</h1>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition">
            <img src="icon-lonceng.svg" alt="Notifications" className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition overflow-hidden bg-gray-100">
            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop" alt="Profil" className="w-full h-full object-cover" />
          </button>
        </div>
      </header>

      {/* --- BODY AREA (Dibagi 2: Sidebar Settings & Konten) --- */}
      <div className="flex-1 max-w-7xl mx-auto w-full flex flex-col md:flex-row gap-10 p-8">
        
        {/* KOLOM KIRI: Sidebar Settings */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="mb-6">
            <h2 className="text-2xl font-black text-gray-900">Settings</h2>
            <p className="text-sm text-gray-500 mt-1">Account Management</p>
          </div>
          
          <nav className="flex flex-col gap-2">
            {/* Menu Aktif (Profile) */}
            <Link href="/profil" className="flex items-center gap-3 bg-yellow-400 text-gray-900 font-bold px-5 py-3 rounded-xl shadow-sm transition">
              <span><img src="profile-icon.svg" alt="Profile" className="w-5 h-5" /></span> Profile
            </Link>
            <a href="#" className="flex items-center gap-3 text-gray-500 hover:bg-gray-100 font-medium px-5 py-3 rounded-xl transition">
              <span><img src="icon-security.svg" alt="Security" className="w-5 h-5" /></span> Security
            </a>
            <a href="#" className="flex items-center gap-3 text-gray-500 hover:bg-gray-100 font-medium px-5 py-3 rounded-xl transition">
              <span><img src="icon-lonceng.svg" alt="Notifications" className="w-5 h-5" /></span> Notifications
            </a>
            <a href="#" className="flex items-center gap-3 text-gray-500 hover:bg-gray-100 font-medium px-5 py-3 rounded-xl transition">
              <span><img src="icon-subs.svg" alt="S" className="w-5 h-5" /></span> Subscription
            </a>
            <a href="#" className="flex items-center gap-3 text-gray-500 hover:bg-gray-100 font-medium px-5 py-3 rounded-xl transition">
              <span><img src="icon-privacy.svg" alt="Privacy" className="w-5 h-5" /></span> Privacy
            </a>
          </nav>

          {/* Tombol Back to Dashboard (Biar UX-nya enak buat balik) */}
          <div className="mt-10 pt-6 border-t border-gray-200">
            <Link href="/" className="flex items-center gap-3 text-gray-500 hover:text-gray-900 font-bold px-2 transition">
              <span>←</span> Back to Dashboard
            </Link>
          </div>
        </aside>

        {/* KOLOM KANAN: Konten Form Profil */}
        <main className="flex-1">
          <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm border border-gray-100">
            
            {/* 1. Header Profil (Foto & Nama) */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-10 pb-8 border-b border-gray-100">
              <div className="flex items-center gap-6">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full border-4 border-white shadow-md overflow-hidden bg-orange-100">
                    <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop" alt="Budi Santoso" className="w-full h-full object-cover" />
                  </div>
                  {/* Ikon Edit Pensil Melayang */}
                  <button className="absolute bottom-0 right-0 w-8 h-8 bg-yellow-400 rounded-full border-2 border-white flex items-center justify-center text-xs hover:bg-yellow-500 transition shadow-sm">
                    <img src="profil-singkat-icon.svg" alt="Edit" className="w-4 h-4" />
                  </button>
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-gray-900">Budi Santoso</h3>
                  <p className="text-sm text-gray-500 mt-1 mb-2">budi.santoso@matchbuild.com</p>
                  {/* Badge Role Disesuaikan jadi CLIENT */}
                  <span className="bg-orange-100 text-orange-700 text-[10px] font-extrabold px-3 py-1 rounded-md uppercase tracking-wider">
                    Client Role
                  </span>
                </div>
              </div>
              <button className="px-6 py-2.5 bg-gray-50 hover:bg-gray-100 border border-gray-200 text-sm font-bold text-gray-700 rounded-full transition">
                Change Photo
              </button>
            </div>

            {/* 2. Form Inputs */}
            <form className="space-y-8">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-800 mb-2">Display Name</label>
                  <input type="text" defaultValue="Budi Santoso" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 text-gray-800 font-medium transition" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-800 mb-2">Email Address</label>
                  <input type="email" defaultValue="budi.santoso@matchbuild.com" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 text-gray-800 font-medium transition" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-800 mb-2">Short Bio / Preferences</label>
                <textarea rows="4" placeholder="Tell us about your dream home preferences..." className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 text-gray-800 text-sm transition resize-none"></textarea>
              </div>

              {/* 3. Role Switcher */}
              <div className="bg-gray-50 border border-gray-200 p-6 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h4 className="font-extrabold text-gray-900 text-sm">Current Account: Client</h4>
                  <p className="text-xs text-gray-500 mt-1">Switch to Designer role to offer your services.</p>
                </div>
                {/* Custom Toggle Switcher */}
                <div className="flex bg-gray-200 p-1 rounded-full">
                  <button type="button" className="px-5 py-1.5 text-xs font-bold bg-white text-gray-900 rounded-full shadow-sm">Client</button>
                  <button type="button" className="px-5 py-1.5 text-xs font-bold text-gray-500 hover:text-gray-700 rounded-full transition">Designer</button>
                </div>
              </div>

              {/* 4. Notification Preferences */}
              <div>
                <h4 className="font-extrabold text-gray-900 text-lg mb-4">Notification Preferences</h4>
                <div className="space-y-6">
                  {/* Toggle 1 */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-bold text-gray-800">Email Alerts</p>
                      <p className="text-xs text-gray-500 mt-0.5">Weekly digest of project recommendations</p>
                    </div>
                    {/* Switcher Aktif (Kuning) */}
                    <div className="w-12 h-6 bg-yellow-400 rounded-full relative cursor-pointer shadow-inner">
                      <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
                    </div>
                  </div>
                  {/* Toggle 2 */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-bold text-gray-800">New Messages</p>
                      <p className="text-xs text-gray-500 mt-0.5">Real-time push notifications for chat</p>
                    </div>
                    <div className="w-12 h-6 bg-yellow-400 rounded-full relative cursor-pointer shadow-inner">
                      <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 5. Security Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="border border-gray-200 p-5 rounded-2xl flex items-center gap-4 hover:bg-gray-50 cursor-pointer transition">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">🔑</div>
                  <div>
                    <p className="text-sm font-bold text-gray-800">Change Password</p>
                    <p className="text-[10px] text-gray-400 mt-0.5">Last updated 3 months ago</p>
                  </div>
                </div>
                <div className="border border-gray-200 p-5 rounded-2xl flex items-center gap-4 hover:bg-gray-50 cursor-pointer transition">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">📱</div>
                  <div>
                    <p className="text-sm font-bold text-gray-800">Setup 2FA</p>
                    <p className="text-[10px] text-gray-400 mt-0.5">Enhance account security</p>
                  </div>
                </div>
              </div>

              {/* 6. Danger Zone */}
              <div className="bg-red-50/50 border border-red-100 p-6 rounded-2xl">
                <h4 className="font-extrabold text-red-600 text-sm mb-2">Danger Zone</h4>
                <p className="text-xs text-red-400 mb-4">Once you delete your account, there is no going back. Please be certain.</p>
                <button type="button" className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-lg transition shadow-sm">
                  Delete Account
                </button>
              </div>

            </form>

          </div>

          {/* 7. Bottom Actions (Save / Cancel) */}
          <div className="mt-6 flex justify-end items-center gap-4">
            <button className="px-6 py-3 text-sm font-bold text-gray-500 hover:text-gray-800 transition">
              Cancel
            </button>
            <button className="px-8 py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 text-sm font-bold rounded-xl shadow-md transition">
              Save Changes
            </button>
          </div>
        </main>

      </div>

      {/* --- FOOTER GLOBAL --- */}
      <footer className="border-t border-gray-200 mt-auto bg-[#F8F9FA] px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-medium">
        <p>© 2026 Match & Build. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-gray-800 transition">Terms of Service</a>
          <a href="#" className="hover:text-gray-800 transition">Privacy Policy</a>
          <a href="#" className="hover:text-gray-800 transition">Help Center</a>
        </div>
      </footer>

    </div>
  );
}