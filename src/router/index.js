import Vue from 'vue';
import VueRouter from 'vue-router';
import Register from '../views/Register.vue';
import Login from '../views/Login.vue';
import Homepage from '../views/Homepage.vue';
import ThePost from '../components/AllPosts/ThePost.vue';
import AuthorPosts from '../components/AllPosts/AuthorPosts.vue';
import UserProfile from '../views/UserProfile.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Homepage',
    component: Homepage,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/user-profile',
    name: 'UserProfile',
    component: UserProfile,
    beforeEnter(_, _2, next) {
      if (!localStorage.getItem('user')) {
        next({
          name: 'Login',
        });
      } else {
        next();
      }
    },
  },
  {
    path: '/:name',
    name: 'AuthorPosts',
    component: AuthorPosts,
  },
  {
    path: '/:name/:id',
    name: 'Post',
    component: ThePost,
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
