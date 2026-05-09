export default function Features() {
  const features = [
    {
      title: "Desainer Terkurasi",
      desc: "Semua arsitek dan desainer kami telah melalui proses verifikasi ketat untuk menjamin kualitas.",
      icon: "📐",
    },
    {
      title: "Transparansi Anggaran",
      desc: "Tidak ada biaya tersembunyi. Semua penawaran dan estimasi harga disajikan jelas di awal.",
      icon: "💰",
    },
    {
      title: "Pantau Progres",
      desc: "Lacak perkembangan proyek, mulai dari draf desain hingga pengerjaan langsung di dashboard Anda.",
      icon: "📱",
    },
    {
      title: "Aman & Terpercaya",
      desc: "Pembayaran Anda aman dengan sistem termin yang hanya cair saat target proyek tercapai.",
      icon: "🔒",
    },
  ];

  return (
    <section id="fitur" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-yellow-600 font-bold tracking-widest text-sm uppercase mb-3">Keunggulan Kami</h2>
          <h3 className="text-4xl font-extrabold text-gray-900 mb-6">Mengapa Memilih Match n Build?</h3>
          <p className="text-gray-500 text-lg">Kami mendefinisikan ulang cara Anda merenovasi dan membangun. Hilangkan kerumitan dan nikmati proses kreatifnya.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feat, idx) => (
            <div key={idx} className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:border-yellow-300 hover:bg-yellow-50/50 transition-all duration-300 group">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-2xl shadow-sm mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                {feat.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{feat.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
