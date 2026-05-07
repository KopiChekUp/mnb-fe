"use client";

export default function RecentOrders({ orders }) {
  const handleAccept = (orderId) => {
    // TODO: Integrasi API — terima pesanan
    console.log("Terima pesanan:", orderId);
  };

  const handleReject = (orderId) => {
    // TODO: Integrasi API — tolak pesanan
    console.log("Tolak pesanan:", orderId);
  };

  return (
    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-extrabold text-gray-900">Pesanan Terbaru</h3>
        <a
          href="#"
          className="text-sm font-bold text-yellow-600 hover:underline"
        >
          Lihat Semua
        </a>
      </div>

      <div className="w-full overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-100 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
              <th className="pb-3 pl-2">KLIEN</th>
              <th className="pb-3">JENIS PROYEK</th>
              <th className="pb-3">BUDGET</th>
              <th className="pb-3">STATUS</th>
              <th className="pb-3">AKSI</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {orders.map((pesanan) => (
              <tr
                key={pesanan.id}
                className="border-b border-gray-50 hover:bg-gray-50 transition-colors"
              >
                <td className="py-4 pl-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-600 flex-shrink-0">
                      {pesanan.inisial}
                    </div>
                    <div>
                      <p className="font-extrabold text-gray-900">
                        {pesanan.nama}
                      </p>
                      <p className="text-[10px] text-gray-500">
                        {pesanan.lokasi}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-4 font-medium text-gray-700">
                  {pesanan.proyek}
                </td>
                <td className="py-4 font-extrabold text-gray-900">
                  {pesanan.budget}
                </td>
                <td className="py-4">
                  <span className="text-[10px] font-extrabold text-orange-600 bg-orange-50 px-3 py-1.5 rounded-md border border-orange-100">
                    {pesanan.status}
                  </span>
                </td>
                <td className="py-4">
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleAccept(pesanan.id)}
                      className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 text-xs font-bold px-4 py-1.5 rounded-full transition shadow-sm"
                    >
                      Terima
                    </button>
                    <button
                      onClick={() => handleReject(pesanan.id)}
                      className="bg-white hover:bg-gray-100 border border-gray-200 text-gray-700 text-xs font-bold px-4 py-1.5 rounded-full transition shadow-sm"
                    >
                      Tolak
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
