// Data dummy untuk dashboard desainer
// Pisahkan ke file ini agar mudah diganti dengan API call nantinya

export const statistik = [
  {
    id: "pendapatan",
    icon: "💵",
    iconBg: "bg-yellow-50 text-yellow-600",
    label: "Total Pendapatan",
    value: "Rp 45.250.000",
    badge: "+12.5%",
    badgeColor: "text-green-600 bg-green-50",
  },
  {
    id: "pesanan",
    icon: "📋",
    iconBg: "bg-blue-50 text-blue-500",
    label: "Pesanan Aktif",
    value: "12 Pesanan",
    badge: "Aktif",
    badgeColor: "text-blue-600 bg-blue-50",
  },
  {
    id: "ulasan",
    icon: "⭐",
    iconBg: "bg-orange-50 text-orange-500",
    label: "Ulasan Baru",
    value: "4.8/5.0",
    badge: "Dari 42 ulasan",
    badgeColor: "text-gray-400",
  },
];

export const karyaPopuler = [
  {
    id: 1,
    judul: "Modern Minimalist Villa",
    kategori: "Kategori: Arsitektur",
    views: "1.2k",
    foto: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    judul: "Scandinavian Living Room",
    kategori: "Kategori: Interior",
    views: "856",
    foto: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400&h=300&fit=crop",
  },
];

export const pesananTerbaru = [
  {
    id: 1,
    inisial: "RP",
    nama: "Rizky Perdana",
    lokasi: "Jakarta Selatan",
    proyek: "Renovasi Fasad Rumah",
    budget: "Rp 8.500.000",
    status: "MENUNGGU",
  },
  {
    id: 2,
    inisial: "SM",
    nama: "Siti Maemunah",
    lokasi: "Bandung",
    proyek: "Interior Kedai Kopi",
    budget: "Rp 15.000.000",
    status: "MENUNGGU",
  },
  {
    id: 3,
    inisial: "AH",
    nama: "Agus Hidayat",
    lokasi: "Surabaya",
    proyek: "Kitchen Set Apartemen",
    budget: "Rp 12.200.000",
    status: "MENUNGGU",
  },
];
