import DesignerSidebar from '@/components/layout/DesignerSidebar';

/**
 * (dashboard-designer) layout — Shared layout untuk semua halaman designer dashboard.
 */
export default function DashboardDesignerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-[#F8F9FA] font-sans text-gray-800 overflow-hidden">
      <DesignerSidebar />
      {children}
    </div>
  );
}
