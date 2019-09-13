const routers = [{
  path: '',
  redirect: {
    name: 'singerlist',
  },
}, {
  path: '/login',
  name: 'login',
  meta: {
    title: 'txt-music 登录'
  },
  component: (resolve) => require(['./views/login/index.vue'], resolve)
}, {
  path: '/',
  name: 'home',
  meta: {
    title: 'txt-music 首页'
  },
  component: (resolve) => require(['./views/home/index.vue'], resolve),
  children: [{
    path: '/singerlist',
    name: 'singerlist',
    meta: {
      title: 'txt-music 歌手列表'
    },
    component: (resolve) => require(['./views/singerlist/index.vue'], resolve)
  },{
    path: '/singer-details',
    name: 'singer-details',
    meta: {
      title: 'txt-music 歌手详情'
    },
    component: (resolve) => require(['./views/singerdetails/index.vue'], resolve)
  }]
}]
export default routers;