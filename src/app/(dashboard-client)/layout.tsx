import ClientSidebar from '@/components/layout/ClientSidebar';


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
