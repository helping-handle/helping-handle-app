import Guard from '@/services/middleware'

export default [
  {
    path: '/',
    component: () => import('layouts/Default'),
    children: [
      {
        path: '',
        component: () => import('pages/Welcome')
      },
      {
        path: 'welcome',
        component: () => import('pages/Welcome')
      },
      {
        path: 'login',
        component: () => import('pages/Login')
      },
      {
        path: 'signup',
        component: () => import('pages/SignUp'),
        beforeEnter: Guard.noauth
      },
      {
        path: 'dashboard',
        component: () => import('pages/Dashboard'),
        beforeEnter: Guard.auth
      },
      {
        path: 'resources',
        component: () => import('pages/Resources')
      }
    ]
  },
  {
    path: '/user',
    component: () => import('layouts/Default'),
    children: [
      { path: 'history',   component: () => import('pages/user/History'),   beforeEnter: Guard.auth },
      { path: 'favorites', component: () => import('pages/user/Favorites'), beforeEnter: Guard.auth },
      { path: 'profile',   component: () => import('pages/user/Profile'),   beforeEnter: Guard.auth },
      { path: 'campaigns', component: () => import('pages/user/Campaigns'), beforeEnter: Guard.auth }
    ],
    beforeEnter: Guard.auth
  },

  {
    path: '*',
    component: () => import('pages/404')
  }
]
