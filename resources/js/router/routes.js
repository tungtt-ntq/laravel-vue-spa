function page (path) {
  return () => import(/* webpackChunkName: '' */ `~/pages/${path}`).then(m => m.default || m)
}

export default [
  { path: '/', name: 'welcome', component: page('welcome.vue') },

  { path: '/login', name: 'login', component: page('auth/login.vue') },
  { path: '/register', name: 'register', component: page('auth/register.vue') },
  { path: '/password/reset', name: 'password.request', component: page('auth/password/email.vue') },
  { path: '/password/reset/:token', name: 'password.reset', component: page('auth/password/reset.vue') },
  { path: '/email/verify/:id', name: 'verification.verify', component: page('auth/verification/verify.vue') },
  { path: '/email/resend', name: 'verification.resend', component: page('auth/verification/resend.vue') },

  {
    path: '/admin',
    component: page('admin/dashboard.vue'),
    children: [
      {
        path: 'auth',
        component: page('admin/auth/index.vue'),
        children: [
          { path: '', redirect: { name: 'admin.login' } },
          { path: 'login', name: 'admin.login', component: page('admin/auth/login.vue') },
          { path: 'register', name: 'admin.register', component: page('admin/auth/register.vue') },
          { path: 'password/reset', name: 'admin.password.request', component: page('admin/auth/password/email.vue') },
          { path: 'password/reset/:token', name: 'admin.password.reset', component: page('admin/auth/password/reset.vue') },
          { path: 'email/verify/:id', name: 'admin.verification.verify', component: page('admin/auth/verification/verify.vue') },
          { path: 'email/resend', name: 'admin.verification.resend', component: page('admin/auth/verification/resend.vue') }
        ]
      },
      {
        path: 'settings',
        component: page('admin/settings/index.vue'),
        children: [
          { path: '', redirect: { name: 'admin.settings.profile' } },
          { path: 'profile', name: 'admin.settings.profile', component: page('settings/profile.vue') },
          { path: 'password', name: 'admin.settings.password', component: page('settings/password.vue') }
        ]
      }
    ]
  },

  { path: '/home', name: 'home', component: page('home.vue') },
  {
    path: '/settings',
    component: page('settings/index.vue'),
    children: [
      { path: '', redirect: { name: 'settings.profile' } },
      { path: 'profile', name: 'settings.profile', component: page('settings/profile.vue') },
      { path: 'password', name: 'settings.password', component: page('settings/password.vue') }
    ]
  },

  { path: '*', component: page('errors/404.vue') }
]
