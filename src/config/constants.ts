export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  SIGNUP: '/signup',
  VERIFY_EMAIL: '/verify-email',
  RESET_PASSWORD: '/resetpass',
  DASHBOARD_CLIENT: '/dashboard-client',
  DASHBOARD_DESIGNER: '/dashboard-desainer',
  EXPLORE: '/explore',
  MY_ORDERS: '/pesanansaya',
  MESSAGES: '/pesan',
  PROFILE: '/profil',
  DESIGNER_DETAIL: '/desainer-detail',
} as const;

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES];
