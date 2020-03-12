function page(path) {
  return () => import( /* webpackChunkName: '' */ `~/pages/${path}`).then(m => m.default || m)
}

export default [
  { path: '/', name: 'home', component: page('Home.vue') },
  { path: '/vacation-notify', name: 'vacation-notify', component: page('VacationNotify.vue') },

  { path: '*', component: page('errors/404.vue') }
]
