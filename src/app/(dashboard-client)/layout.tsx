import ClientSidebar from '@/components/layout/ClientSidebar';

/**
 * (dashboard-client) layout — Shared layout untuk semua halaman client dashboard.
 * Sidebar otomatis dirender, setiap halaman hanya perlu fokus pada kontennya.
 */
export default function DashboardClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-white text-gray-800 font-sans overflow-hidden">
      <ClientSidebar />
      {children}
    </div>
  );
}
