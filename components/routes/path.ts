// ----------------------------------------------------------------------

const ROOTS = {
  HOME: '/',
  AUTH: '/auth',
  DASHBOARD: '/dashboard',
  DONATIONS: '/donations',
  WIDGETS: '/widgets',
  ACCOUNT_BALANCE: '/account-balance',
};

// ----------------------------------------------------------------------

export const paths = {
  minimalUI: 'https://mui.com/store/items/minimal-dashboard/',
  // AUTH
  auth: {
    login: `${ROOTS.AUTH}/login`,
    register: `${ROOTS.AUTH}/register`,
    forgotPassword: `${ROOTS.AUTH}/forgot-password`,
    verify: `${ROOTS.AUTH}/verify`,
    newPassword: `${ROOTS.AUTH}/new-password`,
  },
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
  widgets: {
    root: ROOTS.WIDGETS,
    new: `${ROOTS.WIDGETS}/new`,
    edit: `${ROOTS.WIDGETS}/edit`,
    variations: {
      new: `${ROOTS.WIDGETS}/variations/new`,
      edit: `${ROOTS.WIDGETS}/variations/edit`,
    },
    details: (id: string) => `${ROOTS.WIDGETS}/${id}`,
  },
  accountBalance: {
    root: ROOTS.ACCOUNT_BALANCE,
  },
};
