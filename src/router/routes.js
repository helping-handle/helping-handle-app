
export default [
  {
    path: '/',
    component: () => import('layouts/Default'),
    children: [
      { path: '', component: () => import('pages/Welcome') },
      { path: 'welcome', component: () => import('pages/Welcome') },
      { path: 'login', component: () => import('pages/Login') },
      { path: 'signup', component: () => import('pages/SignUp') },
      { path: 'dashboard', component: () => import('pages/Dashboard') },
      { path: 'explore', component: () => import('pages/Explore') }
    ]
  },
  {
    path: '/user',
    component: () => import('layouts/Default'),
    children: [
      { path: 'history', component: () => import('pages/user/History') },
      { path: 'favorites', component: () => import('pages/user/Favorites') },
      { path: 'profile', component: () => import('pages/user/Profile') },
      { path: 'campaigns', component: () => import('pages/user/Campaigns') }
    ]
  },
  {
    path: '*',
    component: () => import('pages/404')
  }
]
