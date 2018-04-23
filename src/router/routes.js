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
        component: () => import('pages/SignUp')
      },
      {
        path: 'dashboard',
        component: () => import('pages/Dashboard'),
        beforeEnter: Guard.auth
      },
      {
        path: 'profile/:id',
        component: () => import('pages/Profile')
      },
      {
        path: 'resources',
        component: () => import('pages/Resources')
      },
      {
        path: 'explore',
        component: () => import('pages/Explore')
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
