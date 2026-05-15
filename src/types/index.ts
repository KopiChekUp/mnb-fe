// =============================================================================
// Shared Types — Match n Build
// =============================================================================

export type UserRole = 'client' | 'designer';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

export interface AuthTokens {
  access_token: string;
  refresh_token: string;
  role: UserRole;
}

export interface AuthResponse {
  data: AuthTokens;
}

// -----------------------------------------------------------------------------
// Designer
// -----------------------------------------------------------------------------

export interface Designer {
  id: string | number;
  name: string;
  specialization: string;
  rating: number;
  reviewCount: number;
  location: string;
  startingPrice: number;
  coverImage: string;
  avatar?: string;
  tags: string[];
}

// -----------------------------------------------------------------------------
// Project / Order
// -----------------------------------------------------------------------------

export type ProjectStatus =
  | 'PERSIAPAN'
  | 'TAHAP 1'
  | 'TAHAP 2'
  | 'TAHAP 3'
  | 'REVISI'
  | 'SELESAI';

export type OrderStatus = 'MENUNGGU' | 'AKTIF' | 'SELESAI' | 'DITOLAK';

export interface Project {
  id: string | number;
  title: string;
  designer: string;
  progressLabel: string;
  progress: number;
  status: ProjectStatus;
  coverImage: string;
}

export interface Order {
  id: string | number;
  initials: string;
  clientName: string;
  location: string;
  projectType: string;
  budget: string;
  status: OrderStatus;
}

// -----------------------------------------------------------------------------
// Notification
// -----------------------------------------------------------------------------

export interface Notification {
  id: string | number;
  title: string;
  message: string;
  time: string;
  icon: string;
  iconBg: string;
  hoverColor: string;
}

// -----------------------------------------------------------------------------
// Sidebar Navigation
// -----------------------------------------------------------------------------

export interface MenuItem {
  href: string;
  icon: string;
  label: string;
}

// -----------------------------------------------------------------------------
// API
// -----------------------------------------------------------------------------

export interface ApiError {
  error?: string;
  message?: string;
}
