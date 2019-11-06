const routers = [{
  path: '',
  redirect: {
    name: 'singerlist',
  },
}, {
  path: '/login',
  name: 'login',
  meta: {
    title: 'tnt-music 登录'
  },
  component: (resolve) => require(['./views/login/index.vue'], resolve)
}, {
  path: '/',
  name: 'home',
  meta: {
    title: 'tnt-music 首页'
  },
  component: (resolve) => require(['./views/home/index.vue'], resolve),
  children: [{
    path: '/singerlist',
    name: 'singerlist',
    meta: {
      title: 'tnt-music 歌手列表'
    },
    component: (resolve) => require(['./views/singerlist/index.vue'], resolve)
  },{
    path: '/singer-details',
    name: 'singer-details',
    meta: {
      title: 'tnt-music 歌手详情'
    },
    component: (resolve) => require(['./views/singerdetails/index.vue'], resolve)
  },{
    path: '/personalized',
    name: 'personalized',
    meta: {
      title: 'tnt-music 推荐榜单'
    },
    component: (resolve) => require(['./views/personalized/index.vue'], resolve)
  },{
    path: '/mv-details',
    name: 'mv-details',
    meta: {
      title: 'tnt-music mv详情'
    },
    component: (resolve) => require(['./views/mvdetails/index.vue'], resolve)
  }]
}]
export default routers;