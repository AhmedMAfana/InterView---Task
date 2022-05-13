export default [
    {
        path: '*',
        name: 'NotFound',
        meta: {
            authRequired: true,
        },
        component: () => import('../components/error-404.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/pages/auth/app-login'),
        meta: {
            guest: true,
        }
    },
    {
        path: '/',
        name: 'register',
        component: () => import('../views/pages/auth/app-register'),
        meta: {
            guest: true,
        }
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        meta: {
            authRequired: true,
        },
        component: () => import('../views/pages/dashboard/admin-index')
    },
    
  
   
]
