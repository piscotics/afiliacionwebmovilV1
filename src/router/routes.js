
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/login/Index.vue') },
      { path: '/home', component: () => import('pages/Index.vue'), meta: { requiresAuth: true } },
      { path: '/config', component: () => import('pages/config/Index.vue') },
      { path: '/camera', component: () => import('pages/camera/Index.vue') },
      { path: '/zones', component: () => import('pages/params/zones/Index.vue'), meta: { requiresAuth: true } },
      { path: '/offices', component: () => import('pages/params/offices/Index.vue'), meta: { requiresAuth: true } },
      { path: '/plans', component: () => import('pages/params/plans/Index.vue'), meta: { requiresAuth: true } },
      { path: '/employees', component: () => import('pages/params/employees/Index.vue'), meta: { requiresAuth: true } },
      { path: '/contract', name: 'contract', component: () => import('pages/contract/Index.vue'), meta: { requiresAuth: true } },
      { path: '/search', component: () => import('pages/search/Index.vue'), meta: { requiresAuth: true } },
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
