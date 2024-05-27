// ----------------------------------------------------------------------

const ROOTS = {
  HOME: '/',
  DASHBOARD: '/dashboard',
  DONATIONS: '/donations',
};

// ----------------------------------------------------------------------

export const paths = {
  nextTemplate: 'https://nextjs.org/learn/dashboard-app',
  home: {
    root: ROOTS.HOME,
  },
  // DASHBOARD
  dashboard: {
    root: ROOTS.DASHBOARD,
  },
  invoices: {
    root: `${ROOTS.DASHBOARD}/invoices?page=1`,
    create: `${ROOTS.DASHBOARD}/invoices/create`,
    edit: (id: string) => `${ROOTS.DASHBOARD}/invoices/${id}/edit`,
  },
  customers: {
    root: `${ROOTS.DASHBOARD}/customers`,
  },
};
