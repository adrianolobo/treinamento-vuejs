import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import About from '@/app/About';
import AboutUser from '@/app/AboutUser';
import AboutApp from '@/app/AboutApp';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/about',
      component: About,
      children: [
        {
          path: '',
          name: 'AboutUser',
          component: AboutUser,
        },
        {
          path: 'app/:id',
          name: 'AboutApp',
          component: AboutApp,
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  console.log('ROUTER');
  next();
});

export default router;
