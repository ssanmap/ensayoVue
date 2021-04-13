import Inicio from './components/Inicio';
import Blog from './components/Blog';
import Router from 'vue-router'
import vue from 'vue'
vue.use(Router)

export default new Router({
    mode: "history",

  routes: [
    {
      path: "/",
      name: "inicio",
      component: Inicio
    },

    {
      path: "/blog",
      name: "blog",
      component: Blog
    }
  ]

})