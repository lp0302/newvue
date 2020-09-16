import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from 'pages/index/Layout'
import Movies from 'pages/index/movies/Movies'
import Intheaters from 'pages/index/movies/Intheaters'
import Comingsoon from 'pages/index/movies/comingsoon/Comingsoon'
import Theaters from 'pages/index/Theaters'
import Profile from 'pages/index/Profile'
import Details from 'pages/details/Details'
import Test from 'pages/details/Test'
import City from 'pages/city/City'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect: '/index/movies'
    
  },
  {
    path: '/index',
    name: 'index',
    component: Index,
    children: [
      {
        path: 'movies',
        name: 'movies',
        component: Movies,
        redirect: '/index/movies/Intheaters',
        children: [
          {
            path: 'intheaters',
            name: 'intheaters',
            component: Intheaters,
          },
          {
            path: 'comingsoon',
            name: 'comingsoon',
            component: Comingsoon,
          }
        ]
      },
      {
        path: 'theaters',
        name: 'theaters',
        component: Theaters
      },
      {
        path: 'profile',
        name: 'profile',
        component: Profile
      }
    ]
    
  },
  {
    path: '/detail',
    name: 'details',
    component: Details
  },
  {
    path:'/test',
    name:'test',
    component: Test
  },
  {
    path: '/city',
    name: 'city',
    component: City
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
  // scrollBehavior( to, from, savedPosition){
  //   console.log(to);
  //   //return期望滚动到那个位置
  //   return {
  //     x:0,
  //     y:~~to.query.pos
    
  //   }
  //   //return false
  // }
})

export default router
