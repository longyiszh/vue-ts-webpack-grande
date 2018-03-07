import Vue from 'vue';
import App from './App.vue';

import { appRouter } from "./app.router";

export const createApp = () => {

  const app = new Vue({
    el: '#app',
    render: (h: any) => h(App),
    router: appRouter
  });

  return app;
};
