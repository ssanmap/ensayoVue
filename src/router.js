import Inicio from './components/Inicio';
import Inicios from './views/Inicios';
import Blog from './components/Blog';
import Router from 'vue-router'
import vue from 'vue'
vue.use(Router)

export default new Router({
    mode: "history",

  routes: [
    {
      path: "/in",
      name: "inicio",
      component: Inicio
    },
    {
      path: "/",
      name: "inicios",
      component: Inicios
    },

    {
      path: "/blog",
      name: "blog",
      component: Blog
    }
  ]

})