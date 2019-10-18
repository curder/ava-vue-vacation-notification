function page(path) {
  return () => import( /* webpackChunkName: '' */ `~/pages/${path}`).then(m => m.default || m)
}

export default [
  { path: '/', name: 'home', component: page('Home.vue') },
  { path: '/vacation-notify', name: 'vacation-notify', component: page('VacationNotify.vue') },
  { path: '/foreign-account', name: 'foreign-account', component: page('foreign-account/Index.vue') },
  { path: '/foreign-real-account', name: 'foreign-real-account', component: page('foreign-account/Real.vue') },
  { path: '/foreign-demo-account', name: 'foreign-demo-account', component: page('foreign-account/Demo.vue') },
  { path: '/foreign-login-account', name: 'foreign-login-account', component: page('foreign-account/Login.vue') },

  { path: '*', component: page('errors/404.vue') }
]
