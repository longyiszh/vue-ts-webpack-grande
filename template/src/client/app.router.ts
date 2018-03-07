import Vue from 'vue';
import VueRouter from 'vue-router';

import { appRoute } from './app.route';

Vue.use(VueRouter);

export const appRouter = new VueRouter({mode: 'history', routes: appRoute});