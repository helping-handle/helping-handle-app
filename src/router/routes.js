
export default [
  {
    path: '/',
    component: () => import('layouts/Login'),
    children: [
      { path: '', component: () => import('pages/Welcome') },
      { path: '/login', component: () => import('pages/Login') },
      { path: '/signup', component: () => import('pages/Signup') }
    ]
  },
  {
    path: '*',
    component: () => import('pages/404')
  }
]
