
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
      { path: '/kinship', component: () => import('pages/params/Kinship/Index.vue'), meta: { requiresAuth: true } },
      { path: '/plans', component: () => import('pages/params/plans/Index.vue'), meta: { requiresAuth: true } },
      { path: '/user', component: () => import('pages/params/user/Index.vue'), meta: { requiresAuth: true } },
      { path: '/employees', component: () => import('pages/params/employees/Index.vue'), meta: { requiresAuth: true } },
      { path: '/contract', name: 'contract', component: () => import('pages/contract/Index.vue'), meta: { requiresAuth: true } },
      { path: '/search', component: () => import('pages/search/Index.vue'), meta: { requiresAuth: true } },
      { path: '/verified', component: () => import('pages/verified/Index.vue'), meta: { requiresAuth: true } },
      { path: '/redirect', component: () => import('pages/verified/redirect.vue'), meta: { requiresAuth: true } },
      { path: '/multifiltro', component: () => import('pages/multifiltro/Index.vue'), meta: { requiresAuth: true } },
      { path: '/payments', component: () => import('pages/payments/Index.vue'), meta: { requiresAuth: true } },
      { path: '/noveltycontract', component: () => import('pages/params/noveltycontract/Index.vue'), meta: { requiresAuth: true } },
      { path: '/contractadicional', component: () => import('pages/params/contractadicional/Index.vue'), meta: { requiresAuth: true } },
      { path: '/synchronize', component: () => import('pages/params/synchronize/Index.vue'), meta: { requiresAuth: true } },
       
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
