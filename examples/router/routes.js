function page(path) {
  return () => import( /* webpackChunkName: '' */ `~/pages/${path}`).then(m => m.default || m)
}

export default [
  { path: '/', name: 'home', component: page('Home.vue') },
  { path: '/vacation-notify', name: 'vacation-notify', component: page('VacationNotify.vue') },
  { path: '/foreign-real-account', name: 'foreign-real-account', component: page('ForeignRealAccount.vue') },
  { path: '/foreign-demo-account', name: 'foreign-demo-account', component: page('ForeignDemoAccount.vue') },
  { path: '/foreign-login-account', name: 'foreign-login-account', component: page('ForeignLoginAccount.vue') },

  { path: '*', component: page('errors/404.vue') }
]
