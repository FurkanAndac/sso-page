
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('../pages/Index.vue') },
      { path: 'login', component: () => import('../pages/loginPage.vue') },
      { path: 'register', component: () => import('../pages/registerPage.vue') },
      { path: 'auth', component: () => import('../pages/authenticationPage.vue'), meta: {requiresAuth: true} }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
