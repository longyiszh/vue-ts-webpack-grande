import index from './components/index.vue';
import http404 from './components/http404.vue';

export const appRoute = [
  {
    name: "root",
    path: "/",
    redirect: '/index'
  },
  {
    name: "index",
    path: "/index",
    component: index
  },
  {
    name: "http404",
    path: "**",
    component: http404
  }
];
