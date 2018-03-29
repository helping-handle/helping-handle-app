
export default [
  {
    path: '/',
    component: () => import('layouts/Login'),
    children: [
      { path: '', component: () => import('pages/Welcome') },
      { path: '/login', component: () => import('pages/Login') },
      { path: '/signup', component: () => import('pages/SignUp') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/Default'),
    children: [
      { path: '/dashboard', component: () => import('pages/Dashboard') },
      { path: '/profile', component: () => import('pages/Profile') }
    ]
  },
  {
    path: '*',
    component: () => import('pages/404')
  }
]
