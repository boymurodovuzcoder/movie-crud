
const routes = [{
  path: '/',
  alias: 'home',
  name: 'movieList',
  component: () => import('../pages/movieList.vue')
},
{
  path: '/movie/:title',
  name: 'movie',
  component: () => import( '../pages/movie.vue')
},
{
  path: '/add',
  name: 'add',
  component: () => import('../pages/addMovie.vue')
},
{
  path: '/edit',
  name: 'editMovie',
  component: () => import('../pages/editMovie.vue')
}
]

export default routes
