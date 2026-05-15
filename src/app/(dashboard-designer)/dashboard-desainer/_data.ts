import type { Order } from '@/types';

interface StatItem {
  id: string;
  icon: string;
  iconBg: string;
  label: string;
  value: string;
  badge: string;
  badgeColor: string;
}

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  views: string;
  image: string;
}

export const statistik: StatItem[] = [
  {
    id: 'pendapatan',
    icon: '💵',
    iconBg: 'bg-yellow-50 text-yellow-600',
    label: 'Total Pendapatan',
    value: 'Rp 45.250.000',
    badge: '+12.5%',
    badgeColor: 'text-green-600 bg-green-50',
  },
  {
    id: 'pesanan',
    icon: '📋',
    iconBg: 'bg-blue-50 text-blue-500',
    label: 'Pesanan Aktif',
    value: '12 Pesanan',
    badge: 'Aktif',
    badgeColor: 'text-blue-600 bg-blue-50',
  },
  {
    id: 'ulasan',
    icon: '⭐',
    iconBg: 'bg-orange-50 text-orange-500',
    label: 'Ulasan Baru',
    value: '4.8/5.0',
    badge: 'Dari 42 ulasan',
    badgeColor: 'text-gray-400',
  },
];

export const karyaPopuler: PortfolioItem[] = [
  {
    id: 1,
    title: 'Modern Minimalist Villa',
    category: 'Arsitektur',
    views: '1.2k',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop',
  },
  {
    id: 2,
    title: 'Scandinavian Living Room',
    category: 'Interior',
    views: '856',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400&h=300&fit=crop',
  },
];

export const pesananTerbaru: Order[] = [
  {
    id: 1,
    initials: 'RP',
    clientName: 'Rizky Perdana',
    location: 'Jakarta Selatan',
    projectType: 'Renovasi Fasad Rumah',
    budget: 'Rp 8.500.000',
    status: 'MENUNGGU',
  },
  {
    id: 2,
    initials: 'SM',
    clientName: 'Siti Maemunah',
    location: 'Bandung',
    projectType: 'Interior Kedai Kopi',
    budget: 'Rp 15.000.000',
    status: 'MENUNGGU',
  },
  {
    id: 3,
    initials: 'AH',
    clientName: 'Agus Hidayat',
    location: 'Surabaya',
    projectType: 'Kitchen Set Apartemen',
    budget: 'Rp 12.200.000',
    status: 'MENUNGGU',
  },
];
